import React from 'react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentPage, 
  setCurrentPage, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}) => {
  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navigation">
        <div 
          className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => handleNavClick('home')}
        >
          Home
        </div>
        <div 
          className={`nav-item ${currentPage === 'projects' ? 'active' : ''}`}
          onClick={() => handleNavClick('projects')}
        >
          Projects
        </div>
        <div 
          className={`nav-item ${currentPage === 'skills' ? 'active' : ''}`}
          onClick={() => handleNavClick('skills')}
        >
          Skills & Education
        </div>
        <div 
          className={`nav-item ${currentPage === 'achievements' ? 'active' : ''}`}
          onClick={() => handleNavClick('achievements')}
        >
          Achievements & Hobbies
        </div>
        <div 
          className={`nav-item ${currentPage === 'contact' ? 'active' : ''}`}
          onClick={() => handleNavClick('contact')}
        >
          Contact
        </div>
      </nav>

      <nav className={`mobile-navigation ${isMobileMenuOpen ? 'open' : ''}`}>
        <div 
          className={`mobile-nav-item ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => handleNavClick('home')}
        >
          Home
        </div>
        <div 
          className={`mobile-nav-item ${currentPage === 'projects' ? 'active' : ''}`}
          onClick={() => handleNavClick('projects')}
        >
          Projects
        </div>
        <div 
          className={`mobile-nav-item ${currentPage === 'skills' ? 'active' : ''}`}
          onClick={() => handleNavClick('skills')}
        >
          Skills & Education
        </div>
        <div 
          className={`mobile-nav-item ${currentPage === 'achievements' ? 'active' : ''}`}
          onClick={() => handleNavClick('achievements')}
        >
          Achievements & Hobbies
        </div>
        <div 
          className={`mobile-nav-item ${currentPage === 'contact' ? 'active' : ''}`}
          onClick={() => handleNavClick('contact')}
        >
          Contact
        </div>
      </nav>
    </>
  );
};

export default Navigation;