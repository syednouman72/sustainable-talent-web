# Animation Enhancement Guide

## Overview
The site now features premium, enterprise-grade animations that enhance user experience without overwhelming the interface. All animations respect user preferences and include reduced-motion support.

---

## ✨ Global Animation System

### Core Features
- **Reveal on Scroll**: Elements fade in and slide up as they enter the viewport
- **Stagger Delays**: Sequential animations for grouped elements
- **Parallax Effects**: Subtle depth on hero backgrounds
- **Micro-interactions**: Hover states, magnetic buttons, and card tilts
- **Counter Animations**: Numbers count up when they enter view
- **Smooth Transitions**: All interactive elements have fluid animations

---

## 🎭 Animation Classes

### Reveal Animations
```html
<!-- Basic reveal (fade + slide up) -->
<div class="reveal">Content</div>

<!-- Scale-in variant -->
<div class="reveal scale-in">Content</div>

<!-- Slide from left -->
<div class="reveal slide-left">Content</div>

<!-- Slide from right -->
<div class="reveal slide-right">Content</div>
```

### Hover Effects
```html
<!-- Float animation -->
<div class="float-slow">Slow floating element</div>
<div class="float-medium">Medium floating element</div>
<div class="float-fast">Fast floating element</div>

<!-- Zoom on hover (for images) -->
<div class="zoom-on-hover">
  <img src="..." alt="..." />
</div>
```

### Status Indicators
```html
<!-- Pulsing glow (for status badges) -->
<span class="pulse-glow">Live</span>

<!-- Shimmer loading effect -->
<div class="shimmer">Loading...</div>
```

### CTAs & Highlights
```html
<!-- Subtle bounce for CTAs -->
<button class="btn primary bounce-subtle">Get Started</button>

<!-- Gradient animation -->
<div class="gradient-animate">Animated background</div>
```

### Data Attributes
```html
<!-- Parallax backgrounds -->
<div data-parallax="0.3">Background element</div>
<!-- Speed: 0.1 (subtle) to 1.0 (pronounced) -->

<!-- Counter animation -->
<div class="num" data-counter="98">98%</div>
```

---

## 🎨 Animation Timings

### Durations
- **Fast**: 0.2s - 0.3s (buttons, links)
- **Medium**: 0.4s - 0.6s (cards, modals)
- **Slow**: 0.8s - 1.0s (reveals, page transitions)

### Easing Functions
- **Primary**: `cubic-bezier(0.16, 1, 0.3, 1)` - Smooth, premium feel
- **Standard**: `ease` - Default transitions
- **Elastic**: `ease-in-out` - Playful bounces

---

## 🛠 Interactive Enhancements

### Enabled by Default (Desktop)
1. **Card Tilt**: 3D perspective on hover
2. **Magnetic Buttons**: Subtle movement toward cursor
3. **Nav Underlines**: Smooth sliding underline effect
4. **Image Zoom**: Scale up on hover
5. **Parallax Scroll**: Background movement

### Mobile Optimizations
- Card tilt disabled (performance)
- Magnetic buttons disabled (no cursor)
- Reduced animation complexity
- Touch-optimized interactions

---

## ⚡ Performance Features

### Hardware Acceleration
- All transforms use `translateZ(0)` or `translate3d()`
- GPU-accelerated properties (transform, opacity)
- Will-change hints for smoother animations

### Optimization Techniques
- `requestAnimationFrame` for scroll effects
- IntersectionObserver for reveals (not scroll events)
- Debouncing on continuous events
- Minimal reflows and repaints

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  /* All animations respect user preferences */
  /* Durations reduced to 0.01ms */
  /* Reveals show immediately */
}
```

---

## 📋 Implementation Checklist

### For New Pages
- [ ] Add `.reveal` to key sections
- [ ] Use `.scale-in` for cards and features
- [ ] Add `.slide-left` / `.slide-right` for two-column layouts
- [ ] Include `data-counter` on stat numbers
- [ ] Add `.float-medium` to hero images
- [ ] Use `.pulse-glow` for live indicators

### For New Components
- [ ] Add hover transitions (0.3s ease)
- [ ] Include active states for buttons
- [ ] Use `.card-glass` for elevated surfaces
- [ ] Apply `.nav-link` for navigation items
- [ ] Add `.zoom-on-hover` for image galleries

---

## 🎯 Best Practices

### Do's ✅
- Use subtle animations (10-30px movement)
- Stack animations with stagger delays
- Match animation style across the site
- Test on both desktop and mobile
- Include hover states on all interactive elements

### Don'ts ❌
- Avoid animations longer than 1 second
- Don't animate on scroll continuously
- Never block interactions with animations
- Don't use too many simultaneous animations
- Avoid excessive movement on mobile

---

## 🔧 Customization

### Adjust Animation Speed
Edit `src/styles/global.css`:
```css
.reveal {
  transition: opacity 0.8s ...; /* Change duration */
}
```

### Disable Specific Effects
```javascript
// In AnimationEnhancer.astro, comment out:
// initCardTilt();
// initMagneticButtons();
```

### Add New Animation
1. Define in `src/styles/global.css`
2. Add utility class
3. Document in this guide
4. Test across browsers

---

## 📱 Browser Support

### Full Support
- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅

### Fallback Behavior
- Older browsers show content without animations
- Graceful degradation ensures functionality
- No JavaScript errors or broken layouts

---

## 🚀 Performance Metrics

### Target Benchmarks
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s
- Cumulative Layout Shift: < 0.1
- Animation frame rate: 60 FPS

### Monitoring
```javascript
// Check animation performance
window.addEventListener('load', () => {
  const entries = performance.getEntriesByType('paint');
  console.log('Paint metrics:', entries);
});
```

---

## 📚 Examples in Use

### Home Page
- Hero section: Parallax background, scale-in reveal
- Stats: Counter animations on scroll
- Product frame: Float animation, hover tilt
- Logo marquee: Smooth scaling on hover
- CTA buttons: Magnetic effect, bounce animation

### Platform Page
- Tab switching: Fade transitions
- Feature cards: Stagger reveals
- Workflow diagram: Sequential reveals

### Careers Page
- Job cards: Hover lift effect
- Filter buttons: Smooth state changes
- Modal: Fade-in-up entrance

---

## 🆘 Troubleshooting

### Animations Not Working
1. Check if AnimationEnhancer is in layout
2. Verify `.reveal` class is applied
3. Ensure JavaScript is enabled
4. Check browser console for errors

### Performance Issues
1. Reduce number of simultaneous animations
2. Disable tilt/magnetic on mobile
3. Use `will-change` sparingly
4. Check for memory leaks in dev tools

### Accessibility Concerns
1. Test with screen readers
2. Ensure keyboard navigation works
3. Verify reduced-motion support
4. Check color contrast during animations

---

## 🔄 Future Enhancements

### Planned Features
- [ ] View Transitions API integration
- [ ] Scroll-triggered SVG animations
- [ ] Advanced cursor following effects
- [ ] Page transition animations
- [ ] Loading state animations

### Under Consideration
- Lottie animations for illustrations
- GSAP for complex sequences
- Framer Motion for React components
- Custom scroll progress indicators

---

## 📖 Resources

### Documentation
- [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

### Inspiration
- [Awwwards](https://www.awwwards.com/)
- [CodePen Animations](https://codepen.io/topics/animation)
- [UIMovement](https://uimovement.com/)

---

**Last Updated**: January 2026  
**Maintained By**: Sustainable Talent Development Team
