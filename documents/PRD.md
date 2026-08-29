# **PART 1: PRODUCT REQUIREMENTS DOCUMENT (PRD)**

---

## **1\. Product Overview**

| Field | Detail |
| ----- | ----- |
| **Product Name** | \[Your Platform Name\] |
| **Tagline** | "The easiest way for wedding vendors in \[City\] to get discovered" |
| **Version** | 1.0 (MVP) |
| **Status** | Draft |
| **Owner** | \[You\] |

### **Problem**

Wedding vendors in \[City\] struggle to find consistent, high-intent leads. Existing platforms charge high commissions, have poor verification, or focus only on metros. Couples in \[City\] lack a trusted local vendor directory. The gap: a simple, honest platform that connects local vendors with planning couples.

### **Solution**

A vendor directory and listing platform that starts with vendor supply, then opens to couples. No commissions. Free listings for early vendors. Verified, curated supply in one city.

---

## **2\. Target Users**

### **Primary: Vendors (Phase 1 — build for these first)**

| Segment | Examples | Pain Point |
| ----- | ----- | ----- |
| Photographers | Wedding, pre-wedding, candid | Leads come from Instagram DMs or referrals only |
| Makeup Artists | Bridal, family | Hard to showcase portfolio, no discovery channel |
| Decorators | Wedding mandap, reception | High competition, no way to differentiate |
| Venues | Banquet halls, farmhouses | Rely on word-of-mouth, no online presence |
| Specialists | Mehendi, choreographers, cards | Almost no discoverability |

**User persona:** Small business owner, 25–45 years old, active on Instagram, gets 30–60% of leads from Instagram/word-of-mouth, frustrated with platform fees on WedMeGood/Instagram.

### **Secondary: Couples (Phase 2 — enable after vendor supply)**

| Segment | Characteristics |
| ----- | ----- |
| Brides-to-be | 22–32, planning 3–12 months out, research-heavy, trust reviews |
| Grooms-to-be | Secondary researcher, often defers to partner |
| Parents | Decision makers for budget/venue, prefer phone/WhatsApp |

---

## **3\. Product Goals**

### **Business Goals**

1. Onboard 50+ verified vendors in \[City\] within 90 days  
2. Achieve 60%+ positive response rate on vendor onboarding calls  
3. Reach a state where vendors proactively ask *"when will couples be on the platform?"*  
4. Build a recognizable brand name among wedding vendors in \[City\]

### **Product Goals**

1. Vendor sign-up flow completes in under 3 minutes  
2. Vendor listing page renders in under 2 seconds  
3. 100% of vendors get a phone call from founder within 48 hours of signing up

### **Non-Goals (explicitly out of scope for v1)**

* Couple-facing search, filters, reviews  
* Booking/payment flow  
* Vendor dashboard with analytics  
* Mobile apps  
* Multi-city support  
* Vendor subscriptions or payments

---

## **4\. Success Metrics**

| Metric | Target | Measurement |
| ----- | ----- | ----- |
| Vendor sign-ups | 50 in 90 days | Google Sheets count |
| Sign-up completion rate | \>70% | Form submissions / landing page visits |
| Call connect rate | \>40% | Calls connected / sign-ups |
| Listing completion rate | \>60% | Vendors with enriched listings / total sign-ups |
| Vendor NPS | \>30 | Post-call survey (1 question: "Would you recommend this platform?") |
| Page load time | \<2s | Vercel analytics / Webflow |
| Organic listing shares | 10+ in 90 days | Track via WhatsApp clicks, Instagram story tags |

---

## **5\. Feature Specification**

### **5.1 Pages**

| \# | Page | URL | Status | Priority |
| ----- | ----- | ----- | ----- | ----- |
| 1 | Home/Landing | `/` | Must have | P0 |
| 2 | For Vendors | `/for-vendors` | Must have | P0 |
| 3 | Browse Vendors | `/vendors` | Must have | P0 |
| 4 | Vendor Profile | `/vendors/[slug]` | Must have | P0 |
| 5 | How It Works | `/how-it-works` | Must have | P0 |
| 6 | About/Contact | `/about` | Must have | P0 |

