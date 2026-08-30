# Cleanup & Refinement Changelog

A structural cleanup and polish pass on the existing site. No redesign: the
purple/lime palette, page order, section order, and features are unchanged.

Branch: `cleanup/audit-pass` · 8 commits · `npm run build` and `npm run lint` both clean.

---

## Spec drift worth knowing about

I read TRD.md, PRD.md, design.md, implementation_plan.md and website_flow.md
before touching code. The documents disagree with each other, and the code
follows a third thing. Flagged, not changed:

| Topic | Docs say | Code does |
| --- | --- | --- |
| Brand color | design.md: pink `#D6336C`, "do not introduce any other brand hue". implementation_plan.md: terracotta `#C4704B` + gold `#D4A843` | Purple `#8B5CF6` + a lime accent |
| Font | General Sans (design.md) or Inter (plan) | DM Sans + Lavishly Yours |
| Audience | PRD/TRD scope phase 1 as vendor acquisition | Homepage is written couple-facing |
| Reviews | Plan files the whole review system under "Optional (If Time Permits)" | Code rendered a hardcoded 4.8★ with no review system behind it |

I kept purple/lime and DM Sans, since you said you like the current look. The
leftover rose `#c81d5e` (signup submit button, confirmation email heading) was
treated as mess and removed — it was the only trace of the specified pink.

Also out of spec: `/contact-us` (website_flow.md says "no separate contact page
needed"), `/about-us` (duplicate), and `/signup` as its own route.

Specified but still missing, not built this pass: sitemap.xml, robots.txt,
LocalBusiness structured data, an OG image, a share button, "claim this
listing", and IP rate limiting on the signup form.

---

## Removed

| What | Detail |
| --- | --- |
| `HomepageCard.css` | 363 lines, 26 classes, never imported. Styled a `HomepageCard` component that doesn't exist; `CategoriesAndVendors` is its Tailwind rewrite. |
| `Testimonials.tsx` | 121 lines, zero importers. Contained 3 invented testimonials. |
| `FeaturedVendors.tsx` | 69 lines, zero importers. Third copy of the vendor card. |
| `HeroVideo.tsx` | 42 lines, zero importers, `"use client"` with no client code. |
| `lib/data.ts` | 16 lines, zero importers. |
| `src/app/progress.md` | Build notes committed inside the route tree. |
| `/about-us` route | Merged into `/about`; permanently redirects. |
| Everything in `public/` | All 7 files unreferenced (5 scaffold SVGs, `hero-bg.jpg`, `hero-garden.jpg`). |
| Dead exports | `sortVendors`, `VendorProfile` (redeclared two inherited fields), the `Category` alias. |
| Unused code | `FormEvent` import, `React` import, `shareOpen` state, `PillButton`'s dead `onClick` branch, `SignupForm`'s `preselectedCategory` and `onSuccess` props (no caller passed either), `style={{}}`. |
| Discarded DB query | `/thank-you` ran a MongoDB query on every render and threw the result away. |
| 11 dead nav links | `/services` + 5 children, `/cities`, `/categories`, `/community-picks`, `/blog` — all 404. Plus 6 hash links with no matching anchor. Removed labels are listed in the navbar commit. |
| Invented numbers | See *Content corrections* below. |

---

## Consolidated

**Three vendor cards → one.** `VendorCard`, `FeaturedVendors`, and an inline
copy inside `CategoriesAndVendors` were near line-for-line clones with
different color scales. Two inlined price logic that `formatPrice` already
implements — and `CategoriesAndVendors` imported `formatPrice` then never called
it. `FeaturedVendors` skipped `getCategoryLabel`, so it would have rendered
"makeup" instead of "Makeup Artist".

**19 hand-rolled buttons → `PillButton`.** There were 6 identical primaries and
6 mutually inconsistent secondaries using 4 different border treatments and 3
different purple shades. `PillButton`'s `secondary` variant already encoded the
most common one and was never used.

**18 copies of the eyebrow+heading block → `SectionHeading`**, which already
existed and was never imported. **4 stat implementations → `StatBlock`**, same
story.

New shared primitives for patterns that were repeated inline: `Card`, `Section`,
`CtaSection` (the closing CTA had 6 variants), `SplitHero` (3 pages built it
separately, down to a byte-identical gradient), `FaqAccordion`,
`SignupFormSection`.

**Two FAQ accordions → one.** `contact-us` used React state, which was the only
reason that 277-line page was a client component; `how-it-works` used native
`<details>`. Both use `<details>` now.

**One data layer.** `getFeaturedVendors` had three implementations. `lib/vendors.ts`
is now the single source, with typed documents and field projections.

**One source per dataset.** The 8-category list was declared 4 times with 3
different label sets. `"Kota, Rajasthan"` was hardcoded in 15 places. Both now
come from `lib/constants.ts`. Shared photography moves to `lib/images.ts`.

**~40 inline SVGs → `lucide-react`**, already in `package.json` and specified by
design.md. No new dependency.

---

## Fixed

**The signup form was broken.** `useForm` was called with no resolver — line 24
was a blank line inside the options object where
`resolver: zodResolver(vendorSchema)` belonged. `@hookform/resolvers` was
installed but `zodResolver` appeared nowhere. With `noValidate` also set there
was zero client validation, every `errors.*` render was unreachable, the
required asterisks were decorative, and the server's 400 landed in an empty
`else if`. **The form failed silently with no user feedback.** Now validated,
with server field errors mapped back onto the inputs.

**`/thank-you` was unreachable** — zero inbound links; the form showed an inline
panel instead. Submitting now redirects there.

**The contact form didn't submit anywhere.** It called
`setFormStatus("Thanks for reaching out!")` and reset the fields. Now posts to a
real `/api/contact` route.

**Contact details were leaking.** `/api/vendors` returned whole documents, so
every vendor's phone number and email were served to anyone loading the listing
page. List endpoints now project card fields only; contact details come from the
single-vendor lookup.

**Enquire button was gated on the wrong field.** `vendors/[slug]` checked
`vendor.instagram` to decide whether to render a `wa.me` link built from
`vendor.phone`, so a vendor with a phone but no Instagram got no button.

**Design tokens that emitted nothing.** Eight color classes referenced undefined
tokens (`ink-200/400/600/800`, `purple-300/800`, `lime-100/300`). Tailwind v4's
`@theme` replaces the default palette for a namespace, so these silently
produced no CSS — `PillButton`'s outline variant had two of three colors
undefined. That's the "How It Works" button on your hero.

**Font conflict.** `<body>` carried three competing declarations: a `font-sans`
class, an inline DM Sans style, and a `globals.css` rule for General Sans, which
was never loaded. Pinyon Script was fetched over the network and never used.
Fonts now load through `next/font` (self-hosted, no layout shift).

Other fixes: `parseInt` on a Mongo ObjectId hex string produced `NaN` and an
`undefined` gradient class; `getCollection<any>` at 5 sites defeated its own
generic; `portfolio_url` accepted any string despite the `https://` prompt;
deprecated zod v4 `.email()`; an unreachable category fallback that could write
`"other"`, absent from the enum; the homepage `#how-it-works` button scrolled
nowhere; `npm run lint` didn't run at all (ESLint 9 needs flat config, none
existed).

