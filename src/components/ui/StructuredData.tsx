import Script from 'next/script'

interface StructuredDataProps {
  type: 'website' | 'article' | 'organization' | 'product'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
    }

    switch (type) {
      case 'website':
        return {
          ...baseData,
          '@type': 'WebSite',
          name: 'PetShard',
          description: 'AI-powered pet breed identification, health guidance, and creative tools platform',
          url: 'https://www.petshard.online',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.petshard.online/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          },
          publisher: {
            '@type': 'Organization',
            name: 'PetShard',
            url: 'https://www.petshard.online',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.petshard.online/pet/1.jpg'
            }
          },
          ...data
        }

      case 'organization':
        return {
          ...baseData,
          '@type': 'Organization',
          name: 'PetShard',
          description: 'AI-powered pet care platform providing breed identification, health guidance, and innovative pet tools',
          url: 'https://www.petshard.online',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.petshard.online/pet/1.jpg',
            width: 1200,
            height: 630
          },
          sameAs: [
            'https://www.petshard.online/blog',
            'https://www.petshard.online/ai-tools'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            url: 'https://www.petshard.online/contact'
          },
          ...data
        }

      case 'article':
        return {
          ...baseData,
          '@type': 'Article',
          publisher: {
            '@type': 'Organization',
            name: 'PetShard',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.petshard.online/pet/1.jpg'
            }
          },
          author: {
            '@type': 'Organization',
            name: 'PetShard Team'
          },
          ...data
        }

      case 'product':
        return {
          ...baseData,
          '@type': 'SoftwareApplication',
          name: 'PetShard AI Tools',
          description: 'AI-powered pet breed identification and care platform',
          url: 'https://www.petshard.online',
          applicationCategory: 'LifestyleApplication',
          operatingSystem: 'Web Browser',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '150'
          },
          ...data
        }

      default:
        return { ...baseData, ...data }
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  )
} 