### **5.2 Page Details**

#### **Page 1: Home (`/`)**

**Sections:**

| Section | Content | Interaction |
| ----- | ----- | ----- |
| Navigation | Logo, nav links, "List Free →" CTA button | Sticky on scroll |
| Hero | City-name headline, subheadline, primary CTA | CTA → sign-up form (inline or scroll to form) |
| Social proof | "Trusted by X+ vendors in \[City\]" | Counter updates as vendors join |
| How It Works | 3-step visual (List → Get inquiries → Grow) | Static |
| Bottom CTA | "Ready to get discovered?" \+ button | CTA → sign-up form |

**Fields on sign-up form (inline on home or separate page):**

| Field | Type | Required | Notes |
| ----- | ----- | ----- | ----- |
| Business name | Text | Yes |  |
| Category | Dropdown | Yes | Photographer, Makeup, Decor, Venue, Mehendi, Choreographer, Cards, Catering, Other |
| City | Dropdown | Yes | Pre-filled to \[City\], lock it |
| Contact person | Text | Yes |  |
| Phone | Tel | Yes | With country code (+91) |
| Email | Email | Yes |  |
| Instagram | Text | No | "@" prefix optional |
| Starting price | Number | No | "From ₹\_\_\_\_" |
| Portfolio link | URL | No | Instagram or website |
| Description | Textarea | No | Max 200 chars |

**Form behavior:**

* Submit → redirect to thank you page  
* Auto-save to Airtable/Google Sheet  
* Send confirmation email \+ SMS  
* Trigger founder notification (email \+ WhatsApp)

**Thank you page:**

> *"Thanks, \[Business Name\]\! We'll review and publish your listing within 24 hours. We'll call you this week to say hi."*

---

#### **Page 2: For Vendors (`/for-vendors`)**

**Sections:**

| Section | Content |
| ----- | ----- |
| Headline | "Why list on \[Platform\]?" |
| Value props | 5 bullet points: Free listing, direct inquiries, verified badge, no commissions, simple dashboard |
| Categories | Grid showing all categories we cover |
| CTA | "List Your Business — Free" → form |

**No dynamic content. Static page. Refresh copy based on common objections heard on calls.**

---

#### **Page 3: Browse Vendors (`/vendors`)**

**Layout:**

| Element | Behavior |
| ----- | ----- |
| Filter bar | Category tabs: All, Photographers, Makeup, Decor, Venues, Others |
| Vendor cards | Grid, 3 per row on desktop, 1 on mobile |
| Card content | Thumbnail photo, business name, category badge, city, starting price, "View →" link |
| Pagination | "Load more" button (not numbered pages) |
| Empty state | If 0 vendors: "Vendors coming soon to \[City\]. Are you a vendor? List your business →" |
| Bottom CTA | "Are you a vendor? List your business →" |

**Data source:** Airtable/Notion database of vendors with status \= "approved"

---

#### **Page 4: Vendor Profile (`/vendors/[slug]`)**

**Sections:**

| Section | Content | Notes |
| ----- | ----- | ----- |
| Header | Business name, category, city, star rating |  |
| Gallery | 6–12 photos in a grid | Source: Instagram scrape or manual upload |
| About | Description (from sign-up form or enriched by founder) |  |
| Starting price | "Starting from ₹XX,XXX" | Optional field |
| Portfolio | Full-width image grid |  |
| Contact | Phone (click to call), email, Instagram handle |  |
| Inquiry button | "Send Inquiry" → WhatsApp deep link or mailto |  |
| Share button | "Share this listing" → copies link, opens WhatsApp with pre-filled message |  |
| "Claim this listing" | Visible only if not yet "claimed" by vendor | Triggers email to vendor |

**Dynamic elements:**

* View counter: increments on each page load (no deduplication needed for MVP)  
* "Couples also viewed" section: shows 3 random other vendors in same category

---

#### **Page 5: How It Works (`/how-it-works`)**

**3 steps, visual \+ text:**

