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
| **SEO/GEO Optimization** | Arama motoru ve AI arama optimizasyonu |
| **Chatbot Development** | n8n, Make.com ve ozel platformlarda AI chatbot gelistirme |
| **Process Automation** | Tekrarlayan is sureclerinin akilli otomasyonu |
| **Custom Solutions** | Isletmenize ozel yapay zeka cozumleri |

## Features

- **3D Galaxy Landing Page** - Three.js ile interaktif galaksi gorsellestirme
- **Multi-language** - Turkce/Ingilizce (varsayilan: EN)
- **Blog System** - JSON tabanli dinamik blog yonetimi
- **AI ChatBot** - n8n webhook entegrasyonu ile akilli sohbet botu
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
| **Services** | EmailJS, n8n Webhooks |
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

# ChatBot (optional)
VITE_CHATBOT_WEBHOOK_URL=your_webhook_url
```

> `VITE_` prefix = client-side'da gorunur. Backend key'ler icin prefix kullanmayin ve hosting provider uzerinden tanimlayln.

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Galaxy Viewer | Interaktif 3D galaksi landing page |
| `/home` | Main Page | Ozellikler, blog, iletisim |
| `/blog/:id` | Blog Detail | Tam icerikli blog makaleleri |

## Project Structure

```
Bot_Web/
├── components/
│   ├── galaxy/          # 3D Galaxy viewer
│   ├── HomePage.tsx     # Ana sayfa
│   ├── BlogDetailPage.tsx
│   ├── ChatBot.tsx      # AI sohbet botu
│   ├── ContactSection.tsx
│   ├── LanguageContext.tsx  # i18n
│   └── ...
├── public/data/         # Blog JSON verileri
├── App.tsx              # Router setup
├── index.html           # HTML + security headers
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
   - `VITE_CHATBOT_WEBHOOK_URL` (opsiyonel)
5. **Deploy site**

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
- Website: [botfusionsl.com](https://botfusionsl.com)
- Address: Istanbul, Turkey

---

<div align="center">
  <p><strong>Visioned and Crafted by Botfusions Team</strong></p>
  <p><em>Botfusions - Automate Smarter, Optimize Faster, and Grow Stronger.</em></p>
</div>
