package com.koushal.portfolio.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "portfolio_info")
public class PortfolioInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required")
    @Column(nullable = false)
    private String name;

    @NotBlank(message = "Title is required")
    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String location;

    private String email;

    private String phone;

    private String linkedinUrl;

    private String githubUrl;

    // Constructors
    public PortfolioInfo() {}

    public PortfolioInfo(String name, String title, String description, String location, 
                        String email, String phone, String linkedinUrl, String githubUrl) {
        this.name = name;
        this.title = title;
        this.description = description;
        this.location = location;
        this.email = email;
        this.phone = phone;
        this.linkedinUrl = linkedinUrl;
        this.githubUrl = githubUrl;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getLinkedinUrl() {
        return linkedinUrl;
    }

    public void setLinkedinUrl(String linkedinUrl) {
        this.linkedinUrl = linkedinUrl;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    @Override
    public String toString() {
        return "PortfolioInfo{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", location='" + location + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", linkedinUrl='" + linkedinUrl + '\'' +
                ", githubUrl='" + githubUrl + '\'' +
                '}';
    }
}