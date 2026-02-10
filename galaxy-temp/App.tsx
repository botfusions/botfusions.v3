import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { GalaxyGenerator } from './components/GalaxyGenerator';
import { ControlsPanel } from './components/ControlsPanel';
import { Toolbar } from './components/Toolbar';
import { DEFAULT_PARAMETERS, GalaxyParameters, Language, TRANSLATIONS } from './types';

// Ayarları kaydetmek için anahtar
const STORAGE_KEY = 'galaxy_viewer_params_v1';

const App: React.FC = () => {
  // Dil Durumu (Varsayılan Türkçe)
  const [language, setLanguage] = useState<Language>('tr');

  // Başlangıçta kayıtlı ayar var mı diye kontrol et, yoksa varsayılanı kullan
  const [parameters, setParameters] = useState<GalaxyParameters>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_PARAMETERS;
    } catch (e) {
      console.warn('Ayarlar yüklenemedi:', e);
      return DEFAULT_PARAMETERS;
    }
  });

  const [controlsOpen, setControlsOpen] = useState(false);
  // Using any for the ref to avoid explicit three-stdlib import issues in some environments
  const controlsRef = useRef<any>(null);

  // Parametreler her değiştiğinde kaydet
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(parameters));
  }, [parameters]);

  const handleResetView = useCallback(() => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  }, []);

  const handleScreenshot = useCallback(() => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.download = 'galaxy-view.png';
      link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      link.click();
    }
  }, []);

  const handleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  const t = TRANSLATIONS[language];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden selection:bg-none">
      
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 8, 16], fov: 45 }} // Daha uzak, daha sinematik ve bütünsel bir açı
          gl={{ preserveDrawingBuffer: true, antialias: true }}
          dpr={[1, 2]} // Support high-DPI screens
        >
          <color attach="background" args={['#050505']} />
          <OrbitControls 
            makeDefault
            ref={controlsRef} 
            enableDamping={true} 
            dampingFactor={0.05}
            minDistance={0.1}
            maxDistance={50}
            rotateSpeed={0.5}
            zoomSpeed={0.8}
            target={[0, 0, 0]}
          />
          <GalaxyGenerator parameters={parameters} />
          
          {/* Ambient stars background */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      {/* Brand Logo - Top Left */}
      <div className="absolute top-6 left-8 z-50 pointer-events-none select-none">
         <h2 className="text-2xl md:text-3xl font-bold text-[#FFE8A3] drop-shadow-[0_0_15px_rgba(255,215,130,0.4)] tracking-tight font-sans">
            Botfusions
         </h2>
      </div>

      {/* Language Switcher - Top Right */}
      <div className="absolute top-6 right-8 z-50">
        <button 
          onClick={toggleLanguage}
          className="bg-glass/50 hover:bg-glass border border-glassBorder text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider transition-all backdrop-blur-sm"
        >
          {language === 'tr' ? 'EN' : 'TR'}
        </button>
      </div>

      {/* Center Tagline Text */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-full max-w-6xl px-8 text-center pointer-events-none">
        <div className="flex flex-col items-center transition-transform duration-700 ease-out cursor-default pointer-events-auto hover:scale-105 group">
          <h1 className="font-sans text-3xl md:text-6xl font-bold text-[#FFE8A3] drop-shadow-[0_0_20px_rgba(255,215,130,0.25)] leading-[1.1] tracking-tight">
            {t.tagline}
          </h1>
          <p className="font-sans text-xl md:text-3xl font-normal text-[#FFE8A3]/80 mt-2 md:mt-4 leading-tight drop-shadow-[0_0_10px_rgba(255,215,130,0.15)]">
            {t.subTagline}
          </p>
        </div>
      </div>

      {/* UI Layers */}
      
      <ControlsPanel 
        parameters={parameters} 
        setParameters={setParameters} 
        isOpen={controlsOpen}
        onClose={() => setControlsOpen(false)}
        language={language}
      />

      <Toolbar 
        onResetView={handleResetView}
        onScreenshot={handleScreenshot}
        onFullscreen={handleFullscreen}
        toggleControls={() => setControlsOpen(true)}
        controlsOpen={controlsOpen}
        language={language}
      />
      
    </div>
  );
};

export default App;