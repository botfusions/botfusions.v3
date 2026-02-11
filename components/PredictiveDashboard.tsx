import React from 'react';
import { Sparkles, TrendingUp, CheckCircle } from 'lucide-react';

const PredictiveDashboard: React.FC = () => {
  // Execution log items
  const executionLog = [
    {
      type: 'user',
      label: 'USER_ASKS',
      text: '"Best project management tools"',
      icon: '👤',
    },
    {
      type: 'ai',
      label: 'AI_RESPONDS',
      text: 'Competitor A, B, C listed',
      icon: '🤖',
    },
    {
      type: 'pattern',
      label: 'PATTERN_DETECTED',
      text: '73% ask specific follow-up',
      icon: '🔍',
    },
    {
      type: 'prediction',
      label: 'PREDICTION',
      text: 'Query: "Best API integration?"',
      icon: '🎯',
    },
  ];

  return (
    <div className="mt-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Don't Just Track. <span className="text-emerald-400">Predict.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Our Digital Twin simulates 50,000+ journeys daily.
        </p>
      </div>

      {/* Main Dashboard */}
      <div className="glass-card rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
        {/* Browser Header */}
        <div className="bg-white/5 px-4 py-3 rounded-lg border border-white/5 flex items-center gap-2 mb-6">
          <div className="text-xs text-gray-500 font-mono">[Your Brand]</div>
          <div className="flex-1 flex justify-center text-xs text-gray-500 font-mono">
            <span className="text-white">SIMULATION_CONSOLE</span>
          </div>
          <div className="text-xs text-gray-600 font-mono">50,000+ journeys/day</div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left - Execution Log */}
          <div className="space-y-6">
            <div className="text-xs text-gray-500 tracking-wider font-mono">EXECUTION_LOG</div>

            <div className="space-y-4">
              {executionLog.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {/* Icon/Indicator */}
                  <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-lg ${
                    item.type === 'user' ? 'bg-gray-800/50 border border-gray-700' :
                    item.type === 'ai' ? 'bg-gray-800/50 border border-gray-700' :
                    item.type === 'pattern' ? 'bg-blue-500/10 border border-blue-500/30' :
                    'bg-blue-500/10 border border-blue-500/30'
                  }`}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 font-mono mb-1">{item.label}</div>
                    <div className="text-sm text-gray-300">{item.text}</div>
                  </div>
                </div>
              ))}

              {/* Opportunity Card */}
              <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-emerald-400 font-mono mb-1">OPPORTUNITY - High Impact</div>
                    <div className="text-sm text-white font-medium">[YOUR BRAND] RECOMMENDED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Live Prediction */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <div className="text-xs text-gray-500 tracking-wider font-mono">LIVE_PREDICTION</div>
            </div>

            {/* Confidence Score */}
            <div className="space-y-4">
              <div className="text-xs text-gray-500 tracking-wider font-mono">CONFIDENCE_SCORE</div>
              <div className="flex items-baseline gap-2">
                <span className="text-7xl font-bold text-white">87</span>
                <span className="text-emerald-400 text-2xl">%</span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-1000"
                  style={{ width: '87%' }}
                />
              </div>
            </div>

            {/* Recommendation Box */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/5 space-y-4">
              <div className="text-xs text-gray-500 tracking-wider font-mono">RECOMMENDATION</div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Create <span className="text-emerald-400 font-medium">"API Integration Guide"</span> to target decision phase.
              </p>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {/* Effort */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <div className="text-xs text-gray-500 tracking-wider font-mono mb-2">EFFORT</div>
                <div className="text-2xl font-bold text-white">2 Days</div>
              </div>

              {/* Impact */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <div className="text-xs text-gray-500 tracking-wider font-mono mb-2">IMPACT</div>
                <div className="text-2xl font-bold text-emerald-400 flex items-center gap-1">
                  +15%
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Apply
              </button>
              <button className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg font-medium transition-colors border border-white/10">
                Skip
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-xs text-gray-500 font-mono mb-1">SIMULATIONS_TODAY</div>
            <div className="text-2xl font-bold text-white font-mono">52,394</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 font-mono mb-1">OPPORTUNITIES_FOUND</div>
            <div className="text-2xl font-bold text-emerald-400 font-mono">127</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 font-mono mb-1">SUCCESS_RATE</div>
            <div className="text-2xl font-bold text-cyan-400 font-mono">91%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveDashboard;
