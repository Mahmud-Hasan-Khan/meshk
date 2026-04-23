# MESHK - Muslim Education Society Hong Kong

A web application for the Muslim Education Society Hong Kong (MESHK), focusing on providing children with a structured curriculum on Basic Islamic Deen and community dawah work.

## Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## Project Structure

- `app/`: Next.js pages and layouts.
  - `curriculum/`: Islamic curriculum pages (Aqaid, Fiqh, etc.).
  - `dawah/`: Dawah activities and mission.
  - `contact/`: Contact form and information.
- `components/`: Reusable UI components (Navbar, Footer, etc.).
- `lib/`:
  - `db.ts`: Mongoose connection utility.
  - `models/`: Mongoose schemas (Subject, etc.).
- `public/`: Static assets and icons.

## Getting Started

1. Clone the repository.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up your `.env.local` with your MongoDB URI:
   ```env
   MONGODB_URI=mongodb+srv://your_uri
   ```
4. Run the development server:
   ```bash
   pnpm dev
   ```
