# 📊 Analytics Setup Guide

Complete guide for implementing advanced analytics tracking.

---

## 🚀 Quick Setup

### Step 1: Get Google Analytics 4 ID

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new property (or use existing)
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)

### Step 2: Add to Your Site

**Create `.env` file in project root:**
```bash
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Step 3: Enable Advanced Tracking (Optional)

**Add to `src/layouts/main.astro` before `</body>`:**
```astro
---
import AdvancedAnalytics from '../components/AdvancedAnalytics.astro';
---

<body>
  <!-- ... your content ... -->
  <AdvancedAnalytics />
</body>
```

### Step 4: Build & Deploy

```bash
npm run build
npx wrangler pages deploy dist
```

---

## 📈 What Gets Tracked

### Basic Analytics (Automatic)
- ✅ Pageviews
- ✅ Session duration
- ✅ Bounce rate
- ✅ Traffic sources
- ✅ Device/browser info
- ✅ Geographic location

### Advanced Analytics (AdvancedAnalytics.astro)
- ✅ CTA button clicks
- ✅ Navigation link clicks
- ✅ Outbound link tracking
- ✅ Form submissions
- ✅ Job application clicks
- ✅ Job search queries
- ✅ Filter usage
- ✅ Scroll depth (25%, 50%, 75%, 100%)
- ✅ Video play events
- ✅ Newsletter signups
- ✅ Tab interactions
- ✅ Modal opens
- ✅ Time on page
- ✅ JavaScript errors
- ✅ Page load performance
- ✅ Custom conversion events

---

## 🎯 Events You'll See in GA4

### Engagement Events

**cta_click**
- Primary button clicks
- Event label: Button text
- Use for: Tracking conversion intents

**navigation_click**
- Main nav link clicks
- Event label: Link text
- Use for: Understanding user journey

**scroll_depth**
- Tracks 25%, 50%, 75%, 100% scroll
- Event label: Percentage
- Use for: Content engagement

**tab_click**
- Interactive tab switches (Platform page)
- Event label: Tab name
- Use for: Feature interest

### Conversion Events

**form_submit**
- Contact form submissions
- Event label: "contact_form"
- Use for: Lead generation tracking

**job_apply_click**
- Greenhouse application clicks
- Event label: Job title
- Use for: Recruiting effectiveness

**job_search**
- Career page search queries
- Event label: Search term
- Use for: Popular job interests

**newsletter_signup**
- Email newsletter subscriptions
- Event label: "newsletter"
- Use for: Marketing list growth

### Technical Events

**javascript_error**
- JS errors on the page
- Event label: Error message
- Use for: Bug detection

**page_load_time**
- Page performance metrics
- Value: Load time in ms
- Use for: Performance monitoring

---

## 📊 Setting Up Goals in GA4

### 1. Form Submission Goal

1. Go to **Configure → Events**
2. Click **Create event**
3. Name: `contact_form_submitted`
4. Conditions:
   - `event_name` equals `form_submit`
5. Mark as **Conversion**

### 2. Job Application Goal

1. Create event: `job_application_started`
2. Conditions:
   - `event_name` equals `job_apply_click`
3. Mark as **Conversion**

### 3. High Engagement Goal

1. Create event: `highly_engaged`
2. Conditions:
   - `event_name` equals `scroll_depth`
   - `event_label` equals `100%`
3. Mark as **Conversion**

---

## 🔍 Custom Reports

### Careers Page Performance

**Create Exploration:**
1. Go to **Explore**
2. Select **Blank**
3. Dimensions:
   - Job title (`event_label` from `job_apply_click`)
   - Date
4. Metrics:
   - Event count
   - Conversions
5. Filter: `event_name` contains `job`

**Shows:**
- Most applied-to jobs
- Search trends
- Filter usage patterns

### CTA Effectiveness

**Create Exploration:**
1. Dimensions:
   - Button text (`event_label` from `cta_click`)
   - Page path
2. Metrics:
   - Event count
   - Engagement rate
3. Filter: `event_name` = `cta_click`

**Shows:**
- Which CTAs get most clicks
- Best performing pages
- A/B test results

### Content Engagement

**Create Exploration:**
1. Dimensions:
   - Page path
   - Scroll depth percentage
2. Metrics:
   - Average engagement time
   - Event count
3. Filter: `event_name` = `scroll_depth`

**Shows:**
- Most engaging content
- Where users drop off
- Content optimization opportunities

---

## 🎨 Tracking Additional Events

### Add Custom Event Example

**In your component/page:**
```astro
<button onclick="trackCustomEvent()">Special Button</button>

