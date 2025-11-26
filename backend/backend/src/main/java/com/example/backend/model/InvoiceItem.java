package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Document(collection = "invoiceItems")
public class InvoiceItem {

    @Id
    private String id;

    @DBRef
    private Product product;
    private int quantity;

    @DBRef
    private Invoice invoice;
}
