# SAMA EVENTS — Official Event Platform

> **Where Every Event Becomes an Experience**  
> A professional, premium, vibrant, and responsive event management & promotion platform for **SAMA EVENTS**, featuring **NOOR-E-RAMZAN 2.0** as the flagship festival and **NOOR-E-RAMZAN 1.0** as the foundational credibility story.

---

## 1. Project Overview

**Sama Events** is a Chennai-based premier event company curating large-scale food festivals, shopping lifestyle exhibitions, and community celebrations.

- **Main Brand**: SAMA EVENTS (Universal brand: food festivals, shopping expos, exhibitions, cultural events, community/lifestyle gatherings)
- **Current Flagship Event**: **NOOR-E-RAMZAN 2.0** (25 February 2027 – 08 March 2027 at YMCA Royapettah, Chennai)
- **Visual Credibility & Story**: **NOOR-E-RAMZAN 1.0** (2026 Edition)
- **Future Ready**: Built with dynamic event data and routes to add future festivals with ease.

---

## 2. Technology Stack

- **Frontend**:
  - React 18+ & TypeScript
  - Vite (lightning fast dev & production build)
  - React Router 6+ (dynamic `/events/:eventSlug` routing)
  - **Colocated CSS architecture** (each component & page has its own folder and dedicated stylesheet)
  - Lucide React (modern, lightweight iconography)
- **Backend**:
  - Node.js & Express with TypeScript
  - REST API (`/api/enquiries`, `/api/health`)
  - Centralized error handler & input validation
- **Database & ORM**:
  - PostgreSQL
  - Prisma ORM (`Enquiry` model)
  - Safe in-memory fallback buffer during local offline testing

---

## 3. Directory Structure

```
Sama-Events/
├── frontend/
│   ├── public/
│   │   └── images/               # Put uploaded photos here
│   ├── src/
│   │   ├── assets/               # Brand SVG and icon assets
│   │   ├── components/           # Reusable components with colocated CSS
│   │   │   ├── Button/           # Button.tsx, Button.css
│   │   │   ├── ContactForm/      # ContactForm.tsx, ContactForm.css
│   │   │   ├── Countdown/        # Countdown.tsx, Countdown.css
│   │   │   ├── EventCard/        # EventCard.tsx, EventCard.css
│   │   │   ├── EventGallery/     # EventGallery.tsx, EventGallery.css
│   │   │   ├── EventGrid/        # EventGrid.tsx, EventGrid.css
│   │   │   ├── EventHighlights/  # EventHighlights.tsx, EventHighlights.css
│   │   │   ├── EventInfo/        # EventInfo.tsx, EventInfo.css
│   │   │   ├── Footer/           # Footer.tsx, Footer.css
│   │   │   ├── Gallery/          # Gallery.tsx, Gallery.css
│   │   │   ├── GuestCard/        # GuestCard.tsx, GuestCard.css
│   │   │   ├── Hero/             # Hero.tsx, Hero.css
│   │   │   ├── LocationSection/  # LocationSection.tsx, LocationSection.css
│   │   │   ├── Navbar/           # Navbar.tsx, Navbar.css
│   │   │   ├── PreviousEvent/    # PreviousEvent.tsx, PreviousEvent.css (1.0 -> 2.0 story)
│   │   │   ├── SectionHeading/   # SectionHeading.tsx, SectionHeading.css
│   │   │   ├── SponsorGrid/      # SponsorGrid.tsx, SponsorGrid.css
│   │   │   ├── StallBooking/     # StallBooking.tsx, StallBooking.css
│   │   │   ├── StallLayout/      # StallLayout.tsx, StallLayout.css (YMCA Floor Plan)
│   │   │   ├── WhatsAppButton/   # WhatsAppButton.tsx, WhatsAppButton.css (Floating CTA)
│   │   │   └── WhatsAppOptions/  # WhatsAppOptions.tsx, WhatsAppOptions.css (Menu)
│   │   ├── data/                 # Centralized content & image registries
│   │   │   ├── events.ts         # All event descriptions, dates, stalls & venues
│   │   │   ├── gallery.ts        # Dedicated gallery items & categories
│   │   │   ├── guests.ts         # Dignitaries & guest data
│   │   │   ├── images.ts         # ⭐ CENTRALIZED IMAGE REGISTRY
│   │   │   ├── navigation.ts     # Header & footer links
│   │   │   ├── siteData.ts       # Sama Events brand info, contact & social links
│   │   │   └── sponsors.ts       # Brand partners & sponsors
│   │   ├── hooks/                # useCountdown.ts, useScrollPosition.ts
│   │   ├── pages/                # Pages with colocated CSS
│   │   │   ├── About/            # About.tsx, About.css
│   │   │   ├── Contact/          # Contact.tsx, Contact.css
│   │   │   ├── EventDetails/     # EventDetails.tsx, EventDetails.css
│   │   │   ├── Events/           # Events.tsx, Events.css
│   │   │   ├── Gallery/          # Gallery.tsx, Gallery.css
│   │   │   ├── Home/             # Home.tsx, Home.css
│   │   │   └── NotFound/         # NotFound.tsx, NotFound.css
│   │   ├── routes/               # AppRoutes.tsx
│   │   ├── services/             # api.ts, enquiryService.ts
│   │   ├── types/                # TypeScript interfaces (event, enquiry, guest, sponsor, gallery)
│   │   ├── utils/                # whatsapp.ts, dateUtils.ts
│   │   ├── App.tsx & App.css
│   │   ├── main.tsx
│   │   └── index.css             # Design tokens & typography
│   ├── .env.example
│   └── package.json
├── backend/
│   ├── prisma/
│   │   └── schema.prisma         # PostgreSQL Enquiry schema
│   ├── src/
│   │   ├── config/               # database.ts (Prisma client)
│   │   ├── controllers/          # enquiryController.ts, healthController.ts
│   │   ├── middleware/           # errorHandler.ts
│   │   ├── routes/               # enquiryRoutes.ts, healthRoutes.ts, index.ts
│   │   ├── services/             # enquiryService.ts
│   │   ├── types/                # enquiryTypes.ts
│   │   └── server.ts             # Express application
│   ├── .env.example
│   └── package.json
├── README.md
└── .gitignore
```

