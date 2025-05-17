import React from 'react';

const SkillsEducationPage: React.FC = () => {
  return (
    <div className="page-container">
      <h2>Skills & Education</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        maxWidth: '1000px',
        margin: '2rem auto'
      }}>
        {/* Skills Section */}
        <div>
          <h3 style={{ marginBottom: '1.5rem' }}>Skills</h3>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ 
              marginBottom: '1rem',
              opacity: '0.8',
              fontSize: '1.1rem'
            }}>
              Core
            </h4>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>MySQL</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ 
              marginBottom: '1rem',
              opacity: '0.8',
              fontSize: '1.1rem'
            }}>
              Tools
            </h4>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}>
              <li>Maven</li>
              <li>Postman</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
        
        {/* Education Section */}
        <div>
          <h3 style={{ marginBottom: '1.5rem' }}>Education</h3>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ 
              marginBottom: '0.5rem',
              fontSize: '1.1rem'
            }}>
              B.Tech (AI/ML)
            </h4>
            <p style={{ marginBottom: '0.5rem' }}>Acropolis Institute</p>
            <p style={{ opacity: '0.7' }}>2023-2026</p>
          </div>
          
          <div>
            <h4 style={{ 
              marginBottom: '0.5rem',
              fontSize: '1.1rem'
            }}>
              Diploma (ME)
            </h4>
            <p style={{ marginBottom: '0.5rem' }}>Prestige Institute</p>
            <p style={{ opacity: '0.7' }}>CGPA: 8.45</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsEducationPage;