import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="home-content" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        textAlign: 'right',
        height: '100vh',
        padding: 'clamp(1rem, 2vw, 2rem)',
        paddingRight: 'clamp(2rem, 4vw, 4rem)',
        paddingBottom: 'clamp(4rem, 8vh, 8rem)',
        maxWidth: '100%',
        overflow: 'hidden'
      }}>
        <h1 className="name-title" style={{ 
          marginBottom: 'clamp(1rem, 2vw, 2rem)',
          transform: 'translateX(0.75rem)',
          whiteSpace: 'nowrap'
        }}>
          K O S L
        </h1>
        <div style={{ 
          marginBottom: 'clamp(1.5rem, 3vw, 3rem)',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(0.25rem, 0.5vw, 0.5rem)',
          fontSize: 'clamp(1rem, 2vw, 2rem)',
          fontWeight: '300'
        }}>
          <h3>The Developer</h3>
          <span style={{ fontSize: '1.2em' }}>→</span>
        </div>
        <p style={{ 
          maxWidth: 'min(600px, 90vw)',
          fontSize: 'clamp(0.875rem, 1.5vw, 1.5rem)',
          fontWeight: '300',
          lineHeight: '1.6',
          opacity: '0.8',
          textAlign: 'right',
          marginRight: 'clamp(2rem, 4vw, 4rem)',
          marginBottom: 'clamp(1rem, 2vw, 2rem)'
        }}>
          Building intelligent backend systems with Java & Spring Boot
        </p>
      </div>
    </div>
  );
};

export default HomePage;