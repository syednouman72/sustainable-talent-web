# 🚀 Quick Start - Sustainable Talent Website

## What You Have

✅ **12 Complete Pages** - Fully designed and functional
✅ **Premium Design** - Glass morphism, animations, modern UI
✅ **Greenhouse Integration** - Live job listings on careers page
✅ **SEO Optimized** - Meta tags, Open Graph, structured data
✅ **Mobile Responsive** - Works on all devices
✅ **Production Ready** - Built and tested

---

## 3 Ways to Deploy

### 🟢 Option 1: Vercel (Easiest - Recommended)

```bash
# 1. Install Vercel adapter
npm install @astrojs/vercel

# 2. Update astro.config.mjs
# Change adapter from @astrojs/cloudflare to @astrojs/vercel

# 3. Deploy
vercel
```

**OR** connect your GitHub repo to Vercel dashboard (even easier!)

---

### 🔵 Option 2: Netlify

```bash
# 1. Install Netlify adapter
npm install @astrojs/netlify

# 2. Update astro.config.mjs
# Change adapter to @astrojs/netlify

# 3. Deploy
netlify deploy --prod
```

**OR** drag & drop the `dist/` folder to Netlify dashboard

---

### 🟠 Option 3: Cloudflare (Current Setup)

```bash
# 1. Get Cloudflare API token
# Visit: https://dash.cloudflare.com/profile/api-tokens

# 2. Set token
export CLOUDFLARE_API_TOKEN=your_token

# 3. Deploy
npm run build
npx wrangler deploy
```

---

## File Locations

```
📁 Pages:           src/pages/*.astro
📁 Components:      src/components/*.astro
📁 Styles:          src/styles/global.css
📁 Layout:          src/layouts/main.astro
📁 Config:          astro.config.mjs
```

---

## Key Features

### Home Page (`/`)
- Hero with TalentOS™ mockup
- Company logo marquee (Nvidia, Ford, MongoDB, etc.)
- Stats & metrics
- Case study (Nvidia)
- Portal access links

### Platform Page (`/platform`)
- Interactive feature tabs
- Workflow visualization
- Integration logos
- Security badges

### Careers Page (`/careers`)
- **Greenhouse API integration**
- Live job listings
- Department & location filters
- Direct apply links

### Contact Page (`/contact`)
- Contact form
- Location info
- Email: talent@sustainabletalent.com
- Phone: +1-645-202-2255

---

## Environment Variables

Create `.env` file if needed:

```bash
# Greenhouse (for careers page)
PUBLIC_GREENHOUSE_BOARD_TOKEN=your_token_here

# Cloudflare (if deploying to CF)
CLOUDFLARE_API_TOKEN=your_token_here
```

---

## Customization

### Change Colors
Edit `src/styles/global.css`:
```css
:root {
  --accent: #6366F1;  /* Change this */
  --bg-page: #F5F6F8; /* And this */
}
```

### Update Content
All content is in `.astro` files:
- `/src/pages/` - Page content
- `/src/components/Navigation.astro` - Menu items
- `/src/components/Footer.astro` - Footer links

### Add Analytics
Edit `src/components/Analytics.astro` - add your tracking codes

---

## Testing Checklist

Before deploying:
- [ ] Test all 12 pages
- [ ] Check mobile responsive
- [ ] Test Greenhouse job listings
- [ ] Verify portal links work
- [ ] Test contact form
- [ ] Check all navigation links
- [ ] Verify analytics tracking
- [ ] Run Lighthouse audit

---

## Troubleshooting

**Build fails?**
```bash
rm -rf node_modules .astro dist
npm install
npm run build
```

**Port in use?**
```bash
npx kill-port 3000
npm run dev
```

**Greenhouse not loading?**
- Check your `PUBLIC_GREENHOUSE_BOARD_TOKEN` is set
- Verify the token is valid
- Check browser console for errors

---

## Support

- **Astro Docs:** https://docs.astro.build
- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Cloudflare Docs:** https://developers.cloudflare.com

---

## What's Included

✅ 12 fully functional pages
✅ Modern, premium design
✅ Responsive layouts
✅ Smooth animations
✅ SEO optimization
✅ Accessibility (WCAG 2.1 AA)
✅ Performance optimized
✅ TypeScript
✅ React components
✅ Tailwind CSS
✅ shadcn/ui components

---

## Next Steps

1. Choose your deployment platform (Vercel recommended)
2. Review and customize content
3. Add your analytics tracking
4. Configure your domain
5. Deploy! 🚀

---

**Need Help?**
Read `EXPORT_GUIDE.md` for complete documentation.
Read `PAGE_INVENTORY.md` for page-by-page details.

---

**Ready to deploy? Choose your platform and follow the steps above!**
