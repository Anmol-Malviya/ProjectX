# Images Directory

This directory contains image assets for the project components.

## Directory Structure

- `features/` - Feature images for the Skiper Card component
- `hero/` - Hero section images
- `about/` - About section images
- `cursor-trail/` - Cursor trail effect images
- `skiper.png` - Main skiper image
- `texture-card.png` - Texture card image

## Usage

The component imports are now using public paths:

```typescript
// Current imports in src/components/sections/skiper-card-demo.tsx
import shiftCard from "/images/features/feature-1.png"
import family from "/images/features/feature-2.png"
import carousel from "/images/features/feature-3.png"
import textureFull from "/images/features/feature-4.png"
import skiper from "/images/skiper.png"
import textureCard from "/images/texture-card.png"
```

## Path Configuration

Images in the `public/` directory are served statically and can be referenced with absolute paths starting with `/`.

## Current Status

✅ **Project Reorganized and Optimized!**

All images are properly organized and optimized:

**Features Directory:**
- `feature-1.png` - 26.7 KB ✅
- `feature-2.png` - 25.6 KB ✅
- `feature-3.png` - 29.1 KB ✅
- `feature-4.png` - 19.2 KB ✅

**Main Images:**
- `skiper.png` - 59.2 KB ✅
- `texture-card.png` - 50.8 KB ✅

**Cursor Trail Images:**
- 7 optimized images for cursor trail effects ✅

**Video Assets:**
- Local video file in `/videos/` directory ✅

All components now use local assets instead of external URLs for better performance and reliability.
