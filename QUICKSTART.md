# ⚡ Quick Start Guide

Get your Sustainable Talent site running in 5 minutes.

---

## 🚀 Step 1: Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` 🎉

---

## ⚙️ Step 2: Configure (Optional)

### Add Google Analytics
1. Create `.env` file in project root
2. Add your GA4 Measurement ID:
   ```bash
   PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Update Greenhouse Token (if needed)
- Already set to: `sustainabletalent`
- To change: Edit `src/pages/careers.astro` line ~1077

### Configure Contact Form
- Current: Demo mode (shows success/error messages)
- Options: Email, Webflow Forms, HubSpot, API endpoint
- Details in `README.md` section 3

---

## 🏗️ Step 3: Build & Deploy

```bash
# Build for production
npm run build

# Deploy to Cloudflare
npx wrangler pages deploy dist

# OR deploy to Vercel
vercel deploy --prod

# OR deploy to Netlify
netlify deploy --prod
```

---

## 📋 What's Included

✅ **10 Pages:** Home, Platform, Solutions, Case Studies, About, Careers, Contact, Privacy, Terms, 404  
✅ **Greenhouse Jobs:** Live job board integration  
✅ **Google Analytics:** Ready to activate  
✅ **SEO Optimized:** Meta tags, sitemap, structured data  
✅ **Mobile Responsive:** Works on all devices  
✅ **Pearl-Gray Theme:** Professional enterprise design  

---

## 📞 Need Help?

- 📖 Full docs: `README.md`
- 🚀 Deployment guide: `DEPLOYMENT.md`
- ✅ Project summary: `COMPLETION_SUMMARY.md`

**Support:**
- Email: talent@sustainabletalent.com
- Phone: +1 (645) 202-2255

---

**That's it! You're ready to launch! 🎉**
