import React from 'react';
import { Zap, Handshake, Clock, DollarSign, PieChart, BarChart3 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const BenefitsSection: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: t('benefits.item1.title'),
      desc: t('benefits.item1.desc'),
    },
    {
      icon: <Handshake className="w-6 h-6 text-white" />,
      title: t('benefits.item2.title'),
      desc: t('benefits.item2.desc'),
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: t('benefits.item3.title'),
      desc: t('benefits.item3.desc'),
    },
    {
      icon: <DollarSign className="w-6 h-6 text-white" />,
      title: t('benefits.item4.title'),
      desc: t('benefits.item4.desc'),
    },
    {
      icon: <PieChart className="w-6 h-6 text-white" />,
      title: t('benefits.item5.title'),
      desc: t('benefits.item5.desc'),
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: t('benefits.item6.title'),
      desc: t('benefits.item6.desc'),
    },
  ];

  return (
    <section id="benefits" className="py-24 px-6 relative z-10 max-w-7xl mx-auto bg-black">
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium mb-6">
          {t('benefits.badge')}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
          {t('benefits.title')}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          {t('benefits.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-start text-left group">
            <div className="mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
              {benefit.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;