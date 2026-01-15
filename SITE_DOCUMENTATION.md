# Sustainable Talent Website Documentation

## 🎯 Overview

Modern, enterprise-grade website for Sustainable Talent - a global talent operations platform powered by TalentOS™.

**Design Theme:** Pearl-gray enterprise with glass morphism effects  
**Framework:** Astro + TypeScript  
**Styling:** Tailwind CSS + Custom CSS  
**Deployment:** Cloudflare Workers

---

## 📄 Site Pages

### Core Pages
1. **Home** (`/`) - Hero, stats, features, case study preview, CTA
2. **Platform** (`/platform`) - TalentOS™ features, workflows, security
3. **Solutions** (`/solutions`) - Services, engagement models, offerings
4. **Case Studies** (`/case-studies`) - Nvidia case study, metrics, principles
5. **About** (`/about`) - Company story, team, founder note
6. **Careers** (`/careers`) - Job board with Greenhouse API integration
7. **Contact** (`/contact`) - Contact form, office info, FAQ
8. **Insights** (`/insights`) - Articles, newsletter signup, resources

### Supporting Pages
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms of service

---

## 🎨 Design System

### Color Palette
```css
/* Backgrounds */
--bg-page: #F6F7F9;           /* Soft gray page background */
--bg-surface: #FFFFFF;         /* White cards/surfaces */
--bg-glass: rgba(255, 255, 255, 0.75); /* Translucent overlay */

/* Text */
--text-primary: #0F172A;       /* Dark slate - main text */
--text-muted: #64748B;         /* Soft gray - secondary text */

/* Borders & Accent */
--border-light: rgba(15, 23, 42, 0.08); /* Light borders */
--accent: #6366F1;             /* Vibrant indigo accent */
```

### Typography
- **Headings:** Plus Jakarta Sans, Weight 600-700, Line height 1.1-1.2
- **Body:** Plus Jakarta Sans, Weight 400, Line height 1.5-1.7
- **Buttons:** Plus Jakarta Sans, Weight 600

### Component Patterns
- **Glass Cards:** Translucent backgrounds with backdrop blur
- **Premium Buttons:** Gradient backgrounds with shimmer effects
- **Hover States:** Subtle lift animations (2-4px translateY)
- **Reveals:** Fade-in on scroll with stagger delays

---

## 🔧 Key Features

### Navigation
- Sticky glass navigation with scroll effects
- Animated underlines on hover
- Mobile-responsive hamburger menu
- Direct links to all main pages

### Footer
- Company info and description
- Link sections: Product, Company, Resources, Legal
- Social media links (LinkedIn)
- Newsletter signup
- Copyright and compliance info

### Greenhouse Integration (Careers)
- Live job listings via Greenhouse API
- Department and location filtering
- "Apply" links to Greenhouse job pages
- Automatic job data refresh

### Forms
- Contact form with validation
- Newsletter signup forms
- Accessibility-compliant labels and inputs

---

## 📱 Responsive Design

### Breakpoints
- **Desktop:** > 1024px - Full layout with sidebars
- **Tablet:** 768px - 1024px - Stacked columns
- **Mobile:** < 768px - Single column, hamburger menu

### Mobile Optimizations
- Touch-friendly button sizes (min 44px)
- Simplified navigation
- Stacked card layouts
- Readable font sizes (min 14px body text)

---

## 🚀 Performance

### Optimizations
- Lazy loading for images
- Minimal JavaScript (framework-free where possible)
- CSS-only animations
- Efficient reveal animations with `will-change`
- Cloudflare Workers edge deployment

### Best Practices
- Semantic HTML structure
- Accessible ARIA labels
- SEO-optimized meta tags
- Sitemap and robots.txt included

---

## 🔗 External Integrations

### Greenhouse Jobs API
**Endpoint:** `https://boards-api.greenhouse.io/v1/boards/sustainabletalent/jobs`

