package com.example.backend.controller;

import com.example.backend.dto.customerDTO.CustomerDTO;
import com.example.backend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @PostMapping("add-customer")
    public ResponseEntity<?> addCustomer(@RequestBody CustomerDTO customerDTO){
        try {
            String customerId = customerService.addCustomer(customerDTO);
            return ResponseEntity.ok("Customer successfully added with customer Id "+customerId);
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/get-all")
    public ResponseEntity<?> getAllCustomer(){
        try {
            return ResponseEntity.ok(customerService.getAllCustomers());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("update-customer/{customerId}")
    public ResponseEntity<?> updateCustomer(@PathVariable String customerId, @RequestBody CustomerDTO dto){
        try {
            customerService.updateCustomer(customerId, dto);
            return ResponseEntity.ok("Customer updated successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/get-customer-byId/{customerId}")
    public ResponseEntity<?> getCustomerById(@PathVariable String customerId){
        try {
            return ResponseEntity.ok(customerService.getCustomerById(customerId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/get-summery/{customerId}")
    public ResponseEntity<?> getCustomerSummery(@PathVariable String customerId){
        try {
            return ResponseEntity.ok(customerService.getCustomerSummery(customerId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/get-products/{customerId}")
    public ResponseEntity<?> getCustomerProducts(@PathVariable String customerId){
        try{
            return ResponseEntity.ok(customerService.getCustomerProducts(customerId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/get-invoices/{customerId}")
    public ResponseEntity<?> getInvoices (@PathVariable String customerId){
        try {
            return ResponseEntity.ok(customerService.getCustomerInvoices(customerId));
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
