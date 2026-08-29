---

---

# **PART 2: TECHNICAL REQUIREMENTS DOCUMENT (TRD)**

---

## **1\. System Overview**

A static-first, content-driven web platform for wedding vendor discovery. Phase 1 is a **read-heavy directory with a single write path** (vendor sign-up form). No authentication, no real-time features, no complex state management.

**Architecture pattern:** JAMstack (JavaScript \+ APIs \+ Markup). Static pages served from CDN. Form submission writes to a headless CMS/database.

---

## **2\. Architecture Diagram**

┌─────────────┐     ┌──────────────┐     ┌─────────────────┐  
│   Browser   │────▶│  CDN / Host  │────▶│  Static Pages   │  
│             │     │  (Vercel)    │     │  (Next.js)      │  
└─────────────┘     └──────────────┘     └─────────────────┘  
                                                │  
                                                │ Form submit  
                                                ▼  
                                         ┌─────────────┐  
                                         │   API Route │  
                                         │  (Next.js)  │  
                                         └──────┬──────┘  
                                                │  
                          ┌─────────────────────┼─────────────────────┐  
                          ▼                     ▼                     ▼  
                    ┌───────────┐         ┌───────────┐       ┌───────────┐  
                    │  Airtable │         │ Resend    │       │ Twilio    │  
                    │ (Database)│         │ (Email)   │       │ (SMS)     │  
                    └───────────┘         └───────────┘       └───────────┘

**Key principle:** All pages are static. No server-side rendering needed. The only dynamic element is the form submission endpoint and the browse-vendors page (which reads from Airtable at build time or via API).

---

## **3\. Tech Stack**

### **Stack: Next.js + MongoDB Atlas + Vercel**

| Layer | Tool | Why | Cost |
| ----- | ----- | ----- | ----- |
| **Framework** | Next.js 14 (App Router) | Static export, great SEO, fast | Free |
| **Styling** | Tailwind CSS + Shadcn UI | Ship fast, clean design system | Free |
| **Database** | MongoDB Atlas (M0 free tier) | Free hosted MongoDB, no backend to manage | Free (512MB) |
| **Driver** | MongoDB Node.js driver | Direct queries, no ORM overhead | Free |
| **API** | Next.js API Routes | Form handler, vendor CRUD | Free |
| **Email** | Resend SDK | Reliable, simple API | Free (3,000 emails/mo) |
| **SMS** | Twilio Node SDK (optional) | Optional vendor confirmations | Pay-per-use |
| **Image hosting** | Cloudinary free tier | Upload vendor photos | Free (25GB) |
| **Deployment** | Vercel | Free hobby plan, fast CDN | Free |
| **Domain** | Namecheap | .in domain | ~₹800/yr |

**Total cost: ~₹70/mo (domain only). Dev time: 30–50 hours.**

### **Local Development**

| Tool | Purpose |
| ----- | ----- |
| **Docker** | Containerized Next.js dev server on port 3000 |
| **MongoDB Atlas** | Cloud DB — same URI for local + production (no local DB container) |
| **dotenv** | `.env.local` for secrets, never committed |

Run locally: `docker compose up -d` → `http://localhost:3000`

---

## **4\. Data Model**

### **MongoDB Atlas: "vendors" collection**

**Collection: `vendors`**

