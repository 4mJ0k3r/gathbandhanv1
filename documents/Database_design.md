# DATABASE SCHEMA DESIGN DOCUMENT

**Platform:** Wedding Vendor Directory — MVP
 **Version:** 1.0
 **Database:** MongoDB Atlas (MVP, M0 free tier)
 **Date:** 2025

---

## **1\. Scope & Philosophy**

This document covers the complete data layer for the MVP. The design uses a **single collection** — `vendors`. Everything else (view tracking, lead tracking) is deferred to Phase 2.

**Core principle:** Don't normalize what you don't need. One collection is fine for 50–500 vendors. Add complexity only when a problem forces you to.

---

## **2\. Collection Overview**

```
┌─────────────────────────────────────────────┐
│                  VENDORS                     │
│  (the only collection you need for MVP)      │
│                                              │
│  ┌─────────┐  ┌──────────┐  ┌───────────┐   │
│  │ identity │  │ business │  │ discovery  │   │
│  │ fields  │  │  fields  │  │  fields    │   │
│  └─────────┘  └──────────┘  └───────────┘   │
│                                              │
│  ┌─────────┐  ┌──────────┐  ┌───────────┐   │
│  │ display │  │  admin   │  │ analytics │   │
│  │  fields │  │  fields  │  │  fields   │   │
│  └─────────┘  └──────────┘  └───────────┘   │
└─────────────────────────────────────────────┘

Future (Phase 2+):
  VENDORS ──< LEADS >── COUPLES
  VENDORS ──< REVIEWS >── COUPLES
  VENDORS ──< PHOTOS
```

---

## **3\. Primary Collection: `vendors`**

### **3.1 Complete Field Reference**

| # | Field Name | Type | Required | Default | Description |
|---|------------|------|----------|---------|-------------|
| **Identity** | | | | | |
| 1 | `_id` | ObjectId | Yes | auto | Primary key (MongoDB auto-generated) |
| 2 | `slug` | String | Yes | generated | URL-safe identifier, unique |
| **Business** | | | | | |
| 3 | `business_name` | String | Yes | — | Display name of the vendor business |
| 4 | `category` | String | Yes | — | One of: Photographer, Makeup, Decor, Venue, Mehendi, Choreographer, Cards, Catering, Other |
| 5 | `city` | String | Yes | "Jaipur" | City — locked to platform city, not user-editable |
| 6 | `contact_person` | String | Yes | — | Name of primary contact (owner/manager) |
| 7 | `description` | String | No | NULL | Free-form description, max 500 chars |
| 8 | `starting_price` | Number | No | NULL | Minimum package price in INR |
| **Contact** | | | | | |
| 9 | `phone` | String | Yes | — | E.164 format: +919876543210, unique |
| 10 | `email` | String | Yes | — | Business email, unique |
| 11 | `instagram` | String | No | NULL | Handle without @ (e.g., rahul_shoots) |
| 12 | `portfolio_url` | String | No | NULL | Website or external portfolio link |
| **Display** | | | | | |
| 13 | `photos` | [String] | No | [] | Array of image URLs (up to 12) |
| 14 | `logo_url` | String | No | NULL | Logo or cover image URL |
| **Admin** | | | | | |
| 15 | `status` | String | Yes | "pending" | pending / approved / rejected / inactive |
| 16 | `source` | String | No | NULL | How they found us: instagram_dm, google_maps, referral, expo, walk_in, other |
| 17 | `notes` | String | No | NULL | Founder's private notes from calls |
| 18 | `is_verified` | Boolean | No | false | Manual verification flag (badge display) |
| 19 | `is_featured` | Boolean | No | false | Featured listing (homepage, top of results) |
| 20 | `claimed_by_vendor` | Boolean | No | false | Whether vendor has confirmed ownership |
| **Analytics** | | | | | |
| 21 | `view_count` | Number | No | 0 | Total listing page views |
| 22 | `inquiry_count` | Number | No | 0 | Total inquiries received (Phase 2) |
| 23 | `created_at` | Date | Yes | now() | Record creation timestamp |
| 24 | `updated_at` | Date | Yes | now() | Last edit timestamp |
| 25 | `approved_at` | Date | No | NULL | When status changed to approved |
| 26 | `last_contacted_at` | Date | No | NULL | Last time founder called/emailed |

