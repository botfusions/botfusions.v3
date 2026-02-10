import React from 'react';

const CompleteCoverageDashboard: React.FC = () => {
  // AI Engine icons
  const engines = [
    {
      name: 'ChatGPT',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
    },
    {
      name: 'Perplexity',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
    },
    {
      name: 'Gemini',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
    },
    {
      name: 'Claude',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
        </svg>
      ),
    },
    {
      name: 'Copilot',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      ),
    },
    {
      name: 'Meta AI',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
    },
    {
      name: 'AI Overviews',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.5"/>
        </svg>
      ),
    },
    {
      name: 'DeepSeek',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      ),
    },
  ];

  // Comparison bars
  const comparisons = [
    { name: 'Botfusions', score: 8, total: 8, color: 'from-cyan-400 to-blue-500', label: '8/8 Engines' },
    { name: 'Leading GEO Tool', score: 6, total: 8, color: 'from-red-400 to-red-600', label: '6/8' },
    { name: 'Popular AEO Platform', score: 3, total: 8, color: 'from-red-400 to-red-600', label: '3/8' },
  ];

  return (
    <div className="mt-24">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-4 tracking-wider">
          COMPLETE_COVERAGE
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Your Customers Don't Use <br className="hidden md:block"/>
          Just One <span className="text-cyan-400">AI Engine.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          While competitors monitor 2-3 platforms, Botfusions tracks your visibility across every major AI search engine.
        </p>
      </div>

      {/* Main Container */}
      <div className="glass-card rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] p-8 md:p-12">
        {/* Engine Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {engines.map((engine, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all group"
            >
              <div className="text-gray-400 group-hover:text-cyan-400 transition-colors mb-3">
                {engine.icon}
              </div>
              <span className="text-sm text-gray-300 font-medium text-center">{engine.name}</span>
            </div>
          ))}
        </div>

        {/* Comparison Bars */}
        <div className="space-y-6 mb-12">
          {comparisons.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className={`font-medium ${idx === 0 ? 'text-cyan-400' : 'text-gray-400'}`}>
                  {item.name}
                </span>
                <span className={`font-mono ${idx === 0 ? 'text-cyan-400' : 'text-gray-500'}`}>
                  {item.label}
                </span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${(item.score / item.total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-8 text-center pt-8 border-t border-white/10">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">8/8</div>
            <div className="text-xs text-gray-500 tracking-wider font-mono">MONITORED</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-xs text-gray-500 tracking-wider font-mono">COVERAGE</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">1</div>
            <div className="text-xs text-gray-500 tracking-wider font-mono">PLATFORM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteCoverageDashboard;
