import React from 'react';

const AchievementsHobbiesPage: React.FC = () => {
  return (
    <div className="page-container">
      <h2>Achievements & Hobbies</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        maxWidth: '1000px',
        margin: '2rem auto'
      }}>
        {/* Achievements Section */}
        <div>
          <h3 style={{ marginBottom: '1.5rem' }}>Achievements</h3>
          
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <li style={{
              padding: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '4px'
            }}>
              <h4 style={{ marginBottom: '0.5rem' }}>NVIDIA Deep Learning Certification</h4>
              <p style={{ opacity: '0.7', fontSize: '0.9rem' }}>Specialized AI training</p>
            </li>
            <li style={{
              padding: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '4px'
            }}>
              <h4 style={{ marginBottom: '0.5rem' }}>NPTEL Elite Badges</h4>
              <p style={{ opacity: '0.7', fontSize: '0.9rem' }}>Java/DBMS certifications</p>
            </li>
          </ul>
        </div>
        
        {/* Hobbies Section */}
        <div>
          <h3 style={{ marginBottom: '1.5rem' }}>Hobbies</h3>
          
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <li style={{
              padding: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{ opacity: '0.7' }}>♟️</div>
              <span>Chess</span>
            </li>
            <li style={{
              padding: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{ opacity: '0.7' }}>📷</div>
              <span>Photography</span>
            </li>
            <li style={{
              padding: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '4px'
            }}>
              <p>Overthinking During Decision-Making</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AchievementsHobbiesPage;