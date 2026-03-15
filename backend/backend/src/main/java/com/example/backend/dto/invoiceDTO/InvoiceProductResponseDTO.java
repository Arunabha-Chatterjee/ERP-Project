package com.example.backend.dto.invoiceDTO;

import lombok.Data;

@Data
public class InvoiceProductResponseDTO {
    private String productId;
    private String productName;
    private long quantity;
    private double unitPrice;
    private double total;
}
