import React, { useState, useEffect } from 'react';
import { portfolioApi, type PortfolioInfo } from '../services/portfolioApi';

const HomePage: React.FC = () => {
  const [portfolioInfo, setPortfolioInfo] = useState<PortfolioInfo | null>(null);
  const [backendStatus, setBackendStatus] = useState<string>('Checking...');

  useEffect(() => {
    const loadData = async () => {
      try {
        // Check backend health
        const health = await portfolioApi.checkHealth();
        setBackendStatus(health);

        // Get portfolio info
        const info = await portfolioApi.getPortfolioInfo();
        setPortfolioInfo(info);
      } catch (error) {
        console.error('Error loading data:', error);
        setBackendStatus('Backend unavailable - using static data');
      }
    };

    loadData();
  }, []);

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
          <h3>{portfolioInfo?.title || 'The Developer'}</h3>
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
          {portfolioInfo?.description || 'Building intelligent backend systems with Java & Spring Boot'}
        </p>
        
        {/* Backend Status Indicator */}
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: backendStatus.includes('Backend') ? '#4ade80' : '#ef4444',
          padding: '8px 12px',
          borderRadius: '8px',
          fontSize: '0.75rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          zIndex: 1000
        }}>
          🚀 {backendStatus}
        </div>
      </div>
    </div>
  );
};

export default HomePage;