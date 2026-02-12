# Image Optimization Guide 🖼️

This document explains how to optimize images for your portfolio website.

## Current Status
✅ Images are loaded from Unsplash CDN (already optimized)
✅ Lazy loading enabled via browser native loading
⚠️ When adding your own images, follow these guidelines

---

## How to Optimize Images

### 1. **Use WebP Format**
WebP images are 25-35% smaller than JPEG/PNG with same quality.

**Convert to WebP:**
- Online: https://squoosh.app
- Command line: `cwebp input.jpg -q 80 -o output.webp`

### 2. **Compress Images**
Before uploading, compress your images:

**Recommended Tools:**
- **TinyPNG**: https://tinypng.com/ (PNG/JPEG)
- **Squoosh**: https://squoosh.app/ (All formats)
- **ImageOptim**: https://imageoptim.com/ (Mac app)

**Target Sizes:**
- Hero images: < 200KB
- Project thumbnails: < 100KB
- Icons/logos: < 50KB
- Profile photos: < 150KB

### 3. **Proper Dimensions**
Don't upload huge images that will be displayed small.

**Recommended Sizes:**
```
Hero section: 1200x800px
Project cards: 800x600px
Blog thumbnails: 600x400px
Profile photo: 400x400px
Favicon: 32x32px, 64x64px, 128x128px
OG Image (social share): 1200x630px
```

### 4. **Use CDN (Content Delivery Network)**
For production, consider using:
- **Cloudinary** (free tier available)
- **imgix**
- **Cloudflare Images**

---

## Implementation in Code

### Current Setup
Images from Unsplash URLs are used in Projects component. They're already optimized.

### For Your Own Images

**Option 1: Put in `/public` folder**
```javascript
<img src="/images/my-project.webp" alt="Project name" />
```

**Option 2: Import in component**
```javascript
import projectImage from '../assets/project.webp';
<img src={projectImage} alt="Project name" />
```

### Add Lazy Loading
```javascript
<img 
  src="/images/project.webp" 
  alt="Project name"
  loading="lazy"  // Browser native lazy loading
/>
```

### Responsive Images
```javascript
<img 
  srcSet="
    /images/project-small.webp 400w,
    /images/project-medium.webp 800w,
    /images/project-large.webp 1200w
  "
  sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
  src="/images/project-large.webp"
  alt="Project name"
  loading="lazy"
/>
```

---

## Optimization Checklist

Before adding any image:
- [ ] Resize to appropriate dimensions
- [ ] Convert to WebP format
- [ ] Compress (aim for < 100KB per image)
- [ ] Add descriptive alt text for SEO
- [ ] Use lazy loading attribute
- [ ] Test loading speed

---

## Create OG Image for Social Sharing

**Dimensions:** 1200x630px

**Should include:**
- Your name
- Title/tagline
- Brand colors
- Logo

**Tools to create:**
- Canva: https://canva.com
- Figma: https://figma.com
- Photopea: https://photopea.com (free Photoshop alternative)

Save as `og-image.jpg` in `/public` folder.

---

## Performance Tips

### Bundle Size Optimization
Current images don't affect bundle size (loaded from CDN).

### When using local images:
```bash
# Install image optimization plugin
npm install vite-plugin-imagemin -D
```

Add to `vite.config.js`:
```javascript
import viteImagemin from 'vite-plugin-imagemin';

export default {
  plugins: [
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9] },
      svgo: { plugins: [{ name: 'removeViewBox' }] },
      webp: { quality: 80 }
    })
  ]
}
```

---

## Current Project Images

All project images use Unsplash URLs:
- Already optimized by Unsplash CDN
- Auto-resized based on URL parameters
- Cached globally for fast loading
- No action needed!

### To Replace with Your Own:
1. Take/create screenshots of your projects
2. Optimize using tools above
3. Save in `/public/images/projects/`
4. Update URLs in `Projects.jsx`

---

## Favicon Created ✅

Location: `/public/favicon.svg`
- Vector format (scales perfectly)
- Matches brand colors
- Lightweight (< 2KB)

**Additional favicon formats** (optional):
Create these sizes for better compatibility:
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png (180x180)

---

## Next Steps

1. ✅ Favicon created (Done!)
2. ⏳ Create OG image for social sharing
3. ⏳ Replace example project images with real ones
4. ⏳ Add your professional photo to Hero section
5. ⏳ Optimize all images before deployment

---

**Remember:** Well-optimized images = Faster website = Better SEO = Happy users! 🚀
