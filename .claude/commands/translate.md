# /translate Command

## What This Does
Translates all visible text content on the page to a target language.
Use when a client wants their site in Spanish, Catalan, or English.

## How to Use
Type: /translate [language]

Examples:
- `/translate spanish`
- `/translate catalan`
- `/translate english`

## Instructions for Claude

When this command is triggered:

1. Identify the target language
2. Translate ALL visible text content:
   - Navigation links
   - Hero headline and subheadline
   - Section headings
   - Body text / descriptions
   - Menu item names and descriptions
   - Form labels and placeholders
   - Button text
   - Footer content
3. Keep proper nouns (restaurant name, neighborhood names) as-is
4. For Spanish: Use natural, warm restaurant marketing tone (not formal)
5. For Catalan: Use standard Central Catalan, warm tone
6. Update the `<html lang="">` attribute:
   - Spanish: `lang="es"`
   - Catalan: `lang="ca"`
   - English: `lang="en"`
7. After translating, note any phrases that should be reviewed by a native speaker
