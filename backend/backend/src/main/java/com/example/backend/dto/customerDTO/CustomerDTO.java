package com.example.backend.dto.customerDTO;

import lombok.Data;

@Data
public class CustomerDTO {
    private String name;
    private String email;
    private long mobile;
    private String address;
    private long pin;
    private String city;
}
