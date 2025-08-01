package com.koushal.portfolio.repository;

import com.koushal.portfolio.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    
    List<Contact> findByEmailContainingIgnoreCase(String email);
    
    List<Contact> findByNameContainingIgnoreCase(String name);
    
    List<Contact> findAllByOrderByCreatedAtDesc();
}