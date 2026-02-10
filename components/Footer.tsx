import React, { useState, FormEvent } from 'react';
import { Zap, Twitter, Linkedin, Instagram, Facebook, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import emailjs from '@emailjs/browser';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setSubmitStatus('error');
      setMessage('Please enter your email');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitStatus('error');
      setMessage('Please enter a valid email');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      await emailjs.send(
        serviceId,
        templateId,
        {
          subscriber_email: email,
          type: 'newsletter_subscription',
          to_email: 'info@botfusions.com'
        },
        publicKey
      );

      setSubmitStatus('success');
      setMessage('Successfully subscribed!');
      setEmail('');

      setTimeout(() => {
        setSubmitStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
      setMessage('Subscription failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-black pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        
        {/* Left: Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <a href="#" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center gap-2 group">
             <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center">
                <Zap size={20} fill="currentColor" />
             </div>
             <span className="text-xl font-bold tracking-tight text-white uppercase">Botfusions</span>
          </a>
          <p className="text-gray-400 text-sm max-w-xs">
            {t('footer.slogan')}
          </p>

          <form onSubmit={handleSubscribe} className="w-full max-w-xs mt-2">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                placeholder="name@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-1 top-1 bottom-1 bg-[#814AC8] hover:bg-[#6d3ea8] text-white text-xs px-3 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '...' : t('footer.subscribe')}
              </button>
            </div>
            {submitStatus === 'success' && (
              <div className="flex items-center gap-1 mt-2 text-green-400 text-xs">
                <CheckCircle size={12} />
                <span>{message}</span>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="flex items-center gap-1 mt-2 text-red-400 text-xs">
                <AlertCircle size={12} />
                <span>{message}</span>
              </div>
            )}
          </form>
        </div>

        {/* Right: Links */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
           <div>
              <h4 className="text-lg font-medium mb-4">{t('footer.links')}</h4>
              <ul className="flex flex-col gap-2 text-sm text-gray-400">
                 <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-white transition-colors">{t('hero.cta.services')}</a></li>
                 <li><a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="hover:text-white transition-colors">Process</a></li>
                 <li><a href="#benefits" onClick={(e) => scrollToSection(e, 'benefits')} className="hover:text-white transition-colors">Benefits</a></li>
              </ul>
           </div>
           
           <div>
              <h4 className="text-lg font-medium mb-4">{t('footer.pages')}</h4>
              <ul className="flex flex-col gap-2 text-sm text-gray-400">
                 <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-white transition-colors">{t('nav.home')}</a></li>
                 <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white transition-colors">{t('nav.about')}</a></li>
                 <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white transition-colors">{t('nav.contact')}</a></li>
              </ul>
           </div>

           <div>
              <h4 className="text-lg font-medium mb-4">{t('footer.socials')}</h4>
              <ul className="flex flex-col gap-2 text-sm text-gray-400">
                 <li>
                   <a href="https://www.instagram.com/botfusions/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                     <Instagram size={14}/> Instagram
                   </a>
                 </li>
                 <li>
                   <a href="https://www.facebook.com/botfusions?locale=tr_TR" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                     <Facebook size={14}/> Facebook
                   </a>
                 </li>
                 <li>
                   <a href="https://www.linkedin.com/in/ömer-cenk-tokgöz-0918ab373" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                     <Linkedin size={14}/> Linkedin
                   </a>
                 </li>
                 <li>
                   <a href="https://x.com/cenktk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                     <Twitter size={14}/> Twitter
                   </a>
                 </li>
              </ul>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
         <p>{t('footer.rights')}</p>
         <p>{t('footer.crafted')}</p>
      </div>
    </footer>
  );
};

export default Footer;