import React from 'react';
import { Search, Sparkles } from 'lucide-react';

export const InfoOverlay: React.FC = () => {
  return (
    <>
      {/* Instructions - Left Side (Minimal) */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 hidden md:flex flex-col gap-4 z-10 pointer-events-none opacity-40 hover:opacity-100 transition-opacity duration-500">
          <div className="flex flex-col gap-1">
             <span className="text-[10px] uppercase tracking-wider text-white font-bold">Rotate</span>
             <span className="text-[10px] text-gray-400">Left Click + Drag</span>
          </div>
          <div className="flex flex-col gap-1">
             <span className="text-[10px] uppercase tracking-wider text-white font-bold">Pan</span>
             <span className="text-[10px] text-gray-400">Right Click + Drag</span>
          </div>
          <div className="flex flex-col gap-1">
             <span className="text-[10px] uppercase tracking-wider text-white font-bold">Zoom</span>
             <span className="text-[10px] text-gray-400">Scroll</span>
          </div>
      </div>

      {/* Search & Status - Top Right */}
      <div className="absolute top-6 right-8 flex items-center gap-4 z-20">
        <div className="relative group hidden sm:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={14} className="text-gray-400 group-focus-within:text-blue-400 transition-colors" />
            </div>
            <input 
                type="text" 
                placeholder="Find star system..." 
                className="bg-black/20 backdrop-blur-sm border border-white/10 text-gray-200 text-xs rounded-full focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-40 pl-9 p-2 placeholder-gray-600 transition-all hover:bg-black/40 focus:w-60 focus:bg-black/60 outline-none"
            />
        </div>
        
        {/* Decorative Element */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 backdrop-blur-md flex items-center justify-center group cursor-pointer hover:border-white/30 transition-all">
            <Sparkles className="text-blue-200 group-hover:text-white transition-colors group-hover:rotate-12 duration-500" size={20} />
        </div>
      </div>
    </>
  );
};