**Total fields: 26**

---

### **3.2 Field Deep-Dives**

#### `slug` — URL Identifier

**How it's generated:**

```
Input:  "Rahul's Wedding Photography"
Step 1: TRIM → "Rahul's Wedding Photography"
Step 2: Remove special chars → "Rahuls Wedding Photography"
Step 3: LOWER → "rahuls wedding photography"
Step 4: SUBSTITUTE spaces → "rahuls-wedding-photography"
Result: /vendors/rahuls-wedding-photography
```

**Collision handling:** If slug already exists, append `-2`, `-3`, etc.

```
"rahuls-wedding-photography"  → taken
"rahuls-wedding-photography-2" → available
```

**Why it matters:** Clean URLs are better for SEO and for vendors sharing their link. A slug is permanent — don't change it even if the vendor changes their business name.

---

#### `status` — Lifecycle State Machine

```
┌─────────┐    founder     ┌──────────┐    founder     ┌──────────┐
│ pending │───approves───▶│ approved │───deactivates─▶│ inactive │
│ (new)   │◀──rejects─────│ (live)   │◀──reactivates──│ (hidden) │
└────┬────┘               └──────────┘                └──────────┘
     │                                                    │
     │ founder rejects                                    │ vendor re-applies
     ▼                                                    ▼
┌──────────┐                                          ┌──────────┐
│ rejected │─────────────────────────────────────────▶│ pending  │
│ (needs   │    (if vendor fixes issues)              │          │
│  fixes)  │                                          └──────────┘
└──────────┘
```

**State meanings:**

| Status | Visible on site? | Vendor sees it? | Meaning |
|--------|------------------|-----------------|---------|
| `pending` | No | Yes (thank you page) | Form submitted, not yet reviewed |
| `approved` | Yes | Yes | Live and searchable |
| `rejected` | No | Yes (email sent) | Didn't meet criteria; told why |
| `inactive` | No | Yes | Was live, taken down (vendor request or founder) |

**Transitions and who triggers them:**

| From | To | Trigger | Action |
|------|----|---------|--------|
| `pending` | `approved` | Founder (phone call + enrichment) | Listing goes live, email sent |
| `pending` | `rejected` | Founder | Email sent with reason |
| `approved` | `inactive` | Founder or vendor | Hidden from browse, email sent |
| `rejected` | `pending` | Vendor (re-submits) | Re-enter review queue |
| `inactive` | `approved` | Founder | Relist |

---

#### `photos` — Image Storage

**MVP approach (Cloudinary):**

- Founder uploads photos manually to Cloudinary during enrichment
- Max 12 photos per vendor
- Store Cloudinary URLs as array of strings in `photos` field

**Image metadata (future — Phase 2):**

```json
[
  {
    "url": "https://res.cloudinary.com/...",
    "alt": "Wedding mandap decoration",
    "is_cover": true,
    "order": 1,
    "uploaded_at": "2025-01-15T10:00:00Z"
  }
]
```

---

#### `starting_price` — Display Logic

| Value stored | Display |
|-------------|---------|
| 25000 | "Starting from ₹25,000" |
| 50000 | "Starting from ₹50,000" |
| NULL | "Price on request" |
| 0 | "Price on request" |

**Validation:**
- Must be a positive integer if provided
- Minimum display threshold: ₹5,000 (below this, show "Price on request")
- Format with Indian numbering: ₹25,000 (not ₹25000)

---

## **4\. Indexes**

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

// Slug lookup for vendor profile pages
db.vendors.createIndex({ slug: 1 })

