# Image Upload & Webflow Designer Migration Guide

## 📸 Part 1: How to Upload Pictures to the About Section

### Current Image Setup
The about page currently uses these images that are already uploaded to your Webflow CDN:

**Team Member Images (Already Uploaded):**
- Stephanie Rodis: `https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/6972a98d27c24f4e165ed3e3_Stephanie%20Profile.jpg`
- Geetha Desari: `https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/6972a97e7b2ce00bca3ccde0_Geetha%20Profile.jpg`
- Jessica Oliveria: `https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/6972a97ccab062ac6bac3959_Jessica%20Profile.jpg`
- Diandra Hendershot: `https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/6972a9800f22c1dbf9c6aed5_Diandra%20Profile.jpg`
- Michele (Mitch) Gaspe: `https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/6972a9826d3d3116bb3c40d2_Mitch%20Profile.jpg`
- Jodi Kean: `https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/6972a98443c7f3c5f5ed1f3b_Jodi%20Profile.jpg`

### Option A: Upload New Images via Webflow Assets

1. **Go to Webflow Assets Manager**
   - Open your Webflow project
   - Click on "Assets" in the left sidebar (or press `A`)
   - Click "Upload" button (top right)

2. **Upload Your Images**
   - Drag and drop your images or click to browse
   - Recommended specs:
     - Format: JPG or PNG
     - Resolution: 800x800px minimum (square aspect ratio)
     - File size: Under 500KB for optimal loading
     - Quality: High quality but compressed

3. **Get the CDN URL**
   - After upload, click on the image
   - Click "Copy image address" 
   - The URL will look like: `https://cdn.prod.website-files.com/[site-id]/[file-id]_[filename].jpg`

4. **Update the Code**
   - Replace the current `src` URL in the `<img>` tag
   - Example:
   ```html
   <img src="YOUR_NEW_CDN_URL_HERE" alt="Team Member Name" loading="lazy" />
   ```

### Option B: Upload via Public Folder (Current Setup)

1. **Add images to `/public` folder**
   - Place images in the `public` directory
   - Name them clearly (e.g., `stephanie-rodis.jpg`)

2. **Reference in code**
   ```html
   <img src="/stephanie-rodis.jpg" alt="Stephanie Rodis" loading="lazy" />
   ```

3. **Deploy**
   - Images will be served from your deployed app's root

---

## 🚀 Part 2: Moving Code to Webflow Designer

### Overview
You've built a custom Astro application with premium styling. Here's how to migrate this to native Webflow Designer:

### Migration Strategy

#### **Option 1: Embed Custom Code (Recommended for Now)**

This lets you keep your current premium styles and functionality while leveraging Webflow's CMS and hosting.

**Steps:**

1. **Create a New Page in Webflow**
   - In Webflow Designer, create a page (e.g., `/about`)
   - Add a blank section

2. **Add HTML Embed**
   - Drop an "HTML Embed" element into the section
   - Paste your entire page HTML (from the `<section>` tags)

3. **Add Custom CSS**
   - Go to Page Settings → Custom Code → Head Code
   - Wrap your styles in `<style>` tags:
   ```html
   <style>
   /* Paste all your CSS here */
   .hero { padding: 100px 0 60px; }
   /* ... rest of styles */
   </style>
   ```

4. **Add Custom JavaScript**
   - Go to Page Settings → Custom Code → Footer Code
   - Wrap your scripts in `<script>` tags:
   ```html
   <script>
   // Reveal on scroll
   const els = document.querySelectorAll(".reveal");
   // ... rest of script
   </script>
   ```

**Pros:**
- ✅ Keep all your premium animations and effects
- ✅ Works immediately
- ✅ Easy to update

**Cons:**
- ❌ Not editable in Webflow Designer
- ❌ Can't use Webflow CMS for team members (yet)

---

#### **Option 2: Rebuild in Webflow Designer (Time-Intensive)**

Recreate your design using native Webflow elements and styling.

**Steps:**

**1. Set Up Global Styles**

In Webflow Designer, go to Style Panel → Add Custom Code (Site Settings):

```css
/* Add to Site-wide Custom Code → Head */
<style>
:root {
  --bg-page: #F5F6F8;
  --bg-section: #FFFFFF;
  --bg-glass: rgba(255, 255, 255, 0.65);
  --text-primary: #0F172A;
  --text-secondary: #475569;
  --text-muted: #64748B;
  --border-light: rgba(15, 23, 42, 0.08);
  --accent: #6366F1;
}
</style>
```

**2. Build Page Structure**

- **Hero Section:**
  - Add a Section
  - Add a Container (max-width: 1200px)
  - Add a Grid (2 columns)
  - Add Heading, Paragraph, Buttons on left
  - Add image/card on right

- **Stats Strip:**
  - Add Section with light gray background
  - Add Grid (3 columns)
  - Add stat cards with icon, number, label

- **Team Grid:**
  - Add Section
  - Add CMS Collection List (for team members)
  - Style each Collection Item as a card
  - Add image, name, role, description fields

**3. Apply Custom Styling**

For each element:
- Background: Use CSS variables or rgba values
- Border radius: 24-28px for cards
- Shadows: `0 20px 40px rgba(15, 23, 42, 0.08)`
- Backdrop filter: Add via custom code on elements
- Transitions: 0.3s ease or cubic-bezier

**4. Add Interactions**

