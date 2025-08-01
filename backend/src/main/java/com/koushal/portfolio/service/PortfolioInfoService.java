package com.koushal.portfolio.service;

import com.koushal.portfolio.entity.PortfolioInfo;
import com.koushal.portfolio.repository.PortfolioInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PortfolioInfoService {

    @Autowired
    private PortfolioInfoRepository portfolioInfoRepository;

    public PortfolioInfo getPortfolioInfo() {
        return portfolioInfoRepository.findFirstByOrderByIdAsc()
                .orElse(getDefaultPortfolioInfo());
    }

    public PortfolioInfo savePortfolioInfo(PortfolioInfo portfolioInfo) {
        return portfolioInfoRepository.save(portfolioInfo);
    }

    public PortfolioInfo updatePortfolioInfo(PortfolioInfo portfolioInfo) {
        Optional<PortfolioInfo> existing = portfolioInfoRepository.findFirstByOrderByIdAsc();
        if (existing.isPresent()) {
            portfolioInfo.setId(existing.get().getId());
        }
        return portfolioInfoRepository.save(portfolioInfo);
    }

    private PortfolioInfo getDefaultPortfolioInfo() {
        return new PortfolioInfo(
            "Koushal Sharma",
            "The Developer",
            "Building intelligent backend systems with Java & Spring Boot",
            "Indore, IN",
            "koushalshrma@gmail.com",
            "(+91) 810-913-3203",
            "https://www.linkedin.com/in/koushalshrma",
            "https://github.com/koushalshrma"
        );
    }

    public void initializeDefaultPortfolioInfo() {
        if (portfolioInfoRepository.count() == 0) {
            savePortfolioInfo(getDefaultPortfolioInfo());
        }
    }
}