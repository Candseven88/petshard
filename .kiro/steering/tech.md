# Technology Stack

## Core Framework

- **Next.js 15**: React full-stack framework with App Router
- **React 19**: UI library with latest features
- **TypeScript 5**: Type-safe development

## Styling & UI

- **Tailwind CSS 4**: Utility-first CSS framework
- **@tailwindcss/line-clamp**: Text truncation utilities
- **Lucide React**: Icon library
- **React Icons**: Additional icon set

## AI & APIs

- **Zhipu AI GLM-4V-Flash**: Vision model for image analysis (breed identification, pet naming)
- **Zhipu AI GLM-4-Flash**: Text model for health advice and care guides
- API Base URL: `https://open.bigmodel.cn/api/paas/v4/chat/completions`

## Third-Party Integrations

- **PayPal SDK**: Payment processing
- **Google Analytics**: User analytics
- **Microsoft Clarity**: User behavior tracking
- **Vercel Analytics & Speed Insights**: Performance monitoring

## Image Processing

- **Sharp**: Server-side image optimization
- **html2canvas & html-to-image**: Client-side image generation for sharing

## Development Tools

- **ESLint**: Code linting (disabled during builds)
- **PostCSS**: CSS processing

## Common Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production (standalone output)
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint (note: disabled during builds)
```

## Environment Configuration

Required environment variables (see `env.example`):
- `BIGMODEL_API_KEY`: Zhipu AI API key
- `NEXT_PUBLIC_APP_URL`: Application URL
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics ID
- `NEXT_PUBLIC_CLARITY_ID`: Microsoft Clarity ID
- PayPal credentials for payment features

## Build Configuration

- **Output**: Standalone mode for optimized deployment
- **ESLint**: Ignored during builds for faster CI/CD
- **Image Optimization**: AVIF and WebP formats supported
- **Remote Images**: Configured for The Cat API, The Dog API, Shopify CDN, and The Spruce Pets
