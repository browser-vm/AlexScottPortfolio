# Alex Scott Portfolio

A modern, elegant portfolio website built with Next.js, TypeScript, and TailwindCSS. This portfolio showcases Alex Scott's skills, projects, and accomplishments in software development, graphic design, and music production.

![Portfolio Preview](https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Building for Production](#building-for-production)
- [Component Architecture](#component-architecture)
- [Styling System](#styling-system)
- [Client vs Server Components](#client-vs-server-components)
- [Utility Functions](#utility-functions)
- [Types](#types)
- [Contributing](#contributing)
- [License](#license)

## Overview

This portfolio website is designed to showcase Alex Scott's skills, projects, and accomplishments. It features a modern, desktop-first design with smooth animations and a clean user interface. The site includes sections for bio, skills, projects, certificates, awards, and contact information.

## Features

- **Modern Design**: Clean, minimalist interfaces with thoughtful use of color and typography
- **Interactive Elements**: Smooth animations and transitions using Framer Motion
- **Portfolio Gallery**: Filterable portfolio items organized by category
- **Modal Viewer**: In-depth view of portfolio items with navigation
- **Responsive Layout**: Desktop-first design with careful consideration for different screen sizes
- **Terminal-style UI**: Command-line inspired interface elements for visual interest
- **Dark Theme**: GitHub-inspired dark color scheme for optimal viewing experience
- **Typography**: Carefully selected font combinations for readability and style

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: Bun
- **Fonts**: Geist Sans and Geist Mono

## File Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout containing metadata and font configuration
│   ├── page.tsx              # Homepage featuring intro, skills, projects, etc.
│   └── portfolio/
│       └── page.tsx          # Portfolio page with filterable gallery and modal viewer
├── components/
│   └── client-wrappers.tsx   # Client-side component wrappers (esp. for animations)
├── lib/
│   └── utils.ts              # Utility functions (className merging)
├── styles/
│   └── globals.css           # Global styles and Tailwind configuration
└── types/
    ├── portfolio.ts          # TypeScript types for portfolio items
    └── tailwind.d.ts         # TypeScript declarations for Tailwind utilities
```

### Key Files Explained

- **src/app/layout.tsx**: The root layout component that wraps all pages. Configures metadata, fonts, and global page structure.

- **src/app/page.tsx**: The homepage component containing sections for introduction, skills, projects, certificates, awards, and contact information.

- **src/app/portfolio/page.tsx**: The portfolio page component featuring a filterable gallery of portfolio items and a detailed modal viewer.

- **src/components/client-wrappers.tsx**: Contains client-side component wrappers, particularly for Framer Motion animations and Masonry layout.

- **src/lib/utils.ts**: Utility functions for the application, including the `cn` function for merging Tailwind classes with clsx and tailwind-merge.

- **src/styles/globals.css**: Global CSS styles and Tailwind configuration, including CSS variables for theming.

- **src/types/portfolio.ts**: TypeScript type definitions for portfolio items.

- **src/types/tailwind.d.ts**: TypeScript declarations for Tailwind CSS utilities, specifically for color palette flattening.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Bun](https://bun.sh/) package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/alex-scott-portfolio.git
   cd alex-scott-portfolio
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

### Development

Run the development server:

```bash
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

### Building for Production

Build the application:

```bash
bun run build
```

Start the production server:

```bash
bun start
```

## Component Architecture

The application follows a modular component architecture:

### Page Components

- **RootLayout**: Wraps all pages with common elements and metadata
- **HomePage**: Main landing page with multiple sections
- **PortfolioPage**: Gallery of portfolio items with filtering and modal viewer

### UI Components

- **SkillCard**: Displays individual skills with icons and proficiency levels
- **CertificateCard**: Showcases certifications with details and links
- **AwardCard**: Displays awards and recognitions

### Animation Components

Framer Motion is used for animations throughout the site:
- Page transitions
- Scroll animations
- Hover effects
- Modal animations

## Styling System

The project uses TailwindCSS with a custom configuration:

### Theme Configuration

- **Colors**: A GitHub-inspired dark theme with accent colors for different sections
- **Typography**: Uses Geist Sans and Geist Mono fonts
- **Spacing**: Consistent spacing system throughout
- **Animations**: Custom animation utilities

### CSS Variables

The application uses CSS variables for theming:
- Base colors and variants
- Border and background colors
- Component-specific variables

## Client vs Server Components

The application makes strategic use of both client and server components:

### Server Components
- Used for static content that doesn't require interactivity
- Better initial load performance
- Less JavaScript sent to the client

### Client Components
- Used for interactive elements
- Marked with 'use client' directive
- Examples include the portfolio filtering system and modal viewer

## Utility Functions

### Class Name Utilities

The `cn` function in `utils.ts` combines [clsx](https://github.com/lukeed/clsx) and [tailwind-merge](https://github.com/dcastil/tailwind-merge) for efficient Tailwind class management:

```typescript
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Types

### Portfolio Items

```typescript
export type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  imgSrc: string;
  description: string;
  link?: string;
};
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
