# Deployment Guide - Sustainable Talent

Complete guide for deploying your site to production.

---

## 🚀 Pre-Deployment Checklist

Before deploying, ensure you've completed:

### 1. Environment Variables
- [ ] Google Analytics ID added to `.env`
- [ ] Greenhouse token verified in `src/pages/careers.astro`
- [ ] Contact form integration configured (if applicable)

### 2. Content Review
- [ ] All placeholder text replaced with final copy
- [ ] Images optimized and uploaded
- [ ] Open Graph images created (1200x630px) for social sharing
- [ ] Contact information verified (email, phone, address)

### 3. SEO Configuration
- [ ] Meta titles and descriptions customized for each page
- [ ] Sitemap (`public/sitemap.xml`) updated with production URLs
- [ ] Robots.txt configured
- [ ] Canonical URLs set correctly

### 4. Legal Pages
- [ ] Privacy Policy reviewed and updated
- [ ] Terms of Service reviewed and updated
- [ ] Links to legal pages working in footer

### 5. Testing
- [ ] All internal links working
- [ ] Forms submitting correctly
- [ ] Greenhouse jobs loading on Careers page
- [ ] Mobile responsiveness tested
- [ ] Browser compatibility checked (Chrome, Safari, Firefox, Edge)
- [ ] Accessibility tested (keyboard navigation, screen readers)

---

## 🌐 Deployment Options

### Option 1: Cloudflare Pages (Recommended)

**Why Cloudflare:**
- ⚡ Global CDN - blazing fast worldwide
- 🔒 Built-in SSL/TLS
- 🆓 Free tier with unlimited bandwidth
- 🛡️ DDoS protection included
- 📊 Web Analytics included

**Steps:**

1. **Install Wrangler CLI:**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Build your site:**
   ```bash
   npm run build
   ```

4. **Deploy:**
   ```bash
   npx wrangler pages deploy dist
   ```

5. **Set up custom domain:**
   - Go to Cloudflare Pages dashboard
   - Click "Custom domains"
   - Add `sustainabletalent.com` and `www.sustainabletalent.com`
   - Update DNS records as instructed

6. **Add environment variables:**
   - In Cloudflare Pages dashboard
   - Go to Settings → Environment variables
   - Add `PUBLIC_GA_MEASUREMENT_ID`

---

### Option 2: Vercel

**Why Vercel:**
- 🚀 Zero-config deployment
- 🔄 Git integration (auto-deploy on push)
- 🌍 Global edge network
- 📈 Built-in analytics

**Steps:**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Production deployment:**
   ```bash
   vercel --prod
   ```

5. **Add environment variables:**
   ```bash
   vercel env add PUBLIC_GA_MEASUREMENT_ID
   ```

6. **Connect to Git:**
   - Go to vercel.com/dashboard
   - Import your GitHub/GitLab repo
   - Auto-deploy on every push

---

### Option 3: Netlify

**Why Netlify:**
- 📦 Drag-and-drop deployment option
- 🔄 Git integration
- 📝 Built-in forms (no backend needed!)
- 🌐 Global CDN

**Steps:**

1. **Option A: Drag & Drop**
   - Build: `npm run build`
   - Go to app.netlify.com
   - Drag `dist/` folder to deploy

2. **Option B: Git Integration**
   - Connect GitHub/GitLab repo
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Add environment variables:**
   - Site settings → Environment variables
   - Add `PUBLIC_GA_MEASUREMENT_ID`

4. **Use Netlify Forms (Optional):**
   - Add `netlify` attribute to form in `src/pages/contact.astro`:
     ```html
     <form name="contact" method="POST" netlify>
     ```
   - Forms will automatically work - no backend needed!

---

### Option 4: Webflow Hosting

**If deploying to Webflow:**

1. **Export static files:**
   ```bash
   npm run build
   ```

2. **Upload to Webflow:**
   - Zip the `dist/` folder
   - Upload via Webflow hosting interface
   - Configure custom domain

3. **Update base URLs:**
   - Ensure all URLs use `baseUrl` from `src/lib/base-url.ts`
   - Test all internal navigation

