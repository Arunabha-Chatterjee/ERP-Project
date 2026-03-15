package com.example.backend.dto.productDTO;

import lombok.Data;

@Data
public class ProductSummeryDTO {
    private double totalSales;
    private long totalUnitSale;
    private long totalInvoices;
    private long totalCustomers;
}
