import React from 'react';
import { Phone, Mail, Linkedin, MapPin, Github } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="page-container">
      <h2>Contact</h2>
      
      <div style={{
        maxWidth: '600px',
        margin: '2rem auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '4px'
        }}>
          <Phone size={24} style={{ opacity: '0.7' }} />
          <span>(+91) 810-913-3203</span>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '4px'
        }}>
          <Mail size={24} style={{ opacity: '0.7' }} />
          <a 
            href="mailto:koushalshrma@gmail.com" 
            style={{
              color: '#fff',
              textDecoration: 'none'
            }}
          >
            koushalshrma@gmail.com
          </a>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '4px'
        }}>
          <Linkedin size={24} style={{ opacity: '0.7' }} />
          <a 
            href="https://www.linkedin.com/in/koushalshrma" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#fff',
              textDecoration: 'none'
            }}
          >
            linkedin.com/in/koushalshrma
          </a>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '4px'
        }}>
          <MapPin size={24} style={{ opacity: '0.7' }} />
          <span>Indore, MP</span>
        </div>
      </div>

      {/* Let's Connect! Section */}
      <div style={{
        maxWidth: '600px',
        margin: '3rem auto 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        <h3 style={{
          fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
          fontWeight: '500',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Let's Connect! 🚀
        </h3>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '4px',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.transform = 'translateY(0)';
        }}>
          <Linkedin size={24} style={{ opacity: '0.7' }} />
          <a 
            href="https://www.linkedin.com/in/koushalshrma" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#fff',
              textDecoration: 'none',
              flex: 1
            }}
          >
            🔗 LinkedIn Profile
          </a>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '4px',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.transform = 'translateY(0)';
        }}>
          <Github size={24} style={{ opacity: '0.7' }} />
          <a 
            href="https://github.com/koushalshrma" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#fff',
              textDecoration: 'none',
              flex: 1
            }}
          >
            💻 GitHub Repository
          </a>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '4px',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.transform = 'translateY(0)';
        }}>
          <Mail size={24} style={{ opacity: '0.7' }} />
          <a 
            href="mailto:koushalshrma@gmail.com" 
            style={{
              color: '#fff',
              textDecoration: 'none',
              flex: 1
            }}
          >
            📧 Send Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;