package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    User user= new User("NRYHD4582","Test", "test@mail.com", "123456","STAFF");
    public void addUser(User user){
        userRepository.save(user);
    }
}
