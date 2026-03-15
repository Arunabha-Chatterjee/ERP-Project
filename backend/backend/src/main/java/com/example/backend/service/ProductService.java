package com.example.backend.service;

import com.example.backend.dto.invoiceDTO.InvoiceResponseDTO;
import com.example.backend.dto.productDTO.*;
import com.example.backend.model.Product;
import com.example.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    SequenceService sequenceService;

    public String addProduct(ProductRequestDTO dto){
        long seq = sequenceService.generateSequence("ProductSequence");
        String productId = String.format("P%03d", seq);

        if(productRepository.findByName(dto.getName()).isPresent()){
            throw new RuntimeException("Product already exists with this name");
        }

        Product product = Product.builder()
                .productId(productId)
                .name(dto.getName())
                .description(dto.getDescription())
                .price(dto.getPrice())
                .build();

        return productRepository.save(product).getProductId();
    }

    public void updateProduct(String productId, ProductRequestDTO dto){

        Product product = productRepository.findByProductId(productId)
                .orElseThrow(()-> new RuntimeException("Product not found"));

        productRepository.findByName(dto.getName())
                .filter(p-> !p.getProductId().equals(productId))
                .ifPresent(p-> {throw new RuntimeException("Product name already match with other product");
                });

        product.setName(dto.getName());
        product.setPrice(dto.getPrice());
        product.setDescription(dto.getDescription());

        productRepository.save(product);
    }

    public List<ProductResponseDTO> getAllProduct(){
        List<Product> products = productRepository.findAll();

        return products.stream()
                .map(product-> ProductResponseDTO.builder()
                        .productId(product.getProductId())
                        .name(product.getName())
                        .price(product.getPrice())
                        .description(product.getDescription())
                        .build())
                .toList();
    }

    public ProductResponseDTO getProductById(String productId){
        Product product = productRepository.findByProductId(productId)
                .orElseThrow(()->new RuntimeException("Product not found"));

        return ProductResponseDTO.builder()
                .productId(product.getProductId())
                .name(product.getName())
                .price(product.getPrice())
                .description(product.getDescription())
                .build();
    }


    public ProductSummeryDTO getProductSummery(String productId){
        Aggregation aggregation = Aggregation.newAggregation(

                Aggregation.match(Criteria.where("productId").is(productId)),

                Aggregation.group()
                        .sum(ArithmeticOperators.Multiply.valueOf("quantity").multiplyBy("unitPrice")).as("totalSales")
                        .sum("quantity").as("totalUnitSale")
                        .addToSet("invoiceId").as("invoiceIds"),

                //  Lookup invoices to get customer details
                Aggregation.lookup("invoices", "invoiceIds", "invoiceId", "invoiceDetails"),

                // Unwind invoiceDetails to access individual customers
                Aggregation.unwind("invoiceDetails"),

                // Group again to preserve totals and collect unique customerIds
                Aggregation.group()
                        .first("totalSales").as("totalSales")
                        .first("totalUnitSale").as("totalUnitSale")
                        .first(ArrayOperators.Size.lengthOfArray("invoiceIds")).as("totalInvoices")
                        .addToSet("invoiceDetails.customerId").as("customerSet"),

                //  Project final fields and count unique customers
                Aggregation.project()
                        .andInclude("totalSales", "totalUnitSale", "totalInvoices")
                        .and(ArrayOperators.Size.lengthOfArray("customerSet")).as("totalCustomers")
        );

        AggregationResults<ProductSummeryDTO> results = mongoTemplate.aggregate(
                aggregation, "invoiceItems", ProductSummeryDTO.class
        );

        return results.getUniqueMappedResult();
    }

    public double getTotalSaleAmount(String productId) {

        Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.match(Criteria.where("productId").is(productId)),

                Aggregation.group()
                        .sum(ArithmeticOperators.Multiply.valueOf("quantity")
                                .multiplyBy("unitPrice"))
                        .as("totalSales"),

                Aggregation.project("totalSales")
                        .andExclude("_id")
        );

        AggregationResults<Double> result = mongoTemplate.aggregate(
                aggregation, "invoiceItems", Double.class
        );

        Double dto = result.getUniqueMappedResult();
        return dto != null ? dto : 0.0;

    }

    public long getTotalUnitSale(String productId) {

        Aggregation aggregation = Aggregation.newAggregation(

                Aggregation.match(Criteria.where("productId").is(productId)),

                Aggregation.group()
                        .sum("quantity").as("totalUnitSales"),

                Aggregation.project("totalUnitSales")
                        .andExclude("_id")
        );

        AggregationResults<ProductTotalUnitSaleDTO> result= mongoTemplate.aggregate(
                aggregation, "invoiceItems", ProductTotalUnitSaleDTO.class
        );

        ProductTotalUnitSaleDTO dto = result.getUniqueMappedResult();

        return dto != null ? dto.getTotalUnitSales() : 0;
    }

    public long getTotalInvoice(String productId){

        Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.match(Criteria.where("productId").is(productId)),

                Aggregation.group("invoiceId"),

                Aggregation.count().as("totalInvoices")
        );

        AggregationResults<TotalInvoiceDTO> result = mongoTemplate.aggregate(
                aggregation, "invoiceItems", TotalInvoiceDTO.class
        );

        TotalInvoiceDTO dto = result.getUniqueMappedResult();

        return dto != null ? dto.getTotalInvoices() : 0;
    }

    public List<ProductInvoiceResponseDTO> getInvoices(String productId){

        Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.match(Criteria.where("productId").is(productId)),

                Aggregation.lookup(
                        "invoices",
                        "invoiceId",
                        "invoiceId",
                        "invoiceItemDetails"
                ),

                Aggregation.unwind("invoiceItemDetails"),

                Aggregation.lookup(
                        "customers",
                        "invoiceItemDetails.customerId",
                        "customerId",
                        "customerDetails"
                ),

                Aggregation.unwind("customerDetails"),

                Aggregation.group("invoiceId")
                        .first("invoiceId").as("invoiceId")
                        .first("invoiceItemDetails.totalAmount").as("totalAmount")
                        .first("customerDetails.name").as("customerName")
                        .first("invoiceItemDetails.status").as("status")
                        .first(
                                DateOperators.dateOf("invoiceItemDetails.createdAt")
                                        .toString("%Y-%m-%d")
                        ).as("date")
        );

        AggregationResults<ProductInvoiceResponseDTO> results = mongoTemplate.aggregate(
                aggregation, "invoiceItems", ProductInvoiceResponseDTO.class
        );

        return results.getMappedResults();
    }

    public long getTotalCustomer(String productId){
        Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.match(Criteria.where("productId").is(productId)),

                Aggregation.lookup(
                        "invoices",
                        "_id",
                        "invoiceItemIds",
                        "invoiceDetails"
                ),

                Aggregation.unwind("invoiceDetails"),

                Aggregation.group("invoiceDetails.customerId"),

                Aggregation.count().as("totalCustomers")
        );

        AggregationResults<ProductTotalCustomerDTO> result = mongoTemplate.aggregate(
                aggregation, "invoiceItems", ProductTotalCustomerDTO.class
        );

        ProductTotalCustomerDTO dto = result.getUniqueMappedResult();

        return dto!=null ? dto.getTotalCustomers() : 0;
    }
}
