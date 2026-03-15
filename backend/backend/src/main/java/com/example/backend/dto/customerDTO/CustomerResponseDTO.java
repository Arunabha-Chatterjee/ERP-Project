package com.example.backend.dto.customerDTO;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CustomerResponseDTO {
    private String customerId;
    private String name;
    private String email;
    private long mobile;
    private String address;
    private String city;
    private long pin;
}
