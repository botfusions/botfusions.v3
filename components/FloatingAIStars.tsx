import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AI_COMPANIES = [
  'Claude',
  'Gemini 3',
  'OpenAI',
  'Perplexity',
  'Meta AI',
  'DeepSeek',
  'Grok'
];

interface Star {
  id: number;
  company: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
  size: number;
  tailLength: number;
}

const FloatingAIStars: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate random stars
    const generatedStars: Star[] = AI_COMPANIES.map((company, index) => ({
      id: index,
      company,
      x: Math.random() * 90 + 5, // 5% to 95% from left
      y: Math.random() * 80 + 10, // 10% to 90% from top
      duration: Math.random() * 20 + 15, // 15-35 seconds
      delay: Math.random() * 5, // 0-5 seconds delay
      size: Math.random() * 0.3 + 0.8, // 0.8-1.1 scale
      tailLength: Math.random() * 30 + 40 // 40-70px tail
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          initial={{
            x: `${star.x}vw`,
            y: `${star.y}vh`,
            opacity: 0
          }}
          animate={{
            x: [
              `${star.x}vw`,
              `${star.x + (Math.random() * 20 - 10)}vw`,
              `${star.x + (Math.random() * 30 - 15)}vw`,
              `${star.x}vw`
            ],
            y: [
              `${star.y}vh`,
              `${star.y + (Math.random() * 15 - 7)}vh`,
              `${star.y + (Math.random() * 20 - 10)}vh`,
              `${star.y}vh`
            ],
            opacity: [0, 0.9, 0.7, 0.9, 0],
            rotate: [0, 10, -5, 15, 0]
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            scale: star.size
          }}
        >
          {/* Comet tail */}
          <div className="relative">
            {/* Glowing tail effect */}
            <div
              className="absolute top-1/2 right-full h-[2px] bg-gradient-to-l from-yellow-400/60 via-yellow-500/40 to-transparent blur-sm"
              style={{
                width: `${star.tailLength}px`,
                transform: 'translateY(-50%)'
              }}
            />
            <div
              className="absolute top-1/2 right-full h-[1px] bg-gradient-to-l from-yellow-300/80 via-yellow-400/50 to-transparent"
              style={{
                width: `${star.tailLength}px`,
                transform: 'translateY(-50%)'
              }}
            />

            {/* Star body with company name */}
            <div className="relative flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 px-3 py-1.5 rounded-full shadow-lg">
              {/* Sparkle effect */}
              <div className="absolute -inset-1 bg-yellow-400/20 rounded-full blur-md" />

              {/* Star icon */}
              <svg
                className="w-4 h-4 text-yellow-900 relative z-10"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              {/* Company name */}
              <span className="text-sm font-bold text-black relative z-10 whitespace-nowrap">
                {star.company}
              </span>
            </div>

            {/* Sparkles around the star */}
            <motion.div
              className="absolute -top-1 -right-1 w-1 h-1 bg-yellow-300 rounded-full"
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: star.delay
              }}
            />
            <motion.div
              className="absolute -bottom-1 -left-1 w-1 h-1 bg-yellow-300 rounded-full"
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: star.delay + 0.5
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingAIStars;
