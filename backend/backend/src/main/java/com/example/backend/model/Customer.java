package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Document(collection = "customers")
public class Customer {
    @Id
    private ObjectId id;

    private String customerId;

    private String name;
    private String email;
    private long mobile;
    private String address;
    private String city;
    private long pin;
}