<script>
  function trackCustomEvent() {
    gtag('event', 'special_action', {
      'event_category': 'custom',
      'event_label': 'special_button_click',
      'value': 1
    });
  }
</script>
```

### Track File Downloads

```javascript
document.addEventListener('click', (e) => {
  if (e.target.href && e.target.href.match(/\.(pdf|doc|zip)$/)) {
    gtag('event', 'file_download', {
      'event_category': 'downloads',
      'event_label': e.target.href,
      'file_name': e.target.textContent
    });
  }
});
```

### Track Email Clicks

```javascript
document.addEventListener('click', (e) => {
  if (e.target.href && e.target.href.startsWith('mailto:')) {
    gtag('event', 'email_click', {
      'event_category': 'contact',
      'event_label': e.target.href.replace('mailto:', '')
    });
  }
});
```

### Track Phone Clicks

```javascript
document.addEventListener('click', (e) => {
  if (e.target.href && e.target.href.startsWith('tel:')) {
    gtag('event', 'phone_click', {
      'event_category': 'contact',
      'event_label': e.target.href.replace('tel:', '')
    });
  }
});
```

---

## 📱 Real-Time Monitoring

### Check Real-Time Reports

1. Go to **Reports → Real-time**
2. You'll see:
   - Active users now
   - Pages being viewed
   - Events happening live
   - Traffic sources

### Test Your Events

1. Visit your site
2. Click buttons, submit forms, etc.
3. Watch Real-Time report
4. Events appear within seconds

**Tip:** Use multiple devices/browsers to see multiple active users.

---

## 🔐 Privacy & Compliance

### GDPR Compliance

**Add cookie consent banner:**
```html
<div id="cookie-banner" class="cookie-banner">
  <p>We use cookies to analyze site traffic. 
     <a href="/privacy">Privacy Policy</a>
  </p>
  <button onclick="acceptCookies()">Accept</button>
</div>

<script>
  function acceptCookies() {
    localStorage.setItem('cookies_accepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
    
    // Initialize analytics after consent
    gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  }
  
  // Check if already accepted
  if (localStorage.getItem('cookies_accepted')) {
    document.getElementById('cookie-banner').style.display = 'none';
  }
</script>
```

### Disable Analytics (User Request)

**Opt-out mechanism:**
```html
<a href="#" onclick="disableAnalytics()">Opt out of tracking</a>

<script>
  function disableAnalytics() {
    document.cookie = 'ga-disable-G-XXXXXXXXXX=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    window['ga-disable-G-XXXXXXXXXX'] = true;
    alert('Analytics disabled');
  }
</script>
```

---

## 🐛 Troubleshooting

### Events Not Showing Up

**Check:**
- ✅ GA4 Measurement ID correct in `.env`
- ✅ Site rebuilt after adding ID: `npm run build`
- ✅ Viewing production site (not localhost)
- ✅ Ad blockers disabled
- ✅ Browser console for errors
- ✅ Real-Time report (takes 24-48hrs for full reports)

### Console Errors

**"gtag is not defined"**
- Analytics script not loaded
- Check Analytics.astro is included
- Verify production build

**CORS errors on Greenhouse API**
- Expected, doesn't affect tracking
- Jobs still load correctly

---

## 📚 Resources

**Google Analytics 4:**
- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [Event Tracking Guide](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [Custom Events](https://support.google.com/analytics/answer/12229021)

**Testing Tools:**
- [Google Analytics Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/)
- [GA4 Event Builder](https://ga-dev-tools.web.app/ga4/event-builder/)

**Privacy:**
- [GDPR Compliance Guide](https://support.google.com/analytics/answer/9019185)
- [Cookie Consent Tools](https://cookieconsent.osano.com/)

---

## ✅ Quick Test Checklist

After setup, test these:

- [ ] Visit homepage → Check Real-Time report
- [ ] Click primary CTA → See `cta_click` event
- [ ] Navigate to Platform → See `navigation_click`
- [ ] Submit contact form → See `form_submit`
- [ ] Go to Careers → See page view
- [ ] Search for job → See `job_search`
- [ ] Click Apply → See `job_apply_click`
- [ ] Scroll to bottom → See `scroll_depth` at 100%

**All working?** You're tracking like a pro! 🎉

---

## 🎯 Next Steps

1. ✅ Set up GA4 (basic)
2. ✅ Add AdvancedAnalytics component (optional)
3. ✅ Configure goals/conversions
4. ✅ Create custom reports
5. ✅ Set up alerts for important events
6. ✅ Review data weekly
7. ✅ Optimize based on insights

---

**Questions?** Check Google Analytics documentation or your analytics provider.
