package com.example.backend.repository;

import com.example.backend.model.InvoiceItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InvoiceItemRepository extends MongoRepository<InvoiceItem, String> {

    Optional<InvoiceItem> findByInvoiceIdAndProductId(String invoiceId, String productId);

    InvoiceItem findByProductId(String productId);
}