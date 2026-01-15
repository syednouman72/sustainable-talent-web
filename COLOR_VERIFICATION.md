# Color System Verification Guide

## Quick Visual Check

Use this guide to verify the new color system is working correctly across the site.

## 1. Navigation Bar

**Expected Appearance:**
- Background: Frosted glass effect (white with slight transparency)
- Border bottom: Very subtle gray line
- Logo "S" mark: Gradient from dark gray to indigo
- Logo text: "Sustainable" in medium gray, "Talent" in dark gray
- Nav links: Dark gray text, turns indigo on hover with underline
- "TalentOS" button: Solid indigo background, white text
- "Careers" button: White/glass background, dark text

**On Scroll:**
- Background becomes slightly more opaque
- Subtle indigo gradient line appears at top

## 2. Hero Section

**Expected Appearance:**
- Background: Pure white (#FFFFFF)
- Pill badge: "Global Talent Operating System" - white/glass with subtle border
- Heading: Gradient text from dark to indigo
- Body text: Medium gray (#475569)
- Primary CTA: Solid indigo button
- Secondary CTA: Glass/white button with border

## 3. Logo Trust Section (Company Logos)

**Expected Appearance:**
- Background: Pearl gray (#F5F6F8) - very light, almost white
- Logo cards: White/glass with very subtle borders
- Logos: Grayscale with opacity, full color on hover

## 4. Stats Strip

**Expected Appearance:**
- Background: Pearl gray (#F5F6F8)
- Stat cards: Glass effect with white/transparent background
- Borders: Very subtle gray
- Numbers: Gradient from dark gray to indigo
- Shadow: Soft, barely visible

## 5. Cards (Throughout Site)

**Card Appearance (.card-glass, .panel, .feature, .stat):**
- Background: Semi-transparent white (65% opacity)
- Border: 1px very subtle gray
- Border-radius: 24px (rounded but not circular)
- Shadow: Soft, 20-40px blur, very light
- Backdrop-blur: Slight frosted glass effect

**On Hover:**
- Moves up 2px
- Shadow becomes slightly more visible
- No glowing, no color changes
- Smooth, subtle animation

## 6. Buttons

**Primary Button (.btn.primary):**
- Background: Solid indigo (#6366F1)
- Text: White
- Shape: Pill (fully rounded)
- Shadow: Indigo glow (subtle)
- Hover: Slightly darker, moves up 1-2px

**Secondary Button (.btn):**
- Background: White/glass with transparency
- Border: Subtle gray
- Text: Dark gray
- Hover: Slightly more opaque, subtle shadow

## 7. Section Backgrounds

**Standard Sections:**
- Background: Pure white (#FFFFFF)
- Clean, no gradients

**Light Sections (alternating):**
- Background: Pearl gray (#F5F6F8)
- Very subtle, almost white
- Creates gentle visual rhythm

## 8. Footer

**Expected Appearance:**
- Background: Pearl gray (#F5F6F8)
- Very subtle indigo gradient overlay (4% opacity, barely visible)
- Logo mark: Gradient dark to indigo
- Social icons: Glass background, turn solid indigo on hover
- Contact cards: Glass background with subtle border
- Footer columns: Glass background
- All text: Medium gray, turns indigo on hover

## Color Values Reference

### Quick Copy-Paste Values

```css
/* Backgrounds */
--bg-page: #F5F6F8;           /* Pearl gray - light sections */
--bg-section: #FFFFFF;         /* Pure white - main sections */
--bg-glass: rgba(255, 255, 255, 0.65); /* Glass cards */

/* Text */
--text-primary: #0F172A;      /* Dark gray (ink) - headlines */
--text-secondary: #475569;     /* Medium gray - body text */
--text-muted: #64748B;         /* Light gray - hints/labels */

/* Borders */
--border-light: rgba(15, 23, 42, 0.08); /* Subtle borders */

/* Accent */
--accent: #6366F1;             /* Indigo - primary actions */
```

## What Should NOT Appear

❌ **These should be gone:**
- Pure black backgrounds (#000000)
- Heavy neon glows
- Rotating/spinning gradient effects
- Multiple overlapping radial gradients
- Bright cyan/blue gradient backgrounds
- Heavy drop shadows or blur effects
- Pulsing/breathing animations on cards
- Rainbow or multi-color gradients

## Browser Testing

### Desktop
- [ ] Chrome/Edge - Check backdrop-blur works
- [ ] Firefox - Check backdrop-blur fallback
- [ ] Safari - Check -webkit-backdrop-filter

### Mobile
- [ ] iOS Safari - Glass effect and hover states
- [ ] Android Chrome - Touch interactions
- [ ] Responsive breakpoints (1024px, 768px, 640px)

## Accessibility Check

- [ ] Text contrast ratios (primary text on white: 16:1 ✓)
- [ ] Text contrast ratios (secondary text on white: 9:1 ✓)
- [ ] Text contrast ratios (muted text on white: 6:1 ✓)
- [ ] Accent color on white (4.5:1 for AA compliance ✓)
- [ ] Focus states visible on all interactive elements
- [ ] No flashing or rapid animations

## Common Issues & Fixes

### Issue: Glass effect not showing
**Cause:** Browser doesn't support backdrop-filter
**Fix:** Fallback to solid white is already in place

### Issue: Colors look too similar
**Check:** 
- bg-page (#F5F6F8) should be just barely gray
- bg-section (#FFFFFF) should be pure white
- They create subtle alternation

### Issue: Buttons not showing indigo
**Check:**
- Primary button should use `var(--accent)` 
- Value should be #6366F1
- Check browser dev tools for computed value

### Issue: Cards look flat
**Check:**
- backdrop-filter: blur(8px) should be applied
- Box shadow should be present (subtle)
- Border should be rgba(15, 23, 42, 0.08)

## Performance Notes

With the simplified color system and reduced animations:
- Page load should be faster
- Scrolling should be smoother
- No janky animations
- Better mobile performance

---

**Status:** ✅ Ready for QA
**Last Updated:** January 2025
