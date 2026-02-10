# Security Policy & Audit Report

## Security Policy

### Supported Versions

| Version | Status |
|---------|--------|
| Latest  | Actively supported |

### Reporting a Vulnerability

If you discover a security vulnerability:
1. **DO NOT open a public GitHub issue**
2. Email us at: **info@botfusions.com**
3. You will receive a response within 48 hours

---

## OWASP Top 10:2025 Compliance

### Security Score

| Category | Status | Detail |
|----------|--------|--------|
| **Dependency Security** | CLEAN | `npm audit`: 0 vulnerabilities |
| **Secret Management** | GOOD | Backend keys separated, `.gitignore` configured |
| **XSS Protection** | GOOD | DOMPurify, CSP, input sanitization active |
| **Clickjacking** | GOOD | `X-Frame-Options: DENY` |
| **CSP** | GOOD | Detailed Content Security Policy defined |
| **External Links** | GOOD | `noopener noreferrer` on all external links |
| **Form Security** | GOOD | Rate limiting, validation, sanitization |
| **eval/injection** | CLEAN | No `eval()`, `new Function()`, or `innerHTML =` usage |

### Positive Findings

1. **npm audit: 0 vulnerabilities** - All dependencies clean
2. **Content Security Policy (CSP)** - Detailed CSP in `index.html`
3. **X-Frame-Options: DENY** - Clickjacking protection
4. **X-Content-Type-Options: nosniff** - MIME sniffing protection
5. **Permissions-Policy** - Camera, microphone, geolocation disabled
6. **DOMPurify sanitization** - All `dangerouslySetInnerHTML` usage sanitized
7. **ChatBot input sanitization** - User messages sanitized before sending
8. **localStorage** - No sensitive data stored, only rate limiting timestamps
9. **No eval() / new Function()** - No dangerous function usage
10. **Backend API keys separated** - Only `VITE_` prefixed (client-safe) keys in frontend

### Advisory Findings (Low/Medium Risk)

| # | Finding | Risk | Recommendation |
|---|---------|------|----------------|
| 1 | `unsafe-inline` in CSP | Low | Can be removed when migrating from Tailwind CDN to build pipeline |
| 2 | Webhook URL visible in client bundle | Low-Medium | Add rate limiting and auth token on n8n webhook |
| 3 | EmailJS Public Key client-side (by design) | Low | Enable domain restriction in EmailJS panel |
| 4 | Broad `img-src` CSP rule | Low | Restrict to specific domains if needed |
| 5 | Tailwind CDN usage (supply chain risk) | Low | Use Tailwind build pipeline in production |

### Notes

- This project is a **frontend SPA**. Backend security (rate limiting, CORS, auth) should be handled by n8n and EmailJS
- `host: '0.0.0.0'` is only for development server, no effect in production
- Referrer Policy correctly set: `strict-origin-when-cross-origin`

---

## Environment Variables Security

### Prefix Policy

| Prefix | Visibility | Usage |
|--------|-----------|-------|
| `VITE_` | Visible client-side | Only public keys (EmailJS public key etc.) |
| No prefix | Backend-only | API secret keys, SMTP credentials |

### Protected Files (.gitignore)

- `.env` / `.env.local` / `.env.*.local` - All environment files
- `SMTP_CONFIG.md` - SMTP configuration details (contains credentials)
- `CODEBASE.md` - Auto-generated project map

### If API Keys Are Leaked

1. **IMMEDIATELY** rotate affected API keys
2. Remove from git history (`git filter-branch` or `git-filter-repo`)
3. Force push to remote
4. Invalidate all active sessions

---

## Secure Development Checklist

- [ ] `.env.local` is in `.gitignore`?
- [ ] Backend API keys do NOT have `VITE_` prefix?
- [ ] `npm audit` is clean?
- [ ] New form/input fields are sanitized?
- [ ] External links include `rel="noopener noreferrer"`?
- [ ] `dangerouslySetInnerHTML` uses DOMPurify?

---

## SEO & GEO Audit

### Implemented SEO Features

| # | Feature | File | Status |
|---|---------|------|--------|
| 1 | **robots.txt** | `public/robots.txt` | AI crawler'lar dahil (GPTBot, ClaudeBot, PerplexityBot) |
| 2 | **sitemap.xml** | `public/sitemap.xml` | 8 URL: /, /home, /blog/1-6 |
| 3 | **Canonical URL** | `index.html` | `<link rel="canonical">` |
| 4 | **Hreflang** | `index.html` | en, tr, x-default |
| 5 | **Open Graph image** | `index.html` | og:image, og:image:width/height/alt, og:site_name, og:locale |
| 6 | **Twitter Cards** | `index.html` | summary_large_image, twitter:site, twitter:image |
| 7 | **DNS Prefetch** | `index.html` | api.emailjs.com, n8n.botfusions.com |
| 8 | **Theme Color** | `index.html` | #000000 |
| 9 | **Blog Dynamic Meta** | `BlogDetailPage.tsx` | useEffect ile title, description, og:title, og:description, canonical guncelleniyor |
| 10 | **BlogPosting Schema** | `BlogDetailPage.tsx` | JSON-LD: headline, description, datePublished, author, publisher |
| 11 | **FAQPage Schema** | `FAQSection.tsx` | JSON-LD: 5 soru/cevap structured data |
| 12 | **Image Lazy Loading** | `TestimonialsSection.tsx` | `loading="lazy"` + width/height |

### Pre-existing SEO Features

| Feature | File | Detail |
|---------|------|--------|
| Organization JSON-LD | `index.html` | Schema.org Organization with address, contact, sameAs |
| GEO Meta Tags | `index.html` | geo.region (TR-34), geo.placename (Istanbul), geo.position, ICBM |
| Open Graph base | `index.html` | og:type, og:url, og:title, og:description |
| CSP Headers | `index.html` | Content-Security-Policy, X-Frame-Options, X-Content-Type-Options |
| LLM Context | `HomePage.tsx` | Hidden microdata for AI search engines (GEO optimization) |
| Semantic HTML | Components | article, section, nav, footer, main, proper heading hierarchy |
| Font Preconnect | `index.html` | Google Fonts preconnect |

### Deployment Config (Netlify)

| Feature | File | Detail |
|---------|------|--------|
| SPA Routing | `netlify.toml` | `/* -> /index.html` (status 200) |
| Security Headers | `netlify.toml` | X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, X-XSS-Protection |
| Asset Caching | `netlify.toml` | `/assets/*` max-age=31536000 immutable |

### Pending / Recommended

| # | Item | Priority | Note |
|---|------|----------|------|
| 1 | `og-image.png` (1200x630px) | High | `public/og-image.png` olarak eklenmeli |
| 2 | WebSite JSON-LD (SearchAction) | Medium | Site ici arama eklenirse |
| 3 | BreadcrumbList JSON-LD | Medium | Navigasyon yapisi icin |
| 4 | LocalBusiness JSON-LD | Low | Calisma saatleri, fiyat araligi |

---

**Last Audit Date:** February 6, 2026
