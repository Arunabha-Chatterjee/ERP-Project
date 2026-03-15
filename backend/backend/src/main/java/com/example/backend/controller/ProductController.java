package com.example.backend.controller;

import com.example.backend.dto.productDTO.ProductRequestDTO;
import com.example.backend.dto.productDTO.ProductResponseDTO;
import com.example.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/get-all")
    public ResponseEntity<?> getAllProducts(){
        try {
            return ResponseEntity.ok(productService.getAllProduct());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/get-by-id/{productId}")
    public ResponseEntity<?> getProductById(@PathVariable String productId){
        try {
            return ResponseEntity.ok(productService.getProductById(productId));
        } catch (Exception e) {

            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/get-product-summery/{productId}")
    public ResponseEntity<?> getProductSummery(@PathVariable String productId){
        try{
            return ResponseEntity.ok(productService.getProductSummery(productId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }



    @GetMapping("/get-invoices/{productId}")
    public ResponseEntity<?> getInvoiceIds(@PathVariable String productId){
        try {
            return ResponseEntity.ok(productService.getInvoices(productId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


    @PostMapping("/add-product")
    public ResponseEntity<?> addProduct(@RequestBody ProductRequestDTO dto) {
        try {
            String productId = productService.addProduct(dto);
            return ResponseEntity.ok("Product added successfully with productId " + productId);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("update-product/{productId}")
    public ResponseEntity<?> updateProduct(@PathVariable String productId, @RequestBody ProductRequestDTO dto){
        try {
            productService.updateProduct(productId, dto);
            return ResponseEntity.ok("Product updated successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
