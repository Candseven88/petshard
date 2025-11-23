import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import PayPalProvider from "@/components/ui/PayPalProvider";
import GoogleAnalytics from "@/components/ui/GoogleAnalytics";
import VercelAnalytics from "@/components/ui/VercelAnalytics";
import MicrosoftClarity from "@/components/ui/MicrosoftClarity";
import { SpeedInsights } from "@vercel/speed-insights/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.petshard.online'),
  title: {
    default: "PetShard - AI Pet Health Center & Care Guide for Dogs & Cats",
    template: "%s | PetShard - AI Pet Tools"
  },
  description: "Check pet symptoms, get instant health advice, and personalized care guides for your pets. AI-powered breed identification, health center, care recommendations, training tips, and more. Expert veterinary insights at your fingertips.",
  keywords: [
    "pet symptom checker", "pet health center", "pet care guide", "veterinary advice online",
    "dog symptom checker", "cat health advice", "pet feeding guide", "pet training tips",
    "pet breed identification", "dog breed finder", "cat breed identifier", 
    "pet grooming guide", "puppy care", "kitten care", "senior pet care",
    "virtual pet breeding", "pet health guide", "pet video generator", 
    "AI pet tools", "veterinary AI", "pet health analysis", "pet care technology"
  ],
  authors: [{ name: "PetShard Team" }],
  creator: "PetShard",
  publisher: "PetShard",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "PetShard - AI Pet Health Center & Care Guide",
    description: "Check pet symptoms instantly, get AI-powered health advice, and personalized care guides for your dogs and cats. Expert veterinary insights and breed identification tools.",
    url: "https://www.petshard.online",
    siteName: "PetShard",
    images: [
      {
        url: "/pet/7.jpg",
        width: 1200,
        height: 630,
        alt: "PetShard - AI Pet Health Center & Care Guide",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PetShard - AI Pet Health Center & Care Guide",
    description: "Check pet symptoms instantly, get AI health advice, and personalized care guides for your pets. Expert veterinary insights at your fingertips.",
    images: ["/pet/7.jpg"],
    creator: "@PetShard",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  other: {
    'google-site-verification': process.env.GOOGLE_SITE_VERIFICATION || '',
    'msvalidate.01': process.env.BING_SITE_VERIFICATION || '',
    'yandex-verification': process.env.YANDEX_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 从环境变量获取Google Analytics的Measurement ID
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';
  // 从环境变量获取Microsoft Clarity的ID
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID || 'siu3p6ymno';
  
  return (
    <html lang="en">
      <head>
        <link 
          rel="alternate" 
          type="application/rss+xml" 
          title="PetShard - AI Pet Tools Blog" 
          href="/rss.xml" 
        />
        <link 
          rel="canonical" 
          href="https://www.petshard.online" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics - 已在组件内部用Suspense包裹 */}
        <GoogleAnalytics measurementId={gaId} />
        <VercelAnalytics />
        <MicrosoftClarity clarityId={clarityId} />
        <SpeedInsights />
        <PayPalProvider>
          {children}
        </PayPalProvider>
      </body>
    </html>
  );
}
