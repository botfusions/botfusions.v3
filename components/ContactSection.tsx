import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name is too long (max 100 characters)';
    }

    // Email validation - strengthened
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    } else if (formData.email.includes('\n') || formData.email.includes('\r')) {
      newErrors.email = 'Invalid email format';
    } else if (formData.email.length > 254) {
      newErrors.email = 'Email is too long';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 5000) {
      newErrors.message = 'Message is too long (max 5000 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Rate limiting: 1 submission per 60 seconds (localStorage-based)
    const lastSubmitTime = parseInt(localStorage.getItem('contact_last_submit') || '0');
    const now = Date.now();
    if (now - lastSubmitTime < 60000) {
      setSubmitStatus('error');
      setSubmitMessage(
        language === 'tr'
          ? 'Lütfen 60 saniye bekleyin.'
          : 'Please wait 60 seconds before submitting again.'
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - get these from https://www.emailjs.com/
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'info@botfusions.com'
        },
        publicKey
      );

      setSubmitStatus('success');
      setSubmitMessage('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      localStorage.setItem('contact_last_submit', now.toString());

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      if (import.meta.env.MODE === 'development') {
        console.error('Email send error:', error);
      }
      setSubmitStatus('error');
      setSubmitMessage('Failed to send message. Please try again or email us directly at info@botfusions.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Info */}
        <div>
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium mb-6">
            {t('contact.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            {t('contact.title')}
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            {t('contact.desc')}
          </p>

          <div className="space-y-8">
            {/* Clickable Email - Added target="_blank" to bypass browser/iframe restrictions */}
            <a 
              href="mailto:info@botfusions.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group hover:opacity-80 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">{t('contact.info.email')}</h4>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors">info@botfusions.com</p>
              </div>
            </a>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">{t('contact.info.phone')}</h4>
                <p className="text-gray-400">0850 302 74 60</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">{t('contact.info.address')}</h4>
                <p className="text-gray-400">Sarıdemir mah Limoncu Sok no:21/3 Eminönü Fatih/İstanbul</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 bg-[#0a0a0a]">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                <p className="text-sm text-green-400">{submitMessage}</p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <AlertCircle size={20} className="text-red-400 flex-shrink-0" />
                <p className="text-sm text-red-400">{submitMessage}</p>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
                placeholder="..."
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <Loader size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  {t('contact.form.submit')}
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;