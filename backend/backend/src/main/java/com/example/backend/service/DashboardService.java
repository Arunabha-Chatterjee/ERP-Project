package com.example.backend.service;

import com.example.backend.dto.dashboardDTO.DashBoardSummeryResponseDTO;
import com.example.backend.dto.invoiceDTO.InvoiceRequestDTO;
import com.example.backend.dto.invoiceDTO.InvoiceResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {

    @Autowired
    InvoiceService invoiceService;

    public DashBoardSummeryResponseDTO getDashBoardSummery(String duration){
        return invoiceService.getDashBoardSummery(duration);
    }

    public long getTotalNumberOfInvoices(String duration){
        return invoiceService.getTotalNumberOfInvoices(duration);
    }

    public long getTotalItems(String duration){
        return invoiceService.getTotalItems(duration);
    }

    public List<InvoiceResponseDTO> getTodayDayInvoices(){
        return invoiceService.getTodayDayInvoices();
    }

    public List<InvoiceResponseDTO> getRecentInvoice(){
        return invoiceService.getRecentInvoices();
    }
}
