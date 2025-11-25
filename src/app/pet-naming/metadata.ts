import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Name Generator - AI-Powered Pet Naming Tool | PetShard',
  description: 'Upload your pet\'s photo and get the perfect name with a complete personality profile. AI-powered pet naming with breed identification, personality analysis, astrology, and age estimation.',
  keywords: [
    'pet name generator',
    'pet naming',
    'dog name generator',
    'cat name generator',
    'AI pet names',
    'pet personality analysis',
    'pet breed identification',
    'pet astrology',
    'pet age calculator',
    'creative pet names'
  ],
  openGraph: {
    title: 'Pet Name Generator - AI-Powered Pet Naming Tool',
    description: 'Upload your pet\'s photo and get the perfect name with a complete personality profile.',
    type: 'website',
    url: 'https://www.petshard.online/pet-naming',
    images: [
      {
        url: '/pet/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Pet Name Generator'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Name Generator - AI-Powered Pet Naming Tool',
    description: 'Upload your pet\'s photo and get the perfect name with a complete personality profile.',
    images: ['/pet/1.jpg']
  },
  alternates: {
    canonical: 'https://www.petshard.online/pet-naming'
  }
};
