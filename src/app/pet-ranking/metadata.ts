import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Popularity Contest | Vote for the Cutest Pets | PetShard',
  description: 'Join the viral pet popularity contest! Vote for the cutest cats and dogs in our teaspill-inspired pet ranking game. Help us crown the most adorable pet!',
  keywords: 'pet ranking, teaspill, pet popularity contest, cute pets, cat vs dog, pet voting, viral pet game, pet leaderboard',
  openGraph: {
    title: 'Pet Popularity Contest | Vote for the Cutest Pets | PetShard',
    description: 'Join the viral pet popularity contest! Vote for the cutest cats and dogs in our teaspill-inspired pet ranking game. Help us crown the most adorable pet!',
    url: 'https://www.petshard.online/pet-ranking',
    siteName: 'PetShard',
    images: [
      {
        url: '/pet/9.jpg',
        width: 800,
        height: 600,
        alt: 'Pet Popularity Contest',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Popularity Contest | Vote for the Cutest Pets | PetShard',
    description: 'Join the viral pet popularity contest! Vote for the cutest cats and dogs in our teaspill-inspired pet ranking game. Help us crown the most adorable pet!',
    images: ['/pet/9.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://www.petshard.online/pet-ranking',
  },
}; 