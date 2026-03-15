package com.example.backend.dto.productDTO;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductResponseDTO {
    private String productId;
    private String name;
    private String description;
    private double price;
}
