# ZOOL Businessmen Services - Bilingual Landing Page

This is a premium, high-fidelity, single-page bilingual (English & Arabic) corporate landing page for **ZOOL Businessmen Services** in the UAE. It features full RTL support, smooth navigation, scroll-triggered animations driven by GSAP, background videos that pause when offscreen, and a custom rain-on-glass canvas simulation.

## 🚀 Quick Setup & Installation

### Prerequistes
- **Node.js** v18+ 
- **npm** or **yarn**

### 1. Install Dependencies
Install all required packages:
```bash
npm install
```

### 2. Launch Development Server
Starts the hot-reload server locally on port `3000`:
```bash
npm run dev
```
Open `http://localhost:3000` to inspect the live changes.

### 3. Build for Production
Compiles the application into highly-optimized, static production assets inside the `/dist` directory:
```bash
npm run build
```

---

## 🎨 Creative Asset Replacements

Follow this guide to swap out placeholders with your real corporate assets.

### 1. Corporate Brand Logo
- Replace `public/logo.png` with your transparent PNG logo.
- *Tip:* For best navbar resolution, size your image to `80px x 80px`.

### 2. Ambient Background Videos
- **Hero Background:** Place your MP4 video segment at `public/hero-video.mp4`.
- **Services Background:** Place your ambient dark MP4 video segment at `public/services-video.mp4`.
- *Note:* The video elements are pre-configured to mute, loop, and auto-pause when scrolled off-screen using `IntersectionObserver` to save user machine CPU & battery.

### 3. Service Card Images
To display unique imagery for each of the 10 core services:
1. Place 10 JPG files inside the `public/services/` folder.
2. Name them sequentially: `service-1.jpg`, `service-2.jpg`, ... up to `service-10.jpg`.
- *Fallback:* If any image fails to load or is deleted, our component automatically fallback-renders a luxurious custom golden-navy gradient matching the custom SVG Lucide icon.

### 4. Partner Logos
To showcase legal partner logos (e.g., Dubai DET, AFZ, Shurooq) in the marquee scroller:
1. Save transparent PNG logos to the `public/partners/` folder.
2. Name them sequentially: `partner-1.png`, `partner-2.png`, ... up to `partner-10.png`.
- *Fallback:* If missing, the marquee automatically displays the partner's legal name in stylized high-contrast gold/white typography.

---

## 📞 Changing Contact Channels & Map Locators

All content is managed through a single localization file: `/src/lib/locales.ts`.

### Changing Phone Numbers & Email Info
To update telephone trunks, corporate emails, or opening hours, edit the fields in `/src/lib/locales.ts` under both `en` and `ar`.
- **Phones are fully clickable** using responsive `tel:` links.
- **WhatsApp inquiries are pre-filled** with the name of the corresponding servicecard.

### Changing the Google Maps Embed
In `/src/sections/ContactSection.tsx`, update the `src` attribute of the `<iframe>` element with your new Google Maps embed URL:
1. Go to Google Maps, find your corporate location.
2. Click **Share** -> **Embed a map** and copy the source link `https://www.google.com/maps/embed?...`.
3. In `/src/sections/ContactSection.tsx`, locate the `<iframe>` and swap the `src` attribute.

---

## ⚡ Performance Considerations

1. **Zero Framework Bloat:** Designed purely on React and Tailwind, avoiding bulky component dependencies.
2. **RainOnGlass Simulation:** The RainOnGlass WebGL-esque effects run natively using a lightweight 2D HTML5 canvas, preventing system lag.
3. **Accessibility (Reduced Motion):** If a visitor has `prefers-reduced-motion: reduce` toggled in their operating system/browser, GSAP animations and the RainOnGlass canvas simulation will automatically disable, rendering standard clean transitions.
