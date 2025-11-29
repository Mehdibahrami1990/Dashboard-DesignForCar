🚘 Car Rental Dashboard — Next.js 15 + Tailwind CSS

A modern, scalable, and production-ready Car Rental Dashboard built with Next.js 15 App Router, Server Actions, TypeScript, React 19, and Tailwind CSS.

This project follows a clean folder structure and modern front-end architecture to ensure maintainability, performance, and scalability.

---

📌 Features

🔐 Role-based Dashboard (Admin / Manager / Fleet)

🚗 Car Management (Add/Edit/Delete + Status)

👥 Customer Management

📅 Reservations & Scheduling System

📊 Analytics Dashboard (Revenue, Active Rentals, Availability)

🌓 Dark Mode Support

⚡ Optimized server actions & parallel data fetching

📱 Fully responsive + Tailwind utility classes

---
🛠️ Tech Stack

| Category     | Technology                             |
| ------------ | -------------------------------------- |
| Framework    | **Next.js 15 (App Router)**            |
| Language     | **TypeScript**                         |
| UI / Styling | **Tailwind CSS**, Shadcn/UI            |
| Icons        | Lucide Icons                           |
| Auth         | NextAuth / Custom JWT                  |
| Data Layer   | Server Actions, React Query (optional) |
| State        | React 19 + useOptimistic               |
| Charts       | Recharts                               |
| Linting      | ESLint + Prettier                      |



📂 Project Structure (Architecture)

      src/
       ├── app/
       │    ├── (dashboard)/
       │    │      ├── layout.tsx
       │    │      ├── page.tsx
       │    │      ├── cars/
       │    │      │     ├── page.tsx
       │    │      │     ├── actions.ts  // server actions
       │    │      │     └── components/
       │    │      ├── customers/
       │    │      ├── reservations/
       │    │      ├── analytics/
       │    │      └── settings/
       │    │
       │    ├── api/
       │    │      └── cars/
       │    │             └── route.ts   // API handlers (Next.js Edge/Node)
       │    │
       │    ├── layout.tsx
       │    └── page.tsx
       │
       ├── components/
       │      ├── ui/  // buttons, inputs, cards
       │      ├── charts/
       │      ├── shared/
       │      └── sidebar/
       │
       ├── lib/
       │      ├── helpers.ts
       │      ├── validators/
       │      ├── prisma.ts (optional)
       │      └── constants.ts
       │
       ├── hooks/
       │      ├── useTheme.ts
       │      └── useSidebar.ts
       │
       ├── types/
       │      ├── car.d.ts
       │      ├── customer.d.ts
       │      └── reservation.d.ts
       │
       ├── styles/
       │      └── globals.css
       │
       └── public/
              └── images/


⚙️ Installation

## 1. Clone project
https://github.com/Mehdibahrami1990/Dashboard-DesignForCar.git

## 2. Install dependencies
npm install

## 3. Run development
npm run dev

--- 

🚀 Build for Production
npm run build
npm start
