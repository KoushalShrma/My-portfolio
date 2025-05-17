import React from 'react';

const ProjectsPage: React.FC = () => {
  return (
    <div className="page-container">
      <h2>Projects</h2>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '2rem',
          borderRadius: '4px',
          transition: 'all 0.3s ease'
        }} className="hover:border-white">
          <a 
            href="https://calm-naiad-7ac7c0.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#fff',
              textDecoration: 'none'
            }}
          >
            <h3 style={{ marginBottom: '1rem' }}>Find-A-Spot</h3>
            <p style={{ marginBottom: '1rem' }}>
              AI-powered parking system with real-time slot detection
            </p>
            <p style={{ 
              opacity: '0.7',
              fontSize: '0.9rem'
            }}>
              Role: Database management & backend development
            </p>
          </a>
        </div>
        
        <div style={{
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '2rem',
          borderRadius: '4px',
          opacity: '0.6',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <p>More coming soon →</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;