| Field | Type | Required | Notes |
| ----- | ----- | ----- | ----- |
| `_id` | ObjectId | Yes | Primary key (auto-generated) |
| `business_name` | String | Yes |  |
| `category` | String | Yes | Photographer, Makeup, Decor, Venue, Mehendi, Choreographer, Cards, Catering, Other |
| `city` | String | Yes | Pre-filled to "Jaipur", locked |
| `contact_person` | String | Yes |  |
| `phone` | String | Yes | +91XXXXXXXXXX, unique |
| `email` | String | Yes | Valid email, unique |
| `instagram` | String | No | @handle without @ |
| `starting_price` | Number | No | In INR |
| `portfolio_url` | String | No |  |
| `description` | String | No | Max 500 chars |
| `slug` | String | Yes | URL-safe: `LOWER(SUBSTITUTE(TRIM(business_name), " ", "-"))`, unique |
| `status` | String | Yes | `pending` / `approved` / `rejected` / `inactive`, default `pending` |
| `photos` | [String] | No | Array of image URLs, max 12 |
| `view_count` | Number | No | Default 0, increment on each page view |
| `source` | String | No | instagram_dm, google_maps, referral, expo, walk_in, other |
| `notes` | String | No | Founder's call notes |
| `is_verified` | Boolean | No | Default false |
| `is_featured` | Boolean | No | Default false |
| `claimed_by_vendor` | Boolean | No | Default false |
| `inquiry_count` | Number | No | Default 0 |
| `created_at` | Date | Yes | Default now() |
| `updated_at` | Date | Yes | Default now() |
| `approved_at` | Date | No | Set when status → approved |
| `last_contacted_at` | Date | No | Last founder call/email |

**Indexes:**
```js
// Unique constraints
db.vendors.createIndex({ slug: 1 }, { unique: true })
db.vendors.createIndex({ phone: 1 }, { unique: true })
db.vendors.createIndex({ email: 1 }, { unique: true })

// Browse query: WHERE status = 'approved' AND category = 'X' sorted by verified + views
db.vendors.createIndex(
  { status: 1, category: 1, is_verified: -1, view_count: -1 },
  { partialFilterExpression: { status: 'approved' } }
)
```

---

## **5\. API Specification**

### **5.1 POST `/api/submit-listing`**

**Purpose:** Handle vendor sign-up form submission.

**Request:**

jsonCopy  
{"business\_name":"Rajasthan Weddings Co.","category":"Photographer","city":"Jaipur","contact\_person":"Rahul Sharma","phone":"+919876543210","email":"rahul@example.com","instagram":"@rajasthanweddings","starting\_price":25000,"portfolio\_url":"\<https://instagram.com/rajasthanweddings","description":"Candid\> wedding photography in Jaipur since 2018."}

**Response (200 OK):**

jsonCopy  
{"success":true,"message":"Listing submitted successfully","vendor\_id":42}

**Response (400 Bad Request):**

jsonCopy  
{"success":false,"errors":{"business\_name":"This field is required","phone":"Enter a valid phone number"}}

**Validation rules:**

| Field | Rule |
| ----- | ----- |
| business\_name | Required, 2–100 chars |
| category | Required, must be in allowed list |
| city | Required, must match "\[City\]" (locked) |
| contact\_person | Required, 2–50 chars |
| phone | Required, valid E.164 format (+91XXXXXXXXXX) |
| email | Required, valid email format |
| instagram | Optional, must start with @ if provided |
| starting\_price | Optional, must be \> 0 |
| portfolio\_url | Optional, valid URL |
| description | Optional, max 200 chars |

**Actions on successful submission:**

1. Insert document in MongoDB `vendors` collection (status = "pending")  
2. Send confirmation email to vendor via Resend  
3. Send SMS confirmation via Twilio (optional)  
4. Send WhatsApp notification to founder via Twilio/Gupshup API  

---

### **5.2 GET `/api/vendors`**

**Purpose:** Fetch approved vendors for the Browse page and vendor profile pages.

**Query params:**

| Param | Type | Required | Notes |
| ----- | ----- | ----- | ----- |
| category | string | No | Filter by category |
| page | number | No | Pagination, default 1 |
| limit | number | No | Items per page, default 12, max 24 |

**Response:**

jsonCopy  
{"vendors":\[{"id":1,"business\_name":"Rajasthan Weddings Co.","category":"Photographer","city":"Jaipur","starting\_price":25000,"slug":"rajasthan-weddings-co","photo\_url":"\<https://res.cloudinary.com/\>...","view\_count":142}\],"total":48,"page":1,"total\_pages":4}

**Logic:** Query MongoDB where `status = "approved"`. Apply category filter. Paginate with skip/limit. Return only fields needed for listing cards.

---

### **5.3 GET `/api/vendors/[slug]`**

**Purpose:** Fetch single vendor for profile page.

**Response:**

