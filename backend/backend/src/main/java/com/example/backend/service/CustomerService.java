package com.example.backend.service;

import com.example.backend.dto.customerDTO.*;
import com.example.backend.model.Customer;
import com.example.backend.model.Invoice;
import com.example.backend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class CustomerService {

    @Autowired
    MongoTemplate mongoTemplate;

    @Autowired
    SequenceService sequenceService;

    @Autowired
    CustomerRepository customerRepository;

    public String addCustomer(CustomerDTO customerDTO) {

        if (customerRepository.findByEmail(customerDTO.getEmail()).isPresent()) {
            throw new RuntimeException("Email id already exists");
        }

        if (customerRepository.findByMobile(customerDTO.getMobile()).isPresent()) {
            throw new RuntimeException("Mobile already exists");
        }

        long seq = sequenceService.generateSequence("CustomerSequence");
        String customerId = String.format("C%03d", seq);

        Customer customer = Customer.builder()
                .name(customerDTO.getName())
                .email(customerDTO.getEmail())
                .mobile(customerDTO.getMobile())
                .address(customerDTO.getAddress())
                .pin(customerDTO.getPin())
                .city(customerDTO.getCity())
                .customerId(customerId)
                .build();

        return customerRepository.save(customer).getCustomerId();
    }

    public void updateCustomer(String customerId, CustomerDTO dto) {

        Customer customer = customerRepository.findByCustomerId(customerId).orElseThrow(
                () -> new RuntimeException("User not found")
        );

        if(customerRepository.existsByEmailAndCustomerIdNot(dto.getEmail(), customerId)){
            throw new RuntimeException("Email id already belong to other customer");
        }

        if(customerRepository.existsByMobileAndCustomerIdNot(dto.getMobile(), customerId)){
            throw new RuntimeException("Mobile number already belongs to other customer");
        }

        customer.setName(dto.getName());
        customer.setMobile(dto.getMobile());
        customer.setEmail(dto.getEmail());
        customer.setAddress(dto.getAddress());
        customer.setCity(dto.getCity());
        customer.setPin(dto.getPin());

        customerRepository.save(customer);
    }

    public List<CustomerResponseDTO> getAllCustomers() {
        List<Customer> customers = customerRepository.findAllByOrderByCustomerIdDesc();

        return customers.stream()
                .map(customer ->
                        CustomerResponseDTO.builder()
                                .customerId(customer.getCustomerId())
                                .name(customer.getName())
                                .email(customer.getEmail())
                                .mobile(customer.getMobile())
                                .address(customer.getAddress())
                                .city(customer.getCity())
                                .pin(customer.getPin())
                                .build()
                ).toList();
    }

    public CustomerResponseDTO getCustomerById(String customerId) {
        Customer customer = customerRepository.findByCustomerId(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        return CustomerResponseDTO.builder()
                .customerId(customer.getCustomerId())
                .name(customer.getName())
                .email(customer.getEmail())
                .mobile(customer.getMobile())
                .address(customer.getAddress())
                .city(customer.getCity())
                .pin(customer.getPin())
                .build();
    }

    public CustomerSummeryDTO getCustomerSummery(String customerId) {
        Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.match(Criteria.where("customerId").is(customerId)),

                Aggregation.group()
                        .count().as("totalInvoices")
                        .sum("totalAmount").as("totalBilled")
                        .sum(ConditionalOperators
                                .when(Criteria.where("status").is("DUE"))
                                .thenValueOf("$totalAmount")
                                .otherwise(0)
                        ).as("totalDue")
                        .sum("totalItems").as("totalItems")
        );
        AggregationResults<CustomerSummeryDTO> results = mongoTemplate.aggregate(
                aggregation, "invoices", CustomerSummeryDTO.class);

        return results.getUniqueMappedResult();
    }

    public List<CustomerProductResponseDTO> getCustomerProducts(String customerId) {
        Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.match(Criteria.where("customerId").is(customerId)),

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

        AggregationResults<CustomerProductResponseDTO> results = mongoTemplate.aggregate(
                aggregation, "invoices", CustomerProductResponseDTO.class
        );

        return results.getMappedResults();
    }

    public List<CustomerInvoiceResponseDTO> getCustomerInvoices(String customerId) {
        Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.match(Criteria.where("customerId").is(customerId)),
                Aggregation.project("invoiceId", "totalAmount", "totalItems", "status")
                        .and(DateOperators.dateOf("createdAt")
                                .toString("%Y-%m-%d")).as("date")
                        .andExclude("_id")
                );
        AggregationResults<CustomerInvoiceResponseDTO> results = mongoTemplate.aggregate(
                aggregation, "invoices", CustomerInvoiceResponseDTO.class
        );
        return results.getMappedResults();
    }

}
