package com.example.backend.dto.customerDTO;

import lombok.Data;

@Data
public class CustomerItemDTO {
    private String _id;
    private long unitPrice;
    private String description;
    private long quantity;
    private double total;
}