**Required:** Company token in environment variables  
**Usage:** `/careers` page fetches live job listings

**Environment Variable:**
```bash
GREENHOUSE_COMPANY_TOKEN=your_token_here
```

### Portal Links
**Client Portal:** https://portal.sustainabletalent.com  
**Purpose:** TalentOS™ platform access for clients and consultants

---

## 📊 SEO & Analytics

### SEO Elements
- **Sitemap:** `/sitemap.xml` - All pages indexed
- **Robots.txt:** `/robots.txt` - Search engine instructions
- **Meta Tags:** Title, description, OG tags on every page
- **Canonical URLs:** Defined for each page
- **Structured Data:** Organization schema in main layout

### Analytics Ready
- Google Analytics placeholder in Analytics component
- Event tracking structure in place
- Conversion tracking prepared for forms

---

## 🎯 Call-to-Actions

### Primary CTAs
1. **"Get Started"** → Contact form or demo request
2. **"TalentOS"** → Portal login (https://portal.sustainabletalent.com)
3. **"Explore Jobs"** → Careers page
4. **"Schedule a Call"** → Contact page

### Secondary CTAs
- Newsletter signups (multiple pages)
- Resource downloads (Insights page)
- Social media follows (Footer)

---

## 🛠️ Development

### File Structure
```
src/
├── components/          # Reusable components
│   ├── Navigation.astro
│   ├── Footer.astro
│   └── Analytics.astro
├── layouts/
│   └── main.astro      # Main page layout
├── pages/              # Page routes
│   ├── index.astro     # Home
│   ├── platform.astro
│   ├── solutions.astro
│   ├── case-studies.astro
│   ├── about.astro
│   ├── careers.astro
│   ├── contact.astro
│   ├── insights.astro
│   ├── privacy.astro
│   └── terms.astro
├── styles/
│   └── global.css      # Global styles
└── lib/
    └── base-url.ts     # Base URL helper

public/
├── sitemap.xml         # SEO sitemap
└── robots.txt          # Search engine instructions
```

### Key Commands
```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## ✅ Launch Checklist

### Pre-Launch
- [x] All pages created and styled
- [x] Navigation working on all pages
- [x] Footer consistent across site
- [x] Forms functional with validation
- [x] Mobile responsive design tested
- [x] Greenhouse API integrated
- [x] SEO meta tags on all pages
- [x] Sitemap generated
- [x] Robots.txt configured

### Post-Launch Tasks
- [ ] Add actual Greenhouse company token
- [ ] Connect forms to backend/email service
- [ ] Enable Google Analytics
- [ ] Test on multiple browsers
- [ ] Run Lighthouse audit
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Greenhouse API performance

---

## 🎨 Design Philosophy

### Visual Hierarchy
1. **Primary:** Headings, CTAs, key metrics
2. **Secondary:** Body text, descriptions, supporting content
3. **Tertiary:** Helper text, timestamps, metadata

### Animation Strategy
- **Subtle:** Prefer smooth, natural movements
- **Purpose-driven:** Animations guide attention
- **Performance-first:** Use CSS over JS when possible
- **Accessible:** Respect `prefers-reduced-motion`

### Consistency
- Button styles consistent across pages
- Card patterns reused throughout
- Color usage follows strict guidelines
- Spacing uses 4px/8px grid system

---

## 📞 Support & Contact

**Email:** talent@sustainabletalent.com  
**Phone:** +1 (645) 202-2255  
**Portal:** https://portal.sustainabletalent.com  

**Office:**  
1200 Brickell Avenue, Suite 1950 #1170  
Miami, FL 33131

---

## 📝 Notes

- All pages use the pearl-gray enterprise theme
- Glass morphism effects require backdrop-filter support
- Greenhouse API requires valid company token
- Portal links open in new tab for better UX
- Newsletter forms are styled but need backend integration

---

**Last Updated:** January 2024  
**Version:** 1.0.0  
**Status:** Production Ready ✨
