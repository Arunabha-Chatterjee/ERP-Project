package com.example.backend.dto.invoiceDTO;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class InvoiceResponseDTO {
    private String invoiceId;
    private String customerId;
    private double totalAmount;
    private long totalItems;
    private String status;
    private LocalDate date;
}
