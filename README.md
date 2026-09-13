# Nipun Kulshrestha — Developer Portfolio

A modern, responsive full-stack developer portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Node.js, showcasing full-stack projects, architectural case studies, technical competencies, verified competitive programming achievements, event leadership, and professional certifications.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js->=18.18.0-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Resend](https://img.shields.io/badge/Resend-Email_API-black?style=flat&logo=resend&logoColor=white)](https://resend.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Live_Deployment-0070F3?style=flat&logo=vercel&logoColor=white)](https://portfolio-phi-ten-f3bqzzs19b.vercel.app/)

---

## 🌐 Live Demo

🚀 **Explore the live portfolio:** [portfolio-phi-ten-f3bqzzs19b.vercel.app](https://portfolio-phi-ten-f3bqzzs19b.vercel.app/)

---

## 📸 Preview

![Nipun Kulshrestha Portfolio](docs/screenshots/portfolio-home.png)

> **Note on Screenshot:**  
> To display the live hero screenshot above, capture a full-browser screenshot of the running homepage and save it to `docs/screenshots/portfolio-home.png`.

---

## 👨‍💻 About the Project

This portfolio is engineered from the ground up as a high-performance web platform rather than a static template. Built with the **Next.js 16 App Router** and **React 19**, it communicates engineering philosophy, real-world full-stack projects, and verified credentials to recruiters, engineering managers, and technical peers.

### What this portfolio showcases:
- **Full-Stack Engineering:** End-to-end architectures spanning Next.js, Node.js, Express, PostgreSQL, Supabase, and Docker.
- **Architectural Case Studies:** Deep dives covering problem statements, technical solutions, database schemas, and engineering decisions.
- **Competitive Programming & Awards:** 3rd Place finish in Code Optics and Top 1000 nationwide selection in India Innovates 2026.
- **Interactive Lightbox Inspection:** High-resolution certificate verification for academic and industry credentials.
- **Direct Communication:** A secure, server-validated contact pipeline powered by Resend.

---

## ✨ Features

- **Fluid Single-Page Flow:** Seamless in-page navigation coupled with standalone deep-dive project case study routes.
- **Dynamic Scroll-Spy Navigation:** Tracks viewport position against section focal lines and continuously updates the active item.
- **Animated Navigation Pill:** Framer Motion spring physics (`layoutId`) that smoothly glides the orange active indicator between tabs.
- **Smart Auto-Hiding Navbar:** Detects scroll velocity and direction—slides away on scroll-down, returns on scroll-up, and auto-hides after 2 seconds of inactivity.
- **URL Hash Synchronization:** Syncs browser address bar hashes (`/#projects`, `/#about`) via `history.replaceState` without polluting navigation history.
- **Project Showcase Carousel:** Interactive auto-rotating project carousel in the Capabilities section with hover pause and keyboard arrow controls.
- **Dynamic Case Study Routing:** SSG-rendered deep-dive pages (`/projects/[slug]`) generated via `generateStaticParams`.
- **Accessible Certificate Lightbox:** Full-screen modal with backdrop blur, scroll locking, Escape-key dismissal, and high-resolution zoom links.
- **Resilient Contact Form:** Serverless route handler featuring client IP rate limiting, anti-spam honeypot filtering, and dynamic `Reply-To` headers via Resend.
- **Dark & Light Mode:** System-aware, persistent theme switching powered by `next-themes` and Tailwind v4 CSS variables.
- **Accessibility & Motion Considerations:** Full ARIA roles, focus rings, and `@media (prefers-reduced-motion)` suppression.

---

## 🛠️ Tech Stack

| Technology | Purpose | Implementation Details |
|---|---|---|
| **Next.js 16.3.5** | Framework & Routing | App Router, Server & Client Components, Metadata Routes |
| **React 19.2.8** | UI Library | Modern hooks, component lifecycle, concurrent features |
| **TypeScript 5** | Type System | Strict mode type definitions across data, components, and API routes |
| **Tailwind CSS v4** | Design System & Styling | `@tailwindcss/postcss`, custom CSS variables, glassmorphism tokens |
| **Framer Motion 13.2.0** | Animations | Layout animations, spring indicators, modal `AnimatePresence` |
| **Lucide React** | Icons | Consistent vector iconography |
| **next-themes** | Theme Management | Class-based dark/light toggling with `localStorage` persistence |
| **Resend 6.28.0** | Transactional Email | Serverless contact form email dispatch with HTML templates |
| **PostCSS** | CSS Processing | Modern PostCSS pipeline for Tailwind v4 |

---

## 📑 Website Sections

The portfolio homepage is assembled in the following deliberate sequence:

1. **Hero:** Introduction, signature "NK" branding, portrait cutout over an orange semicircle arch, developer quote, and podium statistics.
2. **Ticker Banner:** Continuous 25-second linear marquee highlighting core engineering competencies.
3. **About Me:** Background narrative, academic credentials at Parul University (B.Tech CSE, CGPA: 7.83/10), and key pillars.
4. **Capabilities:** What I build—architecture, backend APIs, and containerized tools with an interactive project carousel.
5. **Journey:** Chronological milestone timeline with alternating circular nodes detailing education, hackathons, and leadership.
6. **Technical Arsenal (Skills):** Categorized chips with hover glow effects covering languages, frontend, backend, databases, tools, and CS fundamentals.
7. **Projects:** Filterable showcase featuring a featured project banner (Civic Issue Tracker) and secondary case study cards.
8. **Engineering Highlights:** Architectural summaries of technical challenges solved across core projects.
9. **Achievements & Badges:** Verified podium records with interactive certificate lightbox viewer.
10. **Events & Activities:** Chronological log of university hackathons, organizing committee roles, and technical workshops (2023–2026).
11. **Certifications:** Verified cloud and developer credentials (AWS, IBM, Hashgraph) with direct PDF access.
12. **Contact:** Direct phone/email details alongside an asynchronous contact form with feedback states.
13. **Footer:** Quick navigation, site links, social links, and copyright statement.

---

## 🚀 Featured Projects

### 1. [Civic Issue Tracker](https://civicissuetracker.vercel.app/)
*Smart Urban Maintenance & Incident Management System*
- **Overview:** End-to-end civic reporting platform enabling citizens to log geotagged municipal infrastructure issues (potholes, garbage, water leaks) with automated Computer Vision triage for departmental routing.
- **Technologies:** Next.js, React.js, Tailwind CSS, TypeScript, Node.js, Supabase, Leaflet
- **Live Demo:** [civicissuetracker.vercel.app](https://civicissuetracker.vercel.app/)
- **Repository:** [github.com/Modi-Krish/Civic-Issue-Tracker-](https://github.com/Modi-Krish/Civic-Issue-Tracker-)
- **Case Study:** `/projects/civic-issue-tracker`

---

### 2. [TravelLoop](https://traveloop-black.vercel.app/)
*Collaborative Travel Planning & Dynamic Expense Management*
- **Overview:** Full-stack travel suite featuring structured multi-day itinerary building, real-time budget calculations across custom categories, and role-based sharing permissions.
- **Technologies:** Next.js, React.js, TypeScript, Supabase, PostgreSQL, Tailwind CSS, Vercel
- **Live Demo:** [traveloop-black.vercel.app](https://traveloop-black.vercel.app/)
- **Repository:** [github.com/nipun-25/Traveloop](https://github.com/nipun-25/Traveloop)
- **Case Study:** `/projects/travelloop`

---

### 3. Sentinel
*Gig Worker Safety & Spatial Risk Monitoring Platform*
- **Overview:** Operational safety platform engineered for delivery personnel, integrating hexagonal spatial risk grid indexing, environmental hazard analysis, and real-time incident dispatch telemetry. Developed for the Guidewire Devtrials Insurance Startup Simulation.
- **Technologies:** Next.js, React.js, Tailwind CSS, Radix UI, Supabase, PostgreSQL, Docker
- **Repository:** [Guidewire Devtrials Insurance Startup Simulation](https://github.com/KRUMER2023/Guidewire_Devtrials_Team_Megatron_Insurance_Startup_Simulation)
- **Case Study:** `/projects/sentinel`

---

## 🔬 Engineering Highlights

The **Engineering Highlights** section breaks down specific architectural challenges solved within the real applications:

1. **Next.js & Supabase Architecture (`TravelLoop`):** Relational schema design modeling polymorphic expenses, nested day-by-day activities, and Supabase Row Level Security (RLS).
2. **Computer Vision Civic Triage (`Civic Issue Tracker`):** Photographic classification pipeline automating hazard detection and routing reports to appropriate municipal departments.
3. **Real-Time Risk Monitoring (`Sentinel`):** Hexagonal spatial grid algorithms evaluating telemetry data to compute deterministic hazard scores for delivery personnel.

---

## 🏆 Verified Achievements & Badges

- **3rd Place Podium — Code Optics (2024):** University-level competitive programming contest testing algorithmic speed, optimal time/space complexity, and data structure proficiency.
- **Top 1000 Teams Nationwide — India Innovates (2026):** Selected among the top 1000 national teams for architecting an innovative software solution addressing real-world operational challenges.

---

## 📅 Events & Technical Activities

- **CDC Global Funfest 2023–2024:** Active Coordinator (Parul University)
- **Ethical Hacking Workshop (2024):** Workshop Participant (Anvira Edustation · MS University Baroda)
- **Footprints 2024:** Technical Event Participant (MS University Baroda)
- **Tech Expo 2025:** Technical Project Presenter with Machine Learning model (Technical Event Cell)
- **Vadodara Startup Festival (VSF 6.0, 2025–2026):** Team Lead managing project deliverables and prototype presentations (PIERC Cell)
- **Odoo Hackathon 2026:** Organizing Committee Member (Parul University in collaboration with Odoo India)
- **Tech Expo 2026:** Organizing Committee Member (Technical Event Cell · Parul University)

---

## 📜 Professional Certifications

- **AWS Academy Graduate — Cloud Foundations:** Amazon Web Services (AWS)
- **AWS Skill Builder Certification:** Amazon Web Services (AWS)
- **Enterprise Design Thinking Practitioner:** IBM SkillsBuild
- **Hashgraph Developer Certification:** The Hashgraph Association

---

## 📬 Contact Form Architecture

```
[ Visitor Submits Form in ContactSection.tsx ]
                     │
                     ▼
       [ POST to /api/contact ]
                     │
       ┌─────────────┴─────────────┐
       ▼                           ▼
[ In-Memory IP Rate Limiter ]  [ Honeypot Check (botField) ]
(Max 5 requests / min)         (Silent drop if populated)
       │                           │
       └─────────────┬─────────────┘
                     ▼
       [ Server-Side Validation ]
       - Name: 2–100 chars
       - Email: Valid regex format
       - Message: 10–3000 chars
                     │
                     ▼
       [ HTML Template Formatting & Sanitization ]
                     │
                     ▼
       [ Dispatch via Resend API SDK ]
       - to: CONTACT_RECEIVER_EMAIL
       - from: RESEND_FROM_EMAIL
       - replyTo: Visitor's Email
                     │
                     ▼
       [ Email Delivered to Nipun's Inbox ]
```

---

## 🔐 Environment Variables

Environment variables are configured locally in `.env.local`. This file is strictly excluded from Git tracking via `.gitignore`.

### Variable Reference

| Variable | Required | Purpose | Safe Example |
|---|---|---|---|
| `RESEND_API_KEY` | **Yes** (for form) | Resend API authentication token | `re_your_api_key_here` |
| `RESEND_FROM_EMAIL` | Optional | Outbound sender address | `"Portfolio Contact <onboarding@resend.dev>"` |
| `CONTACT_RECEIVER_EMAIL` | Optional | Destination recipient inbox | `nipunkulshrestha25@gmail.com` |

### Setup Template (`.env.local`)
Create a `.env.local` file in the root directory:
```env
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
CONTACT_RECEIVER_EMAIL=nipunkulshrestha25@gmail.com
```

---

## 🚦 Getting Started

### Prerequisites
- **Node.js:** `>= 18.18.0` (Node.js 20+ LTS recommended). Check with:
  ```bash
  node -v
  ```
- **Package Manager:** `npm` (bundled with Node.js). Check with:
  ```bash
  npm -v
  ```
- **Git:** Installed and available in PATH.

### 1. Clone the Repository
```bash
git clone https://github.com/nipun-25/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies
Install packages exactly as resolved in `package-lock.json`:
```bash
npm install
```

### 3. Configure Local Environment
Create `.env.local` in the project root:
```bash
# On Windows Command Prompt:
copy .env.example .env.local

# On Windows PowerShell:
Copy-Item .env.example .env.local
```
Add your `RESEND_API_KEY` inside `.env.local` if you wish to test live email submissions.

### 4. Run Development Server
```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 📦 Build & Production

To verify compilation and test the production build locally:

```bash
# 1. Compile optimized production build
npm run build

# 2. Run the production server locally
npm run start
```

---

## ☁️ Deployment

**Deployment Status:** Live on Vercel at [portfolio-phi-ten-f3bqzzs19b.vercel.app](https://portfolio-phi-ten-f3bqzzs19b.vercel.app/)

### Deploying to Vercel:
1. Push your latest commits to your GitHub repository.
2. Import the repository into the [Vercel Dashboard](https://vercel.com).
3. Vercel automatically detects **Next.js** and applies `npm run build`.
4. Add your production environment variables in the Vercel project settings:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL` (use a verified custom domain in production)
   - `CONTACT_RECEIVER_EMAIL`
5. Click **Deploy**.

---

## 📂 Project Structure

```
Portfolio/
├── public/                     # Static browser assets
│   ├── certificates/           # Credential PDF documents
│   ├── profile/                # Profile photo and transparent cutout
│   ├── projects/               # Project interface screenshots
│   └── resume/                 # Downloadable resume PDF
├── src/
│   ├── app/                    # Next.js 16 App Router
│   │   ├── api/contact/        # Serverless contact form route handler
│   │   ├── projects/           # Projects archive page
│   │   │   └── [slug]/         # Dynamic case study page (SSG)
│   │   ├── globals.css         # Tailwind v4 theme tokens & glassmorphism
│   │   ├── layout.tsx          # Root layout, fonts, and OpenGraph metadata
│   │   ├── page.tsx            # Main single-page portfolio index
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   └── sitemap.ts          # Dynamic sitemap.xml
│   ├── components/
│   │   ├── hero/               # Hero banner and cutout composition
│   │   ├── home/               # Homepage sections (About, Skills, Projects, etc.)
│   │   ├── layout/             # Floating Navbar and Footer
│   │   ├── theme/              # ThemeProvider & ThemeToggle
│   │   └── ui/                 # Reusable CertificateModal and SVG Icons
│   ├── data/
│   │   └── portfolioData.ts    # Centralized typed data source of truth
│   └── lib/
│       └── utils.ts            # Class merging utility (clsx + tailwind-merge)
├── .env.example                # Example environment variables template
├── eslint.config.mjs           # ESLint 9 configuration
├── next.config.ts              # Next.js build configuration
├── package.json                # Project dependencies and npm scripts
└── tsconfig.json               # TypeScript configuration and path aliases
```

---

## 🛡️ Security

- **Server-Side Credentials:** Sensitive tokens such as `RESEND_API_KEY` are executed only in server-side route handlers and are never exposed to the client bundle (`NEXT_PUBLIC_` prefix is strictly avoided).
- **Abuse Prevention:** In-memory client IP rate limiter bounds contact attempts to 5 per minute per IP address.
- **Honeypot Shield:** Automated spam bots populating the hidden `botField` input are silently dropped with an HTTP 200 response without triggering outbound email quotas.
- **Input Sanitization:** Contact submissions are length-bounded and escaped against HTML injection (`&`, `<`, `>`, `"`, `'`).
- **Tabnabbing Protection:** All external links opening in new tabs include `rel="noopener noreferrer"`.

---

## 📱 Responsiveness & ♿ Accessibility

- **Device Support:** Tailored layouts for Mobile (`<640px`), Tablet (`768px–1024px`), and Desktop (`>1024px`).
- **Navigation Drawer:** Full-screen mobile drawer with active section highlighting and touch targets.
- **Keyboard Trapping & Escape Listener:** Certificate modal binds `Escape` key listeners and prevents background scroll while open.
- **Accessible ARIA Standards:** Includes `role="dialog"`, `aria-modal="true"`, `role="tablist"`, and visible focus rings (`focus-visible:ring-2`).
- **Reduced Motion:** Full CSS fallback forcing animation durations to `0.01ms` for users with vestibular preferences (`prefers-reduced-motion: reduce`).

---

## 👤 Author

**Nipun Kulshrestha**  
*Computer Science & Engineering Student · Parul University (2023–2027)*  
*Full Stack Developer & Aspiring Software Engineer*

- **GitHub:** [@nipun-25](https://github.com/nipun-25)
- **LinkedIn:** [Nipun Kulshrestha](https://www.linkedin.com/in/nipun-kulshrestha-816604288/)
- **LeetCode:** [nipunkul_19](https://leetcode.com/u/nipunkul_19/)
- **Email:** [nipunkulshrestha25@gmail.com](mailto:nipunkulshrestha25@gmail.com)

---

## 📄 License

License: Not currently specified.
