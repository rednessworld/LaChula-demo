# CLAUDE.md — Restaurant Web Design Master Template
# Freelance Web Studio | Barcelona, Spain

---

## 🎯 Who I Am & What This Project Is

I am a freelance web designer based in Barcelona building landing pages and websites
for local restaurants. Every project in this workspace is a restaurant website.
My clients are restaurant owners in Barcelona who need a beautiful, fast, 
mobile-first website to attract customers and take reservations.

---

## 🧠 Claude's Role

You are my expert web design partner. You write all the HTML, CSS, and any
lightweight JavaScript needed. I am learning as we go, so:

- Always explain briefly WHAT you did and WHY after writing code
- Point out anything I should customize (names, colors, images, etc.)
- If something could be done better, tell me
- Keep code clean, well-commented, and easy to understand

---

## 🏗️ Project Structure (Always Follow This)

```
project-folder/
├── CLAUDE.md
├── .claude/
│   └── commands/
├── index.html          ← Main landing page
├── menu.html           ← Menu page (if needed)
├── css/
│   └── style.css       ← All styles here
├── js/
│   └── main.js         ← Only if JS is needed
├── images/
│   └── (all photos)
└── README.md
```

---

## 🎨 Design Standards (Always Apply These)

### Typography
- Use Google Fonts only (free, fast)
- Pair a display/heading font with a clean body font
- Examples: Playfair Display + Lato, Cormorant Garamond + Inter, 
  Fraunces + Source Sans Pro
- NEVER use Arial, Times New Roman, or default system fonts
- Base font size: 16px minimum
- Line height: 1.6 for body text

### Colors
- Every restaurant gets its OWN color palette — never reuse the same one
- Always define colors as CSS variables at the top of style.css:
  ```css
  :root {
    --color-primary: ;
    --color-secondary: ;
    --color-accent: ;
    --color-text: ;
    --color-background: ;
    --color-surface: ;
  }
  ```
- Avoid generic "restaurant red" unless it truly fits the brand

### Layout & Spacing
- Mobile-first always — design for phone first, then desktop
- Use CSS Grid and Flexbox (no Bootstrap, no frameworks)
- Generous whitespace — restaurants sell atmosphere, give it room to breathe
- Max content width: 1200px, centered with auto margins
- Section padding: minimum 80px top and bottom on desktop, 50px on mobile

### Images
- Always use `object-fit: cover` for food/atmosphere photos
- Hero images: full viewport height (100vh) or minimum 600px
- Always include a dark overlay on hero images for text readability
- Use placeholder images from https://images.unsplash.com when real photos
  aren't available (search for "restaurant barcelona food" etc.)

### Animations & Interactions
- Subtle fade-in on scroll for sections (use Intersection Observer)
- Smooth scroll for navigation links
- Hover effects on buttons and menu items
- NO flashy or distracting animations — elegance only

---

## 📱 Mobile-First Rules (Non-Negotiable)

- Every page must work perfectly on a 375px wide screen (iPhone SE)
- Navigation must collapse into a hamburger menu on mobile
- Tap targets (buttons, links) minimum 44px height
- Font sizes must be readable without zooming
- Images must never overflow or cause horizontal scroll
- Test mentally at 375px, 768px (tablet), and 1280px (desktop)

---

## 🍽️ Standard Restaurant Sections

Every restaurant site should include these (in this order):

1. **Navigation** — Logo + links (Home, Menu, About, Reservations, Contact)
2. **Hero** — Full-screen image, restaurant name, tagline, CTA button
3. **About** — Short story/atmosphere description, 1–2 photos
4. **Menu Highlights** — 4–8 signature dishes with name, description, price
5. **Reservations** — Simple form (name, date, time, guests, phone) OR link to TheFork
6. **Gallery** — 4–6 atmosphere photos in a grid
7. **Testimonials** — 2–3 short reviews (optional but valuable)
8. **Location & Hours** — Google Maps embed, opening hours, address
9. **Footer** — Logo, quick links, social media, copyright

---

## ⚡ Performance Rules

- Keep total page size under 2MB
- Compress all images before using them (use squoosh.app)
- No jQuery, no heavy libraries — vanilla JS only
- Lazy load images below the fold: `loading="lazy"` attribute
- Minify CSS and JS before final delivery to client

---

## ✅ Accessibility Basics

- All images must have descriptive `alt=""` text
- Color contrast must pass WCAG AA (use https://coolors.co/contrast-checker)
- All form inputs must have `<label>` tags
- Navigation must be keyboard-navigable
- Use semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`

---

## 💶 Client Delivery Checklist

Before delivering any site to a client, verify:
- [ ] Looks perfect on mobile (375px)
- [ ] Looks perfect on tablet (768px)  
- [ ] Looks perfect on desktop (1280px+)
- [ ] All links work
- [ ] Form submits correctly
- [ ] Google Maps embed loads
- [ ] Page loads in under 3 seconds
- [ ] All placeholder content replaced with real content
- [ ] Favicon added
- [ ] Page title and meta description set for SEO
- [ ] Deployed to Netlify with custom domain connected

---

## 🚫 Never Do These

- Never use Bootstrap or heavy CSS frameworks
- Never use jQuery
- Never use Lorem Ipsum in final deliveries
- Never use the same color palette twice across different restaurant clients
- Never use copyrighted images (use Unsplash or client-provided photos)
- Never build without mobile-first in mind
- Never leave placeholder text like "[Restaurant Name]" in delivered code

---

## 📍 Barcelona Context

My clients are in Barcelona. Keep these in mind:
- Some clients may want content in Spanish (Castellano) or Catalan
- Common Barcelona neighborhoods: Gràcia, Eixample, El Born, Barceloneta,
  Sarrià, Poble Sec, Sant Pere
- Local reservation platform: TheFork (ElTenedor in Spanish)
- Local delivery: Glovo, Uber Eats
- Barcelona food culture: tapas, pintxos, seafood, Mediterranean, fusion
- Currency: Euro (€)
- Phone format: +34 93X XXX XXX

---

## 🔄 Current Project Info

> Update this section for each new restaurant client:

- **Restaurant Name:** [FILL IN]
- **Cuisine Type:** [FILL IN]
- **Neighborhood:** [FILL IN]
- **Primary Language:** [Spanish / Catalan / English]
- **Language Switch:** [Yes — index.html (ES) + en.html (EN) / No]
- **Color Palette:** [FILL IN once decided]
- **Target Vibe:** [e.g. cozy/rustic, modern/minimal, luxury, casual]
- **Reservation System:** [TheFork link / custom form / phone only]
- **Key Features Needed:** [list specific sections or features]