// Admin queries by status
db.vendors.createIndex({ status: 1 })
```

**Why the composite browse index:**
- Browse page always filters `status = 'approved'`
- Often filters by `category`
- Sorted by verified first, then popular (`view_count`)
- Partial index keeps it small (only approved docs)

---

## **5\. Constraints & Validation Rules**

### **5.1 Application-Level Validation**

| Field | Rule | Error Message |
|-------|------|---------------|
| `business_name` | Required, 2–150 chars | "Business name is required (min 2 characters)" |
| `category` | Required, must be in allowed list | "Please select a category" |
| `city` | Required, must match "Jaipur" | — (locked field) |
| `contact_person` | Required, 2–100 chars | "Contact person name is required" |
| `phone` | Required, E.164 format (+91XXXXXXXXXX) | "Enter a valid phone number" |
| `email` | Required, valid email format | "Enter a valid email address" |
| `instagram` | If provided: starts with @ or alphanumeric + underscore | "Enter a valid Instagram handle" |
| `starting_price` | If provided: integer > 0 | "Enter a valid amount in INR" |
| `description` | Max 500 chars | "Description must be under 500 characters" |
| `portfolio_url` | If provided: valid HTTP/HTTPS URL | "Enter a valid URL" |

### **5.2 Business Rules**

| Rule | Enforcement |
|------|-------------|
| A vendor can only have one active listing per phone number | Check `phone` uniqueness before insert |
| `slug` must be unique | Generate and check before insert; append `-2` on collision |
| Vendor cannot be `approved` without `phone` + `email` | Status transition validation |
| `view_count` can only increment, never decrement | Application logic: `$inc: { view_count: 1 }` |
| `approved_at` is set only once | Application logic on status change |

---

## **6\. Enumerated Values**

### `category`

| Value | Label (display) |
|-------|----------------|
| `photographer` | Photographer |
| `makeup` | Makeup Artist |
| `decor` | Decorator |
| `venue` | Venue |
| `mehendi` | Mehendi Artist |
| `choreographer` | Choreographer |
| `cards` | Wedding Cards |
| `catering` | Caterer |
| `other` | Other |

### `status`

| Value | Label | Meaning |
|-------|-------|---------|
| `pending` | Pending Review | Just submitted |
| `approved` | Approved | Live on site |
| `rejected` | Rejected | Didn't qualify |
| `inactive` | Inactive | Previously live, now hidden |

### `source`

| Value | Label | Notes |
|-------|-------|-------|
| `instagram_dm` | Instagram DM | Reached via Instagram message |
| `google_maps` | Google Maps | Found via Google Maps search |
| `referral` | Referral | Another vendor referred them |
| `expo` | Wedding Expo | Met at wedding exhibition/mela |
| `walk_in` | Walk-in | Walked into platform office |
| `other` | Other | Catch-all |

---

## **7\. Seed Data (for Development)**

```json
[
  {
    "business_name": "Rajasthan Wedding Photography",
    "category": "photographer",
    "city": "Jaipur",
    "contact_person": "Rahul Sharma",
    "phone": "+919876543210",
    "email": "rahul@rajasthanweddings.com",
    "instagram": "rajasthanweddings",
    "starting_price": 25000,
    "description": "Candid and traditional wedding photography in Jaipur. 7+ years experience, 200+ weddings.",
    "status": "approved",
    "is_verified": true,
    "view_count": 142,
    "source": "instagram_dm",
    "slug": "rajasthan-wedding-photography"
  },
  {
    "business_name": "Glam Up by Priya",
    "category": "makeup",
    "city": "Jaipur",
    "contact_person": "Priya Mehta",
    "phone": "+919876543211",
    "email": "priya@glamup.in",
    "instagram": "glamupbypriya",
    "starting_price": 15000,
    "description": "HD airbrush bridal makeup. Trial included. Jaipur and destination weddings.",
    "status": "approved",
    "is_verified": true,
    "view_count": 89,
    "source": "referral",
    "slug": "glam-up-by-priya"
  },
  {
    "business_name": "Royal Mandap Decor",
    "category": "decor",
    "city": "Jaipur",
    "contact_person": "Amit Verma",
    "phone": "+919876543212",
    "email": "amit@royalmandap.in",
    "instagram": "royalmandap",
    "starting_price": 50000,
    "description": "Luxury wedding mandap and venue decoration. Floral, LED, theme-based setups.",
    "status": "approved",
    "is_verified": false,
    "view_count": 56,
    "source": "google_maps",
    "slug": "royal-mandap-decor"
  },
  {
    "business_name": "City Palace Banquet",
    "category": "venue",
    "city": "Jaipur",
    "contact_person": "Vikender Singh",
    "phone": "+919876543213",
    "email": "events@citypalacebanquet.com",
    "instagram": "citypalacejaipur",
    "starting_price": 200000,
    "description": "Heritage venue in the heart of Jaipur. Capacity: 200–500 guests. Indoor + outdoor.",
    "status": "approved",
    "is_verified": true,
    "view_count": 203,
    "source": "walk_in",
    "slug": "city-palace-banquet"
  },
  {
    "business_name": "Mehendi by Sunita",
    "category": "mehendi",
    "city": "Jaipur",
    "contact_person": "Sunita Devi",
    "phone": "+919876543214",
    "instagram": "mehendibysunita",
    "starting_price": 3000,
    "status": "approved",
    "is_verified": false,
    "view_count": 34,
    "source": "instagram_dm",
    "slug": "mehendi-by-sunita"
  },
  {
    "business_name": "StepUp Dance Choreography",
    "category": "choreographer",
    "city": "Jaipur",
    "contact_person": "Karan Joshi",
    "phone": "+919876543215",
    "email": "karan@stepupdance.in",
    "instagram": "stepupjaipur",
    "starting_price": 20000,
    "description": "Sangeet choreography for brides, grooms, and family groups. 1–4 week packages.",
    "status": "pending",
    "is_verified": false,
    "view_count": 0,
    "source": "instagram_dm",
    "slug": "stepup-dance-choreography"
  },
  {
    "business_name": "Elegant Invites",
    "category": "cards",
    "city": "Jaipur",
    "contact_person": "Neha Agarwal",
    "phone": "+919876543216",
    "email": "neha@elegantinvites.co.in",
    "starting_price": 5000,
    "description": "Custom printed and digital wedding invitations. Bulk orders welcome.",
    "status": "pending",
    "is_verified": false,
    "view_count": 0,
    "source": "other",
    "slug": "elegant-invites"
  },
  {
    "business_name": "Spice Route Caterers",
    "category": "catering",
    "city": "Jaipur",
    "contact_person": "Ramesh Kumar",
    "phone": "+919876543217",
    "email": "ramesh@spiceroute.in",
    "starting_price": 350,
    "description": "Per-plate pricing. North Indian, South Indian, and live counters. 50–2000 guests.",
    "status": "approved",
    "is_verified": false,
    "view_count": 12,
    "source": "google_maps",
    "slug": "spice-route-caterers"
  },
  {
    "business_name": "ShutterBug by Anjali",
    "category": "photographer",
    "city": "Jaipur",
    "contact_person": "Anjali Rao",
    "phone": "+919876543218",
    "email": "anjali@shutterbug.co.in",
    "instagram": "shutterbuganjali",
    "starting_price": 30000,
    "description": "Fine art wedding photography. Film and digital. Based in Jaipur, travels worldwide.",
    "status": "approved",
    "is_verified": true,
    "view_count": 167,
    "source": "referral",
    "slug": "shutterbug-by-anjali"
  },
  {
    "business_name": "Bloom & Blossom Decor",
    "category": "decor",
    "city": "Jaipur",
    "contact_person": "Kavita Singh",
    "phone": "+919876543219",
    "instagram": "bloomandblossom",
    "starting_price": 35000,
    "description": "Floral and theme-based wedding decor. Fresh flowers only. Jaipur, Udaipur, Goa.",
    "status": "approved",
    "is_verified": false,
    "view_count": 45,
    "source": "expo",
    "slug": "bloom-and-blossom-decor"
  }
]
```

---

## **8\. MongoDB Atlas Setup**

### **8.1 Cluster Setup**

1. Sign up at [mongodb.com/atlas](https://www.mongodb.com/atlas) (free M0 tier)
2. Create a cluster (choose a region close to India for low latency)
3. Create a database user with read/write permissions
4. Whitelist your IP (or 0.0.0.0/0 for development)
5. Get the connection string: `mongodb+srv://<user>:<password>@<cluster>.mongodb.net/`

