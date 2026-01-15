# Sustainable Talent - Global Talent Operating System

Modern, enterprise-grade website built with Astro, React, and Tailwind CSS. Features a pearl-gray design system, live Greenhouse job integration, and comprehensive SEO optimization.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4321` to see your site.

---

## 📁 Site Structure

```
├── src/
│   ├── pages/              # All site pages
│   │   ├── index.astro     # Homepage
│   │   ├── platform.astro  # Platform/TalentOS™
│   │   ├── solutions.astro # Solutions & engagement models
│   │   ├── case-studies.astro
│   │   ├── about.astro
│   │   ├── careers.astro   # Live Greenhouse jobs
│   │   ├── contact.astro   # Contact form
│   │   ├── privacy.astro   # Privacy policy
│   │   ├── terms.astro     # Terms of service
│   │   └── 404.astro       # Custom 404 page
│   ├── components/         # Reusable components
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   └── Analytics.astro
│   ├── layouts/
│   │   └── main.astro      # Main layout with SEO
│   └── styles/
│       └── global.css      # Global styles & design tokens
├── public/
│   ├── robots.txt          # SEO crawler instructions
│   ├── sitemap.xml         # Site structure for search engines
│   └── favicon.ico         # Site icon
└── generated/
    └── webflow.css         # Webflow design tokens
```

---

## 🎨 Design System

### Color Palette (Pearl-Gray Enterprise Theme)

```css
/* Backgrounds */
--bg-page: #F5F6F8;         /* Soft pearl-gray page background */
--bg-section: #FFFFFF;       /* White sections/cards */
--bg-glass: rgba(255,255,255,0.65); /* Glass effect overlays */

/* Text */
--text-primary: #0F172A;     /* Dark slate - headlines, body */
--text-secondary: #475569;   /* Medium gray - subheads, labels */
--text-muted: #64748B;       /* Soft gray - supporting text */

/* Borders & Accent */
--border-light: rgba(15,23,42,0.08); /* Subtle borders */
--accent: #6366F1;           /* Indigo accent - CTAs, links */
```

### Typography

- **Headings:** Plus Jakarta Sans Variable, weight 600-700
- **Body:** Plus Jakarta Sans Variable, weight 400
- **Buttons:** Plus Jakarta Sans Variable, weight 600

---

## 🔧 Configuration

### 1. Greenhouse Jobs Integration

The Careers page pulls live jobs from your Greenhouse board.

**Current token:** `sustainabletalent`

**To update:**
1. Open `src/pages/careers.astro`
2. Find line ~1077:
   ```javascript
   const GREENHOUSE_TOKEN = 'sustainabletalent';
   ```
3. Replace with your board token from `https://boards.greenhouse.io/YOUR_TOKEN`

### 2. Google Analytics

