# /new-restaurant Command

## What This Does
Scaffolds a complete, production-ready restaurant landing page from scratch.
Use this at the start of every new restaurant client project.

## How to Use
Type: /new-restaurant
Then provide the following info when prompted (or include it in your message):

- Restaurant name
- Cuisine type
- Neighborhood in Barcelona
- Vibe/atmosphere (cozy, modern, luxury, rustic, etc.)
- Primary color preference (or say "surprise me")
- Language (Spanish, Catalan, or English)

## Instructions for Claude

When this command is triggered:

1. Ask the user for the restaurant details listed above if not already provided
2. Choose a UNIQUE color palette appropriate for the restaurant's vibe
3. Choose a UNIQUE Google Fonts pairing (never reuse previous choices)
4. Generate a complete `index.html` file containing:
   - All HTML structure with semantic tags
   - Embedded `<style>` block with full CSS (mobile-first)
   - Embedded `<script>` block with:
     - Hamburger menu toggle
     - Smooth scroll
     - Fade-in on scroll (Intersection Observer)
   - All 9 standard sections from CLAUDE.md
   - Real-looking placeholder content (Spanish names, Barcelona addresses, etc.)
   - Unsplash image URLs for all photos
5. After generating, tell the user:
   - What fonts were chosen and why
   - What color palette was chosen and why
   - Which parts to customize with real content
   - How to open the file in their browser to preview it
