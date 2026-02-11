import React from 'react';
import { motion } from 'framer-motion';

const LLM_COMPANIES = [
  { name: 'Claude', color: 'from-orange-400 to-amber-500' },
  { name: 'Gemini', color: 'from-blue-400 to-indigo-500' },
  { name: 'OpenAI', color: 'from-green-400 to-emerald-500' },
  { name: 'Perplexity', color: 'from-purple-400 to-violet-500' },
  { name: 'Meta AI', color: 'from-cyan-400 to-blue-500' },
  { name: 'DeepSeek', color: 'from-pink-400 to-rose-500' },
  { name: 'Grok', color: 'from-yellow-400 to-orange-500' },
];

const LLMSlider: React.FC = () => {
  // Duplicate the array for seamless loop
  const duplicatedCompanies = [...LLM_COMPANIES, ...LLM_COMPANIES];

  return (
    <div className="mt-16 overflow-hidden">
      {/* Label */}
      <div className="text-center mb-8">
        <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium">
          Powered by Leading AI Models
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Animated Slider */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -100 * LLM_COMPANIES.length]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear"
            }
          }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0"
            >
              <div className={`
                px-8 py-4 rounded-xl
                bg-gradient-to-r ${company.color}
                shadow-lg shadow-black/30
                border border-white/20
                backdrop-blur-sm
                transform hover:scale-105 transition-transform duration-300
              `}>
                <span className="text-white font-bold text-lg whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtitle */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-400">
          Optimize your content for all major AI search engines
        </p>
      </div>
    </div>
  );
};

export default LLMSlider;
