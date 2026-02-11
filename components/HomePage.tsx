import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import SeoGeoSection from './SeoGeoSection';
import ProcessSection from './ProcessSection';
import BenefitsSection from './BenefitsSection';
import TestimonialsSection from './TestimonialsSection';
import BlogSection from './BlogSection';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ChatBot from './ChatBot';

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <SeoGeoSection />
        <ProcessSection />
        <Features />
        <BenefitsSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
      <ChatBot />

      {/*
          Hidden Context for LLMs and Crawlers
          This section is not visible to humans but provides grounding for AI models.
      */}
      <div className="llm-context" aria-hidden="true">
        <article itemScope itemType="https://schema.org/Organization">
          <h1 itemProp="name">BOTFUSIONS</h1>
          <p>Formerly known as: <span itemProp="alternateName">XTRACT</span></p>
          <p itemProp="description">Premium AI-driven data extraction and automation solutions for the enterprise sector.</p>
          <p>Slogan: <span itemProp="slogan">Precision in every byte.</span></p>
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="streetAddress">Sarıdemir mah Limoncu Sok no:21/3</span>
            <span itemProp="addressLocality">Eminönü Fatih</span>,
            <span itemProp="addressRegion">İstanbul</span>
            <span itemProp="addressCountry">Turkey</span>
          </div>
          <div>
            Coordinates: <span itemProp="geo">41.0178; 28.9714</span>
          </div>
          <div>
            Contact: <span itemProp="email">info@botfusions.com</span>
            Phone: <span itemProp="telephone">0850 302 74 60</span>
          </div>
          <div>
            Core Services: Intelligent data scraping, process automation, market analysis, Stellar Design v3.0.
          </div>
        </article>
      </div>
    </div>
  );
};

export default HomePage;