jsonCopy  
{"id":1,"business\_name":"Rajasthan Weddings Co.","category":"Photographer","city":"Jaipur","contact\_person":"Rahul Sharma","phone":"+919876543210","email":"rahul@example.com","instagram":"@rajasthanweddings","starting\_price":25000,"description":"Candid wedding photography in Jaipur since 2018.","photos":\["\<https://res.cloudinary.com/\>...","\<https://res.cloudinary.com/\>..."\],"view\_count":142,"created\_at":"2025-01-15T10:30:00Z"}

**Side effect:** Increment view\_count in Airtable (can be done client-side with a fire-and-forget fetch to avoid blocking render).

---

## **6\. Component Architecture (if using Next.js \+ Tailwind)**

### **Shared Components**

components/  
├── layout/  
│   ├── Navbar.tsx          \# Sticky nav, logo, links, CTA  
│   ├── Footer.tsx          \# Copyright, social links  
│   └── Container.tsx       \# Max-width wrapper  
│  
├── ui/  
│   ├── Button.tsx          \# Primary \+ secondary variants  
│   ├── Card.tsx            \# Vendor card for browse page  
│   ├── FormField.tsx       \# Label \+ input \+ error wrapper  
│   ├── Badge.tsx           \# Category badge  
│   └── Section.tsx         \# Section wrapper with heading  
│  
├── vendor/  
│   ├── VendorCard.tsx      \# Card on browse page  
│   ├── VendorGallery.tsx   \# Photo grid on profile page  
│   └── VendorContact.tsx   \# Phone, email, Instagram, inquiry button  
│  
└── forms/  
    └── VendorSignupForm.tsx

### **Page Structure**

app/  
├── page.tsx                  \# Home (/)  
├── for-vendors/  
│   └── page.tsx             \# For Vendors  
├── vendors/  
│   ├── page.tsx             \# Browse Vendors  
│   └── \[slug\]/  
│       └── page.tsx         \# Vendor Profile  
├── how-it-works/  
│   └── page.tsx             \# How It Works  
├── about/  
│   └── page.tsx             \# About/Contact  
└── thank-you/  
    └── page.tsx             \# Form confirmation

---

## **7\. SEO Requirements**

| Element | Requirement |
| ----- | ----- |
| Title tag | "\[Platform\] — Wedding Vendors in \[City\]" |
| Meta description | "Find and connect with the best wedding vendors in \[City\]. Photographers, makeup artists, decorators, and more. Free listings for vendors." |
| Open Graph tags | Title, description, image, URL for social sharing |
| Structured data | LocalBusiness schema on vendor profile pages |
| Sitemap | Auto-generated (Next.js sitemap) |
| Robots.txt | Allow all, no sensitive routes |
| URL structure | Clean slugs: `/vendors/rahul-photography` |

---

## **8\. Performance Requirements**

| Metric | Target | Measurement |
| ----- | ----- | ----- |
| Page load (LCP) | \< 2s | Web Vitals |
| First contentful paint | \< 1s | Web Vitals |
| Cumulative layout shift | \< 0.1 | Web Vitals |
| Time to interactive | \< 3s | Web Vitals |
| Form submission → confirmation | \< 1s | User-perceived |

**Optimization tactics:**

* Next.js Image component for all images (auto WebP, lazy loading, srcset)  
* Font subsetting (Inter or similar, load only needed weights)  
* Minimal JS — most pages are static HTML  
* Cloudinary for image optimization (auto-resize, format conversion)  
* Vercel Edge Network for global CDN

---

## **9\. Security Requirements**

| Concern | Requirement |
| ----- | ----- |
| Form spam | Add honeypot field (hidden input); rate limit per IP (10 submissions/hour) |
| Data protection | MongoDB Atlas data stays in Atlas; no sensitive data in client-side code |
| Input sanitization | Validate all form inputs server-side; sanitize description field |
| HTTPS | Enforced via Vercel (automatic) |
| Privacy | Minimal data collection; state what you collect and why in form |
| No auth | MVP has no login — eliminates auth-related vulnerabilities entirely |

---

## **10\. Infrastructure & Deployment**

