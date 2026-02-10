# Botfusions Web Platform

Modern AI automation and GEO/SEO optimization platform built with React, TypeScript, and Three.js.

## 🚀 Features

### AI Agents That Think, Decide, and Execute
- **Intelligent Automation** - Autonomous systems that solve real problems
- **AI-Powered Workflows** - N8N-based automation with 50+ custom workflows
- **Multi-Language Support** - English and Turkish (TR/EN)

### Dual-Engine SEO/GEO Optimization
- **Traditional SEO** - Google & Bing optimization, technical SEO, backlinks
- **AI Search Optimization (GEO)** - ChatGPT, Perplexity, Gemini, Claude visibility
- **Botfusions x Rankie.ai Partnership** - Turkey's first dual-engine growth solution

### Advanced Dashboards
- **Complete Coverage Dashboard** - 8/8 AI engine monitoring
- **Command Center** - Real-time brand mentions across AI platforms
- **Predictive Dashboard** - Digital Twin simulation (50,000+ journeys/day)

### Interactive 3D Galaxy Visualization
- Procedurally generated galaxies with customizable parameters
- Real-time WebGL rendering with Three.js
- Adjustable colors, particle density, spiral arms, and more

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **3D Graphics**: Three.js + React Three Fiber + React Three Drei
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Routing**: React Router v7
- **State Management**: Context API + Zustand
- **Icons**: Lucide React

## 📦 Project Structure

```
Bot_Web/
├── components/
│   ├── Hero.tsx                    # Landing hero section
│   ├── SeoGeoSection.tsx          # SEO/GEO services showcase
│   ├── CompleteCoverageDashboard.tsx
│   ├── CommandCenterDashboard.tsx
│   ├── PredictiveDashboard.tsx
│   ├── Features.tsx               # AI automation features
│   ├── ProcessSection.tsx         # 4-step process workflow
│   ├── BenefitsSection.tsx        # Business benefits
│   ├── TestimonialsSection.tsx    # Client testimonials
│   ├── BlogSection.tsx            # Blog posts with GEO content
│   ├── FAQSection.tsx             # FAQ with Rankie.ai partnership
│   ├── ContactSection.tsx         # Contact form
│   ├── ChatBot.tsx                # AI chatbot (OpenRouter integration)
│   ├── LanguageContext.tsx        # i18n translation context
│   ├── galaxy/
│   │   ├── GalaxyPage.tsx         # 3D galaxy viewer
│   │   ├── GalaxyGenerator.tsx    # Galaxy rendering logic
│   │   └── ControlsPanel.tsx      # Galaxy controls UI
│   └── ...
├── public/
│   └── data/
│       ├── blogs.json             # Blog content
│       └── geo-blocks.md          # 12-page GEO research summary
├── App.tsx                        # Main app component
├── index.css                      # Global styles + Tailwind
└── main.tsx                       # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/botfusions-web.git

# Navigate to project directory
cd "Botfusions Web/Bot_Web"

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Available Scripts

```bash
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🌐 Key Sections

### 1. Hero Section
- AI Agents headline with dual-language support
- Call-to-action buttons (Get in Touch, Services, Galaxy)
- "NEW" badge with announcement

### 2. SEO/GEO Section
- Interactive chat mockup showing GEO optimizer
- Real-time stats (GEO Score: 98/100, AI Visibility: 95%)
- Feature cards for Traditional SEO, GEO, Smart Content, Technical SEO

### 3. Dashboards
- **Complete Coverage**: 8 AI engines tracked (ChatGPT, Perplexity, Gemini, Claude, Copilot, Meta AI, AI Overviews, DeepSeek)
- **Command Center**: Recent mentions, 7-day trends, engine breakdown
- **Predictive**: Execution log, confidence scoring, content recommendations

### 4. Galaxy Viewer
- `/galaxy` route - Interactive 3D galaxy with real-time controls
- Customizable parameters: stars, spiral arms, colors, branching
- Language switcher (EN/TR)

### 5. Blog Section
- GEO-focused content (Jan 15, 2026)
- LLM infrastructure guide (Jan 22, 2026)
- AI security best practices (Jan 28, 2026)

### 6. FAQ Section
- 6 questions including Botfusions x Rankie.ai partnership
- Dual-language support
- Animated accordion with Framer Motion

## 🎨 Design System

- **Primary Colors**: Purple (#814AC8), Cyan (#00D4FF), Pink (#DF7AFE)
- **Backgrounds**: Dark theme with glassmorphism effects
- **Typography**: System fonts with bold headings
- **Components**: Reusable glass-card, gradient buttons, animated badges

## 🔧 Configuration

### Environment Variables
Create a `.env` file in `Bot_Web/` directory:

```env
VITE_OPENROUTER_API_KEY=your_openrouter_api_key
```

### Tailwind CSS v4
The project uses Tailwind CSS v4 with CSS-first configuration. See `index.css` for custom themes.

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Bundle Size**: Optimized with Vite code splitting
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1

## 🤝 Partnerships

### Botfusions x Rankie.ai
Turkey's first dual-engine digital growth partnership combining:
- Rankie.ai's SEO/GEO expertise
- Botfusions' AI agent automation
- Results: +340% traffic, 92.5% time savings

## 📝 Recent Updates

### Latest Changes (Feb 11, 2026)
- ✅ Removed floating stars animation from landing page
- ✅ Converted 12-page GEO research PDF into blog content
- ✅ Added Complete Coverage Dashboard (8/8 AI engines)
- ✅ Added Command Center Dashboard (Apple-themed)
- ✅ Added Predictive Dashboard with Digital Twin simulation
- ✅ Changed hero headline to "AI Agents That Think, Decide, and Execute"
- ✅ Removed browser dots (red/yellow/green) from all dashboards
- ✅ Updated Turkish SEO title: "Markanızı AI aramalarında önerilen bir otorite haline getirin"
- ✅ Added Botfusions x Rankie.ai FAQ entry

## 📞 Contact

- **Website**: [www.botfusions.com](https://www.botfusions.com)
- **Email**: info@botfusions.com
- **Phone**: +90 850 302 74 60
- **Rankie.ai**: Official Turkey Partner

## 📄 License

© 2026 Botfusions. All rights reserved.

---

**Built with ❤️ by Botfusions Team**
