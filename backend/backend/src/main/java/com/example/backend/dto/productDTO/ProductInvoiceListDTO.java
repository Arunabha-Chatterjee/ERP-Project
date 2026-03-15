package com.example.backend.dto.productDTO;

import lombok.Data;
import java.util.List;

@Data
public class ProductInvoiceListDTO {
    private List<String> invoiceIds;
}
