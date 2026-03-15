package com.example.backend.controller;

import com.example.backend.dto.invoiceDTO.InvoiceRequestDTO;
import com.example.backend.dto.invoiceDTO.InvoiceStatusUpdateDTO;
import com.example.backend.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/invoices")
public class InvoiceController {

    @Autowired
    InvoiceService invoiceService;

    @PostMapping("/add-invoice")
    public ResponseEntity<?> addInvoice(@RequestBody InvoiceRequestDTO dto){
        try {
          invoiceService.addInvoice(dto);
          return ResponseEntity.ok("Invoice created successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("get-invoice/{invoiceId}")
    public ResponseEntity<?> getInvoiceById(@PathVariable String invoiceId){
        try {
            return ResponseEntity.ok(invoiceService.getInvoiceById(invoiceId));
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("get-products/{invoiceId}")
    public ResponseEntity<?> getInvoiceProducts(@PathVariable String invoiceId){
        try{
            return ResponseEntity.ok(invoiceService.getProducts(invoiceId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/get-invoices")
    public ResponseEntity<?> getAllInvoices(){
        try {
            return ResponseEntity.ok(invoiceService.getAllInvoices());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
