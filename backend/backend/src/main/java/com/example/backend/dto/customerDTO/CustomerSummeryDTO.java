package com.example.backend.dto.customerDTO;

import lombok.Data;

@Data
public class CustomerSummeryDTO {
    private long totalInvoices;
    private double totalBilled;
    private double totalDue;
    private long totalItems;
}