- **Reveal on Scroll:**
  - Select element
  - Go to Interactions panel
  - "While scrolling in view" → Fade in + Move
  - Initial: Opacity 0%, Y: 20px
  - Final: Opacity 100%, Y: 0px

- **Hover Effects:**
  - "Hover" interaction
  - Transform: translateY(-4px)
  - Shadow: increase intensity

**5. Create CMS Collection for Team**

- In Webflow: CMS → Add Collection → "Team Members"
- Fields:
  - Name (Plain text)
  - Role (Plain text)
  - Photo (Image)
  - Bio (Plain text)
  - Description (Plain text)
  - LinkedIn URL (Link)

- Bind collection items to your team grid

**Pros:**
- ✅ Fully editable in Webflow Designer
- ✅ Can use Webflow CMS
- ✅ Client can update content easily
- ✅ No code knowledge needed for updates

**Cons:**
- ❌ Time-consuming initial setup
- ❌ May lose some animation sophistication
- ❌ Backdrop blur requires custom code

---

#### **Option 3: Hybrid Approach (Best of Both Worlds)**

Use Webflow CMS for content + custom code for styling.

**Steps:**

1. **Create CMS Collections in Webflow**
   - Team Members collection
   - Stats collection
   - Services/Features collection

2. **Build Basic Structure in Designer**
   - Create sections and layout
   - Connect CMS fields
   - Add basic styling

3. **Enhance with Custom Code**
   - Add premium styles via Page Settings → Custom Code
   - Add animations via custom JavaScript
   - Keep glass effects and complex animations in code

4. **Update Content via CMS**
   - Client can update team members, stats, etc.
   - Design and animations stay locked/protected

**Pros:**
- ✅ Content editable via CMS
- ✅ Keep premium animations
- ✅ Best of both worlds

**Cons:**
- ⚠️ Requires understanding both systems
- ⚠️ Code changes need developer

---

## 🎨 Key Design Elements to Preserve

When migrating, make sure to keep these premium features:

### Colors
```css
Background Page: #F5F6F8 (pearl gray)
Background Section: #FFFFFF (white)
Glass Background: rgba(255, 255, 255, 0.65)
Text Primary: #0F172A
Text Secondary: #475569
Border: rgba(15, 23, 42, 0.08)
Accent: #6366F1 (soft indigo)
```

### Effects
- **Glass Cards**: 
  - `backdrop-filter: blur(8px)`
  - `background: rgba(255, 255, 255, 0.65)`
  - Border radius: 24-28px

- **Shadows**:
  - Default: `0 20px 40px rgba(15, 23, 42, 0.08)`
  - Hover: `0 32px 64px rgba(15, 23, 42, 0.14)`

- **Animations**:
  - Reveal on scroll: fade in + translateY
  - Hover lift: translateY(-4px to -8px)
  - Transitions: `cubic-bezier(0.16, 1, 0.3, 1)`

### Typography
- Headings: Plus Jakarta Sans (weight 700-900)
- Body: Plus Jakarta Sans (weight 400-600)
- Line height: 1.6 (body), 1.2 (headings)

---

## 🔄 Migration Checklist

- [ ] Export all current images from code
- [ ] Upload images to Webflow Assets
- [ ] Create CMS collections (Team, Stats, etc.)
- [ ] Decide on migration approach (Embed, Rebuild, or Hybrid)
- [ ] Build page structure in Webflow
- [ ] Apply custom styling
- [ ] Add interactions and animations
- [ ] Test responsiveness (mobile, tablet, desktop)
- [ ] Connect CMS data
- [ ] Test all links and buttons
- [ ] Publish and verify

---

## 📋 File Locations Reference

**Current Astro Setup:**
- About page: `src/pages/about.astro`
- Images: Already on Webflow CDN or in `/public` folder
- Styles: Embedded in `<style>` tag at bottom of about.astro
- Scripts: Embedded in `<script>` tag at bottom

**Webflow Setup:**
- Designer: Edit at designer.webflow.com
- Assets: Upload at Assets panel
- CMS: Configure at CMS panel
- Custom Code: Site Settings → Custom Code
- Page Code: Page Settings → Custom Code

---

## 💡 Quick Tips

1. **Keep Backups**: Export your Webflow site before major changes
2. **Test Incrementally**: Build one section at a time
3. **Mobile First**: Design for mobile, then enhance for desktop
4. **Performance**: Compress images (use TinyPNG or similar)
5. **Accessibility**: Keep alt text, ARIA labels, and keyboard nav
6. **Version Control**: Document changes in Webflow's Version History

---

## 🆘 Need Help?

**For Image Issues:**
- Webflow University: Image optimization guide
- Check file formats (JPG/PNG/WebP)
- Verify CDN URLs are public

**For Migration Issues:**
- Webflow Forum: Community support
- Webflow Support: For technical issues
- This codebase: Reference `about.astro` for exact styles

---

## 🎯 Recommended Next Steps

1. **Short-term** (Today):
   - Upload new team images via Webflow Assets
   - Update image URLs in code
   - Deploy and test

2. **Medium-term** (This week):
   - Test HTML Embed approach on a single section
   - Evaluate if this works for your workflow

3. **Long-term** (Future sprint):
   - Plan full migration to Webflow Designer
   - Create CMS collections
   - Train team on updating content

The custom Astro app gives you maximum control and premium effects. Webflow Designer gives you ease of editing. Choose the approach that matches your team's technical comfort and maintenance needs!