**Accessibility.** Desktop dropdowns were hover-only with no `aria-haspopup`,
`aria-expanded`, or keyboard path, leaving **27 of 32 nav links unreachable by
keyboard**. All 14 form fields lacked `id`/`htmlFor`. Three search inputs had no
labels. A full-screen `<div onClick>` served as the dropdown backdrop. Footer
"Privacy Policy" and "Terms of Service" were `<span>`s styled like links. Five
`<Image fill>` elements had no `sizes`. Stats were large numbers in `<p>` tags
rather than a description list. All addressed, plus a skip-to-content link.

**Client boundaries.** The homepage was a client component solely to run a
`mounted` flag for a hero fade-in — which also guaranteed a flash of invisible
content and hid the hero entirely without JS. Now a CSS animation with a
`prefers-reduced-motion` guard. `contact-us` and `vendors/[slug]` are also
server components now.

---

## Polished

- **Standardized the scale.** Section padding was `py-20` in 23 of 31 sections,
  with `py-12`/`py-16`/`py-16 md:py-24`/`pb-20 sm:pb-28` elsewhere. H1 used four
  different responsive scales. `CategoriesAndVendors` used arbitrary
  `text-[1.6rem]`/`text-[0.95rem]`/`text-[0.8rem]` sizes matching no step.
