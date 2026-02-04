import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

// Cyberpunk Graphic 1: Data Trends
const TrendGraphic = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500">
    <defs>
      <linearGradient id="trendGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
      </linearGradient>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    {/* Bars */}
    <rect x="20" y="60" width="10" height="40" fill="#333" />
    <rect x="40" y="40" width="10" height="60" fill="#444" />
    <rect x="60" y="55" width="10" height="45" fill="#333" />
    <rect x="80" y="25" width="10" height="75" fill="#555" />
    <rect x="100" y="45" width="10" height="55" fill="#444" />
    
    {/* Line Chart */}
    <path d="M10 90 L 30 70 L 50 85 L 85 35 L 120 50 L 160 20 L 190 40" fill="none" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
    <path d="M10 90 L 30 70 L 50 85 L 85 35 L 120 50 L 160 20 L 190 40 V 120 H 10 Z" fill="url(#trendGrad)" stroke="none" />
    
    {/* Data Points */}
    <circle cx="85" cy="35" r="3" fill="#fff" />
    <circle cx="160" cy="20" r="3" fill="#fff" />
  </svg>
);

// Cyberpunk Graphic 2: Chip / Processing
const ChipGraphic = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500">
     <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    {/* Circuit Lines */}
    <path d="M20 60 H 60" stroke="#ec4899" strokeWidth="2" strokeOpacity="0.3" />
    <path d="M140 60 H 180" stroke="#ec4899" strokeWidth="2" strokeOpacity="0.3" />
    <path d="M100 20 V 40" stroke="#ec4899" strokeWidth="2" strokeOpacity="0.3" />
    <path d="M100 80 V 100" stroke="#ec4899" strokeWidth="2" strokeOpacity="0.3" />
    
    {/* Main Chip */}
    <rect x="60" y="30" width="80" height="60" rx="4" fill="#1a1a1a" stroke="#ec4899" strokeWidth="2" />
    <rect x="70" y="40" width="60" height="40" fill="#ec4899" fillOpacity="0.1" />
    
    {/* Core */}
    <rect x="90" y="50" width="20" height="20" fill="#ec4899" filter="url(#glow)" />
    
    {/* Dynamic Element */}
    <circle cx="100" cy="60" r="4" fill="#fff">
      <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

// Cyberpunk Graphic 3: Security Shield
const SecurityGraphic = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500">
    {/* Hex Grid Background */}
    <path d="M20 20 L30 10 L40 20 L30 30 Z" fill="none" stroke="#ffffff" strokeOpacity="0.1" />
    <path d="M160 80 L170 70 L180 80 L170 90 Z" fill="none" stroke="#ffffff" strokeOpacity="0.1" />
    
    {/* Shield Shape */}
    <path d="M100 20 C 100 20, 60 30, 60 50 C 60 90, 100 110, 100 110 C 100 110, 140 90, 140 50 C 140 30, 100 20, 100 20 Z" 
      fill="#111" stroke="#fff" strokeWidth="2" strokeDasharray="4 2" />
    
    {/* Lock Icon */}
    <rect x="90" y="55" width="20" height="15" rx="2" fill="#fff" />
    <path d="M93 55 V 48 A 7 7 0 0 1 107 48 V 55" fill="none" stroke="#fff" strokeWidth="2" />
    
    {/* Scanning Line */}
    <rect x="50" y="0" width="100" height="2" fill="#fff" opacity="0.5">
       <animate attributeName="y" values="20;110;20" dur="3s" repeatCount="indefinite" />
       <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
    </rect>
  </svg>
);

const BlogSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    // Blog verilerini JSON'dan yükle
    fetch('/data/blogs.json')
      .then(res => res.json())
      .then(data => {
        const postsWithGraphics = data.map((post: any) => ({
          ...post,
          graphic: post.graphic === 'trend' ? <TrendGraphic /> :
                   post.graphic === 'chip' ? <ChipGraphic /> :
                   <SecurityGraphic />,
          tag: post.tag[language],
          date: post.date[language],
          title: post.title[language],
          desc: post.desc[language]
        }));
        setPosts(postsWithGraphics);
      })
      .catch(err => console.error('Blog yüklenemedi:', err));
  }, [language]);

  return (
    <section id="blog" className="py-24 px-6 relative z-10 max-w-7xl mx-auto bg-black">
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium mb-6">
            {t('nav.blog')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {t('blog.title.prefix')} <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">{t('blog.title.suffix')}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('blog.subtitle')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              // Fixed: Removed overflow-hidden from the main card wrapper that might cause border clipping issues.
              // Used 'group' for hover states and 'relative' for positioning.
              className={`
                relative rounded-2xl bg-[#0a0a0a] border border-white/10
                transition-all duration-300 group
                ${post.borderColor}
                hover:-translate-y-2
              `}
            >
              {/* Image / Graphic Area */}
              <div className={`h-48 w-full bg-gradient-to-b ${post.gradient} relative flex items-center justify-center rounded-t-2xl border-b border-white/5 overflow-hidden`}>
                {/* Cyberpunk Grid Background Overlay */}
                <div className="absolute inset-0 opacity-10" 
                     style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
                </div>
                
                {/* Graphic Container */}
                <div className="w-full h-full p-8 relative z-10">
                  {post.graphic}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="flex gap-3 mb-4 items-center">
                  <span className={`text-xs font-bold uppercase tracking-wider ${post.tagColor}`}>
                    {post.tag}
                  </span>
                  <span className="text-xs text-gray-500">
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-4 leading-snug text-white group-hover:text-purple-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {post.desc}
                </p>
                
                <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text group-hover:opacity-80 transition-opacity">
                  {t('blog.readMore')}
                  <ArrowRight size={16} className="text-pink-500" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;