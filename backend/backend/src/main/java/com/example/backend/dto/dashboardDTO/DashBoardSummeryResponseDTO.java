package com.example.backend.dto.dashboardDTO;

import lombok.Data;

@Data
public class DashBoardSummeryResponseDTO {
    private double totalSales;
    private long totalItems;
    private double totalDue;
    private long totalInvoices;
}