### **8.2 Database Name**

```
Database: gathbandhan
Collection: vendors
```

### **8.3 Connection String (env var)**

```
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/gathbandhan?retryWrites=true&w=majority
```

---

## **9\. Future Collections (Phase 2+)**

These are designed now so you don't have to re-architect later.

### **9.1 `leads` (inquiries from couples to vendors)**

```js
{
  _id: ObjectId,
  vendor_id: ObjectId,          // ref → vendors._id
  couple_name: String,
  couple_phone: String,
  couple_email: String,
  wedding_date: Date,
  guest_count: Number,
  budget_range: String,
  message: String,
  source: String,               // default: 'website'
  status: String,               // new / contacted / quoted / converted / lost
  vendor_viewed: Boolean,       // default: false
  vendor_viewed_at: Date,
  created_at: Date,
  updated_at: Date
}
```

Indexes: `vendor_id`, `status`, `created_at`

### **9.2 `reviews` (from couples post-booking)**

```js
{
  _id: ObjectId,
  vendor_id: ObjectId,          // ref → vendors._id
  reviewer_name: String,
  reviewer_initials: String,
  overall_rating: Number,       // 1–5
  quality_rating: Number,
  value_rating: Number,
  communication_rating: Number,
  title: String,
  body: String,
  is_verified: Boolean,         // confirmed booking
  is_published: Boolean,        // default: false
  created_at: Date,
  approved_at: Date
}
```

