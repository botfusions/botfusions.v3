import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import GalaxyPage from './components/galaxy/GalaxyPage';
import { LanguageProvider } from './components/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/galaxy" element={<GalaxyPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;