package com.example.backend.dto.productDTO;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ProductInvoiceResponseDTO {
    private String invoiceId;
    private double totalAmount;
    private String customerName;
    private String status;
    private LocalDate date;
}
