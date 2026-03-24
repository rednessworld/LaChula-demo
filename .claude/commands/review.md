# /review Command

## What This Does
Runs a full pre-delivery audit of the restaurant site.
Use this before sending any site to a client.

## How to Use
Type: /review

## Instructions for Claude

When this command is triggered, audit the entire project against this checklist
and report the status of each item (✅ Pass / ⚠️ Needs Attention / ❌ Fail):

### Content
- [ ] Restaurant name appears correctly throughout
- [ ] No placeholder text remaining (no "[Restaurant Name]", "Lorem ipsum", etc.)
- [ ] All prices are filled in
- [ ] Address is real and correct
- [ ] Phone number is formatted correctly (+34 format for Barcelona)
- [ ] Opening hours are filled in
- [ ] All navigation links work and point to correct sections

### Design
- [ ] Color palette is consistent throughout
- [ ] Fonts load from Google Fonts correctly
- [ ] All images have proper alt text
- [ ] No broken image references
- [ ] Spacing is consistent between sections

### Mobile
- [ ] Navigation collapses to hamburger on mobile
- [ ] No horizontal overflow on 375px width
- [ ] Text is readable without zooming
- [ ] Buttons are tappable (min 44px)
- [ ] Forms are usable on mobile

### Performance
- [ ] No unnecessary libraries or scripts
- [ ] Images use loading="lazy" where appropriate
- [ ] CSS is clean with no unused rules

### SEO & Meta
- [ ] `<title>` tag is set with restaurant name
- [ ] `<meta name="description">` is filled in
- [ ] `<html lang="">` attribute is set correctly
- [ ] Favicon is present

### Accessibility
- [ ] All images have alt attributes
- [ ] All form inputs have labels
- [ ] Color contrast is sufficient
- [ ] Semantic HTML is used throughout

After the audit, provide:
1. A summary of what's ready and what needs fixing
2. Specific instructions for each failing item
3. Estimated time to fix any remaining issues
