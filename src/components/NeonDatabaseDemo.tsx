import React from 'react';

const NeonDatabaseDemo: React.FC = () => {
  return (
    <div className="page-container">
      <h2>Neon Database Integration</h2>
      
      <div style={{
        maxWidth: '800px',
        margin: '2rem auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        {/* Overview */}
        <div style={{
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '2rem',
          borderRadius: '4px'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>What is Neon Database?</h3>
          <p style={{ marginBottom: '1rem', opacity: '0.8' }}>
            Neon is a modern serverless PostgreSQL database that separates storage and compute, 
            providing automatic scaling, branching, and point-in-time recovery.
          </p>
          <ul style={{ 
            listStyle: 'none', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.5rem',
            opacity: '0.7'
          }}>
            <li>• Serverless with auto-scaling</li>
            <li>• Git-like database branching</li>
            <li>• Built-in connection pooling</li>
            <li>• Compatible with PostgreSQL ecosystem</li>
          </ul>
        </div>

        {/* Configuration Example */}
        <div style={{
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '2rem',
          borderRadius: '4px'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Spring Boot Configuration</h3>
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            padding: '1rem',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            overflow: 'auto'
          }}>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`# application.properties
spring.datasource.url=jdbc:postgresql://ep-example.us-east-1.aws.neon.tech/portfolio?sslmode=require
spring.datasource.username=portfolio_owner
spring.datasource.password=\${NEON_DATABASE_PASSWORD}
spring.datasource.driver-class-name=org.postgresql.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.show-sql=true`}
            </pre>
          </div>
        </div>

        {/* Entity Example */}
        <div style={{
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '2rem',
          borderRadius: '4px'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Sample Entity</h3>
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            padding: '1rem',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            overflow: 'auto'
          }}>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`@Entity
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Column(name = "tech_stack")
    private String techStack;
    
    @CreationTimestamp
    private LocalDateTime createdAt;
    
    // Constructors, getters, setters...
}`}
            </pre>
          </div>
        </div>

        {/* Benefits */}
        <div style={{
          border: '1px solid rgba(100, 255, 218, 0.3)',
          padding: '2rem',
          borderRadius: '4px',
          backgroundColor: 'rgba(100, 255, 218, 0.05)'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#64ffda' }}>Why Choose Neon?</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            <div>
              <h4 style={{ marginBottom: '0.5rem' }}>Cost Effective</h4>
              <p style={{ opacity: '0.7', fontSize: '0.9rem' }}>
                Pay only for what you use with automatic scaling
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '0.5rem' }}>Developer Friendly</h4>
              <p style={{ opacity: '0.7', fontSize: '0.9rem' }}>
                Database branching for testing and development
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '0.5rem' }}>High Performance</h4>
              <p style={{ opacity: '0.7', fontSize: '0.9rem' }}>
                Built-in connection pooling and optimization
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeonDatabaseDemo;