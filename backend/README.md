# Portfolio Backend - Spring Boot

A Java Spring Boot backend for Koushal's portfolio website with MySQL database integration.

## Features

- **REST APIs** for portfolio data and contact management
- **MySQL Database** integration with JPA/Hibernate
- **CORS Configuration** for React frontend integration
- **Data Validation** with Jakarta Bean Validation
- **Clean Architecture** with Controller, Service, Repository layers

## Prerequisites

- Java 17 or higher
- Maven 3.6+
- MySQL 8.0+

## Setup

1. **Database Setup**
   ```sql
   CREATE DATABASE portfolio_db;
   CREATE USER 'portfolio_user'@'localhost' IDENTIFIED BY 'portfolio_password';
   GRANT ALL PRIVILEGES ON portfolio_db.* TO 'portfolio_user'@'localhost';
   FLUSH PRIVILEGES;
   ```

2. **Configuration**
   Update `src/main/resources/application.properties` with your database credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

3. **Run the Application**
   ```bash
   mvn spring-boot:run
   ```

The application will start on `http://localhost:8080/api`

## API Endpoints

### Portfolio Info
- `GET /api/portfolio/info` - Get portfolio information
- `PUT /api/portfolio/info` - Update portfolio information
- `GET /api/portfolio/health` - Health check

### Contact Management
- `POST /api/contacts` - Create new contact
- `GET /api/contacts` - Get all contacts
- `GET /api/contacts/{id}` - Get contact by ID
- `GET /api/contacts/search?name={name}&email={email}` - Search contacts
- `DELETE /api/contacts/{id}` - Delete contact
- `GET /api/contacts/count` - Get total contact count

## Database Schema

### portfolio_info
- `id` (bigint, primary key)
- `name` (varchar, not null)
- `title` (varchar, not null)
- `description` (text)
- `location` (varchar)
- `email` (varchar)
- `phone` (varchar)
- `linkedin_url` (varchar)
- `github_url` (varchar)

### contacts
- `id` (bigint, primary key)
- `name` (varchar, not null)
- `email` (varchar, not null)
- `phone` (varchar)
- `message` (text)
- `created_at` (datetime)

## Development

- **Build**: `mvn clean compile`
- **Test**: `mvn test`
- **Package**: `mvn clean package`

## Technologies Used

- Spring Boot 3.2.0
- Spring Data JPA
- MySQL Connector/J
- Jakarta Bean Validation
- Maven