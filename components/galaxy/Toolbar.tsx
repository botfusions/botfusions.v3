import React from 'react';
import { RefreshCcw, Camera, Maximize, MousePointer2 } from 'lucide-react';
import { Language, TRANSLATIONS } from './types';

interface ToolbarProps {
  onResetView: () => void;
  onScreenshot: () => void;
  onFullscreen: () => void;
  toggleControls: () => void;
  controlsOpen: boolean;
  language: Language;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onResetView,
  onScreenshot,
  onFullscreen,
  toggleControls,
  controlsOpen,
  language
}) => {
  const t = TRANSLATIONS[language].toolbar;

  return (
    <div className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-8 pointer-events-none z-20">

      {/* Left Actions - Icons Only */}
      <div className="flex gap-4 pointer-events-auto">
        <button
          onClick={onResetView}
          title={t.resetView}
          className="bg-glass border border-glassBorder p-3 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors group"
        >
          <RefreshCcw size={20} className="group-hover:-rotate-180 transition-transform duration-500" />
        </button>
        <button
          onClick={onScreenshot}
          title={t.screenshot}
          className="bg-glass border border-glassBorder p-3 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          <Camera size={20} />
        </button>
        <button
          onClick={onFullscreen}
          title={t.fullscreen}
          className="bg-glass border border-glassBorder p-3 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          <Maximize size={20} />
        </button>
      </div>

      {/* Center Info - Removed for cleaner view */}
      <div className="pointer-events-auto">
        {/* Distance info removed as requested */}
      </div>

      {/* Right Controls Toggle (if closed) */}
      <div className="pointer-events-auto flex justify-end">
         {!controlsOpen && (
             <button
               onClick={toggleControls}
               title={t.openControls}
               className="bg-glass border border-glassBorder p-3 rounded-full text-white hover:bg-white/10 transition-colors"
             >
                 <MousePointer2 size={20} />
             </button>
         )}
      </div>

    </div>
  );
};
