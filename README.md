# Mir Tauhidul Islam - Portfolio

Personal portfolio website with integrated blog powered by Hashnode.

## Features

- **Hashnode Integration**: Blog posts fetched directly from Hashnode via GraphQL API
- **Responsive Design**: Fully responsive with mobile-first approach
- **SEO Optimized**: Sitemap, robots.txt, JSON-LD schema
- **RSS Feed**: Auto-generated RSS feed for blog posts
- **Dynamic OG Images**: Social media preview images
- **Modern Stack**: Next.js 15, React 18, TypeScript, Tailwind CSS v4
- **Performance**: Vercel Speed Insights and Analytics
- **Custom Typography**: Work Sans, Cutive, Martel fonts
- **Paper Texture**: Unique background aesthetic

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **CMS**: Hashnode (GraphQL API)
- **Deployment**: Vercel
- **Package Manager**: pnpm

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

3. Create `.env.local` file:
```
HASHNODE_PUBLICATION_HOST=your-hashnode-subdomain.hashnode.dev
```

4. Run development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── blog/           # Blog pages and utilities
├── components/     # React components
├── global.css     # Global styles
├── layout.tsx     # Root layout
└── page.tsx       # Home page
lib/
└── hashnode.ts    # Hashnode API integration
```

## Deployment

Deploy to Vercel with environment variable:
- `HASHNODE_PUBLICATION_HOST`: Your Hashnode publication URL
