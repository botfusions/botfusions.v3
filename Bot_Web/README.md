# Botfusions - AI Automation & Data Extraction Platform

<div align="center">
  <img src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" alt="Botfusions Banner" width="100%"/>

  [![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
  [![Three.js](https://img.shields.io/badge/Three.js-r182-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind-CDN-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_BADGE_ID/deploy-status)](https://app.netlify.com/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</div>

## About

**Botfusions**, Istanbul merkezli premium AI destekli veri cikarma ve otomasyon cozumleri sunan bir platformdur. Modern isletmeler icin akilli otomasyon araclari gelistiriyoruz.

> "Precision in every byte."

## Services

| Service | Description |
|---------|-------------|
| **AI Automation** | Yapay zeka destekli surec otomasyonu ve akilli is akislari |
| **Data Extraction** | Web sitelerinden ve dijital kaynaklardan akilli veri cikarma |
| **SEO/GEO Optimization** | Geleneksel arama motoru + AI arama motorlari (ChatGPT, Claude, Perplexity) optimizasyonu |
| **Chatbot Development** | n8n, Make.com ve ozel platformlarda AI chatbot gelistirme |
| **Process Automation** | Tekrarlayan is sureclerinin akilli otomasyonu |
| **Custom Solutions** | Isletmenize ozel yapay zeka cozumleri |

## Features

- **3D Galaxy Landing Page** - Three.js ile interaktif galaksi gorsellestirme
- **Multi-language** - Turkce/Ingilizce (varsayilan: EN)
- **Blog System** - JSON tabanli dinamik blog yonetimi
- **AI ChatBot** - RAG pipeline (OpenAI embeddings + Supabase vector search + OpenRouter LLM) ile akilli sohbet botu
- **Chat History** - Supabase'de konusma gecmisi kaydi (n8n uyumlu)
- **Contact Form** - EmailJS entegrasyonu
- **FAQ Section** - Accordion animasyonlu SSS bolumu
- **Responsive Design** - Tum cihazlarda mukemmel gorunum
- **Dark Mode** - Modern koyu tema ve glass morphism efektleri
- **SEO & GEO** - Schema.org, Open Graph, AI arama motoru optimizasyonu
- **Security** - OWASP 2025 uyumlu, DOMPurify XSS korumasi ([detaylar](SECURITY.md))

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Core** | React 19, TypeScript 5.8, Vite 6 |
| **3D** | Three.js, @react-three/fiber, @react-three/drei |
| **UI** | TailwindCSS, Framer Motion, Lucide Icons |
| **Security** | DOMPurify, CSP Headers |
| **Backend** | Netlify Functions (serverless) |
| **AI/ML** | OpenRouter (Claude Haiku 4.5), OpenAI Embeddings |
| **Database** | Supabase (Postgres + pgvector) |
| **Services** | EmailJS |
| **Routing** | React Router DOM 7 |

## Getting Started

### Prerequisites

- **Node.js** >= 16.x
- **npm** >= 8.x

### Installation

```bash
# Clone the repository
git clone https://github.com/botfusions/bot-web.git
cd bot-web

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

Tarayicinizda `http://localhost:3000` adresine gidin.

### Environment Variables

`.env.example` dosyasini `.env.local` olarak kopyalayip degerleri doldurun:

```env
# EmailJS (client-side, public keys)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Backend-only (Netlify Functions - DO NOT use VITE_ prefix)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your_supabase_service_role_key
OPENAI_API_KEY=your_openai_api_key
OPENROUTER_API_KEY=your_openrouter_api_key
OPENROUTER_MODEL=anthropic/claude-haiku-4.5  # Optional, defaults to Claude Haiku 4.5
```

> **Onemli:** `VITE_` prefix'i client-side'da gorunur. Backend API key'leri icin ASLA `VITE_` kullanmayin ve sadece Netlify Dashboard > Environment Variables'dan tanimlayın.

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Galaxy Viewer | Interaktif 3D galaksi landing page |
| `/home` | Main Page | Ozellikler, blog, iletisim |
| `/blog/:id` | Blog Detail | Tam icerikli blog makaleleri |

## ChatBot Architecture

AI destekli sohbet botu **RAG (Retrieval-Augmented Generation)** mimarisi kullanir:

```
User Message
     ↓
1. OpenAI Embeddings (text-embedding-ada-002)
     ↓
2. Supabase Vector Search (pgvector, cosine similarity)
     ↓
3. OpenRouter LLM (Claude Haiku 4.5)
     ↓
4. Chat History Save (Supabase - n8n uyumlu)
     ↓
Response
```

### Ozellikler

- **Strict Scope**: Sadece Botfusions bilgi tabanindaki sorulari yanitlar
- **Knowledge Base**: Supabase `botfusions_sss` tablosunda vektorize edilmis dokuman arama
- **Smart Responses**: Fiyat sorularinda otomatik iletisim bilgisi yonlendirmesi
- **Chat History**: n8n `chat_histories` formatiyla uyumlu Postgres kaydi
- **Serverless**: Netlify Functions ile tamamen sunucusuz mimari

### Dosyalar

- `netlify/functions/chat.mjs` - Serverless chatbot endpoint (`/api/chat`)
- `supabase/match_documents.sql` - Vector similarity search fonksiyonu
- `components/ChatBot.tsx` - Frontend UI komponenti

## GEO: Generative Engine Optimization

**GEO (Generative Engine Optimization)**, web iceriginizi AI arama motorlarinda (ChatGPT, Claude, Perplexity, Google SGE, Bing Chat) gorunur kilmak icin optimize eder.

### Neden GEO Onemli?

Geleneksel arama motorlari link listesi sunarken, **Generative Engines** (GE) birden fazla kaynaktan bilgi sentezleyerek dogrudan yanit uretir:
- Kullanicilar artik web sitelerine gitmeden yanit aliyor
- Icerik olusturucularin organik trafigi azaliyor
- Inline citation'lar ile gorunurluk karmasik ve cok boyutlu

### GEO vs SEO

| Metrik | Geleneksel SEO | GEO |
|--------|---------------|-----|
| **Gorunurluk Olcumu** | Ranking (1-10) | Word Count + Position + Subjective Impression |
| **Optimizasyon Hedefi** | Keyword matching | Icerik kalitesi + Credibility + Alintilama |
| **Etkili Stratejiler** | Backlinks, Keywords | Citations, Statistics, Quotes, Authoritative tone |

### GEO Stratejileri (Kanıtlanmış Yöntemler)

| Strateji | Gorunurluk Artisi | Aciklama |
|----------|------------------|----------|
| **Quotation Addition** | +40% | Guvenilir kaynaklardan alintilar ekle |
| **Statistics Addition** | +35% | Nicel istatistikler ekle |
| **Cite Sources** | +30% | Guvenilir kaynaklara atifta bulun |
| **Fluency Optimization** | +28% | Metin akiciligini iyilestir |
| **Authoritative Tone** | +15% | Ikna edici ve otoriter ton kullan |

### Uygulama Ornekleri

**Ornek 1 - Citation Ekleme (+132%):**
```markdown
Oncesi: "Swiss cikolata tuketimi kisibasi yilda 11-12 kilo"
Sonrasi: "Swiss cikolata tuketimi kisibasi yilda 11-12 kilo
(Uluslararasi Cikolata Arastirma Grubu [1] anketi)"
```

**Ornek 2 - Istatistik Ekleme (+65%):**
```markdown
"Son 10 yilda robot kullanimi %70 artti"
```

### Kaynaklar

- **Arastirma Makalesi**: [GEO: Generative Engine Optimization (KDD '24)](https://arxiv.org/abs/2311.09735)
- **Veri Seti**: GEO-bench - 10,000 sorgu, 9 farkli kaynak
- **Domain-Specific**: Debate → Authoritative, Facts → Citations, Opinion → Statistics

## Project Structure

```
Bot_Web/
├── components/
│   ├── galaxy/          # 3D Galaxy viewer
│   ├── HomePage.tsx     # Ana sayfa
│   ├── BlogDetailPage.tsx
│   ├── ChatBot.tsx      # AI sohbet botu UI
│   ├── ContactSection.tsx
│   ├── LanguageContext.tsx  # i18n
│   └── ...
├── netlify/
│   └── functions/
│       └── chat.mjs     # Serverless chatbot RAG pipeline
├── supabase/
│   └── match_documents.sql  # Vector search function
├── public/data/         # Blog JSON verileri
├── App.tsx              # Router setup
├── index.html           # HTML + security headers
├── netlify.toml         # Netlify configuration
├── vite.config.ts
└── package.json
```

## Deployment (Netlify)

### Otomatik Deploy (Onerilen)

1. [Netlify](https://app.netlify.com/) hesabiniza girin
2. **Add new site** > **Import an existing project** > GitHub repo secin
3. Build ayarlari:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. **Environment variables** ekleyin (Site settings > Environment variables):
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_KEY`
   - `OPENAI_API_KEY`
   - `OPENROUTER_API_KEY`
   - `OPENROUTER_MODEL` (opsiyonel, varsayilan: `anthropic/claude-haiku-4.5`)
5. **Supabase Setup** (ChatBot icin):
   - Supabase projenizde `supabase/match_documents.sql` dosyasini calistirin
   - `botfusions_sss` tablosunu olusturun ve bilgi tabaninizi yukleyin
6. **Deploy site**

### Manuel Deploy

```bash
npm run build
# dist/ klasorunu Netlify'a surukleyin veya CLI kullanin:
# npx netlify-cli deploy --prod --dir=dist
```

## Scripts

```bash
npm run dev      # Development server (port 3000)
npm run build    # Production build
npm run preview  # Build onizleme
```

## Security

Bu proje OWASP Top 10:2025 standartlarina uygun guvenlik onlemleri icerir.
Detayli guvenlik raporu icin: [SECURITY.md](SECURITY.md)

Guvenlik acigi bildirimi icin: **info@botfusions.com**

## Contributing

1. Fork yapin
2. Feature branch olusturun (`git checkout -b feature/AmazingFeature`)
3. Degisikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request acin

## License

Bu proje [MIT License](LICENSE) altinda lisanslanmistir.

## Contact

**Botfusions** - AI Automation & Data Extraction

- Email: [info@botfusions.com](mailto:info@botfusions.com)
- Phone: +90 850 302 74 60
- Website: [botfusions.com](https://botfusions.com)
- Address: Istanbul, Turkey

---

<div align="center">
  <p><strong>Visioned and Crafted by Botfusions Team</strong></p>
  <p><em>Botfusions - Automate Smarter, Optimize Faster, and Grow Stronger.</em></p>
</div>
