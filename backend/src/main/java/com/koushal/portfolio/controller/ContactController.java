package com.koushal.portfolio.controller;

import com.koushal.portfolio.dto.ApiResponse;
import com.koushal.portfolio.dto.ContactRequest;
import com.koushal.portfolio.entity.Contact;
import com.koushal.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/contacts")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    public ResponseEntity<ApiResponse<Contact>> createContact(@Valid @RequestBody ContactRequest contactRequest) {
        try {
            Contact savedContact = contactService.saveContact(contactRequest);
            return ResponseEntity.ok(ApiResponse.success("Contact saved successfully", savedContact));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ApiResponse.error("Failed to save contact: " + e.getMessage()));
        }
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Contact>>> getAllContacts() {
        try {
            List<Contact> contacts = contactService.getAllContacts();
            return ResponseEntity.ok(ApiResponse.success(contacts));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ApiResponse.error("Failed to retrieve contacts: " + e.getMessage()));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Contact>> getContactById(@PathVariable Long id) {
        try {
            Optional<Contact> contact = contactService.getContactById(id);
            if (contact.isPresent()) {
                return ResponseEntity.ok(ApiResponse.success(contact.get()));
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error("Contact not found"));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ApiResponse.error("Failed to retrieve contact: " + e.getMessage()));
        }
    }

    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<Contact>>> searchContacts(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String email) {
        try {
            List<Contact> contacts;
            if (name != null && !name.trim().isEmpty()) {
                contacts = contactService.searchContactsByName(name);
            } else if (email != null && !email.trim().isEmpty()) {
                contacts = contactService.searchContactsByEmail(email);
            } else {
                contacts = contactService.getAllContacts();
            }
            return ResponseEntity.ok(ApiResponse.success(contacts));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ApiResponse.error("Failed to search contacts: " + e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteContact(@PathVariable Long id) {
        try {
            Optional<Contact> contact = contactService.getContactById(id);
            if (contact.isPresent()) {
                contactService.deleteContact(id);
                return ResponseEntity.ok(ApiResponse.success("Contact deleted successfully", null));
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error("Contact not found"));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ApiResponse.error("Failed to delete contact: " + e.getMessage()));
        }
    }

    @GetMapping("/count")
    public ResponseEntity<ApiResponse<Long>> getContactCount() {
        try {
            long count = contactService.getContactCount();
            return ResponseEntity.ok(ApiResponse.success(count));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ApiResponse.error("Failed to get contact count: " + e.getMessage()));
        }
    }
}