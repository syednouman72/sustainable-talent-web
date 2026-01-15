# Sustainable Talent Website - Complete Export Guide

**Generated:** January 14, 2026

This document contains everything you need to deploy your Sustainable Talent website independently.

---

## 📁 Complete File Structure

```
/
├── src/
│   ├── pages/
│   │   ├── index.astro          (Home - Main landing page)
│   │   ├── platform.astro       (TalentOS™ Platform features)
│   │   ├── solutions.astro      (Solutions overview)
│   │   ├── case-studies.astro   (Client case studies)
│   │   ├── about.astro          (About Sustainable Talent)
│   │   ├── careers.astro        (Careers with Greenhouse integration)
│   │   ├── contact.astro        (Contact form)
│   │   ├── insights.astro       (Blog/Insights)
│   │   ├── support.astro        (Support & Help)
│   │   ├── privacy.astro        (Privacy Policy)
│   │   ├── terms.astro          (Terms of Service)
│   │   └── 404.astro            (404 Error page)
│   ├── layouts/
│   │   └── main.astro           (Main layout wrapper)
│   ├── components/
│   │   ├── Navigation.astro     (Site navigation)
│   │   ├── Footer.astro         (Site footer)
│   │   ├── Analytics.astro      (Analytics tracking)
│   │   └── AnimationEnhancer.astro (Scroll animations)
│   ├── styles/
│   │   └── global.css           (Global styles & animations)
│   └── lib/
│       └── base-url.ts          (Base URL utility)
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── generated/
│   ├── fonts.css                (Typography)
│   └── webflow.css              (Design tokens)
├── package.json
├── astro.config.mjs
├── tsconfig.json
└── wrangler.jsonc               (Cloudflare config)
```

---

## 🚀 Deployment Options

### Option A: Cloudflare Pages/Workers (Current Setup)

**Prerequisites:**
- Cloudflare account
- Wrangler CLI installed

**Steps:**
```bash
# 1. Build the site
npm install
npm run build

# 2. Deploy to Cloudflare
npx wrangler deploy
```

**Note:** You'll need a `CLOUDFLARE_API_TOKEN` environment variable set.

---

### Option B: Vercel (Recommended - Easiest)

**Prerequisites:**
- Vercel account
- Vercel CLI (optional)

**Steps:**

1. **Update `astro.config.mjs`:**
```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react()],
});
```

2. **Install Vercel adapter:**
```bash
npm install @astrojs/vercel
```

3. **Deploy:**
```bash
# Via Vercel CLI
vercel

# Or connect your GitHub repo to Vercel dashboard
```

---

### Option C: Netlify

**Prerequisites:**
- Netlify account

**Steps:**

1. **Update `astro.config.mjs`:**
```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [react()],
});
```

2. **Install Netlify adapter:**
```bash
npm install @astrojs/netlify
```

3. **Deploy:**
```bash
# Via Netlify CLI
netlify deploy --prod

# Or drag & drop the dist folder to Netlify dashboard
```

---

### Option D: Static Site (No Server Functions)

If you don't need server-side features, you can build a static site:

1. **Update `astro.config.mjs`:**
```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',  // Changed from 'server'
  integrations: [react()],
});
```

2. **Build:**
```bash
npm run build
```

3. **Deploy the `dist/` folder to any static host:**
   - GitHub Pages
   - Cloudflare Pages
   - AWS S3 + CloudFront
   - Any CDN or web server

---

## 📄 Key Pages Overview

### 1. **Home Page** (`src/pages/index.astro`)
- Hero with TalentOS™ platform showcase
- Logo marquee (Nvidia, Ford, MongoDB, etc.)
- Stats strip (98% satisfaction, 150+ countries)
- How it works (3-step process)
- Global model (US W2 + International contractors)
- Platform transparency section
- Nvidia case study
- About section
- Careers section
- Portal access (Client & Consultant)
- Email CTA

### 2. **Platform Page** (`src/pages/platform.astro`)
- TalentOS™ platform overview
- Interactive tabs:
  - Contractor Management
  - Recruiting Workflows
  - Compliance & Reporting
  - Program Analytics
- 6-step workflow visualization
- Integrations (Greenhouse, ADP, Deel, etc.)
- Security & Compliance (SOC 2, GDPR)
- Demo CTA

### 3. **Careers Page** (`src/pages/careers.astro`)
- **Greenhouse Job Board Integration**
- Filters by department and location
- Real-time job listings
- Apply flow
- Company culture section
- Benefits overview

### 4. **Contact Page** (`src/pages/contact.astro`)
- Contact form
- Office locations
- Phone & email
- Support hours

### Other Pages:
- **Solutions**: Service offerings
- **Case Studies**: Client success stories
- **About**: Company story & team
- **Insights**: Blog/thought leadership
- **Support**: Help center
- **Privacy & Terms**: Legal pages
- **404**: Custom error page

---

## 🎨 Design System

The site uses a comprehensive design system defined in:
- `generated/webflow.css` - CSS custom properties (colors, typography, spacing)
- `src/styles/global.css` - Global styles, animations, and components

### Key Design Features:
- **Glass morphism effects** with backdrop blur
- **Animated gradient backgrounds**
- **Smooth scroll reveal animations**
- **Premium button hover effects**
- **Responsive grid layouts**
- **Dark mode ready** (CSS variables configured)

