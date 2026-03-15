package com.example.backend.jwt;

import com.example.backend.service.UserDetailsServiceImpl;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JWTFilter extends OncePerRequestFilter {

    @Autowired
    JWTService jwtService;

    @Autowired
    UserDetailsServiceImpl userDetailsService;


    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        // Get the authorization header from request
        String authHeader = request.getHeader("Authorization");

        //if authHeader is null and not starts with Bearer skip this filter and continue to next filer
        if(authHeader==null || !authHeader.startsWith("Bearer ")){
            filterChain.doFilter(request, response); //skip this filter and continue to next filer
            return;
        }

        //Remove the 'Bearer ' from token
        String token = authHeader.substring(7);

        //Extract username from token
        String userName = jwtService.extractUserName(token);

        // Check if username is present and no authentication object is set yet
        if(userName != null && SecurityContextHolder.getContext().getAuthentication()==null){

            //Load user details (like roles, password) from database
            UserDetails userDetails = userDetailsService.loadUserByUsername(userName);

            //create an authentication object
            if (jwtService.isTokenValid(token, userDetails)){
                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(
                                userDetails,
                                null,
                                userDetails.getAuthorities()
                        );

                //set the authentication object to the context holder
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }

        //Continue the request chain (go to next filter or controller)
        filterChain.doFilter(request, response);

    }
}
