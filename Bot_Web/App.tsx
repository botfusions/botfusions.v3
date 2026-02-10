import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import GalaxyPage from './components/galaxy/GalaxyPage';
import BlogDetailPage from './components/BlogDetailPage';
import { LanguageProvider } from './components/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<GalaxyPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;