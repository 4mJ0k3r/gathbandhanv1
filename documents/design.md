# Gathbandhan Redesign — Claude Code Prompt Pack

**Assumption I'm making:** keep your existing pink brand color as the single accent (replacing Bloom's olive-green), and swap Bloom's purple grassland photo for your flower garden photo. Everything else — typography scale, spacing, card style, section rhythm, split-hero layout — is copied from the Bloom reference. If you actually want the purple/lavender + olive-green palette instead of pink, say so and I'll rewrite the design-system prompt.

**How to use this:** paste `0. Global Design System` into Claude Code first — it sets up fonts, Tailwind tokens, and shared components every other page imports. Then paste each page prompt one at a time, in order, as a separate message/task.

---

## 0. Global Design System & Shared Components

```
Set up a shared design system for a Next.js + Tailwind app before touching any page.

FONT
- Add "General Sans" from Fontshare (https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap) 
  in app/layout.tsx <head>, or self-host via next/font/local if you prefer no external request.
- Fallback stack: font-family: "General Sans", "Inter", system-ui, sans-serif.
- Headlines: font-weight 600-700, tight tracking (tracking-tight), large sizes (text-5xl/6xl on desktop hero, 
  text-3xl/4xl on section headings). Body text: font-weight 400-500, text-gray-500/600, leading-relaxed.

COLOR TOKENS (extend tailwind.config.ts theme.colors)
- brand: { 50: '#FDF2F6', 100: '#FCE7EF', 500: '#D6336C', 600: '#C2255C', 700: '#A61E4D' }  // existing Gathbandhan pink
- ink: { 900: '#14141A', 700: '#3F3F46', 500: '#6B7280', 300: '#D1D5DB' }
- surface: { base: '#FFFFFF', tint: '#FAF7F9', card: '#F5EEF2' }  // tint = warm off-white bg for alt sections, 
  card = soft pink-gray for left-panel hero cards, matching the lavender card in the reference
- Do not introduce any other brand hue. Pink is the only accent color used for buttons, highlighted text, icons, and tags.

SPACING & SHAPE
- Section vertical padding: py-20 md:py-28.
- Max content width: max-w-7xl mx-auto px-6 md:px-10.
- Card radius: rounded-3xl (24px) for large cards/hero panels, rounded-2xl (16px) for smaller cards, rounded-full for pills/badges.
- Card shadow: shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] — soft, no hard borders except 1px border-black/5 where needed for definition on white-on-white cards.

SHARED COMPONENTS (build these once, reuse everywhere)
1. <Navbar /> — sticky top-4 floating bar, rounded-full, white bg, shadow-sm, max-w-6xl mx-auto. 
   Logo left ("Gathbandhan" in brand-500, font-bold). Center/right nav links (Browse Vendors, For Vendors, 
   How It Works, About) in ink-700, text-sm, font-medium. Right-most: pill CTA button "Join Free".
2. <PillButton variant="primary|secondary" icon? /> — primary: bg-brand-500 text-white, rounded-full, 
   px-6 py-3, font-semibold, with a small circular icon chip (arrow →) on one side, background 
   brand-600 inside a white/10 circle. Secondary: bg-white text-ink-900 border border-black/10, same shape.
   Hover: slight scale/opacity transition.
3. <StatBlock value label /> — value in text-4xl md:text-5xl font-bold text-ink-900, label below in 
   text-sm text-ink-500. Used in rows of 3.
4. <SectionHeading eyebrow? title subtitle? align="center|left" /> — optional small uppercase eyebrow label 
   in brand-500 text-xs tracking-wide, then bold heading, then gray subtitle paragraph.
5. <Tag /> — small rounded-full pill, bg-surface.tint or bg-brand-50, text-xs font-medium, text-ink-700 or brand-700,
   used for vendor categories, review context tags, blog tags.
6. <RatingStars value count? /> — filled/outline star icons (lucide-react Star), optional review count text next to it.
7. <Card /> — base white card, rounded-2xl, p-6/p-8, shadow as defined above, used as the base for feature 
   cards, vendor cards, testimonial cards, step cards.

IMAGERY RULE
- All photographic hero/feature images: object-cover, rounded-3xl, no visible border. 
- Where a headline overlays a photo, add a subtle bottom gradient (bg-gradient-to-t from-black/40 to-transparent) 
  behind the text only if contrast requires it — otherwise prefer the split-panel hero (text on solid card, 
  photo separate) over text-on-photo, since that's the dominant pattern in the reference.
- Place the user-provided flower garden photo at /public/images/hero-garden.jpg and reuse it as the default 
  hero/CTA background image across pages unless a page-specific photo is specified below.

Confirm the design system compiles with a placeholder page before moving to the actual pages.
```

