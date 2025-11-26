package com.example.backend.controller;

import com.example.backend.dto.LoginDTO;
import com.example.backend.dto.RegistrationDTO;
import com.example.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {


    @Autowired
    AuthService authService;

    @GetMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO loginDto){
        try{
            return ResponseEntity.ok(authService.login(loginDto));
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/registration")
    public ResponseEntity<?> registration(@RequestBody RegistrationDTO regDTO){
        try {
            authService.registration(regDTO);
            return ResponseEntity.ok("Registration Successful");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
