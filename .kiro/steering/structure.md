# Project Structure

## Directory Organization

```
src/
├── app/                    # Next.js App Router
│   ├── actions/           # Server actions
│   ├── api/               # API routes
│   ├── [feature]/         # Feature pages
│   ├── blog/              # Blog posts with nested components
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── sitemap.ts         # Dynamic sitemap generation
├── components/
│   ├── layout/            # Layout components (Header, Footer, Layout)
│   └── ui/                # Reusable UI components
└── lib/
    └── utils/             # Utility functions
```

## Key Patterns

### Page Structure

- Each feature has its own directory under `src/app/[feature]/`
- Pages use `"use client"` directive for client-side interactivity
- Metadata is defined in `metadata.ts` files or inline in pages
- Pages wrap content in `<Layout>` component with title and back button props

### API Routes

- Located in `src/app/api/[endpoint]/route.ts`
- Use Next.js Route Handlers (GET, POST functions)
- Follow pattern: validate input → call AI API → parse response → return JSON
- Include comprehensive error handling with fallback data
- Type definitions at the top of each route file
- Detailed JSDoc comments for endpoints

### Component Organization

- Layout components: Header, Footer, Layout wrapper
- UI components: Reusable elements like ImageUploader, LoadingButton, StructuredData
- Feature-specific components: Nested in feature directories (e.g., blog post components)
- Use TypeScript interfaces for props

### Blog Posts

- Each blog post has its own directory under `src/app/blog/[slug]/`
- Structure: `page.tsx`, `types.ts`, `data.ts`, `components/` folder
- Components are co-located with the blog post for better organization
- Include README.md for documentation

### Styling Conventions

- Tailwind utility classes for all styling
- Responsive design with mobile-first approach (md:, lg: breakpoints)
- Color scheme: Pink/blue gradient theme with yellow accents
- Animations: fade-in, bounce, gradient-move, scale transforms
- Consistent spacing: px-4, py-8, gap-6, etc.

### Image Handling

- Use Next.js `<Image>` component with width/height or fill
- Local images in `public/` directory
- Remote images configured in `next.config.ts`
- Optimize with AVIF/WebP formats

### TypeScript Conventions

- Strict mode enabled
- Path alias: `@/*` maps to `src/*`
- Interface definitions for all data structures
- Type safety for API responses and component props

### Analytics & Tracking

- Google Analytics wrapped in Suspense boundary
- Microsoft Clarity for user behavior
- Vercel Analytics and Speed Insights
- All analytics components in `src/components/ui/`

### SEO & Metadata

- Structured data using JSON-LD (StructuredData component)
- Dynamic sitemap generation
- RSS feed at `/rss.xml`
- Comprehensive metadata in root layout
- Canonical URLs and Open Graph tags
