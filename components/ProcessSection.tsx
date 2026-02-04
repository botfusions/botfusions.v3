import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Settings, Zap, Repeat, FileCode, Check, Loader2, ArrowUp, Filter, MessageSquare, Cog } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const ProcessSection: React.FC = () => {
  const { t } = useLanguage();
  const [codeKey, setCodeKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeKey(prev => prev + 1);
    }, 5000); // Restart animation every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const codeLineVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const codeContainerVariants = {
    hidden: { opacity: 1 }, // Keep container visible so layout doesn't collapse
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="process" className="py-24 px-6 relative z-10 max-w-7xl mx-auto bg-black">
      
      {/* Header */}
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium mb-6">
          {t('process.badge')}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
          {t('process.title')}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg bg-white/5 p-2 rounded-lg inline-block">
          {t('process.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Step 1: Smart Analyzing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] min-h-[400px] flex flex-col"
        >
          <div className="mb-6">
             <span className="text-xs font-semibold text-gray-400 mb-2 block">{t('process.step1.step')}</span>
             <h3 className="text-2xl font-bold text-white mb-3">{t('process.step1.title')}</h3>
             <p className="text-gray-400 text-sm">{t('process.step1.desc')}</p>
          </div>

          <div className="flex-1 flex items-center justify-center relative mt-4">
             {/* Visual */}
             <div className="w-full bg-black/50 rounded-xl border border-white/5 p-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/10"></div>
                
                <div className="space-y-3">
                    {[
                        { icon: Shield, text: t('process.step1.list1'), delay: 0 },
                        { icon: Settings, text: t('process.step1.list2'), delay: 1 },
                        { icon: Zap, text: t('process.step1.list3'), delay: 2 },
                        { icon: Settings, text: t('process.step1.list4'), delay: 3 },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <item.icon size={14} />
                                {item.text}
                            </div>
                            <div className="w-4 h-4 rounded-full border border-purple-500/30 flex items-center justify-center">
                                <motion.div 
                                    animate={{ opacity: [0, 1, 1, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: item.delay, repeatDelay: 2 }}
                                    className="w-2 h-2 bg-purple-500 rounded-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                        <Loader2 size={12} />
                    </motion.div>
                    {t('process.step1.analyzing')}
                </div>
             </div>
          </div>
        </motion.div>

        {/* Step 2: AI Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] min-h-[400px] flex flex-col"
        >
          <div className="mb-6">
             <span className="text-xs font-semibold text-gray-400 mb-2 block">{t('process.step2.step')}</span>
             <h3 className="text-2xl font-bold text-white mb-3">{t('process.step2.title')}</h3>
             <p className="text-gray-400 text-sm">{t('process.step2.desc')}</p>
          </div>

          <div className="flex-1 flex items-center justify-center relative mt-4">
             {/* Code Visual */}
             <div className="w-full bg-[#111] rounded-xl border border-white/10 p-0 overflow-hidden font-mono text-xs shadow-2xl h-[260px]">
                <div className="bg-white/5 p-2 flex gap-1.5 border-b border-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                <motion.div 
                  key={codeKey}
                  className="p-4 text-gray-400 space-y-1"
                  variants={codeContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                    <motion.div variants={codeLineVariants} className="flex gap-2">
                        <FileCode size={14} className="text-purple-400" />
                        <span className="text-purple-400">class</span> AutomationTrigger:
                    </motion.div>
                    <motion.div variants={codeLineVariants} className="pl-4 text-blue-300">def __init__(self, threshold):</motion.div>
                    <motion.div variants={codeLineVariants} className="pl-8">self.threshold = threshold</motion.div>
                    <motion.div variants={codeLineVariants} className="pl-8">self.status = <span className="text-green-400">"active"</span></motion.div>
                    <motion.div variants={codeLineVariants} className="pl-4 mt-2 text-blue-300">def check_logs(self, value):</motion.div>
                    <motion.div variants={codeLineVariants} className="pl-8 text-gray-500"># automated check</motion.div>
                    <motion.div variants={codeLineVariants} className="pl-8">if value &gt; self.threshold:</motion.div>
                    <motion.div variants={codeLineVariants} className="pl-12 flex items-center">
                        return <span className="text-green-400 ml-1">"Triggered"</span>
                        <motion.span 
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="w-1.5 h-3 bg-purple-500 ml-1 block"
                        ></motion.span>
                    </motion.div>
                </motion.div>
             </div>
          </div>
        </motion.div>

        {/* Step 3: Seamless Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] min-h-[400px] flex flex-col"
        >
          <div className="mb-6">
             <span className="text-xs font-semibold text-gray-400 mb-2 block">{t('process.step3.step')}</span>
             <h3 className="text-2xl font-bold text-white mb-3">{t('process.step3.title')}</h3>
             <p className="text-gray-400 text-sm">{t('process.step3.desc')}</p>
          </div>

          <div className="flex-1 flex items-center justify-center relative mt-4">
             {/* Integration Visual */}
             <div className="flex items-center justify-between w-full max-w-[280px] relative">
                
                {/* Connector Line */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10"></div>
                
                {/* Moving Particle - Reduced opacity and made simple white */}
                <motion.div 
                    className="absolute top-1/2 left-0 w-8 h-[2px] bg-white/30 z-10"
                    style={{ translateY: '-50%' }}
                    animate={{ left: ['0%', '80%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Left Node */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full border border-purple-500/30 bg-purple-500/10 flex items-center justify-center">
                        <Zap className="relative z-10 text-white" size={24} />
                    </div>
                    <span className="text-xs text-gray-400">{t('process.step3.label1')}</span>
                </div>

                {/* Right Node */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                        <div className="w-8 h-2 bg-gray-600 rounded-sm mb-1"></div>
                        <div className="w-8 h-2 bg-gray-600 rounded-sm mb-1"></div>
                        <div className="w-5 h-2 bg-gray-600 rounded-sm"></div>
                    </div>
                    <span className="text-xs text-gray-400">{t('process.step3.label2')}</span>
                </div>

             </div>
          </div>
        </motion.div>

        {/* Step 4: Continuous Optimization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] min-h-[400px] flex flex-col"
        >
          <div className="mb-6">
             <span className="text-xs font-semibold text-gray-400 mb-2 block">{t('process.step4.step')}</span>
             <h3 className="text-2xl font-bold text-white mb-3">{t('process.step4.title')}</h3>
             <p className="text-gray-400 text-sm">{t('process.step4.desc')}</p>
          </div>

          <div className="flex-1 flex flex-col justify-center relative mt-4 space-y-4">
             {/* List Item 1 */}
             <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-lg text-gray-400">
                        <MessageSquare size={16} />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-white">{t('process.step4.item1.title')}</div>
                        <div className="text-[10px] text-gray-500">{t('process.step4.item1.desc')}</div>
                    </div>
                </div>
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="text-purple-500"
                >
                    <Loader2 size={16} />
                </motion.div>
             </div>

             {/* List Item 2 */}
             <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-lg text-gray-400">
                        <Cog size={16} />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-white">{t('process.step4.item2.title')}</div>
                        <div className="text-[10px] text-gray-500">{t('process.step4.item2.desc')}</div>
                    </div>
                </div>
                <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-green-400">
                    <motion.div
                        animate={{ y: [-2, 2, -2] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowUp size={12} />
                    </motion.div>
                </div>
             </div>

             {/* List Item 3 */}
             <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-lg text-gray-400">
                        <Filter size={16} />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-white">{t('process.step4.item3.title')}</div>
                        <div className="text-[10px] text-gray-500">{t('process.step4.item3.desc')}</div>
                    </div>
                </div>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                >
                    <Check size={16} className="text-purple-500" />
                </motion.div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProcessSection;