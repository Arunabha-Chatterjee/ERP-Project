package com.example.backend.dto.invoiceDTO;

import lombok.Data;

import java.util.List;

@Data
public class InvoiceListDTO {
    private List<InvoiceRequestDTO> invoiceList;
}