---

## 1. Home Page — `app/page.tsx` (also serves `/signup`)

```
Rebuild app/page.tsx using the shared design system. This page combines the marketing homepage AND the 
vendor signup form (same route serves /signup). Sections top to bottom:

1. <Navbar />

2. HERO (full-bleed photo hero)
   - Full-width rounded-3xl container (mx-6 md:mx-10, mt-4) containing the flower garden photo 
     (/images/hero-garden.jpg) as background, min-h-[520px], rounded-3xl, overflow-hidden.
   - Centered content on top of photo: eyebrow tag "Kota, Rajasthan", large white headline 
     "Get discovered by couples planning their wedding" (keep "planning their wedding" in brand-100/white 
     with no special color since it's already on a photo — use font-weight variation instead, e.g. italic 
     or lighter weight for the plain part and bold for the emphasized part), 
     subtext in white/80: "The easiest way for wedding vendors to find more couples. List your business for free."
   - <PillButton variant="secondary"> "List Your Business — It's Free" centered below text, white bg.
   - Add a soft dark gradient overlay (bg-gradient-to-t from-black/50 via-black/10 to-transparent) 
     behind the text block for legibility.

3. TRUST BAR (right below hero, on surface.base)
   - Centered small caption: "TRUSTED BY VENDORS ACROSS KOTA" (uppercase, tracking-wide, text-ink-500, text-xs).
   - Row of <Tag> pills wrapping across the width: Photographers, Makeup Artists, Decorators, Venues, 
     Mehendi Artists, Choreographers, Cards, Caterers.

4. ABOUT + STATS (bg surface.tint)
   - <SectionHeading align="center"> "The easiest way for wedding vendors to find couples" with a 2-line 
     gray subtitle about the platform's purpose.
   - Row of 3 <StatBlock>: "500+ / Vendors Listed", "12 / Categories", "1 / City, growing fast" 
     (use real numbers once available — mark as TODO placeholders in code comments).

5. BROWSE BY CATEGORY
   - <SectionHeading align="center"> "Find the right vendor for whatever you need"
   - Wrapping pill/tag cloud (larger tags than the trust bar, clickable, each links to 
     /vendors?category=slug), one tag per vendor category, hover:bg-brand-50 transition.

6. FEATURED VENDORS
   - <SectionHeading align="left" or "center"> "Featured Vendors in Kota"
   - Grid grid-cols-1 md:grid-cols-3 gap-6 of vendor <Card>: portfolio photo (aspect-[4/3], rounded-2xl, 
     top of card), vendor name (font-semibold), category <Tag>, <RatingStars>, one-line blurb, 
     "View Profile →" link in brand-500. Use placeholder data (array of 3-4 objects) with a TODO comment 
     to wire up real vendor data later.

7. TESTIMONIALS
   - <SectionHeading align="center"> "What people are saying"
   - Large rating number on the left (e.g. "4.8" text-5xl font-bold with 5 small stars underneath and 
     "based on 120 reviews" caption) next to a horizontally scrollable/grid row of 3 testimonial <Card>: 
     quote text, reviewer name, <Tag> for vendor category, <RatingStars>.

8. SIGNUP FORM ("List Your Business")
   - Two-column section: left = <SectionHeading> "List your business — it's free" + 3 short bullet 
     reassurances (No commission, Direct inquiries, Takes 2 minutes) each with a small check icon.
   - Right = white <Card> containing a form: Business Name, Category (select), City/Area, 
     Contact Name, Phone Number, WhatsApp checkbox, Submit <PillButton variant="primary"> "Submit Listing". 
     On submit, route to /thank-you. Add basic client-side validation (required fields).

9. FINAL CTA
   - Full-width rounded-3xl card using the flower garden photo again (different crop/opacity) as background, 
     dark overlay, centered white text: "Ready to get discovered?" / "Join vendors already listed in Kota, 
     Rajasthan." + <PillButton variant="secondary">.

10. Footer — logo, short tagline, link columns (Vendors, Company, Legal), copyright line.

Use TypeScript, keep each section as its own component in app/components/home/ for readability.
```

