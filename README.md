# Professional Portfolio

Welcome to the source code of my professional portfolio. This project showcases my work, skills, and professional journey through a modern and responsive interface.

## Technologies Used

### Core Frameworks & Libraries

- **Next.js 15** - React framework for server-side rendering (SSR) and static site generation (SSG)
- **React 19** - JavaScript library for building user interfaces
- **TypeScript** - Static typing for better code maintainability
- **Tailwind CSS** - Utility-first CSS framework for responsive and modern design
- **Turbopack** - For ultra-fast development builds

### State Management & Validation

- **React Hook Form** - High-performance form management
- **Zod** - Type-first schema validation
- **Class Variance Authority** - Component variant management

### UI Components

- **Radix UI** - Accessible and customizable components
- **Lucide React** - Modern icon library
- **React Icons** - Comprehensive collection of popular icons

### Additional Tools

- **Nodemailer** - For handling contact form email submissions
- **ESLint** - Static code analysis
- **Prettier** - Consistent code formatting

## Installation

1. Clone the repository:
   ```bash
   git clone [REPO_URL]
   cd newport
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   # Email configuration
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-app-password
   ```

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

To create an optimized production build:

```bash
npm run build
# then
npm start
```

## Deployment

This project is optimized for deployment on Vercel but can be deployed to any Node.js-compatible platform.

## Features

- **Modern Design** with responsive user interface
- **Contact Form** with complete validation
- **Performance Optimization** using Next.js and Turbopack
- **SEO Optimized** with server-side rendering
- **Smooth Animations** for enhanced user experience

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.