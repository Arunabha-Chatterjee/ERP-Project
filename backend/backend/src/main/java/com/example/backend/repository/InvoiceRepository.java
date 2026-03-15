package com.example.backend.repository;

import com.example.backend.model.Invoice;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface InvoiceRepository extends MongoRepository<Invoice, String> {
    Optional<Invoice> findByInvoiceId(String invoiceId);

    List<Invoice> findAllByOrderByInvoiceIdDesc();
}