---

## 2. Vendors Listing Page — `app/vendors/page.tsx`

```
Build the vendor directory page using the shared design system.

LAYOUT: <Navbar /> at top, then a two-column layout below a page header.

1. PAGE HEADER
   - <SectionHeading align="left"> "Browse Wedding Vendors in Kota, Rajasthan" + subtitle 
     "Find and connect with trusted vendors directly — no middlemen."
   - Search bar (rounded-full input with search icon) + sort <select> ("Most Popular", "Highest Rated", "Newest") 
     inline on the right on desktop, stacked on mobile.

2. LEFT SIDEBAR (w-64, sticky top-24, hidden on mobile behind a "Filters" button that opens a drawer)
   - "Category" filter group: checkbox list (Photographers, Makeup Artists, Decorators, Venues, Mehendi Artists, 
     Choreographers, Cards, Caterers), each with a count badge e.g. "(12)".
   - "Rating" filter group: radio/checkbox for 4.5+, 4.0+, any.
   - "Price Range" filter group: checkboxes for Budget / Mid-range / Premium (or a min-max slider if you 
     prefer — simple checkboxes are fine for v1).
   - "Clear all filters" text link at the bottom of the sidebar.
   - Style the whole sidebar as a plain white block, section labels in font-semibold text-sm, 
     checkboxes with brand-500 accent color.

3. RIGHT CONTENT: GRID
   - grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6.
   - Reuse the vendor <Card> component from the homepage (photo, name, category tag, rating, blurb, 
     "View Profile" link) — each card links to /vendors/[slug].
   - Empty state: if filters return zero results, show a centered <Card> with a friendly icon, 
     "No vendors match these filters" message, and a "Clear filters" button.
   - Pagination or "Load more" <PillButton variant="secondary"> centered below the grid.

State management: use useState/useMemo for client-side filtering against a placeholder vendor array 
(TODO comment: replace with real data fetch). Keep filter state in the URL query string 
(?category=photographers&rating=4.5) so filtered views are shareable/bookmarkable.
```

---

## 3. Vendor Detail Page — `app/vendors/[slug]/page.tsx`

