\# IMPLEMENTATION PLAN — WEDDING VENDOR PLATFORM MVP

\*\*Version:\*\* 1.0  
\*\*Timeline:\*\* 12 Weeks (3 months)  
\*\*Goal:\*\* Live platform with 50 verified vendors in \[City\], ready to accept couples  
\*\*Methodology:\*\* Sequential builds — finish one phase before moving to the next. No parallel tracks in MVP.

\---

\#\# 1\. Overview

\#\#\# Timeline at a Glance

\`\`\`  
WEEK 1          WEEK 2          WEEK 3          WEEK 4          WEEK 5–8         WEEK 9–10        WEEK 11–12  
  │               │               │               │               │                │                │  
  ▼               ▼               ▼               ▼               ▼                ▼                ▼  
┌──────┐      ┌──────┐      ┌──────┐      ┌──────┐      ┌──────┐      ┌──────┐      ┌──────┐  
│SETUP │─────▶│PAGES │─────▶│FORM  │─────▶│DYNAMIC│─────▶│VENDOR│─────▶│COUPLE│─────▶│LAUNCH│  
│      │      │      │      │      │      │PAGES  │      │ONBOARD│      │SIDE  │      │      │  
│      │      │      │      │      │      │       │      │      │      │      │      │      │  
│Infra │      │Static│      │Form  │      │Browse │      │Outreach│     │Search│      │Soft  │  
│Airtbl│      │pages │      │API   │      │+Profle│      │+ calls│     │+reviews│    │launch│  
│Email │      │      │      │Notifc│      │       │      │+enrich│     │      │      │Full  │  
│Deploy│      │      │      │      │      │       │      │      │      │      │      │launch│  
└──────┘      └──────┘      └──────┘      └──────┘      └──────┘      └──────┘      └──────┘  
\`\`\`

\#\#\# Resources

| Role | Who | Time Commitment | Weeks |  
|---|---|---|---|  
| \*\*Founder\*\* | You | Full-time | 1–12 |  
| \*\*Developer\*\* | You or freelancer | Full-time (if you code) or part-time | 1–4 |  
| \*\*Designer\*\* | Freelance or DIY | 1–2 weeks | 1–2 |  
| \*\*Content\*\* | You | Ongoing | 5–12 |

\*\*If you're coding yourself:\*\* Phases 1–4 take \~4–6 weeks. Phases 5–7 (vendor onboarding) run in parallel after that.  
\*\*If you're hiring a freelancer:\*\* Give them Phases 1–4 as a spec. They build it. You review and launch.

\---

\#\# 2\. Pre-Development (Week 0 — Do This Before Writing Code)

These are tasks that don't require building anything but save weeks of confusion later.

\#\#\# Week 0 Checklist

| Task | Why | Time | Done? |  
|---|---|---|---|  
| \*\*Pick your city\*\* | Every URL, every piece of copy, every outreach message depends on this | 1 day | ☐ |  
| \*\*Pick your platform name\*\* | Check domain availability (.in and .com), Instagram handle, Google it | 2 days | ☐ |  
| \*\*Buy domain\*\* | Namecheap/GoDaddy. Get .in first, .com if available | 30 min | ☐ |  
| \*\*Register Instagram handle\*\* | Even if you don't post yet — squatters move fast | 30 min | ☐ |  
| \*\*Set up Gmail for the platform\*\* | \`hello@yourplatform.in\` — use Google Workspace or forward from Gmail | 1 hour | ☐ |  
| \*\*Set up WhatsApp Business\*\* | Separate number preferred. Enables WhatsApp API later | 1 hour | ☐ |  
| \*\*Create MongoDB Atlas account\*\* | Free tier is enough for MVP | 15 min | ☐ |  
| \*\*Sign up for Resend\*\* | For transactional emails. Free tier: 100 emails/day, 3,000/month | 15 min | ☐ |  
| \*\*Create Vercel account\*\* | For deployment | 15 min | ☐ |  
| \*\*Sketch 5 vendor names \+ categories\*\* | Test your outreach script before building anything | 1 hour | ☐ |  
| \*\*Send 5 test DMs to vendors\*\* | Validate that vendors respond before you build the platform | 2 hours | ☐ |

\*\*Critical gate:\*\* Don't start building until you've gotten at least 3 positive responses from vendors in your city. If vendors don't respond to your DM pitch, no one will sign up on your platform.

\---

\#\# 3\. Phase 1: Foundation Setup (Week 1\)

\*\*Goal:\*\* Working development environment, accounts set up, project scaffolded. Nothing user-facing yet.

\#\#\# Days 1–2: Accounts & Infrastructure

| Task | Tool | Time | Done? |  
|---|---|---|---|  
| Create MongoDB Atlas base with Vendors table | MongoDB Atlas | 1 hour | ☐ |  
| Set up all 26 fields in Vendors table | MongoDB Atlas | 2 hours | ☐ |  
| Create views: All Vendors, Pending, Approved, Rejected | MongoDB Atlas | 30 min | ☐ |  
| Generate MongoDB Atlas API key | MongoDB Atlas | 15 min | ☐ |  
| Verify Resend account, add and verify domain | Resend | 30 min | ☐ |  
| Write email template: "Thanks for listing" | Resend | 30 min | ☐ |  
| Write email template: "Your listing is live" | Resend | 30 min | ☐ |  
| Write email template: "We need a few more details" | Resend | 30 min | ☐ |  
| Set up Vercel account, link to GitHub | Vercel | 15 min | ☐ |  
| Create GitHub repo | GitHub | 10 min | ☐ |

\#\#\# Days 3–5: Project Scaffold (if coding)

| Task | Command / Action | Time | Done? |  
|---|---|---|---|  
| Initialize Next.js project | \`npx create-next-app@latest\` | 15 min | ☐ |  
| Install Tailwind CSS | Follow Next.js Tailwind setup | 30 min | ☐ |  
| Install Shadcn UI | \`npx shadcn-ui@latest init\` | 20 min | ☐ |  
| Add Shadcn components: Button, Input, Card, Textarea, Select | \`npx shadcn-ui@latest add ...\` | 30 min | ☐ |  
| Set up project structure (folders) | Create \`app/\`, \`components/\` layout | 20 min | ☐ |  
| Create layout.tsx with Navbar \+ Footer shell | Code | 1 hour | ☐ |  
| Configure Tailwind: colors, fonts, spacing | \`tailwind.config.ts\` | 30 min | ☐ |  
| Add Google Fonts (Inter) | \`layout.tsx\` | 10 min | ☐ |  
| Set up environment variables | \`.env.local\` | 15 min | ☐ |  
| Create \`.env.example\` for reference | File | 10 min | ☐ |  
| Deploy empty project to Vercel | \`vercel \--prod\` | 15 min | ☐ |  
| Verify live site shows "Hello World" | Browser | 5 min | ☐ |

\#\#\# Environment Variables to Set Up

\`\`\`  
\# .env.local (never commit this file)

\# MongoDB Atlas  
AIRTABLE\_API\_KEY=pat...  
AIRTABLE\_BASE\_ID=app...  
AIRTABLE\_TABLE\_ID=tbl...

\# Resend (email)  
RESEND\_API\_KEY=re\_...

\# App  
NEXT\_PUBLIC\_APP\_URL=https://yourplatform.in  
NEXT\_PUBLIC\_APP\_NAME=\[Platform Name\]  
NEXT\_PUBLIC\_CITY=\[City\]  
NEXT\_PUBLIC\_FOUNDER\_PHONE=+91XXXXXXXXXX  
NEXT\_PUBLIC\_FOUNDER\_EMAIL=hello@yourplatform.in  
NEXT\_PUBLIC\_FOUNDER\_WHATSAPP=91XXXXXXXXXX

\# Optional: Twilio (SMS)  
TWILIO\_ACCOUNT\_SID=AC...  
TWILIO\_AUTH\_TOKEN=...  
TWILIO\_PHONE\_NUMBER=+1...

\# Optional: Analytics  
NEXT\_PUBLIC\_PLAUSIBLE\_DOMAIN=yourplatform.in  
\`\`\`

\#\#\# Phase 1 Deliverables

\- \[ \] Vercel deployment live (even if just "Hello World")  
\- \[ \] MongoDB Atlas base with all fields and views  
\- \[ \] Resend email templates written  
\- \[ \] Project scaffolded locally and on GitHub  
\- \[ \] All accounts created and verified

\---

\#\# 4\. Phase 2: Static Pages (Week 2\)

\*\*Goal:\*\* All 6 pages built, designed, and deployed. Pages are static (hardcoded content) with no data fetching. Forms don't submit yet. Browse page shows placeholder cards.

\#\#\# Days 1–2: Design System & Shared Components

Build these once, use everywhere:

| Component | File | Purpose | Time |  
|---|---|---|---|  
| \`Navbar\` | \`components/layout/Navbar.tsx\` | Logo \+ nav links \+ CTA button, sticky on scroll | 2 hours |  
| \`Footer\` | \`components/layout/Footer.tsx\` | Copyright \+ social links | 30 min |  
| \`Container\` | \`components/layout/Container.tsx\` | Max-width wrapper (max-w-6xl, centered, px-4) | 15 min |  
| \`Section\` | \`components/layout/Section.tsx\` | Standard section with heading \+ padding | 20 min |  
| \`Button\` | \`components/ui/Button.tsx\` | Primary \+ secondary \+ ghost variants | 30 min |  
| \`CTAButton\` | \`components/ui/CTAButton.tsx\` | The "List Your Business" button used everywhere | 15 min |  
| \`Badge\` | \`components/ui/Badge.tsx\` | Category badge (Photographer, Makeup, etc.) | 20 min |

\*\*Design tokens to decide now:\*\*

| Decision | Recommended Choice |  
|---|---|  
| Primary color | A warm, trustworthy color. Terracotta (\#C4704B) or deep green (\#2D6A4F) works well for Indian wedding context |  
| Accent color | Gold (\#D4A843) for CTAs — wedding association without being cliché |  
| Font | Inter (clean, professional, readable) |  
| Border radius | 8px for cards, 6px for buttons |  
| Max content width | 1200px (max-w-6xl) |  
| Section spacing | py-16 (desktop), py-10 (mobile) |

\#\#\# Days 3–4: Build Static Pages

Build in this order (each builds on the previous):

| Day | Page | File | Key Content | Time |  
|---|---|---|---|---|  
| 3 | Home | \`app/page.tsx\` | Hero, social proof, how it works, CTA sections | 4 hours |  
| 3 | Footer | (shared, done once) | Already built in Day 1–2 | — |  
| 3 | Navbar | (shared, done once) | Already built in Day 1–2 | — |  
| 4 | For Vendors | \`app/for-vendors/page.tsx\` | 5 value props, categories grid, CTA | 3 hours |  
| 4 | How It Works | \`app/how-it-works/page.tsx\` | 3 steps, bottom CTA | 2 hours |  
| 4 | About | \`app/about/page.tsx\` | Founder section, contact block | 2 hours |  
| 4 | Thank You | \`app/thank-you/page.tsx\` | Success message, 3 random vendor cards | 2 hours |

\*\*Home page sections in detail:\*\*

\`\`\`  
app/page.tsx structure:

\<Navbar /\>  
\<main\>  
  \<HeroSection /\>           ← Headline, subheadline, CTA button  
  \<SocialProofSection /\>    ← "Trusted by X+ vendors" \+ logos  
  \<HowItWorksPreview /\>     ← 3-step summary (same as HowItWorks page)  
  \<CTASection /\>            ← Bottom CTA with urgency  
  \<InlineFormSection /\>     ← Sign-up form (doesn't submit yet)  
\</main\>  
\<Footer /\>  
\`\`\`

\#\#\# Day 5: Browse Vendors Page (Static Mock)

| Component | Purpose | Time |  
|---|---|---|  
| Filter tabs (All, Photographers, Makeup, etc.) | Visual only — clicking doesn't filter yet | 1 hour |  
| Vendor card component | Thumbnail, name, category, city, price, view link | 2 hours |  
| Vendor card grid | 3 columns desktop, 1 mobile | 1 hour |  
| Load More button | Visual only | 15 min |  
| Bottom CTA section | "Are you a vendor?" | 30 min |  
| Empty state | "Vendors coming soon" | 30 min |

\*\*Use 5–6 seed vendor cards with placeholder images:\*\*

\`\`\`tsx  
const MOCK\_VENDORS \= \[  
  {  
    business\_name: "Rajasthan Wedding Photography",  
    category: "Photographer",  
    city: "Jaipur",  
    starting\_price: 25000,  
    slug: "rajasthan-wedding-photography",  
    photo\_url: "/placeholder-photo.jpg",  
  },  
  // ... 5 more  
\];  
\`\`\`

\#\#\# Day 5: Vendor Profile Page (Static Mock)

| Component | Purpose | Time |  
|---|---|---|  
| Profile header | Cover photo, name, category, verified badge, price | 1 hour |  
| About section | Static description | 30 min |  
| Portfolio gallery | 6 placeholder images in grid | 1 hour |  
| Contact section | Phone, email, Instagram (hardcoded) | 30 min |  
| Inquiry button | Opens a WhatsApp link (hardcoded) | 15 min |  
| Share button | Dropdown with copy/WhatsApp/Instagram | 1 hour |  
| "Couples also viewed" | 3 static cards | 30 min |  
| View counter | Static number ("Viewed 142 times") | 15 min |

\#\#\# Phase 2 Deliverables

\- \[ \] All 6 pages built and styled  
\- \[ \] Responsive on mobile (\< 768px), tablet (768–1024px), desktop (\> 1024px)  
\- \[ \] Navbar and footer on every page  
\- \[ \] All CTA buttons wired (scroll or navigate, consistent behavior)  
\- \[ \] Deployed to Vercel production  
\- \[ \] All pages pass Google Lighthouse: Performance \> 80, Accessibility \> 80

\---

\#\# 5\. Phase 3: Form & Notifications (Week 3\)

\*\*Goal:\*\* The sign-up form works. Vendor submits → data goes to MongoDB Atlas → email sent → founder gets notified.

\#\#\# Days 1–2: Sign-Up Form

| Task | Time | Done? |  
|---|---|---|  
| Build VendorSignupForm component | 2 hours | ☐ |  
| Add all 10 form fields with labels | 1 hour | ☐ |  
| Add client-side validation (all rules from PRD) | 3 hours | ☐ |  
| Add character counter for description field | 30 min | ☐ |  
| Add phone number formatting (+91 auto-prefix) | 1 hour | ☐ |  
| Add price formatting (₹ \+ commas) | 30 min | ☐ |  
| Add honeypot field (hidden anti-spam) | 15 min | ☐ |  
| Add submit button with loading state | 30 min | ☐ |  
| Test form in browser (all validation states) | 1 hour | ☐ |

\#\#\# Days 3–4: Form API Endpoint

| Task | Time | Done? |  
|---|---|---|  
| Create \`app/api/submit-listing/route.ts\` | 1 hour | ☐ |  
| Validate all fields server-side | 2 hours | ☐ |  
| Connect to MongoDB Atlas: create record (status \= "pending") | 2 hours | ☐ |  
| Handle duplicate phone/email (check before insert) | 1 hour | ☐ |  
| Generate slug (handle collisions) | 1 hour | ☐ |  
| Return success / error responses | 1 hour | ☐ |  
| Test with Postman/Thunder Client (all cases) | 1 hour | ☐ |

\#\#\# Day 5: Email & Notification System

| Task | Time | Done? |  
|---|---|---|  
| Create \`app/api/send-confirmation/route.ts\` | 30 min | ☐ |  
| Set up Resend SDK in project | 30 min | ☐ |  
| Build "Thank you for listing" email template | 1 hour | ☐ |  
| Test: submit form → check vendor receives email | 30 min | ☐ |  
| Set up WhatsApp notification to founder | 1 hour | ☐ |  
| Optional: SMS confirmation via Twilio | 1 hour | ☐ |  
| Test: submit form → check founder receives notification | 30 min | ☐ |

\#\#\# Email Templates (Final Versions)

\*\*Template 1: Confirmation (to vendor)\*\*

\`\`\`  
Subject: You're on the list, \[Business Name\]\! — \[Platform\]

Hi \[Contact Person\],

Thanks for listing \[Business Name\] on \[Platform\]\!

Here's what happens next:  
1\. We'll review your listing within 24 hours  
2\. Your listing goes live on the platform  
3\. We'll give you a call this week to say hi

In the meantime, here's your listing link:  
\[link\]

Questions? Reply to this email or WhatsApp us at \[+91XXXXXXX\]

— \[Your Name\]  
\[Platform\]  
\`\`\`

\*\*Template 2: Listing Live (to vendor)\*\*

\`\`\`  
Subject: Your listing is live\! — \[Platform\]

Hi \[Contact Person\],

Your listing for \[Business Name\] is now live on \[Platform\]\!

Check it out: \[link\]

Here's what you can do now:  
• Share your listing on Instagram — tag us @\[platform\_handle\]  
• Send the link to past clients as your updated portfolio  
• Keep an eye out for inquiries from couples

Need to update anything? Just reply to this email.

— \[Your Name\]  
\`\`\`

\*\*Template 3: Need More Info (to vendor)\*\*

\`\`\`  
Subject: Quick question about your \[Platform\] listing

Hi \[Contact Person\],

Thanks for listing \[Business Name\]\! We're almost ready to publish your listing.

Could you share 5–6 recent photos from weddings you've done? You can:  
• Send them as a reply to this email  
• Share a Google Drive link  
• Or just share your Instagram handle and we'll grab them

Also, what's your minimum package price? (Optional, but helps couples know if you fit their budget.)

Thanks\!  
\[Your Name\]  
\`\`\`

\#\#\# Phase 3 Deliverables

\- \[ \] Sign-up form live on site  
\- \[ \] Form validation working (all fields, all error states)  
\- \[ \] Submissions saved to MongoDB Atlas  
\- \[ \] Vendor receives confirmation email  
\- \[ \] Founder receives WhatsApp notification on new sign-up  
\- \[ \] Thank You page shows after submission  
\- \[ \] Tested end-to-end with 2–3 real submissions

\---

\#\# 6\. Phase 4: Dynamic Pages (Week 4\)

\*\*Goal:\*\* Browse Vendors page pulls from MongoDB Atlas. Vendor Profile pages are dynamic. The platform is fully functional.

\#\#\# Days 1–2: Browse Vendors Page (Dynamic)

| Task | Time | Done? |  
|---|---|---|  
| Create \`/api/vendors\` API endpoint | 2 hours | ☐ |  
| Query MongoDB Atlas: \`status \= "approved"\` only | 1 hour | ☐ |  
| Add pagination (12 per page, "Load More") | 2 hours | ☐ |  
| Connect Browse page to API | 2 hours | ☐ |  
| Add filter tabs (All, Photographer, Makeup, etc.) | 2 hours | ☐ |  
| Filter logic: category filter on API call | 1 hour | ☐ |  
| URL query param sync (\`?category=photographer\`) | 1 hour | ☐ |  
| Loading skeletons while fetching | 1 hour | ☐ |  
| Empty states (no vendors, no results for filter) | 1 hour | ☐ |  
| Test: filters, pagination, empty states | 1 hour | ☐ |

\#\#\# Days 3–4: Vendor Profile Page (Dynamic)

| Task | Time | Done? |  
|---|---|---|  
| Create \`/api/vendors/\[slug\]\` endpoint | 2 hours | ☐ |  
| Query MongoDB Atlas by slug, return full vendor data | 1 hour | ☐ |  
| Handle 404 (vendor not found / rejected / inactive) | 1 hour | ☐ |  
| Connect profile page to API | 2 hours | ☐ |  
| Add view counter (increment on page load) | 1 hour | ☐ |  
| Add "Share on WhatsApp" with pre-filled message | 1 hour | ☐ |  
| Add "Copy Link" button | 30 min | ☐ |  
| Add "Couples also viewed" (3 random same-category vendors) | 1 hour | ☐ |  
| Make inquiry button dynamic (WhatsApp if Instagram, email if not) | 30 min | ☐ |  
| OG meta tags for social sharing | 30 min | ☐ |  
| Test: view profiles, share links, 404 handling | 1 hour | ☐ |

\#\#\# Day 5: Connect Everything & Polish

| Task | Time | Done? |  
|---|---|---|  
| Wire "List Your Business" CTA everywhere → sign-up form | 30 min | ☐ |  
| Test complete flow: Home → Form → Thank You → Browse → Profile | 1 hour | ☐ |  
| Test on real mobile device (not just browser dev tools) | 30 min | ☐ |  
| Fix any layout issues on mobile | 2 hours | ☐ |  
| Add Google Analytics or Plausible | 30 min | ☐ |  
| Add error boundary for graceful error handling | 1 hour | ☐ |  
| Deploy to production, smoke test | 30 min | ☐ |

\#\#\# Phase 4 Deliverables

\- \[ \] Browse Vendors page pulls live data from MongoDB Atlas  
\- \[ \] Category filters work  
\- \[ \] Vendor Profile pages are dynamic by slug  
\- \[ \] View counter increments  
\- \[ \] Share buttons work  
\- \[ \] 404 page for missing vendors  
\- \[ \] OG tags on all pages  
\- \[ \] Site fully deployed and functional

\---

\#\# 7\. Phase 5: Vendor Outreach & Onboarding (Weeks 5–8)

\*\*Goal:\*\* 50 vendors signed up, enriched, and live. This is NOT building — this is the actual business work.

\#\#\# Week 5: First 10 Vendors (Manual, High-Touch)

\*\*Goal:\*\* Prove the model. Get your first 10 listings live. Learn from each interaction.

| Day | Activity | Target | Done? |  
|---|---|---|---|  
| Mon | DM 10 photographers on Instagram | 10 DMs sent | ☐ |  
| Tue | Follow up on DMs, call those who respond | 5 calls | ☐ |  
| Wed | Google Maps search: "wedding photographers in \[City\]" | 10 numbers | ☐ |  
| Thu | Call Google Maps vendors, pitch platform | 5 calls | ☐ |  
| Fri | Send form links to interested vendors, help them fill it | 3 sign-ups | ☐ |  
| Sat | Manually enrich 3 listings (photos, description) | 3 live | ☐ |  
| Sun | Review what worked, adjust pitch | — | ☐ |

\*\*For each of the first 10 vendors, you do EVERYTHING manually:\*\*  
\- Fill the sign-up form on their behalf if needed  
\- Grab photos from their Instagram  
\- Write their description  
\- Upload everything to MongoDB Atlas  
\- Call them to confirm

This teaches you what information vendors actually have, what they struggle with, and what motivates them.

\#\#\# Week 6: Scale Outreach (15–20 More Vendors)

| Day | Activity | Target | Done? |  
|---|---|---|---|  
| Mon–Tue | Instagram outreach: photographers \+ makeup artists | 8 sign-ups | ☐ |  
| Wed–Thu | Instagram outreach: decorators \+ venues | 5 sign-ups | ☐ |  
| Fri | Wedding vendor WhatsApp/Facebook groups | 3 sign-ups | ☐ |  
| Sat | Enrich all new listings | 10 enriched | ☐ |  
| Sun | Follow up with Week 5 vendors (share their listings) | 10 shares | ☐ |

\*\*Outreach templates:\*\*

\*\*Instagram DM (to photographers):\*\*  
\`\`\`  
Hi \[Name\], love your work\! I'm building a platform to help wedding vendors in \[City\] get discovered by couples. Would you be interested in listing your business? It's free for early vendors. Here's the link: \[platform.in\]  
\`\`\`

\*\*Instagram DM (to makeup artists):\*\*  
\`\`\`  
Hi \[Name\], came across your profile — your bridal work is stunning\! I'm putting together a directory of the best wedding vendors in \[City\]. Want to be featured? Free listing: \[platform.in\]  
\`\`\`

\*\*Phone call (to Google Maps vendors):\*\*  
\`\`\`  
"Hi, is this \[Business Name\]? My name is \[Your Name\]. I'm building a platform for wedding vendors in \[City\] to get more leads from couples. I came across your business on Google and I love what you do. Would you be interested in being listed? It's completely free for the first few months."  
\`\`\`

\#\#\# Week 7: Fill Gaps (Target All Categories)

| Category | Target | Current | Done? |  
|---|---|---|---|  
| Photographers | 15 | ? | ☐ |  
| Makeup Artists | 10 | ? | ☐ |  
| Decorators | 8 | ? | ☐ |  
| Venues | 5 | ? | ☐ |  
| Mehendi Artists | 4 | ? | ☐ |  
| Choreographers | 3 | ? | ☐ |  
| Cards | 3 | ? | ☐ |  
| Caterers | 2 | ? | ☐ |

\*\*Week 7 focus:\*\* If photographers are easy but venues are hard, spend extra time on venues. A platform without venues feels incomplete to couples.

\#\#\# Week 8: Enrichment & Activation

\*\*Goal:\*\* Every approved vendor has a complete, shareable listing.

| Task | Target | Done? |  
|---|---|---|  
| Enrich listings (add photos, improve descriptions) | All 50 | ☐ |  
| Verify phone numbers (call each vendor) | All 50 | ☐ |  
| Send "Your listing is live" email with link | All 50 | ☐ |  
| Ask vendors to share their listing on Instagram | 30+ share | ☐ |  
| Track listing shares (manual: note in MongoDB Atlas) | 30+ | ☐ |  
| Ask each vendor: "Can you refer 2 other vendors?" | 20 referrals | ☐ |

\*\*Enrichment checklist per vendor:\*\*

\`\`\`  
For each vendor:  
  \[ \] Upload 6–12 photos to "photos" field  
  \[ \] Verify/improve description  
  \[ \] Set starting price (ask if not provided)  
  \[ \] Verify Instagram handle  
  \[ \] Set is\_verified \= true if quality is high  
  \[ \] Update view\_count to a reasonable starting number (10–50)  
  \[ \] Add notes from phone call  
  \[ \] Send "listing live" email with their unique link  
  \[ \] Log in MongoDB Atlas: "enriched\_at" date, "live\_email\_sent" checkbox  
\`\`\`

\#\#\# Phase 5 Deliverables

\- \[ \] 50 vendors in MongoDB Atlas  
\- \[ \] 30+ approved and live on site  
\- \[ \] All approved vendors have 6+ photos  
\- \[ \] Every vendor received a phone call  
\- \[ \] Every approved vendor received "listing live" email  
\- \[ \] MongoDB Atlas backup exported to Google Drive  
\- \[ \] Outreach log: what worked, what didn't, refined pitch

\---

\#\# 8\. Phase 6: Couple-Facing Features (Weeks 9–10)

\*\*Goal:\*\* The platform works for couples. They can browse, search, and contact vendors. Reviews are collected post-booking.

\#\#\# Days 1–3: Couple-Facing Enhancements

| Task | Time | Done? |  
|---|---|---|  
| Update homepage: add couple-facing copy below fold | 2 hours | ☐ |  
| Add "Browse Vendors" as primary nav link (not secondary) | 30 min | ☐ |  
| Make Browse Vendors the default landing for non-vendors | 1 hour | ☐ |  
| Add search bar to Browse page (search by name) | 2 hours | ☐ |  
| Add location filter (if multiple cities later) | 1 hour | ☐ |  
| Add price range filter | 2 hours | ☐ |  
| Improve mobile experience for browse page | 3 hours | ☐ |  
| Add "Recently added" section on homepage | 1 hour | ☐ |

\#\#\# Days 4–5: Inquiry / Lead System

| Task | Time | Done? |  
|---|---|---|  
| Create inquiry form on vendor profile page | 2 hours | ☐ |  
| Fields: name, phone, wedding date, guest count, message | 1 hour | ☐ |  
| Submit → save to MongoDB Atlas (new "Leads" table or vendor notes) | 2 hours | ☐ |  
| Send email notification to vendor with inquiry details | 2 hours | ☐ |  
| Send WhatsApp/SMS to vendor with inquiry summary | 1 hour | ☐ |  
| Show "Inquiry sent\!" confirmation to couple | 30 min | ☐ |  
| Add "Contact vendor directly" fallback (if form fails) | 30 min | ☐ |

\*\*Inquiry form on vendor profile:\*\*

\`\`\`  
┌─────────────────────────────────────────┐  
│  Send Inquiry to \[Vendor Name\]           │  
│                                         │  
│  Your Name \*                            │  
│  \[\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\]                     │  
│                                         │  
│  Your Phone Number \*                    │  
│  \[\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\]                     │  
│                                         │  
│  Wedding Date                           │  
│  \[\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\]                     │  
│                                         │  
│  Number of Guests                       │  
│  \[\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\]                     │  
│                                         │  
│  Message (optional)                     │  
│  \[\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\]                     │  
│  \[\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\]                     │  
│                                         │  
│  \[Send Inquiry →\]                       │  
│                                         │  
│  Or contact directly:                   │  
│  📞 \+91 XXXXX XXXXX                     │  
│  💬 WhatsApp                             │  
└─────────────────────────────────────────┘  
\`\`\`

\#\#\# Optional (If Time Permits): Review Collection

| Task | Time | Done? |  
|---|---|---|  
| Add "Leave a review" form on vendor profile | 3 hours | ☐ |  
| Review fields: rating (1–5), title, message | 2 hours | ☐ |  
| Save reviews to MongoDB Atlas | 1 hour | ☐ |  
| Show reviews on vendor profile page | 2 hours | ☐ |  
| Moderate reviews (founder approves before showing) | — | ☐ |

\*\*Phase 6 Deliverables:\*\*  
\- \[ \] Couples can browse and search vendors  
\- \[ \] Inquiry form works end-to-end  
\- \[ \] Vendors receive inquiry notifications  
\- \[ \] Platform is usable by both sides

\---

\#\# 9\. Phase 7: Launch (Weeks 11–12)

\#\#\# Week 11: Soft Launch (Friends, Family, Beta Testers)

| Day | Activity | Done? |  
|---|---|---|  
| Mon | Invite 20 personal connections to browse the site | ☐ |  
| Tue | Ask for feedback: what's confusing? what's missing? | ☐ |  
| Wed | Fix critical bugs from feedback | ☐ |  
| Thu | Add 5 more vendors from feedback/referrals | ☐ |  
| Fri | Test complete user journey (couple browses → inquires → vendor receives) | ☐ |  
| Sat | Fix all bugs found during testing | ☐ |  
| Sun | Prepare launch assets: Instagram post, story templates | ☐ |

\*\*Soft launch criteria (must pass all before public launch):\*\*  
\- \[ \] All 6 pages load in \< 2 seconds  
\- \[ \] Form submits successfully (test 5 times)  
\- \[ \] Vendor profile pages load correctly (test 10 different vendors)  
\- \[ \] Filters work on Browse page  
\- \[ \] Mobile experience is usable (test on actual phone)  
\- \[ \] Inquiry form submits and vendor receives notification  
\- \[ \] No broken links (test every link on every page)  
\- \[ \] OG tags show correct preview when shared on WhatsApp/Instagram

\#\#\# Week 12: Public Launch

| Day | Activity | Done? |  
|---|---|---|  
| Mon | \*\*LAUNCH DAY\*\* — post on Instagram, share in vendor groups | ☐ |  
| Tue | Monitor: sign-ups, inquiries, any bugs | ☐ |  
| Wed | Respond to every sign-up personally (call or DM) | ☐ |  
| Thu | Share 3 vendor listings on platform's Instagram | ☐ |  
| Fri | Reach out to 2–3 local wedding blogs/pages | ☐ |  
| Sat | Enrich any new vendor listings from launch week | ☐ |  
| Sun | Review metrics: sign-ups, page views, inquiries | ☐ |

\*\*Launch day checklist:\*\*  
\- \[ \] Instagram post: "We're live\! The easiest way for wedding vendors in \[City\] to get discovered. Free listings for early vendors. Link in bio →"  
\- \[ \] Instagram story: 5–10 stories explaining the platform, with link sticker  
\- \[ \] WhatsApp status: share with personal network  
\- \[ \] Post in 3–5 local wedding vendor groups  
\- \[ \] Email to any contacts you have in the wedding industry  
\- \[ \] DM every vendor you've ever talked to about this idea

\#\#\# Phase 7 Deliverables

\- \[ \] Platform live and stable  
\- \[ \] 50 vendors onboarded  
\- \[ \] First couple inquiry received  
\- \[ \] First vendor shares listing on Instagram  
\- \[ \] Launch metrics documented

\---

\#\# 10\. Weekly Rhythms (After Launch)

Once the platform is live, your weekly routine becomes the most important thing:

\#\#\# Daily (15–30 min)

| Task | Time |  
|---|---|  
| Check for new sign-ups (MongoDB Atlas notification) | 5 min |  
| Call new vendors (2–3 calls/day) | 15 min |  
| Respond to any urgent messages | 5 min |

\#\#\# Weekly (2–3 hours)

| Day | Task | Time |  
|---|---|---|  
| Monday | Review MongoDB Atlas: new sign-ups, pending reviews | 30 min |  
| Tuesday | Enrich new listings (photos, descriptions) | 1 hour |  
| Wednesday | Post on Instagram (vendor spotlight, new listings) | 30 min |  
| Thursday | Call vendors who haven't shared their listing | 45 min |  
| Friday | Export MongoDB Atlas CSV backup to Google Drive | 15 min |  
| Saturday | Review metrics: sign-ups, page views, inquiries | 30 min |  
| Sunday | Plan next week's outreach targets | 30 min |

\#\#\# Monthly

| Task | Time |  
|---|---|  
| Review platform metrics (Google Analytics / Vercel) | 1 hour |  
| Outreach to 30 new vendors | 3–4 hours |  
| Enrich pending listings | 2 hours |  
| Plan next month's growth experiments | 1 hour |  
| Update MongoDB Atlas backup | 15 min |

\---

\#\# 11\. Critical Path & Dependencies

\`\`\`  
                    ┌──────────┐  
                    │ DOMAIN   │  
                    │ PURCHASED│  
                    └────┬─────┘  
                         │  
                         ▼  
                    ┌──────────┐  
                    │ ACCOUNTS │  
                    │ SET UP   │  
                    └────┬─────┘  
                         │  
                         ▼  
                    ┌──────────┐  
                    │ PROJECT  │  
                    │ SCAFFOLD │  
                    └────┬─────┘  
                         │  
                         ▼  
          ┌──────────────┴──────────────┐  
          │                             │  
          ▼                             ▼  
   ┌──────────┐                 ┌──────────┐  
   │ STATIC   │                 │  FIRST   │  
   │ PAGES    │────────────────▶│  10      │  
   │          │                 │ VENDORS  │  
   └────┬─────┘                 └────┬─────┘  
        │                            │  
        │                            │ in parallel  
        │                            ▼  
        │                     ┌──────────┐  
        │                     │ VENDOR   │  
        │                     │OUTREACH │  
        │                     │ 50 total│  
        │                     └────┬─────┘  
        │                           │  
        │◀──────────────────────────┘  
        │        (feedback loop)  
        │  
        ▼  
   ┌──────────┐  
   │ DYNAMIC  │  
   │ PAGES    │  
   └────┬─────┘  
        │  
        ▼  
   ┌──────────┐  
   │ COUPLE   │  
   │ FEATURES │  
   └────┬─────┘  
        │  
        ▼  
   ┌──────────┐  
   │  LAUNCH  │  
   └──────────┘  
\`\`\`

\*\*Critical dependencies:\*\*  
1\. Domain must be purchased before MongoDB Atlas form uses custom domain  
2\. Project scaffold before any page building  
3\. Static pages before dynamic pages (you need to see the design before wiring data)  
4\. 10 vendors before launching couple features (need supply)  
5\. Couple features before public launch (need demand side)

\---

\#\# 12\. Risk Register & Mitigation

| Risk | Likelihood | Impact | Mitigation |  
|---|---|---|---|  
| Vendors don't respond to DMs | Medium | High | Test outreach BEFORE building. If \<10% response, refine pitch or target different vendor type |  
| MongoDB Atlas API rate limits | Low | Medium | MongoDB Atlas free tier: 5 req/sec. Enough for 50 vendors. Upgrade to Plus ($10/mo) if needed |  
| Founder loses motivation during outreach | High | High | Set daily targets (5 DMs, 2 calls). Batch outreach. Use the spreadsheet to track progress visually |  
| No vendors sign up | Medium | High | Offer more incentives (free premium for 6 months, featured placement). Talk to more vendors in person |  
| Platform is too basic vs. WedMeGood | Low | Medium | You're not competing on features. Compete on locality, trust, and personal service |  
| Form spam / fake submissions | Medium | Low | Honeypot field \+ rate limiting. Manual review catches fakes during phone calls |  
| Couples don't show up (only vendors use it) | Medium | High | Content marketing: blog posts, Instagram tips for couples, SEO for couple-facing queries |  
| Founder gets sick / unavailable | Low | High | MongoDB Atlas \+ automated notifications mean business continues. Vendors can still sign up |  
| Photo upload fails (MongoDB Atlas attachment limits) | Medium | Low | Manual upload by founder. Don't let vendors upload in MVP |

\---

\#\# 13\. Quality Gates

You only move to the next phase if ALL items are checked:

\#\#\# Gate 1: Before Phase 2 (Static Pages)  
\- \[ \] Vercel deployment is live and accessible  
\- \[ \] Navbar and footer render on all pages  
\- \[ \] Responsive on mobile (test on real phone)  
\- \[ \] Lighthouse Performance \> 80

\#\#\# Gate 2: Before Phase 3 (Form)  
\- \[ \] All 6 static pages look good and are reviewed by 1 other person  
\- \[ \] No broken links  
\- \[ \] All CTA buttons navigate somewhere

\#\#\# Gate 3: Before Phase 4 (Dynamic Pages)  
\- \[ \] Form submits successfully (tested 5 times)  
\- \[ \] Vendor receives confirmation email  
\- \[ \] Data appears in MongoDB Atlas correctly  
\- \[ \] Founder receives notification

\#\#\# Gate 4: Before Phase 5 (Vendor Outreach)  
\- \[ \] Browse page shows at least 5 vendors (manually added to MongoDB Atlas)  
\- \[ \] Vendor profile pages load for all 5 vendors  
\- \[ \] Filters work  
\- \[ \] Full flow tested: sign up → see listing → view profile

\#\#\# Gate 5: Before Phase 7 (Public Launch)  
\- \[ \] 30+ vendors approved and live  
\- \[ \] All vendor listings have 6+ photos  
\- \[ \] Soft launch feedback addressed  
\- \[ \] No critical bugs (form works, pages load, links not broken)  
\- \[ \] Launch assets ready (Instagram post, stories)

\---

\#\# 14\. Budget Breakdown

\#\#\# Tool Costs (Monthly, MVP Phase)

| Tool | Plan | Cost (INR/mo) | Notes |  
|---|---|---|---|  
| Vercel | Hobby (free) | ₹0 | Upgrade to Pro ($20/mo) if needed |  
| MongoDB Atlas | Free | ₹0 | Upgrade to Plus ($10/mo) at 500+ records |  
| Resend | Free (3,000 emails/mo) | ₹0 | Upgrade at 10,000+ emails/mo |  
| Cloudinary | Free | ₹0 | 25GB storage, 25GB bandwidth |  
| Domain | Annual | \~₹70/mo | \~₹800/yr for .in |  
| WhatsApp Business | Free | ₹0 | API charges apply per message |  
| \*\*Total\*\* | | \*\*\~₹70/mo\*\* | Under ₹500/mo for entire MVP |

\#\#\# Time Investment

| Phase | Founder (You) | Developer (if separate) |  
|---|---|---|  
| Phase 1: Setup | 2–3 days | 2–3 days |  
| Phase 2: Static Pages | 3–4 days | 5–7 days |  
| Phase 3: Form & Notifications | 2–3 days | 3–4 days |  
| Phase 4: Dynamic Pages | 2–3 days | 3–4 days |  
| Phase 5: Vendor Outreach | 4 weeks (ongoing) | — |  
| Phase 6: Couple Features | 3–4 days | 3–5 days |  
| Phase 7: Launch | 1 week | — |  
| \*\*Total build time\*\* | \*\*2–3 weeks\*\* | \*\*3–4 weeks\*\* |  
| \*\*Total outreach time\*\* | \*\*4 weeks\*\* | — |

\---

\#\# 15\. Success Metrics Tracker

Print this or keep it in a spreadsheet. Update weekly:

| Week | Date | Vendors Signed Up | Vendors Live | Page Views | Inquiries Sent | New Followers | Notes |  
|---|---|---|---|---|---|---|---|  
| 1 | | 0 | 0 | — | — | — | Setup phase |  
| 2 | | 0 | 0 | — | — | — | Building |  
| 3 | | 0 | 0 | — | — | — | Building |  
| 4 | | 0 | 0 | — | — | — | Building |  
| 5 | | | | | | | |  
| 6 | | | | | | | |  
| 7 | | | | | | | |  
| 8 | | | | | | | |  
| 9 | | | | | | | |  
| 10 | | | | | | | |  
| 11 | | | | | | | |  
| 12 | | | | | | | |

\*\*Target: Week 12 \= 50 vendors signed up, 30+ live, platform ready for couples.\*\*

\---

\#\# 16\. Week-by-Week Summary Card

| Week | Phase | Focus | Key Output | Success Criteria |  
|---|---|---|---|---|  
| \*\*0\*\* | Pre-dev | Research, accounts, outreach test | 5 vendor DMs sent, 3+ responses | Vendors respond positively |  
| \*\*1\*\* | Foundation | Accounts, scaffold, deploy | Live empty site, MongoDB Atlas ready | Site loads on Vercel |  
| \*\*2\*\* | Static Pages | Build all 6 pages | All pages designed and deployed | Lighthouse \> 80 |  
| \*\*3\*\* | Form & API | Sign-up form, MongoDB Atlas integration | Form submits, emails sent | 1 test submission works |  
| \*\*4\*\* | Dynamic Pages | Browse, profile, filters | Live data from MongoDB Atlas | 5 vendors show on site |  
| \*\*5\*\* | Outreach 1 | First 10 vendors | 10 vendors in MongoDB Atlas | 3 enriched, live |  
| \*\*6\*\* | Outreach 2 | Scale to 25 vendors | 25 total | 15 live |  
| \*\*7\*\* | Outreach 3 | Fill all categories | 40+ total | 25 live |  
| \*\*8\*\* | Enrichment | Complete all listings | 50 total | 30+ live, enriched |  
| \*\*9\*\* | Couple Features | Inquiry system, search | Couples can contact vendors | 1 test inquiry sent |  
| \*\*10\*\* | Polish | Fix bugs, improve UX | Stable platform | No critical bugs |  
| \*\*11\*\* | Soft Launch | Beta test with friends | Feedback incorporated | All soft-launch criteria met |  
| \*\*12\*\* | Public Launch | Go live | Live on social media | 50 vendors, platform live |

\---

This is your complete implementation roadmap. Every week has clear deliverables. Every deliverable has clear acceptance criteria. Start with Week 0 today.

What's your city? That's the first thing to lock in before anything else.  
