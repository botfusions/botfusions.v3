import React from 'react';
import { Check, Clock, DollarSign, Users, BarChart3, Image as ImageIcon, Send, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      
      {/* 1. Workflow Automation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
        {/* Mockup Card */}
        <div 
          className="glass-card p-6 md:p-8 rounded-3xl w-full max-w-lg mx-auto"
        >
          <div className="bg-black/40 border border-white/10 rounded-xl overflow-hidden">
             <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5">
                <div className="flex gap-4 text-xs font-medium">
                   <span className="px-3 py-1 bg-white/10 rounded-md text-white">All Tasks</span>
                   <span className="text-gray-500 px-3 py-1">Waiting for approval</span>
                </div>
             </div>
             <div className="p-2 flex flex-col gap-2">
                {[
                  { title: t('feat.card.payroll'), sub: "Due on 2nd July", icon: <DollarSign size={14}/> },
                  { title: t('feat.card.tracking'), sub: "2 days ago", icon: <Users size={14}/> },
                  { title: t('feat.card.social'), sub: "Cancelled by user", icon: <ImageIcon size={14}/>, dim: true },
                ].map((item, i) => (
                   <div key={i} className={`flex items-center justify-between p-3 rounded-lg border border-white/5 ${item.dim ? 'opacity-50' : 'bg-white/5'}`}>
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-gray-400">
                            {item.icon}
                         </div>
                         <div>
                            <p className="text-sm font-medium text-gray-200">{item.title}</p>
                            <p className="text-xs text-gray-500">{item.sub}</p>
                         </div>
                      </div>
                      {!item.dim && <div className="w-4 h-4 rounded-full border border-purple-500 flex items-center justify-center"><div className="w-2 h-2 bg-purple-500 rounded-full"></div></div>}
                   </div>
                ))}
             </div>
          </div>
        </div>

        {/* Text Content */}
        <div>
           <div className="inline-block px-3 py-1 rounded-md bg-[#814AC8]/20 text-[#bf8cf5] text-xs font-bold mb-4 border border-[#814AC8]/30">
              {t('feat.workflow.badge')}
           </div>
           <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('feat.workflow.title')}</h2>
           <p className="text-gray-400 text-lg mb-8 leading-relaxed">
             {t('feat.workflow.desc')}
           </p>
           <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium">{t('feat.tags.bot')}</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium">{t('feat.tags.auto')}</span>
           </div>
        </div>
      </div>

      {/* 2. AI Assistant */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
        {/* Text Content (Left on desktop) */}
        <div className="order-2 lg:order-1">
           <div className="inline-block px-3 py-1 rounded-md bg-[#814AC8]/20 text-[#bf8cf5] text-xs font-bold mb-4 border border-[#814AC8]/30">
              {t('feat.ai.badge')}
           </div>
           <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('feat.ai.title')}</h2>
           <p className="text-gray-400 text-lg mb-8 leading-relaxed">
             {t('feat.ai.desc')}
           </p>
           <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium">{t('feat.tags.sum')}</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium">{t('feat.tags.schedule')}</span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium">{t('feat.tags.more')}</span>
           </div>
        </div>

        {/* Mockup Card */}
        <div 
          className="order-1 lg:order-2 glass-card p-6 md:p-12 rounded-3xl w-full max-w-lg mx-auto flex flex-col items-center justify-center relative overflow-hidden"
        >
          {/* Removed glowing orb for full black background preference */}
          
          <div className="relative z-10 text-center w-full">
            <h3 className="text-xl font-bold mb-2">{t('feat.card.help')}</h3>
            <p className="text-xs text-gray-400 mb-8 max-w-[250px] mx-auto">{t('feat.card.help_sub')}</p>
            
            <div className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-left">
               <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <span className="w-1.5 h-4 bg-gray-500 block"></span>
               </div>
               <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-2">
                  <div className="flex gap-2">
                     <div className="p-1.5 bg-white/5 rounded hover:bg-white/10 cursor-pointer"><Sparkles size={14}/></div>
                     <div className="p-1.5 bg-white/5 rounded hover:bg-white/10 cursor-pointer"><ImageIcon size={14}/></div>
                  </div>
                  <Send size={14} className="text-purple-400"/>
               </div>
            </div>
            
            <div className="flex gap-2 mt-4 justify-center w-full overflow-hidden">
               <span className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-xs text-gray-400 whitespace-nowrap">Analyze</span>
               <span className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-xs text-gray-400 whitespace-nowrap">Generate Image</span>
               <span className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-xs text-gray-400 whitespace-nowrap">Research</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Sales & Marketing (Bottom Full Width-ish) */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
         <div 
            className="glass-card p-8 rounded-3xl w-full lg:w-1/2 h-[400px] relative overflow-hidden"
         >
            {/* Abstract UI for Sales */}
            <div className="absolute top-8 left-8 right-8 bottom-0 flex flex-col gap-4">
               <div className="flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-lg">
                  <span className="text-sm font-medium">E-mail Sending...</span>
                  <div className="flex -space-x-2">
                     {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-700 border border-black"></div>)}
                  </div>
               </div>
               <div className="flex gap-3">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30">LinkedIn</span>
                  <span className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded border border-white/5">Outreach</span>
               </div>
               
               {/* List of leads */}
               <div className="mt-4 space-y-3 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black/80 z-10 pointer-events-none"></div>
                  {[1, 2, 3].map((_, i) => (
                     <div key={i} className="p-3 bg-white/5 border border-white/5 rounded-lg flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                        <div className="flex-1">
                           <div className="h-2 w-20 bg-gray-600 rounded mb-1.5"></div>
                           <div className="h-1.5 w-12 bg-gray-700 rounded"></div>
                        </div>
                        <div className="text-green-400 text-xs bg-green-400/10 px-2 py-0.5 rounded">Verified</div>
                     </div>
                  ))}
               </div>
               
               {/* Progress bar at bottom */}
               <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                     <span className="text-purple-400">Draft</span>
                     <span>Schedule</span>
                     <span>Sent</span>
                  </div>
                  <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full w-1/3 bg-purple-500"></div>
                  </div>
               </div>
            </div>
         </div>

         <div 
            className="lg:w-1/2"
         >
            <div className="inline-block px-3 py-1 rounded-md bg-[#814AC8]/20 text-[#bf8cf5] text-xs font-bold mb-4 border border-[#814AC8]/30">
              {t('feat.sales.badge')}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('feat.sales.title')}</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {t('feat.sales.desc')}
            </p>
            <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium">{t('feat.tags.leads')}</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium">{t('feat.tags.content')}</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium">{t('feat.tags.post')}</span>
            </div>
         </div>
      </div>

    </section>
  );
};

export default Features;