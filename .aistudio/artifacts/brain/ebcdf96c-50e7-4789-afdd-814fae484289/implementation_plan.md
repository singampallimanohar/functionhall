# Dynamic Page SEO & Metadata Architecture

Implement helmet-like per-page SEO management for Sai Vedika AC Function Hall, ensuring each page route updates the document title, meta descriptions, canonical links, and social OpenGraph tags dynamically as users navigate.

## User Review & Critical Decisions

> [!NOTE]
> The solution uses a lightweight, zero-dependency `usePageSEO` hook and companion `<SEOHead />` component. This avoids adding heavyweight external libraries like `react-helmet-async`, keeping the client bundle slim while fully maintaining standard DOM metadata, indexability, and clean route transitions.

- **Title Format Strategy**: `[Page Title] | Sai Vedika AC Function Hall, Tuni`
- **Dynamic Tags Managed**:
  - `document.title`
  - `<meta name="description">`
  - `<link rel="canonical">`
  - `<meta property="og:title">`
  - `<meta property="og:description">`
  - `<meta property="og:url">`
  - `<meta name="twitter:title">`
  - `<meta name="twitter:description">`

---

## 1. Overview & Core Concept

When visitors or crawlers navigate between routes in a single-page application (SPA), the browser's head tags must reflect the active page's context. This plan equips each page component (`About`, `Facilities`, `Gallery`, `Events`, `Contact`, `Enquiry`, `Home`, and `NotFound`) with unique, keyword-rich SEO metadata tailored to Andhra Pradesh wedding and celebration queries.

---

## 2. Page-by-Page Metadata Specifications

### 1. Home (`/`)
- **Title**: `Sai Vedika AC Function Hall | Premium Wedding & Event Venue in Tuni`
- **Description**: `Discover Sai Vedika AC Function Hall in Tuni, Andhra Pradesh. Premier air-conditioned convention center for grand weddings, receptions, engagements, and banquets.`

### 2. About Us (`/about`)
- **Title**: `About Our Venue | Sai Vedika AC Function Hall, Tuni`
- **Description**: `Learn about Sai Vedika AC Function Hall in Tuni. Built for auspicious Telugu weddings and family celebrations with pillar-free architecture and modern hospitality.`

### 3. Facilities (`/facilities`)
- **Title**: `Grand AC Hall, Dining & Amenities | Sai Vedika Tuni`
- **Description**: `Explore verified facilities at Sai Vedika: centrally air-conditioned grand hall, dedicated dining banquet, bridal suites, ample parking, and 100% DG power backup.`

### 4. Photo Gallery (`/gallery`)
- **Title**: `Photo Gallery & Stage Decors | Sai Vedika AC Function Hall`
- **Description**: `Browse photos of Sai Vedika AC Function Hall in Tuni. View our grand celebration hall, royal reception stage decors, dining banquet, and bridal suites.`

### 5. Events & Celebrations (`/events`)
- **Title**: `Weddings, Receptions & Celebrations | Sai Vedika Tuni`
- **Description**: `Host weddings, receptions, engagements, milestone birthdays (Shashtipoorthi), and family ceremonies in complete air-conditioned comfort at Sai Vedika Tuni.`

### 6. Contact & Location (`/contact`)
- **Title**: `Location, Address & Directions | Sai Vedika Function Hall, Tuni`
- **Description**: `Find Sai Vedika AC Function Hall in Tuni, Andhra Pradesh. View directions, Google Maps location, phone details, and WhatsApp communication channels.`

### 7. Booking Enquiry (`/enquiry`)
- **Title**: `Check Availability & Book Enquiry | Sai Vedika Tuni`
- **Description**: `Check auspicious date availability and request function hall booking quotes for Sai Vedika AC Function Hall in Tuni directly through WhatsApp.`

### 8. 404 Not Found (`*`)
- **Title**: `Page Not Found | Sai Vedika AC Function Hall, Tuni`
- **Description**: `The requested page could not be found. Return to Sai Vedika AC Function Hall, Tuni.`

---

## 3. Technical Architecture & DOM Component Diagram

```
┌──────────────────────────────────────────────────────────┐
│                   React Router DOM                       │
│     (/about, /facilities, /gallery, /events, etc.)       │
└────────────────────────────┬─────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────┐
│           Page Component (e.g., Facilities.tsx)          │
│       Renders <SEOHead title="..." description="..." />  │
└────────────────────────────┬─────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────┐
│                 usePageSEO Custom Hook                   │
│  - Sets document.title                                   │
│  - Queries/creates <meta name="description">             │
│  - Updates OpenGraph: og:title, og:description, og:url    │
│  - Updates Twitter: twitter:title, twitter:description   │
│  - Updates <link rel="canonical">                        │
│  - Cleans up or restores default on unmount              │
└────────────────────────────┬─────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────┐
│                    DOM <head> Tree                       │
│    Active page tags indexed by search bots & crawlers    │
└──────────────────────────────────────────────────────────┘
```

---

## 4. Implementation Steps

1. **Create `src/components/SEOHead.tsx` & `src/hooks/usePageSEO.ts`**:
   - Helper hook that idempotently locates or creates `<meta>` / `<link>` tags in the document head.
   - Syncs canonical URL dynamically with `window.location.origin + window.location.pathname`.
2. **Integrate into Individual Page Components**:
   - `src/pages/Home.tsx`
   - `src/pages/About.tsx`
   - `src/pages/Facilities.tsx`
   - `src/pages/Gallery.tsx`
   - `src/pages/Events.tsx`
   - `src/pages/Contact.tsx`
   - `src/pages/Enquiry.tsx`
   - `src/pages/NotFound.tsx`
3. **Verify with Compilation & Build**:
   - Validate TypeScript types and bundle compilation with `compile_applet`.
   - Verify production build with `npm run build`.
