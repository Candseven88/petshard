import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.petshard.online'
  
  // 静态页面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/health-center`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/pet-care-guide`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/breed-identification`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pet-age-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/virtual-breeding`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pet-video`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pet-diary`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pet-horoscope`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pet-ranking`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ]

  // 博客文章
  const blogPosts = [
    // 新生成的文章 (2025)
    {
      url: `${baseUrl}/blog/pet-health-checkup`,
      lastModified: new Date('2025-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/pet-breed`,
      lastModified: new Date('2025-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/pet-breed-identification`,
      lastModified: new Date('2025-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/pet-naming`,
      lastModified: new Date('2025-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/pet-breeder`,
      lastModified: new Date('2025-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/pet-breeding`,
      lastModified: new Date('2025-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // 其他生成的文章
    {
      url: `${baseUrl}/blog/cat-health-care-tips`,
      lastModified: new Date('2025-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/cat-health-symptoms`,
      lastModified: new Date('2025-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/dog-training-basics`,
      lastModified: new Date('2025-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pet-grooming-tips`,
      lastModified: new Date('2025-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pet-nutrition-guide`,
      lastModified: new Date('2025-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pet-dental-health`,
      lastModified: new Date('2025-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pet-first-aid`,
      lastModified: new Date('2025-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/senior-pet-care`,
      lastModified: new Date('2025-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    // 现有文章
    {
      url: `${baseUrl}/blog/ai-tools-comparison`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/pet-loss-grief-support-guide`,
      lastModified: new Date('2024-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/backyard-bird-identification-guide`,
      lastModified: new Date('2024-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pet-emergency-escape-guide`,
      lastModified: new Date('2024-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/multi-cat-household-management-guide`,
      lastModified: new Date('2024-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/cat-litter-box-problems-solutions`,
      lastModified: new Date('2024-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/reptile-humidity-control-complete-guide`,
      lastModified: new Date('2024-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/aquarium-water-quality-problems-solutions`,
      lastModified: new Date('2024-11-27'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/best-full-spectrum-aquarium-lights`,
      lastModified: new Date('2024-11-24'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/best-aquarium-thermometers-with-alarm`,
      lastModified: new Date('2024-11-23'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/best-bottom-feeders-for-medium-fish`,
      lastModified: new Date('2024-11-26'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/best-quiet-filters-40-gallon-tank`,
      lastModified: new Date('2024-11-26'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pet-health-risks-lyme-legionnaires`,
      lastModified: new Date('2023-08-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pet-ranking`,
      lastModified: new Date('2023-08-01'),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]

  return [...staticPages, ...blogPosts]
} 