package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Document(collection = "invoices")
public class Invoice {

    @Id
    private String id;

    private String invoiceId;
    private String customerId;

    private List<String> invoiceItemIds;

    private double totalAmount;
    private long totalItems;
    private String status;
    private LocalDateTime createdAt;
}
