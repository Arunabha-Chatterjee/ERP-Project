package com.example.backend.dto.customerDTO;

import lombok.Data;

import java.time.LocalDate;

@Data
public class CustomerInvoiceResponseDTO {
    private String invoiceId;
    private double totalAmount;
    private String status;
    private long totalItems;
    private LocalDate date;
}
