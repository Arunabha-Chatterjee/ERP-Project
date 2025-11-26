package com.example.backend.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JWTService {
    public static final String SECRET_KEY ="2rAV1TyqAoR6evbbY0z9aC46GgOxpGQPi3c71WskQ8h";

    public String generateToken(String userName){
        Map<String, Object> claims = new HashMap<>();  //here we can add custom claims
        return createToken(userName, claims);
    }

    private String createToken(String userName, Map<String, Object> claims) {
        return Jwts.builder()
                .claims(claims)
                .subject(userName)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis()+1000*60*60*10)) //10 hr
                .signWith(getSignKey())
                .compact();
    }

    private SecretKey getSignKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);  //convert string in byte
        return Keys.hmacShaKeyFor(keyBytes);  //convert into HMAC-SHA key
    }

    private Claims getAllClaims(String token) {
        return Jwts.parser()
                .verifyWith(getSignKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public String extractUserName(String token){
        return getAllClaims(token).getSubject();
    }

    private boolean isTokenExpired(String token){
        return getAllClaims(token).getExpiration().before(new Date());
    }

    public boolean isTokenValid(String token, UserDetails userDetails){
        String userName = extractUserName(token);
        return (
                userName.equals(userDetails.getUsername())
                        && !isTokenExpired(token)
        );
    }


}