1. **List your business** — Fill in your details. Takes 2 minutes.  
2. **We review & publish** — Your listing goes live within 24 hours.  
3. **Start getting inquiries** — Couples find you and reach out directly.

**Bottom CTA → sign-up form.**

---

#### **Page 6: About (`/about`)**

**Sections:**

| Section | Content |
| ----- | ----- |
| Headline | "About \[Platform\]" |
| Founder section | Your photo, name, 2–3 sentence story about why you started this |
| Mission | One paragraph: what you're building and for whom |
| Contact block | Phone (big), email, WhatsApp link, Instagram |
| Bottom CTA | "List your business →" |

**This page is optimized for vendors who are skeptical. They want to see a real person behind the platform.**

---

### **5.3 Features NOT in MVP**

| Feature | Why excluded | When to add |
| ----- | ----- | ----- |
| Vendor login/dashboard | Manage via spreadsheet; \~50 vendors don't need self-serve yet | After 100+ vendors or when couples arrive |
| Couple search & filters | No couple supply yet | Phase 2 |
| Reviews & ratings | No couples to write reviews yet | Phase 2 |
| Booking system | Too complex; use phone/WhatsApp for now | Phase 2 |
| Photo upload by vendor | Manual enrichment by founder is faster and higher quality | Phase 2 |
| Vendor subscription/payment | Keep free until demand is proven | Phase 2 |
| Multi-city | Focus on one city for depth | After PMF in city 1 |
| Blog/content | SEO takes months; not needed for vendor acquisition | After Phase 2 launch |
| Mobile app | Web is sufficient for vendors | When couple side demands it |

---

## **6\. User Flows**

### **Flow A: Vendor Discovers & Signs Up**

1\. Lands on homepage (via Instagram DM, Google search, referral)  
2\. Reads hero \+ social proof (30 seconds)  
3\. Clicks "List Your Business — Free"  
4\. Fills 10-field form (2 minutes)  
5\. Submits → sees thank you page  
6\. Receives confirmation email/SMS  
7\. Gets phone call from founder within 48 hours  
8\. Founder enriches listing manually  
9\. Receives "Your listing is live" email with link  
10\. Shares listing on Instagram/with past clients

### **Flow B: Vendor Browses & Decides to Join**

1\. Lands on /vendors (sees link from another vendor's Instagram)  
2\. Sees other vendors in their category  
3\. Clicks one → sees a full profile page  
4\. Thinks "my listing could look like this"  
5\. Goes to nav → "List Free" → fills form

### **Flow C: Vendor Profile Share (organic growth)**

1\. Vendor receives listing link via WhatsApp from founder  
2\. Shares on Instagram story: "Just listed on \[Platform\]\!"  
3\. Another vendor sees story → clicks → lands on /vendors  
4\. Signs up → loop continues

---

## **7\. Content Guidelines**

### **Tone of Voice**

* **Direct and plain-spoken.** Vendors are business people, not tech users.  
* **Local.** Always mention the city. "Vendors in Jaipur" not "vendors like you."  
* **Confident but not hype-y.** No "revolutionary", "game-changing", "disrupting."  
* **Respectful of their time.** Say "2 minutes" not "quick and easy."

### **Prohibited Language**

* ❌ "Sign up" → use "List your business"  
* ❌ "Create an account" → use "Join" or "Get listed"  
* ❌ "Join our community" → use "Get discovered" or "Get more leads"  
* ❌ Wedding jargon ("big day", "special day") — vendors cringe at this  
* ❌ Emoji-heavy copy — keep it clean and professional

---

## **8\. Launch Plan**

| Phase | Duration | Activity |
| ----- | ----- | ----- |
| **Pre-launch** | Week 1–2 | Build site, set up Airtable, prepare outreach scripts |
| **Soft launch** | Week 3 | Onboard first 10 vendors manually (friends, referrals, Instagram DMs) |
| **Alpha launch** | Week 4–6 | Outreach to 100 vendors via Instagram/Google Maps |
| **Beta launch** | Week 7–10 | Refine based on call feedback, launch /vendors page, content push |
| **Phase 1 complete** | Week 11–13 | 50 vendors onboarded, enriched listings, ready for couples |

