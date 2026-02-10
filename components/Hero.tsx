import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center max-w-7xl mx-auto z-10">
      
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
      >
        <span className="bg-[#814AC8] text-[10px] font-bold px-2 py-0.5 rounded text-white">{t('hero.new')}</span>
        <span className="text-xs md:text-sm text-gray-300">{t('hero.badge')}</span>
      </div>

      {/* Headline */}
      <h1
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1] max-w-5xl"
      >
        {t('hero.title.start')} <span className="text-[#df7afe]">{t('hero.title.end')}</span>
      </h1>

      {/* Subheadline */}
      <p
        className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
      >
        {t('hero.subtitle')}
      </p>

      {/* CTAs */}
      <div
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, 'contact')}
          className="group flex items-center gap-2 px-8 py-4 bg-[#814AC8] hover:bg-[#6d3ea8] text-white rounded-xl font-medium transition-all"
        >
          {t('hero.cta.touch')}
          <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
        <a
          href="#services"
          onClick={(e) => scrollToSection(e, 'services')}
          className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-all backdrop-blur-sm"
        >
          {t('hero.cta.services')}
        </a>
        <Link
          to="/"
          className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/30 text-white rounded-xl font-medium transition-all backdrop-blur-sm"
        >
          <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
          {t('hero.cta.galaxy')}
        </Link>
      </div>
    </section>
  );
};

export default Hero;