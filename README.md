# Koushal Sharma - Full Stack Portfolio

A modern, full-stack portfolio website built with **React TypeScript** frontend and **Java Spring Boot** backend with **MySQL** database support.

## 🌟 Features

### Frontend
- **Modern Design**: Minimalist black theme with clean typography
- **Responsive Layout**: Works perfectly on desktop and mobile devices
- **React TypeScript**: Type-safe, modern React application
- **Contact Integration**: "Let's Connect!" section with working links
- **Backend Integration**: Real-time communication with Spring Boot API

### Backend
- **Java Spring Boot**: Clean architecture with REST APIs
- **MySQL Database**: Production-ready database integration
- **H2 Testing**: In-memory database for development
- **CORS Support**: Configured for frontend integration
- **Data Management**: Automatic schema creation and initialization

## 🚀 Technology Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons

### Backend
- Java 17
- Spring Boot 3.2.0
- Spring Data JPA
- MySQL 8.0+
- H2 Database (testing)
- Maven

## 📦 Project Structure

```
My-portfolio/
├── src/                          # React frontend
│   ├── components/               # React components
│   ├── services/                 # API service layer
│   └── styles/                   # CSS styling
├── backend/                      # Spring Boot backend
│   ├── src/main/java/           # Java source code
│   │   └── com/koushal/portfolio/
│   │       ├── controller/       # REST controllers
│   │       ├── service/          # Business logic
│   │       ├── repository/       # Data access layer
│   │       ├── entity/           # JPA entities
│   │       ├── dto/              # Data transfer objects
│   │       └── config/           # Configuration classes
│   └── src/main/resources/      # Application properties
└── README.md
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ and npm
- Java 17+
- Maven 3.6+
- MySQL 8.0+ (for production)

### Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Run with H2 database (development)
mvn spring-boot:run -Dspring-boot.run.profiles=test

# Run with MySQL (production)
mvn spring-boot:run
```

The backend API will be available at `http://localhost:8080/api`

### MySQL Database Setup (Production)

```sql
CREATE DATABASE portfolio_db;
CREATE USER 'portfolio_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON portfolio_db.* TO 'portfolio_user'@'localhost';
FLUSH PRIVILEGES;
```

Update `backend/src/main/resources/application.properties` with your database credentials.

## 🔗 API Endpoints

### Portfolio Information
- `GET /api/portfolio/info` - Get portfolio data
- `PUT /api/portfolio/info` - Update portfolio data
- `GET /api/portfolio/health` - Health check

### Contact Management
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - Get all contacts
- `GET /api/contacts/{id}` - Get specific contact
- `GET /api/contacts/search` - Search contacts

## 🎨 Screenshots

### Homepage with Backend Integration
![Homepage](https://github.com/user-attachments/assets/1213c038-1a4f-4bd4-8d5b-51cddaa54a53)

### Contact Page with "Let's Connect!" Section
![Contact Page](https://github.com/user-attachments/assets/3a4940b9-9a2f-4ce9-90e1-daa6c485d862)

## 🌐 Links

- **LinkedIn**: [linkedin.com/in/koushalshrma](https://www.linkedin.com/in/koushalshrma)
- **GitHub**: [github.com/koushalshrma](https://github.com/koushalshrma)
- **Email**: [koushalshrma@gmail.com](mailto:koushalshrma@gmail.com)

## 📝 Development Notes

- **Backend Status**: The green rocket indicator shows real-time backend connectivity
- **Fallback Support**: Frontend works with static data if backend is unavailable
- **CORS Configured**: Both development and production environments supported
- **Type Safety**: Full TypeScript integration with proper interfaces

## 🚀 Deployment

### Frontend
```bash
npm run build
# Deploy the 'dist' folder to your web server
```

### Backend
```bash
cd backend
mvn clean package
# Deploy the generated JAR file to your Java server
```

## 📧 Contact

For any questions or suggestions, feel free to reach out:

- **Email**: koushalshrma@gmail.com
- **LinkedIn**: [Koushal Sharma](https://www.linkedin.com/in/koushalshrma)
- **Location**: Indore, India

---

*Built with ❤️ using React, TypeScript, Java, and Spring Boot*
