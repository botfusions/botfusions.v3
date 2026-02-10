import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      quote: t('testi.item1.quote'),
      name: t('testi.item1.name'),
      role: t('testi.item1.role'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      quote: t('testi.item2.quote'),
      name: t('testi.item2.name'),
      role: t('testi.item2.role'),
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    }
  ];

  return (
    <section className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium mb-6">
          {t('testi.badge')}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
          {t('testi.title')}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          {t('testi.subtitle')}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((item) => (
          <div 
            key={item.id} 
            className="glass-card p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-purple-500/30 transition-colors duration-300"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={18} fill="currentColor" className="text-white" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              "{item.quote}"
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover border border-white/10"
              />
              <div>
                <h4 className="text-white font-bold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;