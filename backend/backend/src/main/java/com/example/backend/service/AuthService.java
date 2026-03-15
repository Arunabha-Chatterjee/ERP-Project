package com.example.backend.service;

import com.example.backend.dto.authDTO.AuthResponseDTO;
import com.example.backend.dto.authDTO.LoginDTO;
import com.example.backend.dto.authDTO.RegistrationDTO;
import com.example.backend.jwt.JWTService;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JWTService jwtService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    public AuthResponseDTO login(LoginDTO loginDto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDto.getUsername(),
                        loginDto.getPassword()
                )
        );
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        if (authentication.isAuthenticated()) {
            return  AuthResponseDTO.builder()
                    .username(userDetails.getUsername())
                    .token(jwtService.generateToken(userDetails.getUsername()))
                    .build();
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }

    public void registration(RegistrationDTO regDTO){
        Optional<User> existUser =  userRepository.findByUsername(regDTO.getUsername());

        if(existUser.isPresent()){
            throw new RuntimeException("Username already exists");
        }
        else {
            userRepository.save(
                    User.builder()
                            .name(regDTO.getName())
                            .username(regDTO.getUsername())
                            .password(passwordEncoder.encode(regDTO.getPassword()))
                            .build()
            );
        }
    }
}
