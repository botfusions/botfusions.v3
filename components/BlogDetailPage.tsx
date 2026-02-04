import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';

interface BlogPost {
  id: number;
  tag: { en: string; tr: string };
  date: { en: string; tr: string };
  title: { en: string; tr: string };
  desc: { en: string; tr: string };
  content: { en: string; tr: string };
  graphic: string;
  tagColor: string;
  borderColor: string;
  gradient: string;
}

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Validate ID parameter
    if (!id || !/^\d{1,5}$/.test(id)) {
      setPost(null);
      setLoading(false);
      return;
    }

    const numId = parseInt(id, 10);
    if (numId < 1 || numId > 9999) {
      setPost(null);
      setLoading(false);
      return;
    }

    fetch('/data/blogs.json')
      .then((res) => res.json())
      .then((data: BlogPost[]) => {
        const foundPost = data.find((p) => p.id === numId);
        if (foundPost) {
          setPost(foundPost);
        }
        setLoading(false);
      })
      .catch((error) => {
        if (import.meta.env.MODE === 'development') {
          console.error('Error loading blog post:', error);
        }
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">
          {language === 'tr' ? 'Yükleniyor...' : 'Loading...'}
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4">
        <div className="text-white text-xl">
          {language === 'tr' ? 'Blog yazısı bulunamadı' : 'Blog post not found'}
        </div>
        <Link
          to="/home"
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
        >
          {language === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate('/home')}
            className="group flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>{language === 'tr' ? 'Geri Dön' : 'Go Back'}</span>
          </button>

          {/* Article Header */}
          <article className="bg-glass/30 border border-glassBorder rounded-2xl p-8 md:p-12 backdrop-blur-md">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className={`inline-flex items-center gap-1.5 ${post.tagColor} text-sm font-medium`}>
                <Tag size={14} />
                {post.tag[language]}
              </span>
              <span className="inline-flex items-center gap-1.5 text-white/60 text-sm">
                <Calendar size={14} />
                {post.date[language]}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title[language]}
            </h1>

            {/* Description */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {post.desc[language]}
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8" />

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              {post.content[language].split('\n\n').map((paragraph, index) => {
                // Handle markdown-style bold text
                const isHeading = paragraph.startsWith('**') && paragraph.endsWith('**');

                if (isHeading) {
                  const headingText = paragraph.replace(/\*\*/g, '');
                  return (
                    <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                      {headingText}
                    </h2>
                  );
                }

                // Handle list items
                if (paragraph.startsWith('-')) {
                  const items = paragraph.split('\n').filter(item => item.trim());
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 text-white/80 mb-6">
                      {items.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          {item.replace(/^-\s*/, '').replace(/\*\*/g, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Handle numbered lists
                if (/^\d+\./.test(paragraph)) {
                  const items = paragraph.split('\n').filter(item => item.trim());
                  return (
                    <ol key={index} className="list-decimal list-inside space-y-3 text-white/80 mb-6">
                      {items.map((item, i) => {
                        const cleanedItem = item.replace(/^\d+\.\s*/, '').replace(/\*\*/g, '');
                        return (
                          <li key={i} className="leading-relaxed">
                            {cleanedItem}
                          </li>
                        );
                      })}
                    </ol>
                  );
                }

                // Regular paragraph
                return (
                  <p key={index} className="text-white/80 mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Footer CTA */}
            <div className="mt-12 pt-8 border-t border-glassBorder">
              <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {language === 'tr'
                    ? 'AI Otomasyon Çözümlerine İlgi Duyuyor musunuz?'
                    : 'Interested in AI Automation Solutions?'}
                </h3>
                <p className="text-white/70 mb-4">
                  {language === 'tr'
                    ? 'İşletmeniz için özel AI otomasyon çözümleri hakkında daha fazla bilgi edinin.'
                    : 'Learn more about custom AI automation solutions for your business.'}
                </p>
                <Link
                  to="/home#contact"
                  className="inline-flex items-center px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
                >
                  {language === 'tr' ? 'İletişime Geçin' : 'Get in Touch'}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