Indexes: `vendor_id`, `(vendor_id, is_published)`

### **9.3 `photos` (vendor gallery management)**

```js
{
  _id: ObjectId,
  vendor_id: ObjectId,          // ref → vendors._id
  url: String,                  // Cloudinary URL
  public_id: String,            // for CDN deletion
  alt_text: String,
  is_cover: Boolean,            // default: false
  sort_order: Number,           // default: 0
  created_at: Date
}
```

Indexes: `vendor_id`, `(vendor_id, sort_order)`

### **9.4 `couples` (lightweight — no account required)**

```js
{
  _id: ObjectId,
  phone: String,                // unique
  email: String,
  name: String,
  wedding_date: Date,
  guest_count: Number,
  budget_min: Number,
  budget_max: Number,
  city: String,
  marketing_consent: Boolean,   // default: false
  created_at: Date
}
```

---

## **10\. Data Retention & Cleanup**

| Data | Retention | Action |
|------|-----------|--------|
| `pending` vendors > 30 days | Delete or email reminder | Vendors who signed up but never responded |
| `rejected` vendors | Keep 6 months | May re-apply |
| `inactive` vendors | Keep indefinitely | May reactivate |
| Leads (Phase 2) | Indefinitely | Core business data |
| Reviews (Phase 2) | Indefinitely | Core business data |

---

## **11\. Summary**

| Aspect | Decision |
|--------|----------|
| **Collections in MVP** | 1 (`vendors`) |
| **Collections planned (Phase 2)** | 5 (leads, reviews, photos, couples, vendor_claim_tokens) |
| **Total fields (vendors)** | 26 |
| **Indexes** | 6 (3 unique + 3 compound/partial) |
| **Enumerations** | 3 (category, status, source) |
| **Constraints** | Application-level + unique on phone/email/slug |
| **Seed records** | 10 sample vendors across 7 categories |

---

The schema is deliberately simple for now. One collection. 26 fields. No joins. Set up the MongoDB Atlas M0 cluster and the `vendors` collection in an afternoon.
