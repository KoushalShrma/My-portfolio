package com.koushal.portfolio.controller;

import com.koushal.portfolio.dto.ApiResponse;
import com.koushal.portfolio.entity.PortfolioInfo;
import com.koushal.portfolio.service.PortfolioInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/portfolio")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class PortfolioController {

    @Autowired
    private PortfolioInfoService portfolioInfoService;

    @GetMapping("/info")
    public ResponseEntity<ApiResponse<PortfolioInfo>> getPortfolioInfo() {
        try {
            PortfolioInfo portfolioInfo = portfolioInfoService.getPortfolioInfo();
            return ResponseEntity.ok(ApiResponse.success(portfolioInfo));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ApiResponse.error("Failed to retrieve portfolio info: " + e.getMessage()));
        }
    }

    @PutMapping("/info")
    public ResponseEntity<ApiResponse<PortfolioInfo>> updatePortfolioInfo(@RequestBody PortfolioInfo portfolioInfo) {
        try {
            PortfolioInfo updatedInfo = portfolioInfoService.updatePortfolioInfo(portfolioInfo);
            return ResponseEntity.ok(ApiResponse.success("Portfolio info updated successfully", updatedInfo));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ApiResponse.error("Failed to update portfolio info: " + e.getMessage()));
        }
    }

    @GetMapping("/health")
    public ResponseEntity<ApiResponse<String>> healthCheck() {
        return ResponseEntity.ok(ApiResponse.success("Portfolio Backend is running!"));
    }
}