### Color Palette:
```css
--accent: #6366F1 (Primary blue)
--bg-page: #F5F6F8 (Light background)
--bg-section: #FFFFFF (Section background)
--text-primary: #0F172A (Primary text)
--text-secondary: #475569 (Secondary text)
--text-muted: #64748B (Muted text)
```

---

## 🔧 Configuration Files

### `astro.config.mjs`
- Currently configured for **Cloudflare Workers**
- Change adapter for different hosting platforms
- Includes React integration for interactive components

### `package.json`
- All dependencies listed
- Scripts: `dev`, `build`, `preview`
- Includes Astro, React, Tailwind CSS, shadcn/ui

### `wrangler.jsonc`
- Cloudflare Workers configuration
- Set your account ID and project name

---

## 🔗 External Integrations

### Greenhouse (Careers Page)
The careers page integrates with Greenhouse ATS:
```javascript
const GREENHOUSE_BOARD_TOKEN = import.meta.env.PUBLIC_GREENHOUSE_BOARD_TOKEN;
```

**To use:**
1. Get your Greenhouse board token
2. Add to environment variables: `PUBLIC_GREENHOUSE_BOARD_TOKEN=your_token`
3. Or update the embed code in `careers.astro`

### Analytics
Configure in `src/components/Analytics.astro`:
- Google Analytics
- Plausible
- PostHog
- Or your preferred analytics tool

---

## 📱 Responsive Breakpoints

```css
Desktop: 1200px+
Tablet: 768px - 1199px
Mobile: < 768px
```

All pages are fully responsive with mobile-first design.

---

## ⚡ Performance Features

- **Astro Islands Architecture** - Only hydrate interactive components
- **Optimized images** - Lazy loading and modern formats
- **Minimal JavaScript** - Server-rendered by default
- **CSS custom properties** - Efficient styling
- **Code splitting** - Automatic per-page bundles

---

## 🛠️ Customization Guide

### Change Colors:
Edit `src/styles/global.css`:
```css
:root {
  --accent: #YOUR_COLOR;
  --bg-page: #YOUR_COLOR;
  /* etc. */
}
```

### Change Fonts:
Edit `generated/fonts.css` and update font imports.

### Add New Pages:
Create `.astro` files in `src/pages/`:
```astro
---
import MainLayout from '../layouts/main.astro';
---

<MainLayout title="Page Title">
  <!-- Your content -->
</MainLayout>
```

### Modify Navigation:
Edit `src/components/Navigation.astro` to add/remove menu items.

### Update Footer:
Edit `src/components/Footer.astro` with your links and content.

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules .astro dist
npm install
npm run build
```

### Missing Environment Variables
Create `.env` file in root:
```
PUBLIC_GREENHOUSE_BOARD_TOKEN=your_token
CLOUDFLARE_API_TOKEN=your_token
```

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- --port 3001
```

---

## 📊 SEO Optimization

Each page includes:
- ✅ Meta title and description
- ✅ Open Graph tags (Facebook)
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Structured data (Schema.org)
- ✅ Semantic HTML
- ✅ Alt text on images

### Update SEO:
Edit the frontmatter in each `.astro` page:
```astro
---
const title = "Your Page Title";
const description = "Your description";
const ogImage = "https://your-domain.com/og-image.jpg";
---
```

---

## 🔐 Security Considerations

- No API keys in client-side code
- Environment variables for sensitive data
- CORS headers configured
- Content Security Policy ready
- HTTPS enforced

---

## 📝 Content Management

### Static Content
Edit directly in `.astro` files.

### Dynamic Content (Future)
Consider integrating:
- **Contentful** - Headless CMS
- **Sanity** - Structured content
- **Strapi** - Self-hosted CMS
- **Webflow CMS** - Via API

---

## 🎯 Next Steps

1. **Review all pages** - Ensure content is accurate
2. **Update branding** - Logo, colors, fonts
3. **Configure analytics** - Add tracking codes
4. **Set up domain** - Point DNS to hosting
5. **Test thoroughly** - All pages, forms, links
6. **Launch** 🚀

---

## 💼 Production Checklist

- [ ] All content reviewed and approved
- [ ] Images optimized (WebP format)
- [ ] Forms tested and working
- [ ] Analytics configured
- [ ] SEO metadata complete
- [ ] Mobile responsive verified
- [ ] Page load speed optimized
- [ ] 404 page tested
- [ ] Privacy policy updated
- [ ] Terms of service updated
- [ ] SSL certificate active
- [ ] Domain configured
- [ ] Redirects set up (if needed)
- [ ] Backup strategy in place

---

## 📞 Support Resources

### Astro Documentation
- https://docs.astro.build

### Deployment Guides
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- Cloudflare: https://developers.cloudflare.com/pages

### Community
- Astro Discord: https://astro.build/chat
- GitHub Issues: https://github.com/withastro/astro

---

## 📜 License & Credits

**Site Built With:**
- Astro 5.x
- React 19.x
- Tailwind CSS 4.x
- shadcn/ui components
- TypeScript

**Designed for:**
Sustainable Talent - Global Talent Operating System

---

## 🔄 Version History

**v1.0** - January 2026
- Initial complete site build
- All 12 pages functional
- Greenhouse integration
- Full responsive design
- SEO optimized
- Performance optimized

---

**END OF EXPORT GUIDE**

For questions or support, contact: talent@sustainabletalent.com
