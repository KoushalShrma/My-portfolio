package com.koushal.portfolio.repository;

import com.koushal.portfolio.entity.PortfolioInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PortfolioInfoRepository extends JpaRepository<PortfolioInfo, Long> {
    
    Optional<PortfolioInfo> findFirstByOrderByIdAsc();
}