---

## 4. How to Replace Images Easily ⭐

Every image across the entire website is referenced from **one single file**:  
`frontend/src/data/images.ts`.

### Step-by-Step Workflow:
1. **Upload or Copy Your Image**:
   - Place your image file inside `frontend/public/images/` (e.g. `frontend/public/images/my-hero.jpg`), OR copy any uploaded image URL.
2. **Open the Registry**:
   - Open `frontend/src/data/images.ts`.
3. **Replace the Image Path**:
   - Locate the variable you wish to update (e.g., `noorERamzan2Images.hero` or `noorERamzan1Images.crowdAtmosphere`):
   ```ts
   export const noorERamzan2Images = {
     hero: "/images/my-new-hero.jpg", // <-- Just change this path!
     card: "/images/my-card-photo.jpg",
     ...
   };
   ```
4. **Save the File**:
   - Save the file.
5. **Instant Update**:
   - The website automatically displays your updated photo across all pages without editing any JSX or component code!

---

## 5. How to Update Event Data & Add Future Events

All event data lives in `frontend/src/data/events.ts`.

### Updating Noor-E-Ramzan 2.0 Information:
Open `frontend/src/data/events.ts` and modify properties under `id: 'noor-e-ramzan-2'`:
- `formattedDate`: e.g. `'25 February 2027 – 08 March 2027'`
- `venue`: e.g. `'YMCA Royapettah'`
- `address`: e.g. `'No. 149/70, Dr. Besant Road, Royapettah, Chennai - 600014'`
- `stallInfo`: update stall dimensions or descriptions

### Adding a New Future Event:
Simply append a new object to the `eventsData` array in `frontend/src/data/events.ts`:
```ts
{
  id: 'chennai-grand-souk',
  slug: 'chennai-grand-souk',
  title: 'CHENNAI GRAND SOUK',
  edition: '2027',
  tagline: 'FASHION • FOOD • HANDICRAFTS',
  category: 'Shopping & Cultural Expo',
  description: 'A 3-day showcase of artisanal creators and indie brands.',
  startDate: '2027-11-12',
  endDate: '2027-11-14',
  formattedDate: '12 – 14 November 2027',
  duration: '3 Days',
  venue: 'Chennai Trade Centre',
  city: 'Chennai',
  address: 'Nandambakkam, Chennai',
  status: 'announced',
  isFeatured: false,
  heroImage: brandImages.categories.shoppingEvents,
  cardImage: brandImages.categories.shoppingEvents,
  highlights: ['Over 100 Stalls', 'Cultural Stage', 'Food Court'],
}
```
The new event will automatically appear on `/events` and be accessible at `/events/chennai-grand-souk`!

---

## 6. WhatsApp Integration

WhatsApp messaging logic is centralized in `frontend/src/utils/whatsapp.ts`.  
It supports pre-filled templates:
- **Event Enquiry**:  
  `"Hello Sama Events, I would like to know more about [Event Name]."`
- **Stall Booking**:  
  `"Hello Sama Events, I am interested in booking a stall for [Event Name]. Please share the available stall options and pricing."`
- **General Enquiry**:  
  `"Hello Sama Events, I would like to make a general enquiry."`

To change the official WhatsApp phone number, update `siteData.contact.whatsappNumber` in `frontend/src/data/siteData.ts`.

---

## 7. Development & Running Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend dev server runs at: `http://localhost:5173`

### Backend Setup
```bash
cd backend
npm install
npx prisma generate
npm run dev
```
The backend REST API server runs at: `http://localhost:5000`

### Database Setup (PostgreSQL with Prisma)
1. Configure your PostgreSQL connection string in `backend/.env`:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/sama_events?schema=public"
   ```
2. Run database migration:
   ```bash
   npx prisma migrate dev --name init
   ```
3. *(Optional)* Launch Prisma Studio to view enquiries in a GUI:
   ```bash
   npx prisma studio
   ```

*Note: If PostgreSQL is not active locally during development, the backend automatically safeguards enquiries in a temporary memory buffer so your frontend testing is never interrupted.*

---

## 8. Production Build

### Frontend Build
```bash
cd frontend
npm run build
```
Creates an optimized, production-ready static bundle in `frontend/dist/`.

### Backend Build
```bash
cd backend
npm run build
npm start
```
Compiles TypeScript into `backend/dist/server.js` and runs the production Express API.

---

## 9. Official Brochure Specifications

- **Event**: NOOR-E-RAMZAN 2.0
- **Theme**: FOOD • SHOPPING • FESTIVITY
- **Dates**: 25.02.2027 – 08.03.2027 (12 Days)
- **Venue**: YMCA Royapettah, Chennai (No. 149/70, Dr. Besant Road, Royapettah, Chennai - 600014)
- **Stall Dimensions**:
  - **Exhibition Stalls (S1–S62)**: 8 x 6 Feet
  - **Food Stalls (F1–F9 & F15–F22)**: 6 x 8 Feet
  - **Food Stalls (F11–F16)**: 6 x 4 Feet
- **Amenities**: Dedicated dining area, kids play area, vehicle parking, streamlined entrance & exit.

---

© 2026 Sama Events. All rights reserved.
