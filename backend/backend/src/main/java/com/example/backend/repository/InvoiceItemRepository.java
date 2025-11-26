package com.example.backend.repository;

import com.example.backend.model.InvoiceItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InvoiceItemRepository extends MongoRepository<InvoiceItem, String> {
}