```
Build the individual vendor profile page. This is the page that should most closely mirror the reference 
"Individual Therapist Page" split-hero layout — recreate that structure exactly, with wedding-vendor content.

1. <Navbar />

2. SPLIT HERO (this is the key section — match the reference layout precisely)
   - Two-column rounded-3xl container, equal height, gap-0 or gap-2 so panels feel like one unit.
   - LEFT PANEL: bg surface.card (soft pink-tinted, not photo), p-10, flex flex-col justify-between, full height:
     - Top: vendor name as large bold headline (text-4xl), category/specialty as a subtitle line below it 
       in ink-500 (e.g. "Wedding Photographer · Kota, Rajasthan").
     - Middle: 2-3 sentence bio/description paragraph, text-ink-600.
     - <PillButton variant="primary"> "Enquire Now" (opens a contact modal or scrolls to a contact form 
       lower on the page — implement as anchor scroll for v1).
     - Bottom: row of 3 <StatBlock>: e.g. "150+ / Weddings Shot", "89 / Reviews", "6 years / Experience" 
       — placeholder numbers, TODO comment for real data.
   - RIGHT PANEL: vendor's cover/portfolio photo, object-cover, full height matching left panel, rounded-3xl 
     on the outer edges only (so together the two panels read as one rounded card).

3. PORTFOLIO GALLERY
   - <SectionHeading align="left"> "Portfolio"
   - Responsive masonry or grid grid-cols-2 md:grid-cols-3 gap-4 of portfolio photos, rounded-2xl, 
     lightbox-on-click optional (skip for v1 if time-constrained).

4. SERVICES & PRICING
   - <SectionHeading align="left"> "Services Offered"
   - List of service line items in a <Card>: service name, short description, price range 
     (e.g. "Full Day Coverage — ₹40,000–₹60,000"). Simple two-column list, not a table.

5. REVIEWS
   - <SectionHeading align="left"> "Reviews"
   - Big rating summary (e.g. "4.9" + stars + "89 reviews") next to a grid of testimonial <Card>s reused 
     from the homepage testimonial component, filtered to this vendor.

6. CONTACT FORM (anchor target for "Enquire Now")
   - <Card> with: Your Name, Phone/WhatsApp, Wedding Date (date picker), Message (textarea), 
     Submit <PillButton variant="primary"> "Send Enquiry" → routes to /thank-you.

7. SIMILAR VENDORS
   - <SectionHeading align="left"> "Similar Vendors in [category]"
   - Horizontal scroll or 3-col grid of vendor <Card>s from the same category, excluding the current vendor.

8. Footer (shared component).

On mobile, make the "Enquire Now" button sticky at the bottom of the viewport once the hero scrolls 
out of view (fixed bottom-4 inset-x-4).

Fetch vendor data by slug — use a placeholder lookup function against a mock vendors array for now, 
with a TODO comment for real data source.
```

---

## 4. For Vendors Page — `app/for-vendors/page.tsx`

```
Rebuild this page — it's the vendor-acquisition landing page. Restyle the existing content 
(hero / why-list / how-it-works / categories / CTA) using the shared design system instead of the current look.

1. <Navbar />

2. SPLIT HERO (reuse the same split-panel pattern as the vendor detail page hero, not the full-bleed photo hero)
   - LEFT PANEL (surface.card bg): eyebrow "For Vendors", headline "Get discovered by couples planning 
     their wedding in Kota, Rajasthan" with "planning their wedding" in brand-500, subtext about listing 
     for free, <PillButton variant="primary"> "List Your Business — It's Free".
   - RIGHT PANEL: a photo of a vendor at work (decorator setting up, photographer shooting, etc. — 
     use the flower garden photo as a placeholder if no vendor photo is available yet), object-cover, 
     rounded-3xl, same height as left panel.

3. WHY LIST ON GATHBANDHAN
   - <SectionHeading align="center"> "Why list on Gathbandhan?" + subtitle 
     "Couples are searching for vendors in Kota, Rajasthan right now. Be there when they do."
   - Grid grid-cols-1 md:grid-cols-3 gap-6 of 5 <Card>s (Free Listing, Direct Inquiries, No Commission, 
     Verified Badge, Simple Dashboard) — each with a small icon (lucide-react: Tag, MessageCircle, 
     PiggyBank, BadgeCheck, LayoutDashboard), bold title, one-line description. Let the 5th card either 
     span or sit alone in the last row, don't force a 6th filler card.

4. HOW IT WORKS
   - <SectionHeading align="center"> "How It Works"
   - Row of 3 numbered <Card>s: circular brand-500 badge with "1"/"2"/"3", bold title 
     (List your business / Get inquiries / Grow your business), one-line description.

5. CATEGORIES WE'RE LOOKING FOR
   - <SectionHeading align="center"> "Categories we're looking for"
   - Wrapping <Tag> cloud, larger size, same category list used elsewhere on the site.

6. FINAL CTA
   - Full-width rounded-3xl photo card (reuse the homepage's final-CTA component), 
     "Ready to get discovered?" / "Join vendors already listed in Kota, Rajasthan." + button.

7. Footer.

Reuse shared components — don't rebuild the "how it works" step card or the CTA card if they already 
exist from the homepage build; import them.
```

---

