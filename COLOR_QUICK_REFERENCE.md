# Color System Quick Reference

## 🎨 At a Glance

### Surfaces
```css
Pearl Gray (Light Sections)     #F5F6F8
Pure White (Main Sections)      #FFFFFF
Glass Effect                    rgba(255, 255, 255, 0.65)
```

### Text
```css
Ink (Headlines)                 #0F172A
Secondary (Body)                #475569
Muted (Labels)                  #64748B
```

### Interactive
```css
Indigo Accent (Primary)         #6366F1
Border Light                    rgba(15, 23, 42, 0.08)
```

### Gradient (Optional, Controlled)
```css
linear-gradient(135deg, #4C95A2 0%, #3D81A7 40%, #1B4FAC 100%)
```

## 🔧 Common Patterns

### Glass Card
```css
.my-card {
  background: var(--bg-glass);
  border: 1px solid var(--border-light);
  border-radius: 24px;
  box-shadow: 0px 20px 40px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
```

### Primary Button
```css
.my-button {
  background: var(--accent);
  color: white;
  border-radius: 999px;
  padding: 11px 20px;
  box-shadow: 0 16px 30px rgba(99, 102, 241, 0.18);
}

.my-button:hover {
  filter: brightness(0.95);
  transform: translateY(-1px);
}
```

### Section Background
```css
/* White section */
.section {
  background: var(--bg-section);
}

/* Light section (alternating) */
.section.light {
  background: var(--bg-page);
}
```

### Text Hierarchy
```css
/* Headline */
h1, h2, h3 {
  color: var(--text-primary);
}

/* Body text */
p {
  color: var(--text-secondary);
}

/* Labels, hints */
.label, .hint {
  color: var(--text-muted);
}
```

### Hover Link
```css
a {
  color: var(--text-secondary);
  position: relative;
}

a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.3s ease;
}

a:hover {
  color: var(--accent);
}

a:hover::after {
  width: 100%;
}
```

## 🚫 Don't Use

- ❌ Pure black (#000000)
- ❌ Heavy gradients as backgrounds
- ❌ Neon colors or glows
- ❌ Multiple competing accent colors
- ❌ Dark sections (except if needed later)

## ✅ Do Use

- ✓ Light surfaces everywhere
- ✓ Indigo for primary actions only
- ✓ Subtle borders and shadows
- ✓ Glass effect for cards
- ✓ Simple hover states
- ✓ Generous whitespace

---

**Remember:** Visual restraint always wins. Keep it calm, trustworthy, and enterprise-first.
