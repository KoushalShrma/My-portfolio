package com.koushal.portfolio.config;

import com.koushal.portfolio.service.PortfolioInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private PortfolioInfoService portfolioInfoService;

    @Override
    public void run(String... args) throws Exception {
        // Initialize default portfolio info if not exists
        portfolioInfoService.initializeDefaultPortfolioInfo();
        System.out.println("✅ Portfolio data initialized successfully!");
    }
}