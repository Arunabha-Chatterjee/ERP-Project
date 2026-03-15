package com.example.backend.dto.customerDTO;

import lombok.Data;

@Data
public class CustomerProductResponseDTO {
    private String productId;
    private String productName;
    private long quantity;
    private double unitPrice;
    private double total;
}
