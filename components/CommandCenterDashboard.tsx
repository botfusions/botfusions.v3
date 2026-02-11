import React from 'react';
import { TrendingUp, AlertCircle } from 'lucide-react';

const CommandCenterDashboard: React.FC = () => {
  // Engine breakdown data with gradient colors
  const engines = [
    { name: 'ChatGPT', score: 8, color: 'from-emerald-400 to-teal-500', width: '80%' },
    { name: 'Claude', score: 7, color: 'from-blue-400 to-cyan-500', width: '70%' },
    { name: 'Perplexity', score: 8, color: 'from-indigo-400 to-purple-500', width: '80%' },
    { name: 'Gemini', score: 7, color: 'from-violet-400 to-fuchsia-500', width: '70%' },
    { name: 'DeepSeek', score: 7, color: 'from-cyan-400 to-blue-500', width: '70%' },
    { name: 'Copilot', score: 6, color: 'from-teal-400 to-emerald-500', width: '60%' },
    { name: 'Meta AI', score: 6, color: 'from-purple-400 to-indigo-500', width: '60%' },
    { name: 'SearchGPT', score: 5, color: 'from-amber-400 to-yellow-500', width: '50%' },
  ];

  // Apple-themed recent mentions
  const recentMentions = [
    { text: '"Best GEO tracking platform"', time: '12m', product: 'iPhone' },
    { text: '"Top AI SEO tools 2025"', time: '28m', product: 'MacBook' },
    { text: '"Enterprise AI visibility"', time: '42m', product: 'Vision Pro' },
  ];

  // Alert center
  const alerts = [
    { text: 'Visibility up 8% this week', type: 'success' },
    { text: 'New citation source detected', type: 'success' },
    { text: 'Schema update recommended', type: 'warning' },
  ];

  return (
    <div className="mt-24">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-4 tracking-wider">
          COMMAND_CENTER
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Your Command Center for <span className="text-cyan-400">AI Visibility</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          One unified dashboard to monitor, analyze, and optimize your presence across all major AI engines.
        </p>
      </div>

      {/* Main Dashboard */}
      <div className="glass-card rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
        {/* Browser Header */}
        <div className="bg-white/5 px-4 py-3 rounded-lg border border-white/5 flex items-center gap-2 mb-6">
          <div className="text-xs text-gray-500 font-mono">[Your Brand]</div>
          <div className="flex-1 flex justify-center gap-6 text-xs text-gray-500 font-mono">
            <span className="text-white">DASHBOARD</span>
            <span>ANALYTICS</span>
            <span>SETTINGS</span>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Visibility Score + Recent Mentions */}
          <div className="space-y-6">
            {/* Visibility Score */}
            <div className="space-y-4">
              <div className="text-xs text-gray-500 tracking-wider font-mono">VISIBILITY_SCORE</div>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-bold text-white">73</span>
                <span className="text-gray-500 text-xl">/100</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-green-400 font-mono">LIVE</span>
              </div>
            </div>

            {/* Apple-themed Recent Mentions */}
            <div className="space-y-4">
              <div className="text-xs text-gray-500 tracking-wider font-mono">RECENT_MENTIONS</div>
              {recentMentions.map((mention, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-cyan-500/30 transition-colors">
                  <div className="shrink-0">
                    {/* Apple Product Icons */}
                    {mention.product === 'iPhone' && (
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                        </svg>
                      </div>
                    )}
                    {mention.product === 'MacBook' && (
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"/>
                          <line x1="2" y1="20" x2="22" y2="20" strokeWidth="2"/>
                        </svg>
                      </div>
                    )}
                    {mention.product === 'Vision Pro' && (
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-700 to-pink-900 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M2 12C2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10S2 17.5 2 12z" strokeWidth="2"/>
                          <circle cx="9" cy="12" r="2" fill="currentColor"/>
                          <circle cx="15" cy="12" r="2" fill="currentColor"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-300 truncate">{mention.text}</p>
                    <p className="text-xs text-gray-600 mt-1 font-mono">{mention.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column - 7-Day Trend Graph */}
          <div className="lg:col-span-2 space-y-6">
            {/* Graph Header */}
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500 tracking-wider font-mono">7-DAY_TREND</div>
              <div className="text-xs text-green-400 font-mono">+7.4%</div>
            </div>

            {/* Graph */}
            <div className="h-64 relative">
              <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="50" x2="600" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                <line x1="0" y1="100" x2="600" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                <line x1="0" y1="150" x2="600" y2="150" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>

                {/* Gradient fill */}
                <defs>
                  <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: 'rgb(56, 189, 248)', stopOpacity: 0.3}} />
                    <stop offset="100%" style={{stopColor: 'rgb(56, 189, 248)', stopOpacity: 0}} />
                  </linearGradient>
                </defs>

                {/* Area under curve */}
                <path
                  d="M 0,120 L 100,140 L 200,110 L 300,100 L 400,115 L 500,85 L 600,60 L 600,200 L 0,200 Z"
                  fill="url(#graphGradient)"
                />

                {/* Main line - gradient cyan to blue */}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: 'rgb(34, 211, 238)'}} />
                    <stop offset="50%" style={{stopColor: 'rgb(59, 130, 246)'}} />
                    <stop offset="100%" style={{stopColor: 'rgb(96, 165, 250)'}} />
                  </linearGradient>
                </defs>
                <path
                  d="M 0,120 L 100,140 L 200,110 L 300,100 L 400,115 L 500,85 L 600,60"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Data points */}
                {[0, 100, 200, 300, 400, 500, 600].map((x, idx) => {
                  const y = [120, 140, 110, 100, 115, 85, 60][idx];
                  return (
                    <circle
                      key={idx}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="rgb(56, 189, 248)"
                      className="drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                    />
                  );
                })}
              </svg>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-600 font-mono px-2">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            {/* Engine Breakdown */}
            <div className="space-y-4">
              <div className="text-xs text-gray-500 tracking-wider font-mono">ENGINE_BREAKDOWN</div>
              <div className="grid grid-cols-2 gap-4">
                {engines.map((engine, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300 font-medium">{engine.name}</span>
                      <span className="text-white font-mono">{engine.score}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${engine.color} rounded-full transition-all duration-1000`}
                        style={{ width: engine.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alert Center */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs text-gray-500 tracking-wider font-mono">ALERT_CENTER</div>
              </div>
              <div className="space-y-3">
                {alerts.map((alert, idx) => (
                  <div key={idx} className="flex items-center justify-between group hover:bg-white/5 p-2 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${alert.type === 'success' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                      <span className="text-sm text-gray-300">{alert.text}</span>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 px-3 py-1 bg-white/10 rounded-md text-xs text-white hover:bg-white/20 transition-all">
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandCenterDashboard;
