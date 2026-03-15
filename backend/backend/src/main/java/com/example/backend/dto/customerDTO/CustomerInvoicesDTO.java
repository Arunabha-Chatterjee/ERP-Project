package com.example.backend.dto.customerDTO;

import lombok.Data;

import java.util.List;

@Data
public class CustomerInvoicesDTO {
    private List<String> invoices;
}
