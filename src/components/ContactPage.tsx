import React from 'react';
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react';

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
          <span>kousharma@gmail.com</span>
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
            href="https://linkedin.com/in/koushalshirma" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#fff',
              textDecoration: 'none'
            }}
          >
            linkedin.com/in/koushalshirma
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
    </div>
  );
};

export default ContactPage;