---

## 🔧 Post-Deployment Steps

### 1. DNS Configuration

**A Records:**
```
Type: A
Name: @
Value: [Your hosting IP]
TTL: Auto
```

**CNAME Records:**
```
Type: CNAME
Name: www
Value: sustainabletalent.com
TTL: Auto
```

### 2. SSL/TLS Certificate
- Most platforms auto-provision Let's Encrypt certificates
- Verify HTTPS is working: `https://sustainabletalent.com`
- Set up redirect from HTTP to HTTPS

### 3. Google Search Console

1. **Verify ownership:**
   - Go to search.google.com/search-console
   - Add property: `https://sustainabletalent.com`
   - Verify via DNS or HTML file upload

2. **Submit sitemap:**
   - URL: `https://sustainabletalent.com/sitemap.xml`
   - Monitor indexing status

### 4. Google Analytics

1. **Create GA4 property:**
   - Go to analytics.google.com
   - Create new property
   - Copy Measurement ID (G-XXXXXXXXXX)

2. **Add to site:**
   - Update `.env` file
   - Redeploy site

3. **Verify tracking:**
   - Visit site
   - Check Real-Time reports in GA

### 5. Social Media Preview Testing

Test Open Graph images on:
- **Facebook:** developers.facebook.com/tools/debug
- **Twitter:** cards-dev.twitter.com/validator
- **LinkedIn:** linkedin.com/post-inspector

### 6. Performance Testing

Run tests on:
- **Google PageSpeed Insights:** pagespeed.web.dev
- **GTmetrix:** gtmetrix.com
- **WebPageTest:** webpagetest.org

**Target Scores:**
- PageSpeed: 90+ (Mobile & Desktop)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

---

## 🔄 Continuous Deployment (CI/CD)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        env:
          PUBLIC_GA_MEASUREMENT_ID: ${{ secrets.PUBLIC_GA_MEASUREMENT_ID }}
          
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: sustainable-talent
          directory: dist
```

---

## 🐛 Troubleshooting

### Issue: Greenhouse jobs not loading

**Solution:**
1. Verify token in `src/pages/careers.astro`
2. Check network tab for CORS errors
3. Ensure Greenhouse board is public
4. Test API directly: `https://boards-api.greenhouse.io/v1/boards/sustainabletalent/jobs`

### Issue: Analytics not tracking

**Solution:**
1. Verify `PUBLIC_GA_MEASUREMENT_ID` is set
2. Check production build (analytics disabled in dev)
3. Disable ad blockers during testing
4. Check Real-Time reports in GA (can take 24-48hrs for full data)

### Issue: Forms not submitting

**Solution:**
1. Check browser console for errors
2. Verify form action URL
3. Test with simple `mailto:` action first
4. Configure CORS if using API endpoint

### Issue: 404 errors on page refresh

**Solution:**
- Configure server to handle client-side routing
- For Cloudflare Pages: Add `_redirects` file
- For Vercel: Add `vercel.json` with rewrites
- For Netlify: Add `_redirects` file

---

## 📊 Monitoring & Maintenance

### Weekly Tasks
- [ ] Check Google Analytics for traffic/errors
- [ ] Monitor uptime (use UptimeRobot or Pingdom)
- [ ] Review Search Console for indexing issues

### Monthly Tasks
- [ ] Update Greenhouse job listings manually if needed
- [ ] Review and optimize slow pages (PageSpeed)
- [ ] Check for broken links (Screaming Frog)
- [ ] Update sitemap if new pages added

### Quarterly Tasks
- [ ] Security updates (`npm audit`, dependency updates)
- [ ] Review and update legal pages
- [ ] Competitive SEO analysis
- [ ] A/B testing on CTAs and forms

---

## 🆘 Support

**Need help?**
- 📧 Email: talent@sustainabletalent.com
- 📞 Phone: +1 (645) 202-2255

**Technical issues:**
- Check `README.md` for common solutions
- Review Astro docs: docs.astro.build
- Cloudflare support: dash.cloudflare.com

---

**Last Updated:** January 14, 2025  
**Version:** 1.0.0
