#!/bin/bash

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 Performance Check - Sustainable Talent"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Build the site
echo "📦 Building site..."
npm run build

# Check bundle sizes
echo ""
echo "📊 Bundle Sizes:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
du -sh dist/
echo ""
find dist -type f -name "*.js" -exec du -h {} \; | sort -h -r | head -10
echo ""

# Count files
echo "📁 File Count:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "HTML files: $(find dist -name "*.html" | wc -l)"
echo "JS files: $(find dist -name "*.js" | wc -l)"
echo "CSS files: $(find dist -name "*.css" | wc -l)"
echo "Image files: $(find dist \( -name "*.jpg" -o -name "*.png" -o -name "*.webp" -o -name "*.svg" \) | wc -l)"
echo ""

# Check for large files
echo "⚠️  Large Files (>100KB):"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
find dist -type f -size +100k -exec du -h {} \; | sort -h -r
echo ""

echo "✅ Build complete!"
echo ""
echo "Next steps:"
echo "1. Test locally: npm run preview"
echo "2. Check PageSpeed: https://pagespeed.web.dev/"
echo "3. Deploy: npx wrangler pages deploy dist"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
