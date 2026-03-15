package com.example.backend.dto.invoiceDTO;

import com.example.backend.dto.invoiceItemDTO.InvoiceItemDTO;
import lombok.Data;

import java.util.List;

@Data
public class InvoiceRequestDTO {
    private String customerId;
    private String status;
    private List<InvoiceItemDTO> invoiceItemList;
}
