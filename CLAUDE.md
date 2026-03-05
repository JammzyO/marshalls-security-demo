# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Tech Stack
- Framework: Next.js (App Router)
- Styling: Custom CSS Modules, no Tailwind utilities for visual styling
- Fonts: loaded via next/font/google
- Images: next/image for all photography
- One layout.tsx handles nav + footer — never repeat them per page

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `npm run dev` (serves the project root at `http://localhost:3000`)
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing


## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.


## Anti-Generic Guardrails
- **Colors:** Never invent brand colors. Use only the three tokens defined in Design Tokens. Near-black: #1C1612 ,The mauve/brown accent bar: #8B6B5E, White: #F5F2EE .
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay using CSS (background: linear-gradient(to top, rgba(0,0,0,0.6), transparent)) and a color treatment layer with mix-blend-mode: multiply.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- When building from scratch, follow the page architecture in Project Context
- When a reference image is provided, match it exactly — do not improve or add to it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
- Do not use pure #FFFFFF — always use the ivory white defined in the brand reference file

## Design Tokens (non-negotiable)
- color-primary: #1C1612
- color-accent: #8B6B5E  
- color-surface: #F5F2EE
- font-display: 'Cormorant Garamond' (headings — luxury, editorial)
- font-body: 'DM Sans' (clean, readable)
- border-radius: 0px (zero radius — hard edges feel authoritative)
- spacing-unit: 8px

## What makes it look luxury
- Large amounts of negative space — do not fill every section
- Headings should be oversized and bold, not medium
- Photography always full-bleed with dark overlay, never in a box
- No drop shadows on cards — use borders instead (1px, low opacity)
- Animations: slow fade-ins only (600ms), nothing bouncy
- Never center-align body text, only headings


## Project Context
- Client: Marshalls Security Group Ltd, Kenya
- Type: Multi-page marketing website
- Goal: Convert visitors into security audit bookings — not just brand awareness
- Two primary conversion pages: Guards Landing Page + Tech Installations Landing Page
- Every page CTA must point to the audit booking form, never a generic contact form
- Tone: authoritative, premium, trustworthy — not aggressive or fear-based

## Build Order (never skip steps)
- Build one section per prompt, never a full page at once
- Do not proceed to the next section until current one is screenshotted and approved
- Never regenerate a section that has already been approved
- Sequence: layout shell → nav → hero → sections top to bottom → footer

## Forms
- The 7-question lead qualification form is the most important UI element on the site
- Fields: property type, location, main concern, current guards, tech installed, timeline, contact details
- Never replace it with a generic contact form
- All fields need visible labels, focus states, and validation styling
- Submit CTA must use color-accent (#8B6B5E), never a generic button style

## Visual Direction
- Reference aesthetic: Rolls Royce, Burberry, or a high-end Nairobi law firm — 
  not a typical security company
- Dark, moody, and serious — the primary background is always #1C1612, 
  not white or grey
- Typography does the heavy lifting — oversized Cormorant Garamond headings 
  (80px+) with thin weight create luxury instantly
- Restraint over decoration — one strong element per section, 
  lots of breathing room around it
- The accent color #8B6B5E is used sparingly — one use per section maximum, 
  never as a background fill
- Guard photography should feel editorial, like a magazine shoot, 
  not a corporate brochure
- No icons from icon libraries — if icons are needed, use simple 
  geometric shapes in CSS only
- Section transitions use full-bleed dark photography with overlay, 
  not colored background blocks