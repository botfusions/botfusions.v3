# 🤖 Botfusions - AI Automation & Data Extraction Platform

<div align="center">
  <img src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" alt="Botfusions Banner" width="100%"/>

  [![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
  [![Three.js](https://img.shields.io/badge/Three.js-r175-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind-CDN-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</div>

## 📋 İçindekiler

- [Hakkında](#-hakkında)
- [Özellikler](#-özellikler)
- [Teknolojiler](#-teknolojiler)
- [Kurulum](#-kurulum)
- [Konfigürasyon](#-konfigürasyon)
- [Kullanım](#-kullanım)
- [Proje Yapısı](#-proje-yapısı)
- [Dağıtım](#-dağıtım)
- [Katkıda Bulunma](#-katkıda-bulunma)
- [Lisans](#-lisans)
- [İletişim](#-iletişim)

## 🚀 Hakkında

**Botfusions** (eski adıyla XTRACT), İstanbul merkezli premium AI destekli veri çıkarma ve otomasyon çözümleri sunan bir platformdur. Modern işletmeler için akıllı otomasyon araçları geliştiriyoruz.

### 🎯 Misyonumuz
> "Precision in every byte." - Her byte'ta hassasiyet.

Yapay zeka otomasyonunu işletmelerin parmaklarının ucuna getirerek, tekrarlayan görevleri basitleştirip gerçekten önemli olana odaklanmalarını sağlıyoruz.

## ✨ Özellikler

### 🎨 Frontend Özellikleri
- ✅ **Modern React 19** - En yeni React özellikleri
- ✅ **TypeScript** - Tip güvenli kod
- ✅ **3D Galaxy Viewer** - Three.js ile interaktif galaksi görselleştirme
- ✅ **React Router** - Çoklu sayfa navigasyonu (/, /galaxy)
- ✅ **Responsive Design** - Tüm cihazlarda mükemmel görünüm
- ✅ **Çoklu Dil Desteği** - Türkçe/İngilizce (TR/EN)
- ✅ **Smooth Animations** - Framer Motion ile akıcı animasyonlar
- ✅ **Dark Mode** - Modern koyu tema
- ✅ **Glass Morphism** - Modern cam efekti tasarımlar
- ✅ **Dynamic Blog System** - JSON tabanlı dinamik blog yönetimi

### 📧 Backend Entegrasyonları
- ✅ **Contact Form** - EmailJS entegrasyonu ile çalışan iletişim formu
- ✅ **Newsletter Subscription** - Email abonelik sistemi
- ✅ **Form Validation** - Gerçek zamanlı form doğrulama
- ✅ **Loading States** - Kullanıcı dostu yükleme durumları
- ✅ **Success/Error Messages** - Anlaşılır geri bildirimler

### 🎯 SEO & GEO
- ✅ **Traditional SEO** - Google ve Bing optimizasyonu
- ✅ **GEO Optimization** - AI arama motorları için optimizasyon (ChatGPT, Claude)
- ✅ **Structured Data** - Schema.org markup
- ✅ **Meta Tags** - Kapsamlı meta tag'ler
- ✅ **Open Graph** - Sosyal medya paylaşımları için

## 🛠 Teknolojiler

### Core
- **React 19.2.4** - UI Framework
- **TypeScript 5.8.2** - Type Safety
- **Vite 6.2.0** - Build Tool & Dev Server
- **React Router DOM 7.1.3** - Client-side routing

### 3D Graphics
- **Three.js 0.175.0** - 3D Graphics library
- **@react-three/fiber 9.0.0** - React renderer for Three.js
- **@react-three/drei 9.122.8** - Three.js helpers and abstractions

### UI & Styling
- **TailwindCSS** - Utility-first CSS
- **Framer Motion 12.31.0** - Animations
- **Lucide React 0.563.0** - Icon Library
- **Custom CSS** - Glass morphism & custom styles

### Backend Services
- **EmailJS** - Email service integration
- **Vite Env Variables** - Environment management

### Dev Tools
- **@types/react** - React TypeScript types
- **@types/react-dom** - React DOM TypeScript types
- **@vitejs/plugin-react** - Vite React plugin

## 📦 Kurulum

### Gereksinimler
- **Node.js** >= 16.x
- **npm** >= 8.x veya **yarn** >= 1.22.x

### Adım Adım Kurulum

1. **Repository'yi klonlayın**
```bash
git clone https://github.com/botfusions/bot-web.git
cd bot-web
```

2. **Bağımlılıkları yükleyin**
```bash
npm install

# React Router ve Three.js bağımlılıkları otomatik yüklenecek:
# - react-router-dom@7.1.3
# - three@0.175.0
# - @react-three/fiber@9.0.0
# - @react-three/drei@9.122.8
# - three-stdlib@2.40.1
```

3. **Environment variables oluşturun**
```bash
cp .env.example .env.local
```

4. **`.env.local` dosyasını düzenleyin**
```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

5. **Development server'ı başlatın**
```bash
npm run dev
```

🎉 Tarayıcınızda `http://localhost:3000` adresine gidin!

## ⚙️ Konfigürasyon

### EmailJS Kurulumu

1. **EmailJS Hesabı Oluşturun**
   - [EmailJS](https://www.emailjs.com/) sitesine gidin
   - Ücretsiz hesap oluşturun

2. **Email Servisi Ekleyin**
   - Dashboard > Email Services
   - Gmail, Outlook veya istediğiniz servisi ekleyin

3. **Email Template Oluşturun**
   - Dashboard > Email Templates
   - Yeni template oluşturun
   - Template için parametreler:
     - `{{from_name}}` - Gönderen adı
     - `{{from_email}}` - Gönderen email
     - `{{message}}` - Mesaj içeriği
     - `{{subscriber_email}}` - Newsletter için

4. **API Key'leri Alın**
   - Dashboard > Account > API Keys
   - Service ID, Template ID ve Public Key'i kopyalayın
   - `.env.local` dosyasına yapıştırın

### Vite Konfigürasyonu

[vite.config.ts](vite.config.ts) dosyasında özelleştirmeler:

```typescript
export default defineConfig({
  server: {
    port: 3000,        // Port numarası
    host: '0.0.0.0',   // Network access
  },
  // ... diğer ayarlar
});
```

## 💻 Kullanım

### Development

```bash
# Development server başlat
npm run dev

# Build (production)
npm run build

# Build önizleme
npm run preview
```

### Sayfalar

Uygulama iki ana sayfa içerir:

- **Ana Sayfa** (`/`) - Landing page, özellikler, blog, iletişim
- **Galaxy Viewer** (`/galaxy`) - İnteraktif 3D galaksi görselleştirme

Galaxy sayfasına ana sayfadaki "Galaksiyi Keşfet" butonundan erişebilirsiniz.

### Component Kullanımı

```tsx
// Dil değiştirme
import { useLanguage } from './components/LanguageContext';

const MyComponent = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div>
      <button onClick={() => setLanguage('tr')}>Türkçe</button>
      <button onClick={() => setLanguage('en')}>English</button>
      <p>{t('hero.title.start')}</p>
    </div>
  );
};
```

### Form Kullanımı

Contact formu ve newsletter özellikleri otomatik olarak çalışır. EmailJS konfigürasyonunu tamamladıktan sonra:

- ✅ Contact form otomatik olarak email gönderir
- ✅ Newsletter subscription çalışır
- ✅ Form validation aktif
- ✅ Success/error mesajları gösterilir

### Galaxy Viewer Kullanımı

Galaxy viewer sayfası interaktif 3D galaksi görselleştirme sunar:

- 🎮 **Mouse Controls** - Galaksiyi döndürmek için sürükleyin
- 🔍 **Zoom** - Yakınlaştırmak/uzaklaştırmak için scroll yapın
- ⚙️ **Controls Panel** - Galaksi parametrelerini ayarlayın
- 📸 **Screenshot** - Görüntüyü PNG olarak kaydedin
- 🔄 **Reset View** - Kamerayı başlangıç pozisyonuna getirin
- 🌐 **Language Switcher** - TR/EN dil değiştirme

### Blog Sistemi

Blog yazıları [`public/data/blogs.json`](public/data/blogs.json) dosyasından dinamik olarak yüklenir:

```json
{
  "id": 1,
  "tag": { "en": "AI Trends", "tr": "AI Trendleri" },
  "date": { "en": "Mar 15, 2024", "tr": "15 Mar 2024" },
  "title": { "en": "Title", "tr": "Başlık" },
  "desc": { "en": "Description", "tr": "Açıklama" },
  "graphic": "trend",
  "tagColor": "text-purple-400",
  "borderColor": "group-hover:border-purple-500/50",
  "gradient": "from-[#1a1a1a] to-[#0f0f0f]"
}
```

Yeni blog eklemek için JSON dosyasına yeni bir obje ekleyin, otomatik olarak görünecektir.

## 📁 Proje Yapısı

```
Bot_Web/
├── components/                    # React componentleri
│   ├── galaxy/                    # 🌌 Galaxy viewer componentleri
│   │   ├── GalaxyPage.tsx        # Ana galaxy sayfası
│   │   ├── GalaxyGenerator.tsx   # 3D galaksi üreteci
│   │   ├── ControlsPanel.tsx     # Parametre kontrolleri
│   │   ├── Toolbar.tsx           # Toolbar (screenshot, reset, vb.)
│   │   └── types.ts              # TypeScript tipleri
│   ├── HomePage.tsx               # Ana sayfa wrapper
│   ├── BenefitsSection.tsx
│   ├── BlogSection.tsx           # 📰 Dinamik blog sistemi
│   ├── ContactSection.tsx        # ✨ İşlevsel contact form
│   ├── Features.tsx
│   ├── Footer.tsx                # ✨ İşlevsel newsletter
│   ├── Hero.tsx                  # Galaxy viewer butonu ile
│   ├── LanguageContext.tsx       # 🌐 Çoklu dil desteği
│   ├── Navbar.tsx
│   ├── ProcessSection.tsx
│   ├── SeoGeoSection.tsx
│   ├── StarField.tsx
│   └── TestimonialsSection.tsx
├── public/
│   └── data/
│       └── blogs.json            # 📝 Blog verileri (TR/EN)
├── App.tsx                       # React Router setup
├── index.tsx                     # Entry point
├── index.html                    # HTML template
├── index.css                     # Global styles + glass effects
├── vite-env.d.ts                # TypeScript env tanımları
├── vite.config.ts               # Vite konfigürasyonu
├── tsconfig.json                # TypeScript konfigürasyonu
├── package.json                 # Dependencies
├── .env.local                   # Local environment variables (git'e eklenmez)
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
└── README.md                    # Bu dosya
```

## 🚀 Dağıtım

### Vercel (Önerilen)

1. **Vercel hesabınıza giriş yapın**
2. **New Project** > **Import Git Repository**
3. **Environment Variables** ekleyin:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. **Deploy** butonuna tıklayın

### Netlify

1. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
2. **Environment variables** ekleyin
3. **Deploy** edin

### Manuel Deployment

```bash
# Production build oluştur
npm run build

# dist/ klasörünü web sunucunuza yükleyin
```

## 🔧 Sorun Giderme

### Avast Antivirüs False Positive

Three.js bağımlılıkları (özellikle `@react-three/drei`) minified kod içerdiği için bazı antivirüs programları tarafından yanlış pozitif olarak algılanabilir.

**Çözüm:**
1. `node_modules` klasörünü antivirüs istisnalarına ekleyin
2. Veya geliştirme sırasında antivirüsü geçici olarak devre dışı bırakın

### Port Kullanımda

Eğer port 3000 kullanımdaysa, Vite otomatik olarak başka bir port (3001, 3002, vb.) bulacaktır.

### Build Optimize Hatası

Eğer `504 Outdated Optimize Dep` hatası alırsanız:

```bash
# Cache'i temizle ve yeniden yükle
rm -rf node_modules .vite
npm install
npm run dev -- --force
```

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları izleyin:

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📄 Lisans

Bu proje [MIT License](LICENSE) altında lisanslanmıştır.

## 📞 İletişim

**Botfusions** - AI Automation & Data Extraction

- 📧 Email: [info@botfusions.com](mailto:info@botfusions.com)
- 📱 Phone: +90 850 302 74 60
- 📍 Address: Sarıdemir mah Limoncu Sok no:21/3, Eminönü Fatih, İstanbul, Turkey
- 🌐 Website: [botfusionsl.com](https://botfusionsl.com)

### Sosyal Medya

- 📘 [Facebook](https://www.facebook.com/botfusions)
- 📸 [Instagram](https://www.instagram.com/botfusions/)
- 💼 [LinkedIn](https://www.linkedin.com/in/ömer-cenk-tokgöz-0918ab373)
- 🐦 [Twitter](https://x.com/cenktk)

---

<div align="center">
  <p><strong>Visioned and Crafted by Botfusions Team</strong></p>
  <p><em>Botfusions – Automate Smarter, Optimize Faster, and Grow Stronger.</em></p>

  ⭐ Bu projeyi beğendiyseniz star vermeyi unutmayın!
</div>
