package com.example.backend.dto.customerDTO;

import lombok.Data;

import java.util.List;

@Data
public class CustomerItemListDTO {
    private List<CustomerItemListDTO> items;
}
