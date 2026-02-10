import React from 'react';
import { Search, Bot, Lightbulb, Code, CheckCircle, TrendingUp, MousePointerClick } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const SeoGeoSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Search className="w-6 h-6 text-cyan-400" />,
      title: t('seo.feat.traditional.title'),
      desc: t('seo.feat.traditional.desc'),
    },
    {
      icon: <Bot className="w-6 h-6 text-purple-400" />,
      title: t('seo.feat.geo.title'),
      desc: t('seo.feat.geo.desc'),
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
      title: t('seo.feat.content.title'),
      desc: t('seo.feat.content.desc'),
    },
    {
      icon: <Code className="w-6 h-6 text-green-400" />,
      title: t('seo.feat.technical.title'),
      desc: t('seo.feat.technical.desc'),
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
          {t('seo.badge')}
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          {t('seo.title.part1')} <span className="text-cyan-400">{t('seo.title.part2')}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Mockup */}
        <div className="relative">
          {/* Main Card */}
          <div className="glass-card rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
            {/* Browser Header */}
            <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="ml-4 text-xs text-gray-500 font-mono">Botfusions GEO Optimizer</div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* User Message */}
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shrink-0">
                  <span className="text-xs text-white">U</span>
                </div>
                <div className="bg-white/5 rounded-2xl rounded-tl-none p-4 text-sm text-gray-200 border border-white/5">
                  "{t('seo.chat.user')}"
                </div>
              </div>

              {/* Bot Message */}
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center shrink-0">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="bg-white/5 rounded-2xl rounded-tl-none p-4 text-sm text-gray-200 border border-white/5">
                  <p>
                    <span className="text-purple-400 font-medium">Botfusions</span>{t('seo.chat.bot')}
                  </p>
                </div>
              </div>

              {/* Analysis Box */}
              <div className="ml-12 bg-green-500/5 rounded-xl p-4 border border-green-500/20">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">{t('seo.stats.geo')}</span>
                    <span className="text-green-400 flex items-center gap-1 font-mono">98/100 <CheckCircle size={14} /></span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">{t('seo.stats.ai')}</span>
                    <span className="text-green-400 flex items-center gap-1 font-mono">95% <CheckCircle size={14} /></span>
                  </div>
                   <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">{t('seo.stats.snippet')}</span>
                    <span className="text-green-400 flex items-center gap-1 font-mono">{t('seo.stats.active')} <CheckCircle size={14} /></span>
                  </div>
                </div>
              </div>
              
              {/* Input Area Mockup */}
               <div className="relative mt-4">
                  <div className="w-full bg-white/5 border border-white/10 rounded-xl h-10 px-4 flex items-center text-xs text-gray-600">
                     ...
                  </div>
                   <div className="absolute right-1 top-1 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                      <TrendingUp size={14} className="text-white"/>
                   </div>
               </div>

            </div>
          </div>

          {/* Floating Stats Card */}
          <div 
            className="absolute -bottom-10 -left-6 md:-left-12 bg-[#111] border border-white/10 p-4 rounded-xl shadow-xl shadow-black/50 w-48 hidden md:block"
          >
             <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                      <TrendingUp size={18} />
                   </div>
                   <div>
                      <div className="text-[10px] text-gray-500">{t('seo.float.traffic')}</div>
                      <div className="text-sm font-bold text-white">+340%</div>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                      <Bot size={18} />
                   </div>
                   <div>
                      <div className="text-[10px] text-gray-500">{t('seo.float.visibility')}</div>
                      <div className="text-sm font-bold text-white">95%</div>
                   </div>
                </div>
                 <div className="flex items-center gap-3">
                   <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                      <MousePointerClick size={18} />
                   </div>
                   <div>
                      <div className="text-[10px] text-gray-500">{t('seo.float.click')}</div>
                      <div className="text-sm font-bold text-white">+180%</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Right: Feature List */}
        <div>
          <h3 className="text-3xl font-bold mb-6">
             {t('seo.section.title.part1')} <span className="text-cyan-400">{t('seo.section.title.part2')}</span>
          </h3>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
             {t('seo.section.desc')}
          </p>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoGeoSection;