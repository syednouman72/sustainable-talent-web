# 🚀 Pre-Launch Checklist

Complete this checklist before going live to ensure everything is perfect.

---

## ✅ Content Review

### Text & Copy
- [ ] All placeholder text replaced with final copy
- [ ] No "Lorem ipsum" or dummy text remaining
- [ ] Brand name spelled consistently: "Sustainable Talent"
- [ ] Company contact info verified (email, phone, address)
- [ ] All CTAs have clear, compelling text
- [ ] Legal pages reviewed by legal team (Privacy, Terms)
- [ ] Grammar and spelling checked (Grammarly, manual review)

### Images & Media
- [ ] All images have descriptive alt text
- [ ] Logo appears correctly on all pages
- [ ] Favicon displays correctly (check multiple browsers)
- [ ] Images optimized for web (< 200KB each)
- [ ] No broken image links
- [ ] All icons/SVGs rendering properly

---

## ✅ Functionality Testing

### Navigation
- [ ] All nav links work correctly
- [ ] Mobile menu opens and closes smoothly
- [ ] Sticky navigation works on scroll
- [ ] Logo links to homepage
- [ ] Active page highlighted in nav (if applicable)

### Pages
- [ ] Homepage loads correctly
- [ ] Platform page - tabs switch properly
- [ ] Solutions page - toggles work
- [ ] Case Studies page - content displays
- [ ] About page - team section loads
- [ ] Careers page - Greenhouse jobs loading
- [ ] Contact page - form validation works
- [ ] Privacy page - all sections accessible
- [ ] Terms page - navigation works
- [ ] 404 page - displays for broken URLs

### Forms
- [ ] Contact form validates required fields
- [ ] Email field accepts valid emails only
- [ ] Success message displays on submit
- [ ] Error handling works correctly
- [ ] Form data goes to correct destination (email/CRM)
- [ ] Checkbox validation works (Terms acceptance)

### Greenhouse Integration
- [ ] Jobs loading from correct board token
- [ ] Job cards display properly
- [ ] Filters work (search, department, type, location)
- [ ] Job modal opens with full details
- [ ] Apply button links to correct Greenhouse page
- [ ] No console errors related to API calls

---

## ✅ SEO & Analytics

### Meta Tags
- [ ] Every page has unique `<title>`
- [ ] Every page has unique meta description
- [ ] Meta descriptions are 120-160 characters
- [ ] Keywords relevant to page content
- [ ] Canonical URLs set correctly

### Open Graph
- [ ] OG title, description set on all pages
- [ ] OG images created (1200x630px)
- [ ] OG images uploaded to public folder
- [ ] Test with Facebook Sharing Debugger
- [ ] Test with LinkedIn Post Inspector
- [ ] Test with Twitter Card Validator

### Structured Data
- [ ] Organization schema includes correct info
- [ ] Contact information matches schema
- [ ] No errors in Google Rich Results Test
- [ ] JobPosting schema on Careers page (optional)

### Sitemap & Robots
- [ ] Sitemap.xml includes all pages
- [ ] Sitemap URLs use production domain
- [ ] Robots.txt allows all crawlers
- [ ] No pages accidentally blocked

### Google Analytics
- [ ] GA4 Measurement ID added to `.env`
- [ ] Analytics tracking in production build
- [ ] Test pageview events in Real-Time report
- [ ] Goals/conversions configured (optional)

---

## ✅ Performance

### Load Speed
- [ ] Homepage loads in < 3 seconds
- [ ] Images lazy-load below the fold
- [ ] No render-blocking resources
- [ ] Fonts load without FOUT (Flash of Unstyled Text)
- [ ] JavaScript executes without errors

### PageSpeed Insights
- [ ] Desktop score > 90
- [ ] Mobile score > 80
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Total Blocking Time < 200ms

### File Sizes
- [ ] HTML pages < 50KB each
- [ ] JavaScript bundle < 100KB
- [ ] CSS files < 50KB
- [ ] Images optimized (WebP/AVIF if possible)
- [ ] Total page weight < 500KB

---

## ✅ Browser & Device Testing

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Devices
- [ ] iPhone Safari
- [ ] Android Chrome
- [ ] iPad Safari
- [ ] Samsung Internet Browser

### Responsive Breakpoints
- [ ] 320px (small mobile)
- [ ] 375px (iPhone SE)
- [ ] 768px (tablet)
- [ ] 1024px (small desktop)
- [ ] 1440px (large desktop)
- [ ] 1920px (full HD)

---

## ✅ Accessibility (WCAG 2.1 AA)

### Keyboard Navigation
- [ ] Tab through entire site without mouse
- [ ] All interactive elements focusable
- [ ] Focus indicators visible
- [ ] Skip to main content link (optional)
- [ ] No keyboard traps

### Screen Readers
- [ ] Test with VoiceOver (Mac) or NVDA (Windows)
- [ ] All images have alt text
- [ ] Form labels properly associated
- [ ] ARIA labels on icon buttons
- [ ] Headings in logical order (h1 → h2 → h3)

### Color & Contrast
- [ ] Text contrast ratio ≥ 4.5:1
- [ ] Large text contrast ratio ≥ 3:1
- [ ] Links distinguishable from body text
- [ ] Color not sole means of conveying info
- [ ] Test with color blindness simulator

---

## ✅ Security

### HTTPS
- [ ] SSL certificate installed
- [ ] HTTP redirects to HTTPS
- [ ] Mixed content warnings resolved
- [ ] Valid SSL chain (check with SSL Labs)

### Headers
- [ ] X-Frame-Options: DENY
- [ ] X-Content-Type-Options: nosniff
- [ ] X-XSS-Protection: 1; mode=block
- [ ] Content-Security-Policy configured
- [ ] Referrer-Policy set

### Forms & Data
- [ ] Form submissions over HTTPS
- [ ] No sensitive data in URLs
- [ ] CSRF protection (if using API)
- [ ] Rate limiting on forms (if applicable)

---

## ✅ Legal & Compliance

### Privacy
- [ ] Privacy Policy updated with current date
- [ ] Cookie banner/notice (if EU traffic)
- [ ] GDPR compliance (if applicable)
- [ ] CCPA compliance (if California traffic)
- [ ] Data processing documented

### Terms
- [ ] Terms of Service reviewed
- [ ] Arbitration clause reviewed (if US)
- [ ] Refund/cancellation policy clear
- [ ] Copyright notice in footer
- [ ] Trademark notices (if applicable)

---

## ✅ Third-Party Integrations

### Greenhouse
- [ ] Board token verified
- [ ] Jobs displaying correctly
- [ ] Apply links working
- [ ] No CORS errors in console

### Google Services
- [ ] Analytics tracking
- [ ] Search Console verified
- [ ] Sitemap submitted
- [ ] Tag Manager (if using)

### Email/CRM
- [ ] Contact form emails delivering
- [ ] Email templates formatted correctly
- [ ] Reply-to address correct
- [ ] Auto-responder working (if applicable)

---

## ✅ Deployment

### Pre-Deploy
- [ ] All changes committed to git
- [ ] Production build succeeds: `npm run build`
- [ ] No build warnings or errors
- [ ] Environment variables configured
- [ ] .env.production created (if needed)

### DNS & Domain
- [ ] Domain purchased/renewed
- [ ] DNS A records pointing to hosting
- [ ] www subdomain configured
- [ ] SSL certificate provisioned
- [ ] Email DNS records (MX, SPF, DKIM)

### Hosting Platform
- [ ] Account created (Cloudflare/Vercel/Netlify)
- [ ] Project deployed successfully
- [ ] Custom domain connected
- [ ] Environment variables added
- [ ] Build logs checked for errors

---

## ✅ Post-Launch

### Immediate (Within 1 Hour)
- [ ] Visit site on production URL
- [ ] Test all major pages
- [ ] Submit contact form (test email)
- [ ] Check analytics tracking
- [ ] Share on social media (test OG cards)

### First 24 Hours
- [ ] Monitor Google Analytics
- [ ] Check Search Console for errors
- [ ] Test site from different locations/devices
- [ ] Review server logs for errors
- [ ] Monitor uptime (UptimeRobot, Pingdom)

### First Week
- [ ] Submit to Google for indexing
- [ ] Share on LinkedIn, Twitter
- [ ] Email announcement to contacts
- [ ] Monitor job applications (Greenhouse)
- [ ] Review form submissions

---

## ✅ Monitoring Setup

### Uptime Monitoring
- [ ] UptimeRobot configured (free)
- [ ] Email alerts on downtime
- [ ] Check frequency: 5 minutes
- [ ] Status page (optional)

### Error Tracking
- [ ] Sentry or similar service (optional)
- [ ] JavaScript error tracking
- [ ] Error alerts configured
- [ ] Source maps uploaded

### Analytics Alerts
- [ ] Traffic spike alerts
- [ ] Zero traffic alerts (downtime indicator)
- [ ] Conversion tracking (form submits, job applies)
- [ ] Weekly/monthly reports configured

---

## 🎯 Final Checks Before Launch

**Critical Path Test:**
1. ✅ Visit homepage
2. ✅ Click "Platform" → Verify tabs work
3. ✅ Click "Careers" → Jobs load
4. ✅ Click a job → Modal opens
5. ✅ Click "Apply" → Redirects to Greenhouse
6. ✅ Go to "Contact" → Submit form → Success message
7. ✅ Check footer links → Privacy & Terms pages load

**Performance:**
- [ ] Run Lighthouse audit (score > 90)
- [ ] Run PageSpeed Insights
- [ ] Check mobile load time

**SEO:**
- [ ] Search "site:sustainabletalent.com" on Google
- [ ] Verify meta descriptions in search results
- [ ] Check OG cards on social media

---

## 🚨 Show Stoppers (Must Fix)

These issues MUST be resolved before launch:

- ❌ Contact form not working
- ❌ Greenhouse jobs not loading
- ❌ SSL certificate errors
- ❌ Mobile site broken
- ❌ JavaScript console errors
- ❌ Missing Privacy Policy or Terms
- ❌ 404 errors on main nav links
- ❌ Broken images on homepage

---

## ✅ Launch Day Protocol

### T-Minus 1 Hour
- [ ] Final build: `npm run build`
- [ ] Deploy to production
- [ ] Clear CDN cache (if applicable)
- [ ] Verify production URL loads

### T-Minus 30 Minutes
- [ ] Test all critical flows
- [ ] Check analytics real-time
- [ ] Verify form submissions
- [ ] Test on mobile device

### Launch! 🚀
- [ ] Announce on social media
- [ ] Email announcement
- [ ] Update LinkedIn company page
- [ ] Submit to Google Search Console

### T-Plus 1 Hour
- [ ] Monitor analytics dashboard
- [ ] Check for error spikes
- [ ] Review form submissions
- [ ] Respond to any issues immediately

---

## 📞 Emergency Contacts

**If Something Goes Wrong:**
- Hosting Support: [Your provider's support]
- DNS Provider: [Your DNS provider]
- Developer: [Your contact info]
- Greenhouse Support: support@greenhouse.io

---

## 🎉 You're Ready!

Once all items are checked, you're good to launch!

**Last reminder:**
- Backup everything before deploying
- Have rollback plan ready
- Monitor closely for first 24 hours
- Celebrate! 🎊

---

**Launch Date:** ___________________  
**Launched By:** ___________________  
**Status:** ___________________