- **13 arbitrary shadows → 5 named utilities.** One appeared 19 times and was
  clearly the card token; another differed only in the last digit (`0.08` vs
  `0.06`). The `border-purple-100/30` card border (23 uses) is a utility too.
- **One color system.** 43 `gray-*` uses ran alongside `ink-*`; `SignupForm`
  used `gray-700`/`gray-200` where `contact-us` used `ink-700` for the identical
  form. Three greens meant "success" (`lime-500`, `green-500`, `emerald-500`) and
  three ambers rendered the same star.
- **Inline styles removed.** 14 objects, 11 of them in one file, including 7
  near-identical white text-shadows and a 300-character noise data URI
  re-serialized on every render.
- **Real photography** replaces three flat gradient placeholder panels on
  signup, for-vendors and how-it-works.
- Unified filter/tag pill padding (`px-5 py-2.5` vs `px-6 py-3` for the same
  visual), card radius rules, and empty/loading states across the directory.
- Added a `not-found.tsx` page.

---

## Content corrections

Invented figures replaced with facts that are true in the code:

| Where | Was | Now |
| --- | --- | --- |
| Homepage | "2,000+ Verified Vendors / 50+ Cities / 15k+ Happy Couples" | "8 Vendor Categories / Kota / 0% Commission" |
| About | "500+ Vendors / 12 Categories / 100% Free" | "8 Categories Covered / 100% Free for Vendors / Kota" |
| Vendor cards | Hardcoded 4.8★ and `view_count + 128` reviews | Removed |
| Vendor profiles | "150+ Weddings / 3yr Experience" on every vendor | Starting price / profile views |

The 12-categories claim was wrong regardless — the code defines 8. Ratings and
review counts are gone because there is no review system; the implementation
plan defers one to a later optional phase.

FAQ copy promised a vendor dashboard, a booking form, and a WhatsApp icon that
don't exist, and gave the review SLA as "2-3 business days" where four other
places said 24 hours. Corrected. `/about-us`'s three invented team members are
gone. The `/for-vendors` "Simple Dashboard" value prop became "Easy to Share",
which describes something the product actually does.

---

## Demo data in the database

`scripts/seed-demo-vendors.mjs` inserted 6 approved sample vendors so the
directory has content before real vendors sign up. Each is prefixed `Demo —`,
uses `example.com` emails and reserved-block phone numbers, and carries
`is_demo: true`.

```
node scripts/seed-demo-vendors.mjs           # insert (skips existing)
node scripts/seed-demo-vendors.mjs --delete  # remove all demo records
```

**These are in the same Atlas cluster the deployed site reads** (the TRD uses one
URI for local and production), so they will appear on the live site until
deleted.

Separately: the `vendors` collection holds 5 older `pending` records from manual
testing (`test@test.com`, `console1@test.com`, `Test Shop`, `Test Shop 3`,
`Subham`). They don't render, since only `approved` vendors are shown, but you
may want to clear them.

---

## Verified

`npm run build` and `npm run lint` both pass clean. Walked every route in a
browser at 1440px and 390px:

- Homepage, `/vendors`, `/vendors/[slug]`, `/about`, `/how-it-works`,
  `/for-vendors`, `/signup`, `/thank-you`, `/contact-us`, 404
- Category filter updates the URL and returns correctly filtered results from
  MongoDB
- Search returns matches; `/api/vendors` pagination reports `hasMore` correctly
- Submitting the form empty shows per-field errors; an invalid portfolio URL is
  rejected; a valid submission writes to MongoDB and redirects to `/thank-you`
  (that test record was deleted afterwards)
- `/about-us` → `/about` redirect works; unknown vendor slugs 404
- Mobile menu opens, expands sections, and closes on navigation
- FAQ accordion opens without JavaScript state

## Suggested next

1. Decide the pink-vs-purple question — design.md is explicit about pink, and
   the code isn't pink.
2. Replace the placeholder contact details in `lib/constants.ts`
   (`hello@gathbandhan.in`, `+91 98765 43210`) with real ones.
3. Add `sitemap.ts`, `robots.ts`, and LocalBusiness structured data — all
   specified in the TRD, none present.
4. Add IP rate limiting to `/api/submit-listing` (TRD asks for 10/hour); only the
   honeypot exists today.
5. Swap the Unsplash photography in `lib/images.ts` for real vendor work.
