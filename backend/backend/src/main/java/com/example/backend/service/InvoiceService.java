package com.example.backend.service;

import com.example.backend.dto.dashboardDTO.DashBoardSummeryResponseDTO;
import com.example.backend.dto.dashboardDTO.TotalUnitSaleByDurationDTO;
import com.example.backend.dto.invoiceDTO.InvoiceProductResponseDTO;
import com.example.backend.dto.invoiceDTO.InvoiceRequestDTO;
import com.example.backend.dto.invoiceDTO.InvoiceResponseDTO;
import com.example.backend.dto.invoiceItemDTO.InvoiceItemDTO;
import com.example.backend.model.Invoice;
import com.example.backend.model.InvoiceItem;
import com.example.backend.model.Product;
import com.example.backend.repository.CustomerRepository;
import com.example.backend.repository.InvoiceItemRepository;
import com.example.backend.repository.InvoiceRepository;
import com.example.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.ArithmeticOperators;
import org.springframework.data.mongodb.core.aggregation.ConditionalOperators;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.time.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class InvoiceService {

    @Autowired
    InvoiceRepository invoiceRepository;
    @Autowired
    InvoiceItemRepository invoiceItemRepository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    MongoTemplate mongoTemplate;
    @Autowired
    SequenceService sequenceService;

    private Criteria buildDateCriteria(String duration) {
        if ("all".equalsIgnoreCase(duration)) {
            return new Criteria();
        }

        LocalDate today = LocalDate.now(ZoneOffset.UTC);
        Instant startDate;
        Instant endDate = Instant.now();

        switch (duration.toLowerCase()) {
            case "today":
                startDate = today.minusDays(1).atStartOfDay(ZoneOffset.UTC).toInstant();
                break;

            case "week":
                startDate = today.minusWeeks(1)
                        .atStartOfDay(ZoneOffset.UTC)
                        .toInstant();
                break;

            case "month":
                startDate = today.minusMonths(1)
                        .atStartOfDay(ZoneOffset.UTC)
                        .toInstant();
                break;

            case "year":
                startDate = today.minusYears(1)
                        .atStartOfDay(ZoneOffset.UTC)
                        .toInstant();
                break;

            default:
                throw new RuntimeException("Invalid duration");
        }

        return Criteria.where("createdAt")
                .gte(startDate)
                .lte(endDate);
    }

    public DashBoardSummeryResponseDTO getDashBoardSummery(String duration) {
        Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.match(
                        buildDateCriteria(duration)),

                Aggregation.group()
                        .sum("totalAmount").as("totalSales")
                        .sum("totalItems").as("totalItems")
                        .count().as("totalInvoices")
                        .sum(ConditionalOperators
                                .when(Criteria.where("status").is("DUE"))
                                .thenValueOf("$totalAmount")
                                .otherwise(0)
                        ).as("totalDue"),

                Aggregation.project("totalSales", "totalItems", "totalInvoices", "totalDue")
                        .andExclude("_id")

        );

        AggregationResults<DashBoardSummeryResponseDTO> result = mongoTemplate.aggregate(
                aggregation, "invoices", DashBoardSummeryResponseDTO.class
        );
        return result.getUniqueMappedResult();
    }

    public List<InvoiceResponseDTO> getRecentInvoices(){
        Query query = new Query()
                .with(Sort.by(Sort.Direction.DESC, "createdAt"))
                .limit(7);
        List<Invoice> invoices = mongoTemplate.find(query, Invoice.class);

        return invoices.stream().map(
                invoice ->
                    InvoiceResponseDTO.builder()
                            .invoiceId(invoice.getInvoiceId())
                            .totalItems(invoice.getTotalItems())
                            .status(invoice.getStatus())
                            .date(invoice.getCreatedAt().toLocalDate())
                            .totalAmount(invoice.getTotalAmount())
                            .build()
                ).toList();
    }

    public List<String> addInvoiceItems(List<InvoiceItemDTO> dtoList, String invoiceId) {

        List<String> invoiceItemList = new ArrayList<>();

        if(dtoList.isEmpty()){
            throw new RuntimeException("No product in the invoice");
        }

        for (InvoiceItemDTO dto : dtoList) {

            if(dto.getQuantity()<1) {
                System.out.println(dto.getQuantity());
                throw new RuntimeException(dto.getProductId()+"product quantity should be greater then zero");
            }

            Product product = productRepository.findByProductId(dto.getProductId()).orElseThrow(
                    () -> new RuntimeException(dto.getProductId()+ " product not found")
            );

            Optional<InvoiceItem> existItem = invoiceItemRepository.findByInvoiceIdAndProductId(invoiceId, dto.getProductId());

            if (existItem.isPresent()){
                InvoiceItem invoiceItem = existItem.get();
                invoiceItem.setQuantity(invoiceItem.getQuantity() + dto.getQuantity());
                invoiceItemRepository.save(invoiceItem);
            }
            else {
                long seq = sequenceService.generateSequence("invoiceItemSequence");
                String invoiceItemId = String.format("INV-IT%03d", seq);


                InvoiceItem invoiceItem = InvoiceItem.builder()
                        .invoiceItemId(invoiceItemId)
                        .invoiceId(invoiceId)
                        .productId(dto.getProductId())
                        .quantity(dto.getQuantity())
                        .unitPrice(product.getPrice())
                        .build();

                invoiceItemRepository.save(invoiceItem);
                invoiceItemList.add(invoiceItemId);
            }
        }
        return invoiceItemList;
    }

    public void addInvoice(InvoiceRequestDTO invDTO) {

        customerRepository.findByCustomerId(invDTO.getCustomerId())
                .orElseThrow(() -> new RuntimeException(invDTO.getCustomerId()+ " customer not found "));

        long seq = sequenceService.generateSequence("invoiceSequence");
        String invoiceId = String.format("INV%03d", seq);


        Invoice invoice = Invoice.builder()
                .invoiceId(invoiceId)
                .invoiceItemIds(addInvoiceItems(invDTO.getInvoiceItemList(), invoiceId))
                .customerId(invDTO.getCustomerId())
                .status(invDTO.getStatus())
                .createdAt(LocalDateTime.now())
                .totalItems(calculateTotalQuantity(invDTO.getInvoiceItemList()))
                .totalAmount(calculateTotalPrice(invDTO.getInvoiceItemList()))
                .build();
        invoiceRepository.save(invoice);
    }

    public InvoiceResponseDTO getInvoiceById(String invoiceId){
        Invoice invoice = invoiceRepository.findByInvoiceId(invoiceId)
                .orElseThrow(()->new RuntimeException("Invoice not found"));

        return InvoiceResponseDTO.builder()
                .invoiceId(invoice.getInvoiceId())
                .customerId(invoice.getCustomerId())
                .totalAmount(invoice.getTotalAmount())
                .totalItems(invoice.getTotalItems())
                .status(invoice.getStatus())
                .date(invoice.getCreatedAt().toLocalDate())
                .build();
    }

    public List<InvoiceProductResponseDTO> getProducts(String invoiceId){

        Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.match(Criteria.where("invoiceId").is(invoiceId)),

                Aggregation.lookup(
                        "invoiceItems",
                        "invoiceItemIds",
                        "invoiceItemId",
                        "invoiceItemDetails"
                ),

                Aggregation.unwind("invoiceItemDetails"),

                Aggregation.lookup(
                        "products",
                        "invoiceItemDetails.productId",
                        "productId",
                        "productDetails"
                ),

                Aggregation.unwind("productDetails"),

                Aggregation.project()
                        .and("productDetails.productId").as("productId")
                        .and("productDetails.name").as("productName")
                        .and("invoiceItemDetails.quantity").as("quantity")
                        .and("invoiceItemDetails.unitPrice").as("unitPrice")
                        .and(ArithmeticOperators.Multiply
                                .valueOf("invoiceItemDetails.unitPrice")
                                .multiplyBy("invoiceItemDetails.quantity"))
                        .as("total")
                        .andExclude("_id")
        );

        AggregationResults<InvoiceProductResponseDTO> results = mongoTemplate.aggregate(
                aggregation, "invoices", InvoiceProductResponseDTO.class
        );
        return results.getMappedResults();
    }


    public List<InvoiceResponseDTO> getAllInvoices() {
        List<Invoice> invoiceList = invoiceRepository.findAllByOrderByInvoiceIdDesc();

        return invoiceList.stream().map(
                invoice ->
                        InvoiceResponseDTO.builder()
                                .invoiceId(invoice.getInvoiceId())
                                .customerId(invoice.getCustomerId())
                                .totalAmount(invoice.getTotalAmount())
                                .status(invoice.getStatus())
                                .date(invoice.getCreatedAt().toLocalDate())
                                .totalItems(invoice.getTotalItems())
                                .build()).toList();
    }


    public double calculateTotalPrice(List<InvoiceItemDTO> dtoList) {

        double totalPrice = 0;

        for (InvoiceItemDTO dto : dtoList){
            Product product = productRepository.findByProductId(dto.getProductId())
                    .orElseThrow(()-> new RuntimeException(dto.getProductId() + " product not found"));

            totalPrice += dto.getQuantity() * product.getPrice();
        }
        return totalPrice;
    }

    public long calculateTotalQuantity(List<InvoiceItemDTO> dtoList) {

        dtoList.forEach(dto ->
                productRepository.findByProductId(dto.getProductId())
                        .orElseThrow(()-> new RuntimeException(dto.getProductId() +" product not found")));

        return dtoList.stream()
                .mapToLong(InvoiceItemDTO::getQuantity)
                .sum();
    }

}