### **Environment**

| Environment | Purpose | URL |
| ----- | ----- | ----- |
| Production | Live site | `https://yourplatform.in` |
| Preview | PR previews (if using GitHub) | Auto-generated by Vercel |

### **Deployment Pipeline**

Push to main branch  
    ↓  
Vercel auto-deploys (30–60 seconds)  
    ↓  
Smoke test: check homepage loads, form submits  
    ↓  
Live

**No staging environment needed for MVP.** Test locally, deploy to production.

### **Monitoring**

| Tool | Purpose | Cost |
| ----- | ----- | ----- |
| Vercel Analytics | Page views, performance | Free |
| Resend Dashboard | Email delivery status | Free |
| MongoDB Atlas | Vendor data, daily manual check | Free (M0) |

**No error tracking, logging, or alerting needed at this stage.** You'll know if something breaks — vendors will call you.

---

## **11\. Browser Support**

| Browser | Minimum Version |
| ----- | ----- |
| Chrome | Last 2 versions |
| Safari | Last 2 versions |
| Firefox | Last 2 versions |
| Mobile Safari (iOS) | Last 2 versions |
| Chrome Mobile (Android) | Last 2 versions |

No IE11 support. No support for browsers older than 2 versions.

---

## **12\. Data & Backup Strategy**

| Data | Storage | Backup |
| ----- | ----- | ----- |
| Vendor records | MongoDB Atlas primary | Atlas automatic daily backups (M0: 1-click restore) |
| Form submissions | MongoDB Atlas (vendors collection) | Same as above |
| Website code | GitHub | GitHub's built-in backup |
| Vendor photos | Cloudinary | Cloudinary CDN is persistent |
| Founder notes | MongoDB Atlas `notes` field | Included in Atlas backup |

---

## **13\. Development Phases**

### **Phase 1: Foundation (Week 1\)**

* \[ \] Set up Next.js project \+ Tailwind  
* \[ \] Build Navbar \+ Footer components  
* \[ \] Build Container \+ Section layout components  
* [ ] Set up MongoDB Atlas cluster (M0 free tier, create `vendors` collection)  
* [ ] Set up Resend account + email templates  
* [ ] Set up Cloudinary account  
* [ ] Deploy to Vercel (empty site)

### **Phase 2: Static Pages (Week 2\)**

* \[ \] Build Home page (hero, social proof, how it works, CTA)  
* \[ \] Build For Vendors page  
* \[ \] Build How It Works page  
* \[ \] Build About page  
* \[ \] Build Thank You page  
* \[ \] Style everything consistently

### **Phase 3: Dynamic Pages (Week 3\)**

* \[ \] Build vendor sign-up form  
* \[ \] Build `/api/submit-listing` endpoint  
* \[ \] Set up email/SMS notifications  
* \[ \] Build Browse Vendors page (`/vendors`)  
* \[ \] Build Vendor Profile page (`/vendors/[slug]`)  
* \[ \] Connect all pages to Airtable

### **Phase 4: Polish & Launch (Week 4\)**

* \[ \] Add view counter (client-side)  
* \[ \] Add "Share on WhatsApp" button  
* \[ \] OG tags for social sharing  
* \[ \] Add Google Analytics or Plausible  
* \[ \] Test all forms end-to-end  
* \[ \] Add 3–5 vendors manually (for first browse page)  
* \[ \] Soft launch to first 10 vendors

---

## **14\. Open Questions**

| \# | Question | Owner | By When |
| ----- | ----- | ----- | ----- |
| 1 | What is the final city name? | You | Before building |
| 2 | What is the platform name? | You | Before domain purchase |
| 3 | Will you accept vendors from nearby cities too, or strictly one city? | You | Before launch |
| 4 | Do you need SMS confirmations, or is email enough? | You | Before setting up Twilio |
| 5 | Will you manually enrich listings, or let vendors submit photos? | You | Before designing profile page |

---

That's the full spec. You can hand the PRD to a designer and the TRD to a developer and they'll both know exactly what to build. Want me to write out the actual copy for the pages next, or dive deeper into any section?

