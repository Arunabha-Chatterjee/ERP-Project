package com.example.backend.repository;

import com.example.backend.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {
    Optional<Customer> findByCustomerId(String customerId);
    List<Customer> findAllByOrderByCustomerIdDesc();
    Optional<Customer> findByEmail(String email);
    Optional<Customer> findByMobile(long phone);

    //same email id belongs to other customer or not
    boolean existsByEmailAndCustomerIdNot(String email, String customerId);
    //same mobile number belongs to other customer or not
    boolean existsByMobileAndCustomerIdNot(long phone, String customerId);
}
