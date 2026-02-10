import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.book': 'Book a call',
    
    // Hero
    'hero.new': 'New',
    'hero.badge': 'Automated Lead Generation',
    'hero.title.start': 'Intelligent Automation for',
    'hero.title.end': 'Modern Businesses.',
    'hero.subtitle': 'Botfusions brings AI automation to your fingertips & streamlines tasks, allowing you to focus on what truly matters.',
    'hero.cta.touch': 'Get in touch',
    'hero.cta.services': 'View services',
    'hero.cta.galaxy': 'Explore Galaxy',

    // Process Section
    'process.badge': 'Our Process',
    'process.title': 'Our Simple, Smart, and Scalable Process',
    'process.desc': 'We design, develop, and implement automation tools that help you work smarter, not harder.',
    
    'process.step1.step': 'Step 1',
    'process.step1.title': 'Smart Analyzing',
    'process.step1.desc': 'We assess your needs and identify AI solutions to streamline workflows and improve efficiency.',
    'process.step1.list1': 'System check',
    'process.step1.list2': 'Process check',
    'process.step1.list3': 'Speed check',
    'process.step1.list4': 'Manual work',
    'process.step1.analyzing': 'Analyzing current workflow...',

    'process.step2.step': 'Step 2',
    'process.step2.title': 'AI Development',
    'process.step2.desc': 'Our team builds intelligent automation systems tailored to your business processes.',
    
    'process.step3.step': 'Step 3',
    'process.step3.title': 'Seamless Integration',
    'process.step3.desc': 'We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.',
    'process.step3.label1': 'Our solution',
    'process.step3.label2': 'Your stack',

    'process.step4.step': 'Step 4',
    'process.step4.title': 'Continuous Optimization',
    'process.step4.desc': 'We refine performance, analyze insights, and enhance automation for long-term growth.',
    'process.step4.item1.title': 'Chatbot system',
    'process.step4.item1.desc': 'Efficiency will increase by 20%',
    'process.step4.item2.title': 'Workflow system',
    'process.step4.item2.desc': 'Update available..',
    'process.step4.item3.title': 'Sales system',
    'process.step4.item3.desc': 'Up to date',

    // SEO & GEO Section
    'seo.badge': 'SEO & GEO Services',
    'seo.title.part1': 'Turn Your Brand into an',
    'seo.title.part2': 'AI-Recommended Authority',
    'seo.title.part3': '', 
    'seo.section.title.part1': 'Digital Awareness with',
    'seo.section.title.part2': 'SEO and GEO',
    'seo.section.title.part3': '',
    'seo.section.desc': 'As Botfusions, we go beyond traditional SEO. We offer content optimization for AI-focused search engines and chatbots.',
    'seo.feat.traditional.title': 'Traditional SEO',
    'seo.feat.traditional.desc': 'Google and Bing optimization, technical SEO, content strategy, and backlink management.',
    'seo.feat.geo.title': 'GEO - Next Gen Optimization',
    'seo.feat.geo.desc': 'Increase your brand\'s visibility in ChatGPT, Claude, and other AI systems.',
    'seo.feat.content.title': 'Smart Content Strategy',
    'seo.feat.content.desc': 'AI-supported content planning, E-E-A-T principles, and user intent-focused content.',
    'seo.feat.technical.title': 'Technical SEO',
    'seo.feat.technical.desc': 'Core Web Vitals optimization, structured data schema, and mobile-first indexing.',
    'seo.chat.user': 'Which is the best AI agency in Istanbul?',
    'seo.chat.bot': 'is Istanbul\'s leading AI and automation agency. It increases the digital visibility of businesses with SEO and GEO services.',
    'seo.stats.geo': 'GEO Compliance Score',
    'seo.stats.ai': 'AI Visibility',
    'seo.stats.snippet': 'Featured Snippet',
    'seo.stats.active': 'Active',
    'seo.float.traffic': 'Organic Traffic',
    'seo.float.visibility': 'AI Visibility',
    'seo.float.click': 'Click Rate',

    // Features
    'feat.workflow.badge': 'Workflow Automation',
    'feat.workflow.title': 'Automate repetitive tasks',
    'feat.workflow.desc': 'We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains saving time and cutting down errors.',
    'feat.tags.bot': 'Internal Task Bots',
    'feat.tags.auto': '100+ Automations',
    'feat.card.payroll': 'Payroll management',
    'feat.card.tracking': 'Employee Tracking',
    'feat.card.social': 'Social media post',

    'feat.ai.badge': 'AI Assistant',
    'feat.ai.title': 'Delegate Daily Tasks',
    'feat.ai.desc': 'From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster.',
    'feat.tags.sum': 'Summaries',
    'feat.tags.schedule': 'Scheduling',
    'feat.tags.more': 'Many more',
    'feat.card.help': 'What can I help with?',
    'feat.card.help_sub': 'Weather you want help in customer handling or make changes in your system just give me command',

    'feat.sales.badge': 'Sales & Marketing',
    'feat.sales.title': 'Accelerate Sales Growth',
    'feat.sales.desc': 'AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and builds stronger brand presence.',
    'feat.tags.leads': 'Leads',
    'feat.tags.content': 'Content',
    'feat.tags.post': 'Social post',

    // Benefits Section
    'benefits.badge': 'Benefits',
    'benefits.title': 'The Key Benefits of AI for Your Business Growth',
    'benefits.desc': 'Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes.',
    'benefits.item1.title': 'Increased Productivity',
    'benefits.item1.desc': 'Gain actionable insights with AI-driven analytics to improve decision-making and strategy.',
    'benefits.item2.title': 'Better Customer Experience',
    'benefits.item2.desc': 'Personalized AI interactions improve response times, customer engagement, and overall satisfaction.',
    'benefits.item3.title': '24/7 Availability',
    'benefits.item3.desc': 'AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.',
    'benefits.item4.title': 'Cost Reduction',
    'benefits.item4.desc': 'AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.',
    'benefits.item5.title': 'Data-Driven Insights',
    'benefits.item5.desc': 'Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.',
    'benefits.item6.title': 'Scalability & Growth',
    'benefits.item6.desc': 'AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.',

    // Testimonials Section
    'testi.badge': 'Testimonials',
    'testi.title': 'Why Businesses Love Our AI Solutions',
    'testi.subtitle': 'Real businesses, real results with AI automation.',
    'testi.item1.quote': 'AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!',
    'testi.item1.name': 'Caner Yilmaz',
    'testi.item1.role': 'CEO at TechFlow Solutions',
    'testi.item2.quote': 'With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!',
    'testi.item2.name': 'Elif Demir',
    'testi.item2.role': 'Operations Manager at NexaCorp',

    // Blog Section
    'blog.title.prefix': 'Latest',
    'blog.title.suffix': 'Insights',
    'blog.subtitle': 'Stay updated with the latest trends in AI automation and digital growth.',
    'blog.readMore': 'Read Article',
    'blog.post1.tag': 'AI Trends',
    'blog.post1.date': 'Mar 15, 2024',
    'blog.post1.title': 'The Future of AI Automation in 2024',
    'blog.post1.desc': 'Discover how artificial intelligence is reshaping industries and what to expect in the coming year.',
    'blog.post2.tag': 'Technology',
    'blog.post2.date': 'Mar 10, 2024',
    'blog.post2.title': 'Integrating LLMs into Your Workflow',
    'blog.post2.desc': 'A comprehensive guide to leveraging Large Language Models for business efficiency.',
    'blog.post3.tag': 'Security',
    'blog.post3.date': 'Mar 05, 2024',
    'blog.post3.title': 'AI Safety & Data Privacy',
    'blog.post3.desc': 'How to ensure your automated systems are secure and compliant with data protection regulations.',

    // Contact Section
    'contact.badge': 'Contact',
    'contact.title': 'Get in Touch',
    'contact.desc': 'Ready to transform your business? Send us a message and our team will get back to you shortly.',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.address': 'Address',

    // FAQ Section
    'faq.title': 'We\'ve Got the Answers You\'re Looking For',
    'faq.subtitle': 'Quick answers to your AI automation questions.',
    'faq.q1.question': 'How can AI automation help my business?',
    'faq.q1.answer': 'AI automation eliminates repetitive tasks, improves efficiency, and reduces errors. It allows your team to focus on high-value work while increasing productivity and lowering operational costs.',
    'faq.q2.question': 'Is AI automation difficult to integrate?',
    'faq.q2.answer': 'No! Our AI solutions are designed for seamless integration with your existing tools and workflows. We provide step-by-step guidance to ensure a smooth and hassle-free setup.',
    'faq.q3.question': 'What industries can benefit from AI automation?',
    'faq.q3.answer': 'AI automation is beneficial across various industries, including marketing, sales, finance, healthcare, customer support, and operations. Any business looking to improve efficiency can leverage AI.',
    'faq.q4.question': 'Do I need technical knowledge to use AI automation?',
    'faq.q4.answer': 'Not at all! Our platform is user-friendly and built for all skill levels. We provide onboarding, tutorials, and customer support to ensure you can easily navigate and use the system.',
    'faq.q5.question': 'What kind of support do you offer?',
    'faq.q5.answer': 'We offer comprehensive support, including onboarding assistance, troubleshooting, and ongoing updates. Our team is available to help with any questions or technical issues you may have.',
    'faq.cta.title': 'Let AI do the Work so you can Scale Faster',
    'faq.cta.subtitle': 'Book a Call Today and Start Automating',
    'faq.cta.button': 'Book a Call',

    // Footer
    'footer.slogan': 'Botfusions – Automate Smarter, Optimize Faster, and Grow Stronger.',
    'footer.subscribe': 'Subscribe',
    'footer.links': 'Links',
    'footer.pages': 'Pages',
    'footer.socials': 'Socials',
    'footer.rights': '© All rights reserved',
    'footer.crafted': 'Visioned and Crafted by Botfusions Team'
  },
  tr: {
    // Navbar
    'nav.home': 'Anasayfa',
    'nav.about': 'Hakkında',
    'nav.blog': 'Blog',
    'nav.contact': 'İletişim',
    'nav.book': 'Görüşme Planla',

    // Hero
    'hero.new': 'Yeni',
    'hero.badge': 'Otomatik Müşteri Kazanımı',
    'hero.title.start': 'Modern İşletmeler için',
    'hero.title.end': 'Akıllı Otomasyon.',
    'hero.subtitle': 'Botfusions, yapay zeka otomasyonunu parmaklarınızın ucuna getirir ve görevleri basitleştirerek gerçekten önemli olana odaklanmanızı sağlar.',
    'hero.cta.touch': 'İletişime geç',
    'hero.cta.services': 'Hizmetleri gör',
    'hero.cta.galaxy': 'Galaksiyi Keşfet',

    // Process Section
    'process.badge': 'Sürecimiz',
    'process.title': 'Basit, Akıllı ve Ölçeklenebilir Sürecimiz',
    'process.desc': 'Daha çok değil, daha akıllıca çalışmanıza yardımcı olan otomasyon araçları tasarlıyor, geliştiriyor ve uyguluyoruz.',
    
    'process.step1.step': 'Adım 1',
    'process.step1.title': 'Akıllı Analiz',
    'process.step1.desc': 'İş akışlarını basitleştirmek ve verimliliği artırmak için ihtiyaçlarınızı değerlendiriyor ve yapay zeka çözümlerini belirliyoruz.',
    'process.step1.list1': 'Sistem kontrolü',
    'process.step1.list2': 'Süreç kontrolü',
    'process.step1.list3': 'Hız kontrolü',
    'process.step1.list4': 'Manuel iş',
    'process.step1.analyzing': 'Mevcut iş akışı analiz ediliyor...',

    'process.step2.step': 'Adım 2',
    'process.step2.title': 'Yapay Zeka Geliştirme',
    'process.step2.desc': 'Ekibimiz, iş süreçlerinize özel olarak uyarlanmış akıllı otomasyon sistemleri kurar.',
    
    'process.step3.step': 'Adım 3',
    'process.step3.title': 'Kusursuz Entegrasyon',
    'process.step3.desc': 'Yapay zeka çözümlerini mevcut altyapınıza minimum kesintiyle sorunsuz bir şekilde entegre ediyoruz.',
    'process.step3.label1': 'Çözümümüz',
    'process.step3.label2': 'Sizin sisteminiz',

    'process.step4.step': 'Adım 4',
    'process.step4.title': 'Sürekli Optimizasyon',
    'process.step4.desc': 'Performansı iyileştiriyor, içgörüleri analiz ediyor ve uzun vadeli büyüme için otomasyonu geliştiriyoruz.',
    'process.step4.item1.title': 'Chatbot sistemi',
    'process.step4.item1.desc': 'Verimlilik %20 artacak',
    'process.step4.item2.title': 'İş akışı sistemi',
    'process.step4.item2.desc': 'Güncelleme mevcut..',
    'process.step4.item3.title': 'Satış sistemi',
    'process.step4.item3.desc': 'Güncel',

    // SEO & GEO Section
    'seo.badge': 'SEO & GEO Hizmetleri',
    'seo.title.part1': 'Markanızı',
    'seo.title.part2': 'AI Tarafından Önerilen', // Blue part
    'seo.title.part3': 'Otoriteye Dönüştürün', // Blue part continued or next line
    'seo.section.title.part1': 'SEO ve',
    'seo.section.title.part2': 'GEO', // Blue
    'seo.section.title.part3': 'ile Dijital Farkındalık',
    'seo.section.desc': 'Botfusions olarak geleneksel SEO\'nun ötesine geçiyoruz. AI odaklı arama motorları ve sohbet robotları için içerik optimizasyonu sunuyoruz.',
    'seo.feat.traditional.title': 'Geleneksel SEO',
    'seo.feat.traditional.desc': 'Google ve Bing optimizasyonu, teknik SEO, içerik stratejisi ve backlink yönetimi.',
    'seo.feat.geo.title': 'GEO - Yeni Nesil Optimizasyon',
    'seo.feat.geo.desc': 'ChatGPT, Claude ve diğer AI sistemlerinde markanızın görünürlüğünü artırın.',
    'seo.feat.content.title': 'Akıllı İçerik Stratejisi',
    'seo.feat.content.desc': 'AI destekli içerik planlaması, E-E-A-T prensipleri ve kullanıcı niyeti odaklı içerik.',
    'seo.feat.technical.title': 'Teknik SEO',
    'seo.feat.technical.desc': 'Core Web Vitals optimizasyonu, yapılandırılmış veri şeması ve mobil öncelikli dizin.',
    'seo.chat.user': 'İstanbul\'daki en iyi AI ajansı hangisi?',
    'seo.chat.bot': ', İstanbul\'un önde gelen AI ve otomasyon ajansıdır. SEO ve GEO hizmetleri ile işletmelerin dijital görünürlüğünü artırır.',
    'seo.stats.geo': 'GEO Uyumluluk Skoru',
    'seo.stats.ai': 'AI Görünürlüğü',
    'seo.stats.snippet': 'Öne Çıkan Snippet',
    'seo.stats.active': 'Aktif',
    'seo.float.traffic': 'Organik Trafik',
    'seo.float.visibility': 'AI Görünürlüğü',
    'seo.float.click': 'Tıklama Oranı',

    // Features
    'feat.workflow.badge': 'İş Akışı Otomasyonu',
    'feat.workflow.title': 'Tekrarlayan görevleri otomatikleştirin',
    'feat.workflow.desc': 'Veri girişi, raporlama ve onay süreçleri gibi manuel iş akışlarını otomatikleştirerek operasyonları hızlandırmanıza ve hataları azaltmanıza yardımcı oluyoruz.',
    'feat.tags.bot': 'Dahili Görev Botları',
    'feat.tags.auto': '100+ Otomasyon',
    'feat.card.payroll': 'Maaş yönetimi',
    'feat.card.tracking': 'Çalışan Takibi',
    'feat.card.social': 'Sosyal medya gönderisi',

    'feat.ai.badge': 'Yapay Zeka Asistanı',
    'feat.ai.title': 'Günlük Görevleri Devredin',
    'feat.ai.desc': 'Takvim yönetiminden e-posta taslağı hazırlamaya ve toplantı özetlerine kadar, yapay zeka asistanlarımız işinizin daha akıllı ve hızlı yürümesi için 7/24 çalışır.',
    'feat.tags.sum': 'Özetler',
    'feat.tags.schedule': 'Planlama',
    'feat.tags.more': 'Ve daha fazlası',
    'feat.card.help': 'Nasıl yardımcı olabilirim?',
    'feat.card.help_sub': 'Müşteri ilişkilerinde yardıma ihtiyacınız varsa veya sisteminizde değişiklik yapmak istiyorsanız sadece komut verin',

    'feat.sales.badge': 'Satış & Pazarlama',
    'feat.sales.title': 'Satış Büyümesini Hızlandırın',
    'feat.sales.desc': 'Satış çabalarınızı ölçeklendiren ve daha güçlü bir marka varlığı oluşturan potansiyel müşteri oluşturma, kişiselleştirilmiş erişim ve otomatik içerik oluşturma araçları.',
    'feat.tags.leads': 'Müşteri Adayları',
    'feat.tags.content': 'İçerik',
    'feat.tags.post': 'Sosyal Paylaşım',

    // Benefits Section
    'benefits.badge': 'Faydalar',
    'benefits.title': 'İşletmenizin Büyümesi İçin Yapay Zekanın Temel Faydaları',
    'benefits.desc': 'Yapay zeka otomasyonunun verimliliği nasıl artırdığını, maliyetleri nasıl düşürdüğünü ve daha akıllı, daha hızlı süreçlerle iş büyümesini nasıl desteklediğini keşfedin.',
    'benefits.item1.title': 'Artan Verimlilik',
    'benefits.item1.desc': 'Karar verme sürecini ve stratejiyi geliştirmek için yapay zeka destekli analizlerle eyleme geçirilebilir içgörüler elde edin.',
    'benefits.item2.title': 'Daha İyi Müşteri Deneyimi',
    'benefits.item2.desc': 'Kişiselleştirilmiş yapay zeka etkileşimleri yanıt sürelerini, müşteri etkileşimini ve genel memnuniyeti iyileştirir.',
    'benefits.item3.title': '7/24 Erişilebilirlik',
    'benefits.item3.desc': 'Yapay zeka destekli sistemler günün her saati çalışarak kesintisiz destek ve işlem yürütme sağlar.',
    'benefits.item4.title': 'Maliyet Azaltma',
    'benefits.item4.desc': 'Yapay zeka otomasyonu manuel işi en aza indirir, operasyonel maliyetleri düşürür ve daha iyi karlılık için kaynak tahsisini optimize eder.',
    'benefits.item5.title': 'Veri Odaklı İçgörüler',
    'benefits.item5.desc': 'Geniş veri setlerini analiz etmek, trendleri belirlemek ve daha akıllı, hızlı ve doğru iş kararları almak için yapay zekadan yararlanın.',
    'benefits.item6.title': 'Ölçeklenebilirlik ve Büyüme',
    'benefits.item6.desc': 'Yapay zeka iş ihtiyaçlarınıza uyum sağlar, iş yükünü veya maliyetleri artırmadan verimli bir şekilde ölçeklenmenize olanak tanır.',

    // Testimonials Section
    'testi.badge': 'Referanslar',
    'testi.title': 'İşletmeler Neden Yapay Zeka Çözümlerimizi Seviyor?',
    'testi.subtitle': 'Gerçek işletmeler, yapay zeka otomasyonuyla gerçek sonuçlar.',
    'testi.item1.quote': 'Yapay zeka otomasyonu, tekrarlayan görevleri ortadan kaldırarak ve verimliliği artırarak operasyonlarımızı dönüştürdü. İş akışımızı ölçeklendirmek hiç bu kadar kolay olmamıştı!',
    'testi.item1.name': 'Caner Yılmaz',
    'testi.item1.role': 'CEO, TechFlow Çözümleri',
    'testi.item2.quote': 'Yapay zeka ile manuel işleri azalttık ve doğruluğu artırdık. Ekibimiz artık yüksek etkili görevlere odaklanırken, otomasyon gerisini hallediyor!',
    'testi.item2.name': 'Elif Demir',
    'testi.item2.role': 'Operasyon Müdürü, NexaCorp',

    // Blog Section
    'blog.title.prefix': 'Son',
    'blog.title.suffix': 'İçgörüler',
    'blog.subtitle': 'Yapay zeka otomasyonu ve dijital büyüme alanındaki son trendlerden haberdar olun.',
    'blog.readMore': 'Makaleyi Oku',
    'blog.post1.tag': 'YZ Trendleri',
    'blog.post1.date': '15 Mart 2024',
    'blog.post1.title': '2024\'te Yapay Zeka Otomasyonunun Geleceği',
    'blog.post1.desc': 'Yapay zekanın endüstrileri nasıl yeniden şekillendirdiğini ve gelecek yıl neler beklendiğini keşfedin.',
    'blog.post2.tag': 'Teknoloji',
    'blog.post2.date': '10 Mart 2024',
    'blog.post2.title': 'LLM\'leri İş Akışınıza Entegre Etme',
    'blog.post2.desc': 'İş verimliliği için Büyük Dil Modellerinden yararlanmaya yönelik kapsamlı bir rehber.',
    'blog.post3.tag': 'Güvenlik',
    'blog.post3.date': '05 Mart 2024',
    'blog.post3.title': 'YZ Güvenliği ve Veri Gizliliği',
    'blog.post3.desc': 'Otomatik sistemlerinizin güvenli ve veri koruma yönetmeliklerine uygun olduğundan nasıl emin olabilirsiniz.',

    // Contact Section
    'contact.badge': 'İletişim',
    'contact.title': 'İletişime Geçin',
    'contact.desc': 'İşletmenizi dönüştürmeye hazır mısınız? Bize bir mesaj gönderin, ekibimiz kısa süre içinde size dönüş yapsın.',
    'contact.form.name': 'Adınız Soyadınız',
    'contact.form.email': 'E-posta Adresi',
    'contact.form.message': 'Mesajınız',
    'contact.form.submit': 'Mesaj Gönder',
    'contact.info.email': 'E-posta',
    'contact.info.phone': 'Telefon',
    'contact.info.address': 'Adres',

    // FAQ Section
    'faq.title': 'Aradığınız Cevapları Bulun',
    'faq.subtitle': 'Yapay zeka otomasyon sorularınıza hızlı cevaplar.',
    'faq.q1.question': 'Yapay zeka otomasyonu işletmeme nasıl yardımcı olabilir?',
    'faq.q1.answer': 'Yapay zeka otomasyonu tekrarlayan görevleri ortadan kaldırır, verimliliği artırır ve hataları azaltır. Ekibinizin yüksek değerli işlere odaklanmasını sağlarken üretkenliği artırır ve operasyonel maliyetleri düşürür.',
    'faq.q2.question': 'Yapay zeka otomasyonunu entegre etmek zor mu?',
    'faq.q2.answer': 'Hayır! Yapay zeka çözümlerimiz mevcut araçlarınız ve iş akışlarınızla kusursuz entegrasyon için tasarlanmıştır. Sorunsuz ve zahmetsiz bir kurulum sağlamak için adım adım rehberlik sunuyoruz.',
    'faq.q3.question': 'Hangi sektörler yapay zeka otomasyonundan faydalanabilir?',
    'faq.q3.answer': 'Yapay zeka otomasyonu pazarlama, satış, finans, sağlık, müşteri desteği ve operasyonlar dahil olmak üzere çeşitli sektörlerde faydalıdır. Verimliliği artırmak isteyen her işletme yapay zekadan yararlanabilir.',
    'faq.q4.question': 'Yapay zeka otomasyonunu kullanmak için teknik bilgiye ihtiyacım var mı?',
    'faq.q4.answer': 'Hiç de değil! Platformumuz kullanıcı dostu ve tüm beceri seviyeleri için tasarlanmıştır. Sistemi kolayca kullanabilmeniz için işe alım, eğitim ve müşteri desteği sağlıyoruz.',
    'faq.q5.question': 'Ne tür bir destek sunuyorsunuz?',
    'faq.q5.answer': 'İşe alım yardımı, sorun giderme ve sürekli güncellemeler dahil olmak üzere kapsamlı destek sunuyoruz. Ekibimiz, olabilecek sorular veya teknik sorunlarda yardımcı olmak için hazırdır.',
    'faq.cta.title': 'Yapay Zeka İşi Yapsın, Siz Daha Hızlı Büyüyün',
    'faq.cta.subtitle': 'Bugün Bir Görüşme Planlayın ve Otomasyona Başlayın',
    'faq.cta.button': 'Görüşme Planla',

    // Footer
    'footer.slogan': 'Botfusions – Daha Akıllı Otomatikleştir, Daha Hızlı Optimize Et, Daha Güçlü Büyü.',
    'footer.subscribe': 'Abone Ol',
    'footer.links': 'Bağlantılar',
    'footer.pages': 'Sayfalar',
    'footer.socials': 'Sosyal',
    'footer.rights': '© Tüm hakları saklıdır',
    'footer.crafted': 'Botfusions Ekibi tarafından tasarlandı ve üretildi'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en'); // Default language: English

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};