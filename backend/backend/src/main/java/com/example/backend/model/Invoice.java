package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Document(collection = "invoices")
public class Invoice {

    @Id
    private String id;

    private Customer customer;

    private List<InvoiceItem> invoiceItems;

    private double totalPrice;
    private String status;
    private LocalDate date;
    private LocalTime time;
}
