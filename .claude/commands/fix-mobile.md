# /fix-mobile Command

## What This Does
Audits and fixes all mobile responsiveness issues on the current page.
Use this after building any section or when a client reports mobile problems.

## How to Use
Type: /fix-mobile
Optionally add a specific issue: /fix-mobile "navigation overlaps hero on iPhone"

## Instructions for Claude

When this command is triggered:

1. Read the current HTML/CSS file carefully
2. Audit for these common mobile issues:
   - Navigation not collapsing to hamburger menu
   - Text too large or too small on mobile
   - Images causing horizontal overflow
   - Buttons too small to tap (under 44px)
   - Sections too cramped (insufficient padding)
   - Grid layouts not stacking on small screens
   - Forms not fitting screen width
   - Hero text unreadable over images
   - Fonts not scaling properly
   - Fixed/absolute positioned elements causing overflow

3. Fix ALL issues found
4. Ensure breakpoints are set at:
   - 375px (mobile small — iPhone SE)
   - 480px (mobile large)
   - 768px (tablet)
   - 1024px (tablet landscape / small desktop)
   - 1280px+ (desktop)

5. After fixing, list every issue that was found and fixed
6. Mention if any images or content need to be changed by the user