**Setup:**
1. Get your GA4 Measurement ID from Google Analytics
2. Create a `.env` file in the project root:
   ```bash
   PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Analytics will automatically track pageviews in production

**Manual setup** (if not using .env):
- Edit `src/components/Analytics.astro`
- Replace `G-XXXXXXXXXX` with your ID

### 3. Contact Form Integration

The contact form currently shows demo success/error messages.

**Options to make it functional:**

#### Option A: Email (Simplest)
```html
<form action="mailto:talent@sustainabletalent.com" method="post" enctype="text/plain">
```

#### Option B: Webflow Forms
Use Webflow's native form integration if deploying to Webflow.

#### Option C: HubSpot Forms
Replace the form in `src/pages/contact.astro` with HubSpot embed code.

#### Option D: API Endpoint (Recommended)
Create `src/pages/api/contact.ts`:
```typescript
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  
  // Send email via SendGrid, Mailgun, etc.
  // Example: await sendEmail(data);
  
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
```

### 4. SEO Optimization

#### Update Meta Tags
Edit `src/layouts/main.astro` to customize default SEO:
```typescript
const { 
  title = 'Your Custom Title',
  description = 'Your description',
  ogImage = 'https://yoursite.com/og-image.jpg'
} = Astro.props;
```

#### Add Open Graph Images
1. Create 1200x630px images for social sharing
2. Place in `public/` folder
3. Update page frontmatter:
```astro
---
const ogImage = 'https://sustainabletalent.com/og-platform.jpg';
---
<MainLayout ogImage={ogImage}>
```

#### Update Sitemap
Edit `public/sitemap.xml` to change:
- Base URL (replace `sustainabletalent.com`)
- Last modified dates
- Page priorities

### 5. Domain & URLs

**When deploying to production:**
1. Update all references to `sustainabletalent.com` with your actual domain
2. Update `astro.config.mjs` if deploying to a subdirectory
3. Update `src/lib/base-url.ts` if needed

---

## 🔍 SEO Checklist

✅ **Meta Tags:** Title, description, keywords on all pages  
✅ **Open Graph:** Facebook/LinkedIn preview cards  
✅ **Twitter Cards:** Twitter preview cards  
✅ **Structured Data:** JSON-LD schema for organization  
✅ **Sitemap:** XML sitemap at `/sitemap.xml`  
✅ **Robots.txt:** Crawler instructions at `/robots.txt`  
✅ **Canonical URLs:** Prevent duplicate content  
✅ **Mobile-Friendly:** Responsive design across all devices  
✅ **Page Speed:** Optimized images, minimal JS  
✅ **Accessibility:** ARIA labels, semantic HTML, keyboard navigation  

---

## 📦 Key Features

### Navigation & Footer
- ✅ Sticky glass navigation with smooth scroll
- ✅ Consistent footer on all pages
- ✅ Mobile-responsive hamburger menu

### Pages
- ✅ **Homepage:** Hero, stats, features, case study, CTA
- ✅ **Platform:** Interactive tabs, feature showcase
- ✅ **Solutions:** Toggle content, engagement models
- ✅ **Case Studies:** Nvidia story, customer testimonials
- ✅ **About:** Team, founder note, company info
- ✅ **Careers:** Live Greenhouse jobs with filtering
- ✅ **Contact:** Form with location cards
- ✅ **Privacy Policy:** Comprehensive legal page
- ✅ **Terms of Service:** Full T&Cs
- ✅ **404 Page:** Custom error page with helpful links

### Integrations
- ✅ **Greenhouse API:** Live job listings on Careers page
- ✅ **Google Analytics:** Pageview tracking (configurable)
- ✅ **Contact Forms:** Ready for email/CRM integration

### Performance & SEO
- ✅ **Fast Loading:** Astro SSG, optimized assets
- ✅ **SEO Optimized:** Meta tags, structured data, sitemap
- ✅ **Accessible:** WCAG compliant, keyboard navigation
- ✅ **Mobile-First:** Responsive across all devices

---

## 🎨 Design Guidelines

### UI Components

**Buttons:**
```html
<a class="btn primary" href="#">Primary CTA</a>
<a class="btn" href="#">Secondary</a>
```

**Cards:**
```html
<div class="panel">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>
```

**Pills/Badges:**
```html
<div class="pill">Label</div>
```

### Color Usage
- **Primary CTA:** Use `--accent` (indigo) for main actions
- **Cards/Panels:** Use `--bg-glass` for frosted glass effect
- **Text Hierarchy:** Primary → Secondary → Muted
- **Borders:** Always use `--border-light` for consistency

---

## 🚢 Deployment

### Cloudflare (Current Setup)
```bash
npm run build
npx wrangler deploy
```

### Webflow
1. Build: `npm run build`
2. Upload `dist/` folder to Webflow hosting
3. Configure DNS and routing

### Vercel
```bash
vercel deploy
```

### Netlify
```bash
netlify deploy --prod
```

---

## 📞 Support & Contact

**Email:** talent@sustainabletalent.com  
**Phone:** +1 (645) 202-2255  
**Address:** 1200 Brickell Avenue, Suite 1950 #1170, Miami, FL 33131

---

## 📄 License

© 2025 Sustainable Talent. All Rights Reserved.

---

## 🛠️ Tech Stack

- **Framework:** Astro 5.x
- **UI Library:** React 19.x
- **Styling:** Tailwind CSS 4.x
- **Deployment:** Cloudflare Workers
- **Job Board:** Greenhouse API
- **Analytics:** Google Analytics 4 (optional)
- **Fonts:** Plus Jakarta Sans Variable (Google Fonts)

---

## 🔄 Future Enhancements

Potential additions to consider:
- [ ] Blog/News section
- [ ] Client portal login
- [ ] Chat widget (Intercom, Drift)
- [ ] Video testimonials
- [ ] Interactive calculator/ROI tool
- [ ] Resource library/downloads
- [ ] Multi-language support (i18n)

---

**Built with ❤️ by Sustainable Talent**
