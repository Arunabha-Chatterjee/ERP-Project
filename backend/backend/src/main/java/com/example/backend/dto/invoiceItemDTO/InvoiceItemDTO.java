package com.example.backend.dto.invoiceItemDTO;

import lombok.Data;

@Data
public class InvoiceItemDTO {
    private String productId;
    private long quantity;
}
