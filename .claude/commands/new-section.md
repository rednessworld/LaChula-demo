# /new-section Command

## What This Does
Adds a new section to an existing restaurant page.
Use this when a client wants something extra added to their site.

## How to Use
Type: /new-section [section type]

Available section types:
- `/new-section hero` — Full-screen hero with image, title, and CTA
- `/new-section menu` — Menu highlights grid (4–8 items)
- `/new-section gallery` — Photo gallery grid
- `/new-section testimonials` — Customer reviews section
- `/new-section team` — Meet the team / chef spotlight
- `/new-section events` — Private events / special occasions
- `/new-section catering` — Catering services section
- `/new-section press` — Press mentions / awards
- `/new-section map` — Location, hours, and Google Maps embed

## Instructions for Claude

When this command is triggered:

1. Identify which existing file to add the section to (ask if unclear)
2. Match the existing color palette (read CSS variables from the file)
3. Match the existing font choices
4. Match the existing spacing and layout style
5. Insert the new section in the most logical position in the HTML
6. Add any required CSS to the existing `<style>` block
7. Tell the user exactly where in the file the new section was added
8. Tell the user what placeholder content to replace
