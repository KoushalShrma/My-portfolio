import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import SkillsEducationPage from './components/SkillsEducationPage';
import AchievementsHobbiesPage from './components/AchievementsHobbiesPage';
import ContactPage from './components/ContactPage';
import Navigation from './components/Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullscreen(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'skills':
        return <SkillsEducationPage />;
      case 'achievements':
        return <AchievementsHobbiesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`app ${isFullscreen ? 'fullscreen' : ''}`}>
      <header>
        <div className="top-left">Projects</div>
        <div className="vertical-text">Call me Koushal</div>
        <div className="top-right">
          <button className="play-button">Play: Code, Build, Deploy</button>
        </div>
      </header>

      <div className="fullscreen-indicator">
        To exit full screen, press and hold <kbd>Esc</kbd>
      </div>

      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main>
        {renderPage()}
      </main>

      <footer>
        <div className="bottom-right">Indore, IN</div>
      </footer>
    </div>
  );
}

export default App;