## 5. How It Works Page — `app/how-it-works/page.tsx`

```
Build a dedicated, more detailed version of the "How It Works" flow (the homepage/for-vendors version is 
a short teaser; this page goes deeper).

1. <Navbar />

2. PAGE HEADER — centered, simple: "How It Works", subtitle "From listing to booking, here's how 
   Gathbandhan connects you with couples."

3. DETAILED STEPS — instead of 3 small cards, give each step its own full-width alternating 
   split section (image left/text right, then flipped, then repeat), similar rhythm to the vendor 
   detail hero:
   - Step 1: "List your business" — left: short screenshot/mock or icon illustration in a rounded-3xl 
     card, right: heading + 2-3 sentence description + small bullet list of what's needed to list 
     (business name, category, photos, contact info).
   - Step 2: "Get inquiries" — flipped (text left, image right): how couples find and message vendors.
   - Step 3: "Grow your business" — back to image left: dashboard/analytics mock, managing listings, 
     tracking views.

4. FAQ
   - <SectionHeading align="center"> "Frequently Asked Questions"
   - Accordion list (single-open) of 5-6 Q&As: Is it really free? How do couples contact me? 
     Can I edit my listing later? How do I get verified? etc. Use a simple <details>/<summary> styled 
     component or a small custom accordion with a chevron icon that rotates on open.

5. FINAL CTA — reuse the shared CTA component.

6. Footer.
```

---

## 6. About Page — `app/about/page.tsx`

```
Build the About page.

1. <Navbar />

2. MISSION HERO — centered, no photo needed (or a subtle version of the flower garden photo as a 
   soft full-bleed background behind just this section, at low opacity):
   - Eyebrow: "About Gathbandhan"
   - Headline: "Connecting couples in Kota with wedding vendors they can trust"
   - 2-3 sentence mission paragraph: something like "Gathbandhan exists to make wedding planning simpler 
     for couples and growth easier for local vendors — with no commissions, no middlemen, and no hidden costs."

3. STATS ROW — reuse <StatBlock> row: Vendors Listed, Couples Connected, Categories Covered (placeholder 
   numbers, TODO comment).

4. OUR VALUES
   - <SectionHeading align="center"> "What we believe in"
   - Grid of 3-4 <Card>s: e.g. "Free, always" / "Direct connections" / "Built for Kota" / "Vendor-first" 
     — short title + 1-2 sentence description each, no icons needed if it feels cleaner without.

5. (Optional) TEAM SECTION — if you want to show founders: grid of photo <Card>s, name, role, one-line bio. 
   Skip this block entirely if there's no team content yet — don't fill it with placeholder people.

6. FINAL CTA — reuse shared CTA component, adjust copy to "Ready to be part of it?" with two buttons 
   side by side: "List Your Business" (primary) and "Browse Vendors" (secondary).

7. Footer.
```

---

## 7. Thank You Page — `app/thank-you/page.tsx`

```
Build a simple, centered confirmation page — no navbar clutter, keep it calm and minimal.

1. Minimal top bar: just the Gathbandhan logo, centered or left-aligned, linking back to "/".

2. CENTERED CONFIRMATION CARD (vertically centered in viewport, max-w-lg)
   - Large circular success icon (lucide-react CheckCircle2, brand-500, inside a soft brand-50 circle bg), 
     centered above the text.
   - Headline: "Thank you for signing up!" (text-3xl font-bold, centered).
   - Subtext: "Our team will review your listing within 24 hours. We'll reach out on the phone number 
     you provided once it's live."
   - Optional small 3-item "what happens next" list below (numbered, small text): 
     1. We verify your details, 2. Your listing goes live, 3. Couples start reaching out.
   - Two buttons side by side: <PillButton variant="secondary"> "Browse Vendors" (→ /vendors) and 
     <PillButton variant="primary"> "Back to Home" (→ /).

3. Footer (shared component, or omit for an even cleaner confirmation screen — your call).

Keep this page free of any marketing sections, testimonials, or CTAs beyond the two buttons above — 
it's a confirmation moment, not a conversion page.
```