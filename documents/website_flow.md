# **APPLICATION & WEBSITE FLOW DOCUMENT**

**Platform:** Wedding Vendor Directory — MVP  
 **Version:** 1.0  
 **Scope:** All pages, all user journeys, all states and edge cases

---

## **1\. Flow Map Overview**

                   ┌──────────────────────────────────────────┐  
                    │                                          │  
   ┌──────────┐    │    ┌─────────┐   ┌──────────┐   ┌───────┴───────┐  
   │ Instagram│    │    │  HOME   │   │ FOR      │   │   HOW IT      │  
   │   DM     │───▶│    │  (/)    │──▶│ VENDORS  │──▶│   WORKS       │  
   │Google    │    │    └────┬────┘   └────┬─────┘   └───────┬───────┘  
   │Maps      │    │         │             │                  │  
   │Referral  │    │    ┌────┴────┐        │             ┌────┴────┐  
   └──────────┘    │    │ SIGN-UP │◀───────┘             │  ABOUT  │  
                    │    │  FORM   │                      │  (/about│  
   ┌──────────┐    │    └────┬────┘                      └────┬────┘  
   │ Another  │    │         │                                │  
   │ vendor's │    │    ┌────┴────────┐                        │  
   │Instagram │───▶│    │ THANK YOU   │◀───────────────────────┘  
   │  story   │    │    │             │  
   └──────────┘    │    └────┬────────┘  
                    │         │  
   ┌──────────┐    │    ┌────┴────────┐  
   │ Direct   │    │    │ BROWSE      │  
   │ URL      │───▶│    │ VENDORS     │  
   │/vendors  │    │    │ (/vendors)  │  
   └──────────┘    │    └──────┬──────┘  
                    │           │  
                    │    ┌──────┴──────────────┐  
                    │    │   VENDOR PROFILE    │  
                    │    │  (/vendors/\[slug\])  │  
                    │    └─────────────────────┘  
                    │                                          │  
                    └──────────────────────────────────────────┘

---

## **2\. Navigation Structure**

### **Global Navigation Bar (all pages)**

┌──────────────────────────────────────────────────────────────────────┐  
│                                                                      │  
│  \[LOGO\]          For Vendors    Browse Vendors    About    \[Join →\] │  
│                                                              ↑      │  
│                                                    Always visible  │  
└──────────────────────────────────────────────────────────────────────┘

**Behavior rules:**

* Sticky on scroll (appears after scrolling past hero)  
* "Join →" button is always the right-most element, distinct color  
* Active page link is underlined or bolded  
* Logo always links to Home  
* On mobile: hamburger menu with same links

### **Mobile Navigation**

┌──────────────────────┐  
│  \[LOGO\]        \[☰\]   │  
├──────────────────────┤  
│                      │  
│  For Vendors         │  
│  Browse Vendors      │  
│  About               │  
│  ─────────────────   │  
│  \[Join Free →\]       │  
│                      │  
└──────────────────────┘

---

## **3\. Detailed Page Flows**

---

### **FLOW 1: Home Page (`/`)**

**Entry points:** Direct URL, Instagram bio link, Google search, referral from vendor

#### **Page Structure & Scroll Flow**

┌─ NAVBAR (sticky) ─────────────────────────────────────────────┐  
│                                                                │  
│  STEP 1: HERO                                                 │  
│  ┌──────────────────────────────────────────────────────────┐ │  
│  │                                                          │ │  
│  │   \[Background: wedding photo or city skyline\]           │ │  
│  │                                                          │ │  
│  │   Get discovered by couples                              │ │  
│  │   planning their wedding in Jaipur                       │ │  
│  │                                                          │ │  
│  │   The easiest way for wedding vendors                    │ │  
│  │   to find more couples                                   │ │  
│  │                                                          │ │  
│  │   \[List Your Business — It's Free →\]    ← PRIMARY CTA   │ │  
│  │                                                          │ │  
│  └──────────────────────────────────────────────────────────┘ │  
│                          ↓ scroll                              │  
│                                                                │  
│  STEP 2: SOCIAL PROOF                                          │  
│  ┌──────────────────────────────────────────────────────────┐ │  
│  │                                                          │ │  
│  │   Trusted by vendors across Jaipur                       │ │  
│  │   \[Logo\] \[Logo\] \[Logo\] \[Logo\]                            │ │  
│  │   Photographers · Makeup Artists · Decorators · Venues   │ │  
│  │                                                          │ │  
│  └──────────────────────────────────────────────────────────┘ │  
│                          ↓ scroll                              │  
│                                                                │  
│  STEP 3: HOW IT WORKS                                          │  
│  ┌──────────────────────────────────────────────────────────┐ │  
│  │                                                          │ │  
│  │   How It Works                                           │ │  
│  │                                                          │ │  
│  │   ┌──────────┐    ┌──────────┐    ┌──────────┐         │ │  
│  │   │   📋     │    │   ✓      │    │   📈     │         │ │  
│  │   │          │    │          │    │          │         │ │  
│  │   │  1\. List │    │ 2\. Get   │    │ 3\. Grow  │         │ │  
│  │   │  your    │───▶│ inquiries│───▶│  your    │         │ │  
│  │   │  business│    │  from    │    │  business│         │ │  
│  │   │  (2 min) │    │  couples │    │          │         │ │  
│  │   │          │    │          │    │          │         │ │  
│  │   └──────────┘    └──────────┘    └──────────┘         │ │  
│  │                                                          │ │  
│  └──────────────────────────────────────────────────────────┘ │  
│                          ↓ scroll                              │  
│                                                                │  
│  STEP 4: BOTTOM CTA                                            │  
│  ┌──────────────────────────────────────────────────────────┐ │  
│  │                                                          │ │  
│  │   Ready to get discovered?                               │ │  
│  │   Join 50+ vendors already listed in Jaipur.             │ │  
│  │                                                          │ │  
│  │   \[List Your Business — Free →\]                          │ │  
│  │                                                          │ │  
│  └──────────────────────────────────────────────────────────┘ │  
│                                                                │  
│  ── FOOTER ──────────────────────────────────────────────────  │  
│  © 2025 \[Platform\] · Instagram · WhatsApp · Privacy Policy    │  
└────────────────────────────────────────────────────────────────┘

#### **Hero Section States**

| State | Condition | Display |
| ----- | ----- | ----- |
| Default | 0–49 vendors | "Join vendors across Jaipur" |
| 50+ vendors | 50+ approved | "Trusted by 50+ vendors in Jaipur" |
| 100+ vendors | 100+ approved | "Trusted by 100+ vendors in Jaipur" |

**CTA button behavior:**

* Click → smooth scrolls down to sign-up form section  
* Or: Click → navigates to `/for-vendors` page  
* Choose ONE behavior, don't do both. Recommendation: scroll to inline form

---

### **FLOW 2: For Vendors Page (`/for-vendors`)**

**Entry points:** Nav bar click, CTA from home page

#### **Page Structure**

┌─ NAVBAR ──────────────────────────────────────────────────────┐  
│                                                                │  
│  STEP 1: HEADLINE                                              │  
│  ┌──────────────────────────────────────────────────────────┐ │  
│  │                                                          │ │  
│  │   Why list on \[Platform\]?                                │ │  
│  │                                                          │ │  
│  │   Couples are searching for vendors in Jaipur right now. │ │  
│  │   Be there when they do.                                 │ │  
│  │                                                          │ │  
│  └──────────────────────────────────────────────────────────┘ │  
│                                                                │  
│  STEP 2: VALUE PROPS (5 cards in a grid)                       │  
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                     │  
│  │  ✓ Free  │ │  ✓ Direct│ │  ✓ No    │                     │  
│  │ listing  │ │inquiries │ │ commission│                     │  
│  │          │ │          │ │          │                     │  
│  │ Create   │ │ Couples  │ │ Keep 100%│                     │  
│  │ your     │ │reach out │ │ of what  │                     │  
│  │ business │ │to you    │ │ you earn │                     │  
│  │ profile  │ │directly  │ │          │                     │  
│  │ for free │ │          │ │          │                     │  
│  └──────────┘ └──────────┘ └──────────┘                     │  
│  ┌──────────┐ ┌──────────┐                                   │  
│  │  ✓       │ │  ✓       │                                   │  
│  │Verified  │ │Simple    │                                   │  
│  │ badge    │ │dashboard │                                   │  
│  │          │ │          │                                   │  
│  │ Build    │ │ Manage   │                                   │  
│  │ trust    │ │ your     │                                   │  
│  │ with     │ │ listings │                                   │  
│  │ couples  │ │ easily   │                                   │  
│  └──────────┘ └──────────┘                                   │  
│                                                                │  
│  STEP 3: CATEGORIES                                            │  
│  ┌──────────────────────────────────────────────────────────┐ │  
│  │                                                          │ │  
│  │   Categories we're looking for                           │ │  
│  │                                                          │ │  
│  │   \[Photographers\] \[Makeup Artists\]                       │ │  
│  │   \[Decorators\]    \[Venues\]                               │ │  
│  │   \[Mehendi\]       \[Choreographers\]                       │ │  
│  │   \[Cards\]         \[Caterers\]                             │ │  
│  │                                                          │ │  
│  │   Don't see your category? \[Contact us →\]                │ │  
│  │                                                          │ │  
│  └──────────────────────────────────────────────────────────┘ │  
│                                                                │  
│  STEP 4: CTA                                                   │  
│  ┌──────────────────────────────────────────────────────────┐ │  
│  │                                                          │ │  
│  │   \[List Your Business — Free →\]                          │ │  
│  │                                                          │ │  
│  └──────────────────────────────────────────────────────────┘ │  
│                                                                │  
│  ── FOOTER ──────────────────────────────────────────────────  │  
└────────────────────────────────────────────────────────────────┘

**Interaction notes:**

* Category badges on Step 3: hovering highlights them, clicking scrolls to sign-up form with category pre-selected (if form is inline)  
* "Contact us" link → opens WhatsApp or mailto link (no separate contact page needed)

---

### **FLOW 3: Sign-Up Form**

**Entry points:** Home page CTA, For Vendors page CTA, Browse Vendors page bottom CTA

#### **Form Layout**

┌─ NAVBAR ──────────────────────────────────────────────────────┐  
│                                                                │  
│  List Your Business — It's Free                                │  
│                                                                │  
│  Takes 2 minutes. No credit card needed.                       │  
│                                                                │  
│  ┌──────────────────────────────────────────────────────────┐ │  
│  │                                                          │ │  
│  │  Business Name \*                                         │ │  
│  │  ┌──────────────────────────────────────────────────┐   │ │  
│  │  │ Rajasthan Wedding Photography                      │   │ │  
│  │  └──────────────────────────────────────────────────┘   │ │  
│  │                                                          │ │  
│  │  Category \*                                             │ │  
│  │  ┌──────────────────────────────────────────────────┐   │ │  
│  │  │ ▼ Select a category                               │   │ │  
│  │  └──────────────────────────────────────────────────┘   │ │  
│  │                                                          │ │  
│  │  City                                                   │ │  
│  │  ┌──────────────────────────────────────────────────┐   │ │  
│  │  │ Jaipur  \[🔒 locked\]                               │   │ │  
│  │  └──────────────────────────────────────────────────┘   │ │  
│  │  (pre-filled, greyed out, not editable)                  │ │  
│  │                                                          │ │  
│  │  Contact Person \*                                       │ │  
│  │  ┌──────────────────────────────────────────────────┐   │ │  
│  │  │ Rahul Sharma                                      │   │ │  
│  │  └──────────────────────────────────────────────────┘   │ │  
│  │                                                          │ │  
│  │  Phone Number \*                                         │ │  
│  │  ┌──────────────────────────────────────────────────┐   │ │  
│  │  │ \+91  \[                    \]                       │   │ │  
│  │  └──────────────────────────────────────────────────┘   │ │  
│  │                                                          │ │  
│  │  Email \*                                                │ │  
│  │  ┌──────────────────────────────────────────────────┐   │ │  
│  │  │ rahul@example.com                                 │   │ │  
│  │  └──────────────────────────────────────────────────┘   │ │  
│  │                                                          │ │  
│  │  Instagram (optional)                                   │ │  
│  │  ┌──────────────────────────────────────────────────┐   │ │  
│  │  │ @rajasthanweddings                                │   │ │  
│  │  └──────────────────────────────────────────────────┘   │ │  
│  │  @ prefix auto-added if missing                         │ │  
│  │                                                          │ │  
│  │  Starting Price (optional)                              │ │  
│  │  ┌──────────────────────────────────────────────────┐   │ │  
│  │  │ ₹ 25,000                                          │   │ │  
│  │  └──────────────────────────────────────────────────┘   │ │  
│  │  Your minimum package price in INR                       │ │  
│  │                                                          │ │  
│  │  Portfolio Link (optional)                              │ │  
│  │  ┌──────────────────────────────────────────────────┐   │ │  
│  │  │ \<https://instagram.com/rajasthanweddings\>            │   │ │  
│  │  └──────────────────────────────────────────────────┘   │ │  
│  │  Instagram profile or website link                       │ │  
│  │                                                          │ │  
│  │  Description (optional)                                 │ │  
│  │  ┌──────────────────────────────────────────────────┐   │ │  
│  │  │ Candid wedding photography in Jaipur since 2018\.  │   │ │  
│  │  │                                                    │   │ │  
│  │  │                                                    │   │ │  
│  │  └──────────────────────────────────────────────────┘   │ │  
│  │  200 characters remaining                                │ │  
│  │                                                          │ │  
│  │  \[                    Submit Listing →                    \] │ │  
│  │                                                          │ │  
│  └──────────────────────────────────────────────────────────┘ │  
│                                                                │  
│  ── FOOTER ──────────────────────────────────────────────────  │  
└────────────────────────────────────────────────────────────────┘

#### **Form Field States**

**Each field goes through these states:**

┌──────────┐    types    ┌──────────┐    blurs    ┌──────────┐  
│  EMPTY   │───────────▶│  TYPING  │───────────▶│  VALID   │  
│ (greyed  │            │ (user    │            │ (green   │  
│  out)    │◀───────────│  input)  │◀───────────│  border) │  
└──────────┘  clears    └──────────┘   invalid   └──────────┘  
     │                                       │  
     │                                       │  
     │  blurs empty    ┌──────────┐           │  
     │────────────────▶│  ERROR   │           │  
     │  (required)     │(red      │           │  
     │                 │ border \+ │           │  
     │                 │ message) │           │  
     │                 └──────────┘           │  
     │                      │                  │  
     │                      │ user fixes       │  
     │                      └──────────────────┘

**Validation rules per field:**

| Field | Trigger | Valid | Error State | Error Message |
| ----- | ----- | ----- | ----- | ----- |
| `business_name` | On blur | 2–150 chars | Red border \+ text below | "Business name must be at least 2 characters" |
| `category` | On change | One of the 9 options | Red border | "Please select a category" |
| `city` | N/A | Always valid (locked) | Never shows error | — |
| `contact_person` | On blur | 2–100 chars | Red border \+ text | "Contact person name is required" |
| `phone` | On blur | \+91XXXXXXXXXX (12 digits after \+91) | Red border \+ text | "Enter a valid phone number (e.g., \+919876543210)" |
| `email` | On blur | Valid email format | Red border \+ text | "Enter a valid email address" |
| `instagram` | On blur | Empty OR starts with @ OR alphanumeric \+ underscore | Red border \+ text | "Enter a valid Instagram handle (e.g., @username)" |
| `starting_price` | On blur | Empty OR positive integer | Red border \+ text | "Enter a valid amount in INR" |
| `portfolio_url` | On blur | Empty OR valid URL starting with http(s):// | Red border \+ text | "Enter a valid URL (e.g., https://...)" |
| `description` | On blur | Empty OR ≤ 500 chars | Red border \+ text below \+ counter turns red | "Description must be under 500 characters" |

#### **Form Interaction Rules**

| Behavior | Detail |
| ----- | ----- |
| Required field indicator | Red asterisk `*` next to label |
| Auto-format phone | As user types: shows `+91` prefix, formats as `+91 98765 43210` |
| Auto-format price | As user types: adds ₹ prefix, formats with commas: `₹25,000` |
| Character counter | Only on description field: "142/500" — turns red at 450 |
| Submit button | Disabled (greyed out) until all required fields are valid |
| Submit button text | "Submit Listing →" |
| Honeypot (anti-spam) | Hidden field `website_url` — if filled, silently reject |

#### **Submit Action**

User clicks "Submit Listing"  
    │  
    ▼  
Client-side validation (all required fields filled?)  
    │  
    ├─ NO ──▶ Scroll to first error field, highlight it  
    │  
    ├─ YES  
    │   │  
    │   ▼  
    │   Show loading state:  
    │   \[Submitting... ████████████░░░░\] (button shows spinner)  
    │  
    │   │  
    │   ▼  
    │   POST /api/submit-listing  
    │  
    │   │  
    │   ├─ 200 OK ──▶ Navigate to Thank You page  
    │   │  
    │   ├─ 400 Bad Request ──▶ Show error messages inline  
    │   │   "Something went wrong. Please check the form and try again."  
    │   │  
    │   ├─ 500 Server Error ──▶ Show error message  
    │   │   "Something went wrong on our end. We'll get back to you shortly."  
    │   │   \+ Send error notification to founder  
    │   │  
    │   └─ Network error ──▶ Show error message  
    │       "Can't reach the server. Check your connection and try again."

---

### **FLOW 4: Thank You Page**

**Entry point:** Successful form submission

┌─ NAVBAR ──────────────────────────────────────────────────────┐  
│                                                                │  
│                                                                │  
│              ✓  You're on the list\!                            │  
│                                                                │  
│         Thanks, \[Business Name\]\!                               │  
│                                                                │  
│   We've received your listing for \[Category\] in \[City\].       │  
│                                                                │  
│   Here's what happens next:                                    │  
│                                                                │  
│   1\. We'll review your listing within 24 hours                 │  
│   2\. Your listing goes live on the platform                    │  
│   3\. We'll give you a call this week to say hi                 │  
│                                                                │  
│   ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─             │  
│                                                                │  
│   In the meantime, check out other vendors in \[City\]:          │  
│                                                                │  
│   \[Vendor Card\]  \[Vendor Card\]  \[Vendor Card\]                  │  
│                                                                │  
│   \[Browse All Vendors →\]                                       │  
│                                                                │  
│   ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─             │  
│                                                                │  
│   Questions? Call us at \+91-XXXXX-XXXXX                        │  
│   or WhatsApp: \<https://wa.me/91XXXXXXXXXX\>                      │  
│                                                                │  
│                                                                │  
│  ── FOOTER ──────────────────────────────────────────────────  │  
└────────────────────────────────────────────────────────────────┘

**Behavior:**

* Shows 3 random approved vendors (pulls from MongoDB Atlas API)  
* "Browse All Vendors" → navigates to `/vendors`  
* Phone and WhatsApp links are clickable  
* Sends confirmation email \+ SMS to vendor  
* Sends WhatsApp notification to founder

---

### **FLOW 5: Browse Vendors Page (`/vendors`)**

**Entry points:** Nav bar click, Thank You page, vendor Instagram story link, direct URL

#### **Page Structure**

┌─ NAVBAR ──────────────────────────────────────────────────────┐  
│                                                                │  
│  Wedding Vendors in Jaipur                                     │  
│                                                                │  
│  Find the perfect vendors for your wedding                     │  
│                                                                │  
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─             │  
│                                                                │  
│  \[All\] \[Photographers\] \[Makeup\] \[Decor\] \[Venues\] \[Others\]     │  
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─             │  
│                                                                │  
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │  
│  │             │  │             │  │             │           │  
│  │  \[Photo\]    │  │  \[Photo\]    │  │  \[Photo\]    │           │  
│  │             │  │             │  │             │           │  
│  │  Name       │  │  Name       │  │  Name       │           │  
│  │  Category   │  │  Category   │  │  Category   │           │  
│  │  Jaipur     │  │  Jaipur     │  │  Jaipur     │           │  
│  │             │  │             │  │             │           │  
│  │  ₹25,000    │  │  ₹15,000    │  │  ₹50,000    │           │  
│  │             │  │             │  │             │           │  
│  │  \[View →\]   │  │  \[View →\]   │  │  \[View →\]   │           │  
│  │             │  │             │  │             │           │  
│  └─────────────┘  └─────────────┘  └─────────────┘           │  
│                                                                │  
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │  
│  │     ...     │  │     ...     │  │     ...     │           │  
│  └─────────────┘  └─────────────┘  └─────────────┘           │  
│                                                                │  
│                  \[Load More Vendors\]                           │  
│                                                                │  
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─             │  
│                                                                │  
│  Are you a wedding vendor in Jaipur?                           │  
│  Get discovered by couples planning their wedding.             │  
│                                                                │  
│  \[List Your Business — Free →\]                                 │  
│                                                                │  
│  ── FOOTER ──────────────────────────────────────────────────  │  
└────────────────────────────────────────────────────────────────┘

#### **Filter Interaction**

| Action | Behavior |
| ----- | ----- |
| Click "All" | Shows all approved vendors |
| Click "Photographers" | Filters to only photographers; URL becomes `/vendors?category=photographer` |
| Click "Makeup" | Filters to only makeup artists |
| Active filter | Underlined or highlighted; shows count: "Photographers (12)" |
| URL sync | Filter selection is reflected in URL query params for sharing |

#### **Empty States**

| Condition | Display |
| ----- | ----- |
| 0 vendors total | "Vendors coming soon to Jaipur. Are you a vendor? \[List your business →\]" |
| 0 vendors in a category | "No \[category\] listed yet. Know someone? \[Refer them →\]" |

#### **Load More Behavior**

Initial load: 12 vendors  
    │  
    User scrolls to bottom  
    │  
    ▼  
\[Load More\] button appears  
    │  
    User clicks  
    │  
    ▼  
Next 12 vendors append below (no page reload)  
    Button moves further down  
    │  
    ── repeats until all vendors loaded ──  
    │  
    ▼  
No more vendors  
\[Load More\] changes to "You've seen all vendors in Jaipur ✓"

---

### **FLOW 6: Vendor Profile Page (`/vendors/[slug]`)**

**Entry points:** Browse Vendors card click, vendor's own Instagram story, shared link

#### **Page Structure**

┌─ NAVBAR ──────────────────────────────────────────────────────┐  
│                                                                │  
│  \[← Back to all vendors\]                                      │  
│                                                                │  
│  ┌──────────────────────────────────────────────────────────┐ │  
│  │                                                          │ │  
│  │   ┌────────────────┐  Rajasthan Wedding Photography       │ │  
│  │   │                │  ★★★★★ Verified                      │ │  
│  │   │                │  Photographer · Jaipur               │ │  
│  │   │   \[COVER      │                                      │ │  
│  │   │    PHOTO\]     │  Starting from ₹25,000               │ │  
│  │   │                │                                      │ │  
│  │   │                │  \[Share this listing ↗\]              │ │  
│  │   └────────────────┘                                      │ │  
│  │                                                          │ │  
│  └──────────────────────────────────────────────────────────┘ │  
│                                                                │  
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─             │  
│                                                                │  
│  About                                                         │  
│  ─ ─ ─                                                         │  
│                                                                │  
│  Candid and traditional wedding photography in Jaipur.         │  
│  7+ years of experience, 200+ weddings.                        │  
│                                                                │  
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─             │  
│                                                                │  
│  Portfolio                                                     │  
│  ─ ─ ─                                                         │  
│                                                                │  
│  ┌────────────┐ ┌────────────┐ ┌────────────┐                │  
│  │  \[Photo 1\] │ │  \[Photo 2\] │ │  \[Photo 3\] │                │  
│  └────────────┘ └────────────┘ └────────────┘                │  
│  ┌────────────┐ ┌────────────┐ ┌────────────┐                │  
│  │  \[Photo 4\] │ │  \[Photo 5\] │ │  \[Photo 6\] │                │  
│  └────────────┘ └────────────┘ └────────────┘                │  
│                                                                │  
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─             │  
│                                                                │  
│  Get in Touch                                                  │  
│  ─ ─ ─                                                         │  
│                                                                │  
│  📞 \+91 98765 43210                                            │  
│  📧 rahul@rajasthanweddings.com                               │  
│  📷 @rajasthanweddings                                         │  
│                                                                │  
│  \[Send Inquiry →\]                                              │  
│                                                                │  
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─             │  
│                                                                │  
│  Couples also viewed                                            │  
│  ─ ─ ─                                                         │  
│                                                                │  
│  ┌────────────┐  ┌────────────┐  ┌────────────┐              │  
│  │ ShutterBug │  │ Glam Up    │  │ Royal      │              │  
│  │ by Anjali  │  │ by Priya   │  │ Mandap     │              │  
│  └────────────┘  └────────────┘  └────────────┘              │  
│                                                                │  
│  ── FOOTER ──────────────────────────────────────────────────  │  
└────────────────────────────────────────────────────────────────┘

#### **Vendor Profile Interaction Details**

**Share button behavior:**

User clicks "Share this listing"  
    │  
    ▼  
┌─────────────────────────────────────────┐  
│  Share this listing                     │  
│                                         │  
│  \[📋 Copy link\]                         │  
│     Copies: \<https://platform.in/vendors/\> │  
│            rajasthan-wedding-photography │  
│     Shows toast: "Link copied\! ✓"       │  
│                                         │  
│  \[💬 Share on WhatsApp\]                 │  
│     Opens: \<https://wa.me/?text=Check%\>  │  
│     20out%20this%20vendor...            │  
│     Pre-filled with listing link        │  
│                                         │  
│  \[📷 Share to Instagram Story\]          │  
│     Copies link to clipboard            │  
│     \+ Opens Instagram to create story   │  
│                                         │  
└─────────────────────────────────────────┘

**"Send Inquiry" button behavior (Phase 1 — no couple accounts):**

| Vendor has WhatsApp? | Button Action |
| ----- | ----- |
| Yes (instagram field filled) | Opens `https://wa.me/91XXXXXXXXXX?text=Hi%20I%20found%20your%20listing%20on%20[Platform]%20and%20I'm%20interested...` |
| No (no instagram) | Opens `mailto:email@vendor.com?subject=Inquiry%20from%20[Platform]&body=Hi...` |
| Neither | Shows: "Contact directly: \[phone\] \[email\]" |

**View counter:**

* Increments by 1 on every page load (no deduplication in MVP)  
* Displays: "Viewed 142 times" (shows in a small badge near the top)  
* Counter is stored in MongoDB Atlas `view_count` field, updated via API

**"Couples also viewed" section:**

* Shows 3 random approved vendors from the same category  
* Excludes the current vendor  
* Static — doesn't change on every load (updates daily via rebuild or cache)

#### **404 State (vendor not found)**

┌──────────────────────────────────────────────────────────────────┐  
│                                                                  │  
│   This vendor isn't listed yet                                   │  
│                                                                  │  
│   \[Business Name\] may not have joined the platform yet,          │  
│   or their listing might have been removed.                      │  
│                                                                  │  
│   \[Browse all vendors in Jaipur →\]                               │  
│                                                                  │  
│   Are you \[Business Name\]?                                       │  
│   \[Claim this listing →\]                                         │  
│   (We'll send you an email to verify ownership)                  │  
│                                                                  │  
└──────────────────────────────────────────────────────────────────┘

**"Claim this listing" flow:**

* Only shows if `claimed_by_vendor = false`  
* Click → opens a mini form: "Enter your email to verify ownership"  
* Sends verification email  
* When vendor clicks link in email → `claimed_by_vendor = true`  
* This is Phase 2; for MVP, show the button but log interest

---

### **FLOW 7: How It Works Page (`/how-it-works`)**

**Entry points:** Nav bar click, footer link

┌─ NAVBAR ──────────────────────────────────────────────────────┐  
│                                                                │  
│  Getting listed takes 2 minutes                                │  
│                                                                │  
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─             │  
│                                                                │  
│  STEP 1                    STEP 2               STEP 3        │  
│  ┌──────────────┐         ┌──────────────┐    ┌─────────────┐ │  
│  │              │         │              │    │             │ │  
│  │   📋         │    ──▶  │   ✅         │    │  📈         │ │  
│  │              │         │              │    │             │ │  
│  │  Fill in     │         │ We review    │    │ Start       │ │  
│  │ your details │         │ and publish  │    │ getting     │ │  
│  │              │         │ your listing │    │ inquiries   │ │  
│  │ 2 minutes    │         │ within 24 hrs│    │ from couples│ │  
│  │              │         │              │    │             │ │  
│  └──────────────┘         └──────────────┘    └─────────────┘ │  
│                                                                │  
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─             │  
│                                                                │  
│  That's it. No hidden fees. No commissions.                    │  
│                                                                │  
│  \[List Your Business — Free →\]                                 │  
│                                                                │  
│  ── FOOTER ──────────────────────────────────────────────────  │  
└────────────────────────────────────────────────────────────────┘

**Behavior:**

* Pure static page  
* Each step card is a simple div, not a link  
* Animated arrows between steps (CSS animation, optional)  
* Bottom CTA → sign-up form

---

### **FLOW 8: About Page (`/about`)**

**Entry points:** Nav bar click, footer link

┌─ NAVBAR ──────────────────────────────────────────────────────┐  
│                                                                │  
│  About \[Platform\]                                              │  
│                                                                │  
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─             │  
│                                                                │  
│  ┌────────┐                                                    │  
│  │        │                                                    │  
│  │ \[Your  │                                                    │  
│  │ Photo\] │  Hi, I'm \[Your Name\].                             │  
│  │        │                                                    │  
│  │        │  I started \[Platform\] because I kept hearing       │  
│  │        │  from wedding vendors in Jaipur that they          │  
│  │        │  struggle to find couples who need their           │  
│  │        │  services.                                         │  
│  │        │                                                    │  
│  │        │  I'm building the platform I wish existed          │  
│  │        │  when I was planning my own wedding — one         │  
│  │        │  that's simple, honest, and actually helps         │  
│  │        │  vendors grow their business.                     │  
│  │        │                                                    │  
│  └────────┘                                                    │  
│                                                                │  
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─             │  
│                                                                │  
│  Get in Touch                                                  │  
│                                                                │  
│  📞 \+91 XXXXX XXXXX    ← BIG, clickable                       │  
│  📧 hello@platform.in  ← BIG, clickable                       │  
│  💬 WhatsApp: \+91XXXXXXXXXX ← BIG, clickable                  │  
│  📷 @platform\_in                                                 │  
│                                                                │  
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─             │  
│                                                                │  
│  Ready to get listed?                                           │  
│  \[List Your Business — Free →\]                                 │  
│                                                                │  
│  ── FOOTER ──────────────────────────────────────────────────  │  
└────────────────────────────────────────────────────────────────┘

**Mobile layout for About page:**

* Photo stacks above text (full-width)  
* Contact details stack vertically with large touch targets (min 48px height)

---

## **4\. Complete State Diagrams**

### **4.1 Vendor Sign-Up Form State Machine**

                   ┌──────────┐  
                    │  LOADED  │  ← Form renders, all fields empty  
                    └────┬─────┘  
                         │ user starts typing  
                         ▼  
                    ┌──────────┐  
              ┌────▶│  TYPING  │◀────┐  
              │     │ (valid   │     │  
              │     │  so far) │     │  
              │     └────┬─────┘     │  
              │          │           │  
              │    user clears field  │  
              │          │           │  
              │          ▼           │  
              │     ┌──────────┐     │  
              │     │  EMPTY   │     │  
              │     │ (if req,  │     │  
              │     │  shows   │     │  
              │     │  error on│     │  
              │     │  blur)    │     │  
              │     └──────────┘     │  
              │                       │  
    all required       user blurs         user submits  
    fields valid        empty required      with errors  
         │               field                │  
         │                │                  │  
         ▼                ▼                  ▼  
    ┌──────────┐    ┌──────────┐      ┌──────────┐  
    │ READY TO │    │  ERROR   │      │  ERROR   │  
    │ SUBMIT   │    │ (red     │      │ (inline  │  
    │ (btn     │    │  border, │      │  error   │  
    │ enabled) │    │  message)│      │  msgs)   │  
    └────┬─────┘    └──────────┘      └────┬─────┘  
         │                                  │  
         │ user clicks                     │ user fixes  
         │ submit                           fields  
         ▼                                  ▼  
    ┌──────────┐                    ┌──────────┐  
    │SUBMITTING│                    │ READY TO │  
    │(spinner, │                    │ SUBMIT   │  
    │ btn      │                    │ (btn     │  
    │ disabled)│                    │ enabled) │  
    └────┬─────┘                    └──────────┘  
         │  
    ┌────┴────┐  
    │         │  
    ▼         ▼  
┌───────┐ ┌───────┐  
│SUCCESS│ │ FAIL  │  
│       │ │       │  
│navigate│ │show   │  
│to      │ │errors │  
│thank   │ │inline │  
│you     │ │       │  
└───────┘ └───┬───┘  
              │  
              ▼  
         ┌──────────┐  
         │ READY TO │  
         │ SUBMIT   │  
         │ (btn     │  
         │ enabled) │  
         └──────────┘

### **4.2 Browse Vendors Filter State Machine**

                   ┌──────────┐  
                    │  LOADED  │  
                    │ (All      │  
                    │  vendors) │  
                    └────┬─────┘  
                         │  
          ┌──────────────┼──────────────┐  
          │              │              │  
    click "Photographers"  click "Makeup"  click "Venues"  
          │              │              │  
          ▼              ▼              ▼  
    ┌──────────┐   ┌──────────┐   ┌──────────┐  
    │FILTERING │   │FILTERING │   │FILTERING │  
    │Photo     │   │Makeup    │   │Venues    │  
    │(loading) │   │(loading) │   │(loading) │  
    └────┬─────┘   └────┬─────┘   └────┬─────┘  
         │              │              │  
         ▼              ▼              ▼  
    ┌──────────┐   ┌──────────┐   ┌──────────┐  
    │SHOWING   │   │SHOWING   │   │SHOWING   │  
    │Photo     │   │Makeup    │   │Venues    │  
    │results   │   │results   │   │results   │  
    └────┬─────┘   └────┬─────┘   └────┬─────┘  
         │              │              │  
         │    click "All"             │  
         │    (from any filter)       │  
         └──────────────┼──────────────┘  
                        │  
                        ▼  
                   ┌──────────┐  
                   │FILTERING │  
                   │All (load)│  
                   └────┬─────┘  
                        │  
                        ▼  
                   ┌──────────┐  
                   │SHOWING   │  
                   │all       │  
                   │vendors   │  
                   └──────────┘

**Filter loading state:**

While filtering:  
\- Button shows spinner (small, inline)  
\- Vendor grid shows skeleton cards (shimmer animation)  
\- Takes \<500ms (MongoDB Atlas API is fast for 50 records)  
\- If \>1s: show "Loading vendors..." text

### **4.3 Vendor Listing Status Lifecycle (Founder View)**

                   ┌──────────┐  
                    │ PENDING  │  
                    │ (new     │  
                    │  signup) │  
                    └────┬─────┘  
                         │ founder receives  
                         │ notification  
                         ▼  
                    ┌──────────┐  
              ┌────▶│ REVIEW   │  
              │     │ (founder │  
              │     │ reviews) │  
              │     └────┬─────┘  
              │          │  
              │    ┌─────┴─────┐  
              │    │           │  
              │    ▼           ▼  
              │ ┌──────┐   ┌──────┐  
              │ │CALLS │   │SKIPS │  
              │ │vendor │   │call   │  
              │ └───┬──┘   └───┬──┘  
              │     │           │  
              │     ▼           ▼  
              │ ┌──────────┐ ┌──────────┐  
              │ │ ENRICH   │ │ ENRICH   │  
              │ │ (add     │ │ (minimal │  
              │ │  photos, │ │  listing)│  
              │ │  better  │ └────┬─────┘  
              │ │  desc)   │      │  
              │ └────┬─────┘      │  
              │      │            │  
              │  ┌───┴────┐       │  
              │  │        │       │  
              │  ▼        ▼       ▼  
              │┌──────┐ ┌──────┐ ┌──────┐  
              ││APPROVE│ │REJECT │ │REJECT│  
              ││       │ │(bad   │ │(spam)│  
              ││status │ │info)  │ │      │  
              ││=      │ │       │ │      │  
              ││approved│ │status │ │delete│  
              ││       │ │=      │ │      │  
              │└───┬───┘ │rejected│ └──────┘  
              │    │     └───┬───┘  
              │    │         │  
              │    │    vendor  
              │    │    re-applies  
              │    │         │  
              │    └─────────┘  
              │  
              ▼  
         ┌──────────┐  
         │  LIVE    │  
         │ (on site)│  
         └────┬─────┘  
              │  
              │ vendor asks to  
              │ be removed  
              │ or found to be  
              │ fraudulent  
              ▼  
         ┌──────────┐  
         │ INACTIVE │  
         │ (hidden, │  
         │  kept in │  
         │  records)│  
         └──────────┘

---

## **5\. Founder Dashboard Flow (Back-Office)**

This is your control center. It's a spreadsheet \+ notifications, not a web app.

### **5.1 MongoDB Atlas View: "Founder Dashboard"**

┌─ VENDORS TABLE ────────────────────────────────────────────────┐  
│                                                                │  
│  Columns:                                                      │  
│                                                                │  
│  \[□\] │ Business Name │ Category │ City │ Phone │ Status │ ... │  
│  ────┼───────────────┼──────────┼──────┼───────┼────────┼────│  
│  \[□\] │ Rajasthan     │ Photo    │ Jaipur│ \+91.. │ pending│ ... │  
│  \[□\] │ Wedding..     │          │       │       │        │     │  
│  ────┼───────────────┼──────────┼──────┼───────┼────────┼────│  
│  \[□\] │ Glam Up       │ Makeup   │ Jaipur│ \+91.. │ approved│ ..│  
│  \[□\] │ by Priya      │          │       │       │        │     │  
│  ────┼───────────────┼──────────┼──────┼───────┼────────┼────│  
│  \[□\] │ Royal Mandap  │ Decor    │ Jaipur│ \+91.. │ pending│ ... │  
│  \[□\] │ Decor         │          │       │       │        │     │  
│                                                                │  
│  \[+ Add record\]  \[Filter\]  \[Sort\]  \[Group by Status\]           │  
│                                                                │  
│  Views (tabs at top):                                          │  
│  \[All Vendors\] \[Pending Review\] \[Approved\] \[Rejected\]          │  
│                                                                │  
└────────────────────────────────────────────────────────────────┘

### **5.2 Founder Daily Workflow**

MORNING (15 min)  
    │  
    ▼  
1\. Open MongoDB Atlas → "Pending Review" view  
    │  
    ▼  
2\. For each new vendor:  
    │  
    ├─ Check Instagram portfolio (if link provided)  
    │  └─ Quality check: real photos? consistent style?  
    │  
    ├─ Google search business name  
    │  └─ Any reviews? any red flags?  
    │  
    ├─ Decide: approve / reject / need more info  
    │  
    └─ Update Status field:  
       │  
       ├─ APPROVE:  
       │   \- Change status → "approved"  
       │   \- Upload 6–12 photos to "photos" field  
       │   \- Write/improve description  
       │   \- Set starting price if missing  
       │   \- Set is\_verified \= true (if quality is high)  
       │   \- Email vendor: "Your listing is live\! \[link\]"  
       │  
       ├─ REJECT (bad info):  
       │   \- Change status → "rejected"  
       │   \- Add note: "Photos are all stock images. Please share real wedding photos."  
       │   \- Email vendor with reason  
       │  
       └─ REJECT (spam):  
           \- Delete record  
           \- Block phone/email if repeated

    │  
    ▼  
3\. Call 3–5 new vendors from previous day's sign-ups  
    │  
    ├─ Script:  
    │  "Hi \[Name\], this is \[You\] from \[Platform\]. I just  
    │  listed your business — love your work. Quick question:  
    │  how do you currently get most of your leads?"  
    │  
    ├─ Log notes in "notes" field  
    │  
    └─ Ask: "Can you refer 2 other vendors you know?"  
       → If yes, add them to outreach list

    │  
    ▼  
4\. Check "Approved" view for vendors who need follow-up  
    │  
    ├─ Vendors with no photos → "Can you send 5–6 recent photos?"  
    ├─ Vendors with 0 views after 3 days → "Your listing is live\!  
    │   Share it: \[link\]"  
    └─ Vendors with 10+ views but no inquiry → Doing well, no action

    │  
    ▼  
5\. Export CSV backup  
    │  
    └─ MongoDB Atlas → Export → CSV → Save to Google Drive

### **5.3 Notification Flow (on new sign-up)**

Vendor submits form  
    │  
    ▼  
POST /api/submit-listing  
    │  
    ├─ 1\. Save to MongoDB Atlas (status \= "pending")  
    │  
    ├─ 2\. Send email to vendor (Resend)  
    │   "Thanks for listing \[Business Name\]\!  
   │    We'll review and publish within 24 hours."  
   │  
   ├─ 3\. Send WhatsApp to founder (Gupshup/Twilio)  
   │   "🔔 New vendor signup: \[Business Name\]  
   │    Category: \[Category\]  
   │    City: \[City\]  
   │    Phone: \[Phone\]  
   │    View: \[MongoDB Atlas link\]"  
   │  
   └─ 4\. Send SMS to vendor (optional, Twilio)  
       "Thanks for listing on \[Platform\]\!  
       We'll call you this week. — \[Your name\]"

---

## **6\. Error States & Edge Cases**

### **6.1 Form Errors**

| Scenario | Display | User Action |
| ----- | ----- | ----- |
| Network error on submit | "Can't connect. Check internet and try again." with retry button | Click retry |
| Server 500 error | "Something went wrong. We're on it. We'll call you today at \[phone\]." | Wait for call — form data is preserved in localStorage |
| Duplicate phone number | "This phone number is already registered. \[Contact us →\] if this is your listing." | Contact founder |
| Duplicate email | Same as above | Contact founder |
| Duplicate business name | "A similar business name exists. We'll contact you to verify." | Wait for call |
| Spam detected (honeypot filled) | Silently accepted (show thank you) but not saved to MongoDB Atlas | No action — spam discarded |

### **6.2 Browse Page Errors**

| Scenario | Display |
| ----- | ----- |
| MongoDB Atlas API down | "Vendors are being updated. Please check back in a few minutes." \+ retry button |
| No approved vendors | "Vendors coming soon to Jaipur. Are you a vendor? \[List your business →\]" |
| Filter returns 0 results | "No \[category\] vendors listed yet. \[Be the first →\]" |

### **6.3 Vendor Profile Errors**

| Scenario | Display |
| ----- | ----- |
| Vendor not found (404) | "This vendor isn't listed yet" \+ claim button \+ browse link |
| Vendor status \= rejected | Same 404 page (don't reveal rejection) |
| Vendor status \= inactive | "This listing is no longer active. \[Browse other vendors →\]" |
| Image fails to load | Show placeholder: grey background with business initial |

### **6.4 General Error States**

| Scenario | Display |
| ----- | ----- |
| Page not found (any page) | "Page not found" \+ "Go home →" button |
| Server offline | "We're doing some maintenance. Back in a few minutes." |
| Slow page load (\>3s) | Show loading skeleton for content area |

---

## **7\. Mobile-Specific Flows**

### **7.1 Mobile Navigation**

DESKTOP:                     MOBILE:  
┌─────────────────┐          ┌─────────────────┐  
│ Logo   Links \[→\]│          │ Logo        \[☰\] │  
└─────────────────┘          └────────┬────────┘  
                                       │  
                               user taps ☰  
                                       │  
                                       ▼  
                          ┌────────────────────┐  
                          │   For Vendors       │  
                          │   Browse Vendors    │  
                          │   About             │  
                          │   ─────────────     │  
                          │   \[Join Free →\]     │  
                          │                     │  
                          │        \[✕ Close\]    │  
                          └────────────────────┘

**Rules:**

* Menu slides in from right  
* Dark overlay behind menu  
* Tapping a link closes menu and navigates  
* "✕ Close" button or tapping overlay closes menu  
* Active page is highlighted in menu

### **7.2 Mobile Form Adjustments**

| Desktop | Mobile |
| ----- | ----- |
| Form fields in one column, max-width 600px | Full-width fields, no max-width |
| Dropdown select with scroll | Native picker (iOS/Android) |
| Date picker (if any) | Native date picker |
| Phone input with country code selector | Auto-detects country from SIM, shows \+91 |
| Inline validation messages | Full-width below field |

### **7.3 Mobile Vendor Profile**

| Desktop | Mobile |
| ----- | ----- |
| Side-by-side: cover image \+ info | Stacked: cover image full-width, info below |
| Gallery grid: 3 columns | Gallery grid: 2 columns |
| "Couples also viewed" 3-across | 2-across |
| Sticky "Send Inquiry" button at bottom | Fixed bottom bar with "Call" and "WhatsApp" buttons |

**Fixed bottom bar (mobile only):**

┌──────────────────────────────┐  
│ \[📞 Call Now\]  \[💬 WhatsApp\] │  
└──────────────────────────────┘  
Always visible when scrolled past header

---

## **8\. URL Routing Map**

| URL | Page | Auth Required | Access |
| ----- | ----- | ----- | ----- |
| `/` | Home | No | Public |
| `/for-vendors` | For Vendors | No | Public |
| `/vendors` | Browse Vendors | No | Public |
| `/vendors?category=photographer` | Browse (filtered) | No | Public |
| `/vendors/[slug]` | Vendor Profile | No | Public |
| `/how-it-works` | How It Works | No | Public |
| `/about` | About/Contact | No | Public |
| `/thank-you` | Thank You | No | Public (after form submit) |
| `/api/submit-listing` | Form API endpoint | No | POST only |
| `/api/vendors` | Vendor list API | No | GET only |
| `/api/vendors/[slug]` | Vendor detail API | No | GET only |

**No protected routes. No login. No user accounts in MVP.**

---

## **9\. Loading & Transition States**

### **9.1 Page Load Sequence**

User clicks link / enters URL  
    │  
    ▼  
┌─────────────────────────────────────┐  
│ 1\. Navbar renders immediately       │  
│    (sticky, always in HTML)         │  
└──────────────┬──────────────────────┘  
               │  
               ▼  
┌─────────────────────────────────────┐  
│ 2\. Page shell renders               │  
│    (background, layout structure)    │  
└──────────────┬──────────────────────┘  
               │  
               ▼  
┌─────────────────────────────────────┐  
│ 3\. Static content shows             │  
│    (headings, text, CTA buttons)     │  
└──────────────┬──────────────────────┘  
               │  
               ▼  
┌─────────────────────────────────────┐  
│ 4\. Dynamic content loads            │  
│    (vendor list, profile data)       │  
│    → Shows shimmer/skeleton briefly  │  
└──────────────┬──────────────────────┘  
               │  
               ▼  
┌─────────────────────────────────────┐  
│ 5\. Full page ready                  │  
│    (images, all content)             │  
└─────────────────────────────────────┘

### **9.2 Skeleton Loading (for dynamic content)**

**Browse Vendors page loading:**

┌──────────┐ ┌──────────┐ ┌──────────┐  
│ ░░░░░░░░ │ │ ░░░░░░░░ │ │ ░░░░░░░░ │  ← shimmer  
│ ░░░░░░░░ │ │ ░░░░░░░░ │ │ ░░░░░░░░ │  
│ ░░░░░░░░ │ │ ░░░░░░░░ │ │ ░░░░░░░░ │  
│ ░░░░░░░░ │ │ ░░░░░░░░ │ │ ░░░░░░░░ │  
└──────────┘ └──────────┘ └──────────┘

┌──────────┐ ┌──────────┐ ┌──────────┐  
│ ░░░░░░░░ │ │ ░░░░░░░░ │ │ ░░░░░░░░ │  
│ ░░░░░░░░ │ │ ░░░░░░░░ │ │ ░░░░░░░░ │  
│ ░░░░░░░░ │ │ ░░░░░░░░ │ │ ░░░░░░░░ │  
│ ░░░░░░░░ │ │ ░░░░░░░░ │ │ ░░░░░░░░ │  
└──────────┘ └──────────┘ └──────────┘

**Vendor Profile page loading:**

┌──────────────────────────────────────────┐  
│  ░░░░░░░░                                 │  ← cover photo placeholder  
│                                          │  
│  ░░░░░░░░░░░░░░░░░                       │  ← title placeholder  
│  ░░░░░░░░░░░░░░░░░░░░░░░░               │  ← subtitle  
│                                          │  
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░          │  ← description  
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░          │  
│                                          │  
│  ┌──────┐ ┌──────┐ ┌──────┐            │  
│  │ ░░░░ │ │ ░░░░ │ │ ░░░░ │            │  ← gallery skeleton  
│  │ ░░░░ │ │ ░░░░ │ │ ░░░░ │            │  
│  └──────┘ └──────┘ └──────┘            │  
└──────────────────────────────────────────┘

---

## **10\. Analytics & Tracking Events**

Track these user actions to understand behavior:

| Event | Trigger | Data |
| ----- | ----- | ----- |
| `page_view` | Every page load | page, url, referrer |
| `cta_click` | Any CTA button clicked | button\_text, page |
| `form_start` | User focuses first form field | — |
| `form_submit` | User submits sign-up form | success, fields\_filled |
| `form_error` | Form validation fails | field, error\_type |
| `filter_click` | User clicks a category filter | category, page |
| `vendor_view` | User views a vendor profile | vendor\_id, vendor\_name, source\_page |
| `share_click` | User clicks share button | vendor\_id, share\_method (copy/whatsapp/instagram) |
| `phone_click` | User clicks phone number | vendor\_id |
| `whatsapp_click` | User clicks WhatsApp link | vendor\_id |
| `load_more` | User clicks "Load More" | page\_number, total\_loaded |

---

## **11\. Complete User Journey Maps**

### **Journey A: Vendor discovers via Instagram DM**

1\. Vendor sees founder's Instagram story: "Looking for wedding  
   vendors in Jaipur — DM me\!"  
   │  
   ▼  
2\. Vendors DMs founder  
   │  
   ▼  
3\. Founder replies: "Hey\! We're building a platform. Want to  
   list your business? Here's the link: \[platform.in\]"  
   │  
   ▼  
4\. Vendor opens link → lands on Home page  
   │  
   ▼  
5\. Reads hero: "Get discovered by couples in Jaipur"  
   │  
   ▼  
6\. Clicks "List Your Business — Free"  
   │  
   ▼  
7\. Fills form (2 minutes)  
   │  
   ▼  
8\. Clicks Submit → Thank You page  
   │  
   ▼  
9\. Gets confirmation email  
   │  
   ▼  
10\. Founder calls within 48 hours  
   │  
   ▼  
11\. Founder enriches listing (adds photos, better description)  
   │  
   ▼  
12\. Vendor receives "Your listing is live" email with link  
   │  
   ▼  
13\. Vendor shares link on their Instagram story  
   │  
   ▼  
14\. Another vendor sees story → clicks → signs up  
   │  
   ── LOOP REPEATS ──

### **Journey B: Vendor discovers via another vendor's Instagram story**

1\. Vendor A shares their listing link on Instagram story  
   │  
   ▼  
2\. Vendor B (in same city, same category) sees story  
   │  
   ▼  
3\. Clicks link → lands on Vendor A's profile page  
   │  
   ▼  
4\. Scrolls down, sees "Are you a vendor? List your business →"  
   │  
   ▼  
5\. Clicks → lands on Home page  
   │  
   ▼  
6\. Clicks "List Your Business — Free"  
   │  
   ▼  
7\. Fills form → Thank You page  
   │  
   ▼  
8\. Founder calls → enriches listing  
   │  
   ▼  
9\. Vendor B shares their own listing on Instagram story  
   │  
   ▼  
10\. Vendor C sees story → same journey begins  
    │  
    ── VIRAL LOOP ──

### **Journey C: Couple discovers via Google search**

1\. Couple googles "best wedding photographers in Jaipur"  
   │  
   ▼  
2\. Finds your platform's browse page: "Wedding Vendors in Jaipur"  
   │  
   ▼  
3\. Browses photographer listings  
   │  
   ▼  
4\. Clicks on a photographer → views profile  
   │  
   ▼  
5\. Clicks "Send Inquiry" → WhatsApp opens with pre-filled message  
   │  
   ▼  
6\. Vendor receives inquiry, responds  
   │  
   ▼  
7\. Couple books vendor  
   │  
   ▼  
8\. (Phase 2\) Couple leaves review on vendor's profile

---

## **12\. Page-by-Page Checklist**

Use this to verify each page is complete:

### **Home (`/`)**

* \[ \] Navbar with logo, 3 links, CTA button  
* \[ \] Hero with city-name headline  
* \[ \] Primary CTA scrolls to form or navigates to sign-up  
* \[ \] Social proof section (dynamic vendor count)  
* \[ \] How It Works (3 steps)  
* \[ \] Bottom CTA  
* \[ \] Footer with links  
* \[ \] Sign-up form (inline or linked)  
* \[ \] Mobile responsive  
* \[ \] OG tags set

### **For Vendors (`/for-vendors`)**

* \[ \] Navbar (same as all pages)  
* \[ \] Headline: "Why list on \[Platform\]?"  
* \[ \] 5 value prop cards  
* \[ \] Categories grid  
* \[ \] CTA to sign-up  
* \[ \] Footer  
* \[ \] Mobile responsive

### **Browse Vendors (`/vendors`)**

* \[ \] Navbar  
* \[ \] Page title \+ subtitle  
* \[ \] Category filter tabs  
* \[ \] Vendor cards grid (3 desktop, 1 mobile)  
* \[ \] Each card: photo, name, category, city, price, view link  
* \[ \] Load More button (or "no more" state)  
* \[ \] Empty states handled  
* \[ \] Bottom CTA for vendors  
* \[ \] Footer  
* \[ \] URL updates on filter (query params)  
* \[ \] Mobile responsive

### **Vendor Profile (`/vendors/[slug]`)**

* \[ \] Navbar  
* \[ \] "Back to all vendors" link  
* \[ \] Header: name, category, city, rating badge, price  
* \[ \] Cover photo / gallery  
* \[ \] About section  
* \[ \] Portfolio gallery  
* \[ \] Contact section (phone, email, Instagram)  
* \[ \] Inquiry button (WhatsApp or mailto)  
* \[ \] Share button with dropdown  
* \[ \] View counter  
* \[ \] "Couples also viewed" section  
* \[ \] "Claim this listing" button (if unclaimed)  
* \[ \] 404 state for missing vendors  
* \[ \] Footer  
* \[ \] Mobile responsive

### **How It Works (`/how-it-works`)**

* \[ \] Navbar  
* \[ \] 3-step flow  
* \[ \] Bottom CTA  
* \[ \] Footer  
* \[ \] Mobile responsive

### **About (`/about`)**

* \[ \] Navbar  
* \[ \] Founder photo \+ story  
* \[ \] Contact block (phone, email, WhatsApp — big, clickable)  
* \[ \] Bottom CTA  
* \[ \] Footer  
* \[ \] Mobile responsive

### **Thank You (`/thank-you`)**

* \[ \] Navbar  
* \[ \] Success message with business name  
* \[ \] 3-step next steps  
* \[ \] 3 random vendor cards  
* \[ \] Contact info  
* \[ \] Footer

---

That's the complete flow document. Every page, every state, every interaction, every edge case. You can hand this to a designer for wireframes and a developer for implementation and neither of them will have questions. Want me to write the copy for each page next, or create the wireframe descriptions?

ak-NRInZrBYLoEfgE8t3QHYs-arg\_aRGYXE

