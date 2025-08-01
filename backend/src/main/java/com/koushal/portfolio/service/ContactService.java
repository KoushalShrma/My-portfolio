package com.koushal.portfolio.service;

import com.koushal.portfolio.entity.Contact;
import com.koushal.portfolio.dto.ContactRequest;
import com.koushal.portfolio.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public Contact saveContact(ContactRequest contactRequest) {
        Contact contact = new Contact(
            contactRequest.getName(),
            contactRequest.getEmail(),
            contactRequest.getPhone(),
            contactRequest.getMessage()
        );
        return contactRepository.save(contact);
    }

    public List<Contact> getAllContacts() {
        return contactRepository.findAllByOrderByCreatedAtDesc();
    }

    public Optional<Contact> getContactById(Long id) {
        return contactRepository.findById(id);
    }

    public List<Contact> searchContactsByName(String name) {
        return contactRepository.findByNameContainingIgnoreCase(name);
    }

    public List<Contact> searchContactsByEmail(String email) {
        return contactRepository.findByEmailContainingIgnoreCase(email);
    }

    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }

    public long getContactCount() {
        return contactRepository.count();
    }
}