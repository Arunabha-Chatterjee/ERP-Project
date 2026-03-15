package com.example.backend.controller;

import com.example.backend.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.DatagramSocket;

@RestController
@RequestMapping("/dashboards")
public class DashBoardController {

    @Autowired
    DashboardService dashboardService;

    @GetMapping("/get-summery/{duration}")
    public ResponseEntity<?> getTotalAmountByDuration(@PathVariable String duration){
        try {
            return ResponseEntity.ok(dashboardService.getDashBoardSummery(duration));
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/get-recent-invoices")
    public ResponseEntity<?> getRecentInvoices(){
        try {
            return ResponseEntity.ok(dashboardService.getRecentInvoice());
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
