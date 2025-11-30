import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
const blogPosts = [
  {
    id: "pet-vaccination-schedule",
    title: "The Ultimate Pet Vaccination Schedule Guide for Pet Parents",
    description: "Expert guide on pet vaccination schedule for pet owners",
    image: "https://images.unsplash.com/photo-1587300411107-ec8b1a1b0d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet vaccination schedule", "pet vaccination schedule tips", "pet vaccination schedule guide"],
    featured: true
  },
  {
    id: "common-dog-diseases",
    title: "The Ultimate Common Dog Diseases Guide for Pet Parents",
    description: "Essential common dog diseases guide for pet care",
    image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    date: "November 28, 2025",
    tags: ["pet health", "health guide", "common dog diseases", "common dog diseases tips", "common dog diseases guide"],
    featured: true
  },
  {
    id: "cat-health-symptoms",
    title: "The Ultimate Cat Health Symptoms Guide for Pet Parents",
    description: "Essential cat health symptoms guide for pet care",
    image: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet health", "health guide", "cat health symptoms", "cat health symptoms tips", "cat health symptoms guide"],
    featured: true
  },
  {
    id: "pet-allergy-management",
    title: "Pet Allergy Management: Expert Tips and Professional Advice",
    description: "Complete pet allergy management information for pets",
    image: "https://images.unsplash.com/photo-1552053831-71594a27c62d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet allergy management", "pet allergy management tips", "pet allergy management guide"],
    featured: true
  },
  {
    id: "pet-weight-management",
    title: "Everything You Need to Know About Pet Weight Management",
    description: "Professional pet weight management advice and tips",
    image: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet weight management", "pet weight management tips", "pet weight management guide"],
    featured: true
  },
  {
    id: "dog-skin-conditions",
    title: "The Ultimate Dog Skin Conditions Guide for Pet Parents",
    description: "Essential dog skin conditions guide for pet care",
    image: "https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["dog skin conditions", "dog skin conditions tips", "dog skin conditions guide"],
    featured: true
  },
  {
    id: "cat-urinary-health",
    title: "Understanding Cat Urinary Health - A Comprehensive Guide",
    description: "Complete cat urinary health information for pets",
    image: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet health", "health guide", "cat urinary health", "cat urinary health tips", "cat urinary health guide"],
    featured: true
  },
  {
    id: "pet-parasite-prevention",
    title: "Understanding Pet Parasite Prevention - A Comprehensive Guide",
    description: "Essential pet parasite prevention guide for pet care",
    image: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet parasite prevention", "pet parasite prevention tips", "pet parasite prevention guide"],
    featured: true
  },
  {
    id: "senior-pet-health-issues",
    title: "The Ultimate Senior Pet Health Issues Guide for Pet Parents",
    description: "Expert guide on senior pet health issues for pet owners",
    image: "https://images.unsplash.com/photo-1606214174585-fe31582dc1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet health", "health guide", "senior pet health issues", "senior pet health issues tips", "senior pet health issues guide"],
    featured: true
  },
  {
    id: "pet-emergency-signs",
    title: "The Ultimate Pet Emergency Signs Guide for Pet Parents",
    description: "Essential pet emergency signs guide for pet care",
    image: "https://images.unsplash.com/photo-1587300411107-ec8b1a1b0d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet emergency signs", "pet emergency signs tips", "pet emergency signs guide"],
    featured: true
  },
  {
    id: "dog-grooming-tips",
    title: "Dog Grooming Tips: Expert Tips and Professional Advice",
    description: "Professional dog grooming tips advice and tips",
    image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    date: "November 28, 2025",
    tags: ["pet care", "care guide", "dog grooming tips", "dog grooming tips tips", "dog grooming tips guide"],
    featured: true
  },
  {
    id: "cat-litter-box-training",
    title: "Understanding Cat Litter Box Training - A Comprehensive Guide",
    description: "Essential cat litter box training guide for pet care",
    image: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet care", "care guide", "cat litter box training", "cat litter box training tips", "cat litter box training guide"],
    featured: true
  },
  {
    id: "pet-nutrition-guide",
    title: "The Ultimate Pet Nutrition Guide Guide for Pet Parents",
    description: "Essential pet nutrition guide guide for pet care",
    image: "https://images.unsplash.com/photo-1587300411107-ec8b1a1b0d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet nutrition guide", "pet nutrition guide tips", "pet nutrition guide guide"],
    featured: true
  },
  {
    id: "puppy-training-basics",
    title: "Everything You Need to Know About Puppy Training Basics",
    description: "Professional puppy training basics advice and tips",
    image: "https://images.unsplash.com/photo-1552053831-71594a27c62d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet care", "care guide", "puppy training basics", "puppy training basics tips", "puppy training basics guide"],
    featured: true
  },
  {
    id: "senior-pet-care",
    title: "Complete Guide to Senior Pet Care for Pet Owners",
    description: "Essential senior pet care guide for pet care",
    image: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet care", "care guide", "senior pet care", "senior pet care tips", "senior pet care guide"],
    featured: true
  },
  {
    id: "pet-dental-health",
    title: "Pet Dental Health: Expert Tips and Professional Advice",
    description: "Professional pet dental health advice and tips",
    image: "https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet health", "health guide", "pet dental health", "pet dental health tips", "pet dental health guide"],
    featured: true
  },
  {
    id: "indoor-cat-exercise",
    title: "The Ultimate Indoor Cat Exercise Guide for Pet Parents",
    description: "Essential indoor cat exercise guide for pet care",
    image: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["indoor cat exercise", "indoor cat exercise tips", "indoor cat exercise guide"],
    featured: true
  },
  {
    id: "dog-walking-safety",
    title: "Understanding Dog Walking Safety - A Comprehensive Guide",
    description: "Complete dog walking safety information for pets",
    image: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["dog walking safety", "dog walking safety tips", "dog walking safety guide"],
    featured: true
  },
  {
    id: "pet-first-aid",
    title: "Understanding Pet First Aid - A Comprehensive Guide",
    description: "Professional pet first aid advice and tips",
    image: "https://images.unsplash.com/photo-1606214174585-fe31582dc1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet first aid", "pet first aid tips", "pet first aid guide"],
    featured: true
  },
  {
    id: "healthy-pet-treats",
    title: "Understanding Healthy Pet Treats - A Comprehensive Guide",
    description: "Complete healthy pet treats information for pets",
    image: "https://images.unsplash.com/photo-1587300411107-ec8b1a1b0d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet health", "health guide", "healthy pet treats", "healthy pet treats tips", "healthy pet treats guide"],
    featured: true
  },
  {
    id: "best-dog-breeds-for-families",
    title: "Understanding Best Dog Breeds For Families - A Comprehensive Guide",
    description: "Expert guide on best dog breeds for families for pet owners",
    image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    date: "November 28, 2025",
    tags: ["breed guide", "pet breeding", "best dog breeds for families", "best dog breeds for families tips", "best dog breeds for families guide"],
    featured: true
  },
  {
    id: "friendliest-dog-breeds",
    title: "Friendliest Dog Breeds: Expert Tips and Professional Advice",
    description: "Complete friendliest dog breeds information for pets",
    image: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["breed guide", "pet breeding", "friendliest dog breeds", "friendliest dog breeds tips", "friendliest dog breeds guide"],
    featured: true
  },
  {
    id: "dog-breed-characteristics",
    title: "Complete Guide to Dog Breed Characteristics for Pet Owners",
    description: "Professional dog breed characteristics advice and tips",
    image: "https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["breed guide", "pet breeding", "dog breed characteristics", "dog breed characteristics tips", "dog breed characteristics guide"],
    featured: true
  },
  {
    id: "rare-dog-breeds",
    title: "Complete Guide to Rare Dog Breeds for Pet Owners",
    description: "Essential rare dog breeds guide for pet care",
    image: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["breed guide", "pet breeding", "rare dog breeds", "rare dog breeds tips", "rare dog breeds guide"],
    featured: true
  },
  {
    id: "dog-breeding-practices",
    title: "Dog Breeding Practices: Expert Tips and Professional Advice",
    description: "Complete dog breeding practices information for pets",
    image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    date: "November 28, 2025",
    tags: ["breed guide", "pet breeding", "dog breeding practices", "dog breeding practices tips", "dog breeding practices guide"],
    featured: true
  },
  {
    id: "responsible-dog-breeding",
    title: "The Ultimate Responsible Dog Breeding Guide for Pet Parents",
    description: "Expert guide on responsible dog breeding for pet owners",
    image: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["breed guide", "pet breeding", "responsible dog breeding", "responsible dog breeding tips", "responsible dog breeding guide"],
    featured: true
  },
  {
    id: "best-dog-breeds-for-apartments",
    title: "Complete Guide to Best Dog Breeds For Apartments for Pet Owners",
    description: "Complete best dog breeds for apartments information for pets",
    image: "https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["breed guide", "pet breeding", "best dog breeds for apartments", "best dog breeds for apartments tips", "best dog breeds for apartments guide"],
    featured: true
  },
  {
    id: "dog-breed-temperament",
    title: "Everything You Need to Know About Dog Breed Temperament",
    description: "Professional dog breed temperament advice and tips",
    image: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["breed guide", "pet breeding", "dog breed temperament", "dog breed temperament tips", "dog breed temperament guide"],
    featured: true
  },
  {
    id: "dog-breed-health-issues",
    title: "Understanding Dog Breed Health Issues - A Comprehensive Guide",
    description: "Essential dog breed health issues guide for pet care",
    image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    date: "November 28, 2025",
    tags: ["pet health", "health guide", "breed guide", "pet breeding", "dog breed health issues"],
    featured: true
  },
  {
    id: "dog-breed-size-comparison",
    title: "Complete Guide to Dog Breed Size Comparison for Pet Owners",
    description: "Professional dog breed size comparison advice and tips",
    image: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["breed guide", "pet breeding", "dog breed size comparison", "dog breed size comparison tips", "dog breed size comparison guide"],
    featured: true
  },
  {
    id: "best-dog-breeds-for-first-time-owners",
    title: "Best Dog Breeds For First Time Owners: Expert Tips and Professional Advice",
    description: "Professional best dog breeds for first time owners advice...",
    image: "https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["breed guide", "pet breeding", "best dog breeds for first time owners", "best dog breeds for first time owners tips", "best dog breeds for first time owners guide"],
    featured: true
  },
  {
    id: "dog-breed-training-difficulty",
    title: "The Ultimate Dog Breed Training Difficulty Guide for Pet Parents",
    description: "Professional dog breed training difficulty advice and tips",
    image: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet care", "care guide", "breed guide", "pet breeding", "dog breed training difficulty"],
    featured: true
  },
  {
    id: "dog-breed-exercise-requirements",
    title: "Everything You Need to Know About Dog Breed Exercise Requirements",
    description: "Essential dog breed exercise requirements guide for pet care",
    image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    date: "November 28, 2025",
    tags: ["breed guide", "pet breeding", "dog breed exercise requirements", "dog breed exercise requirements tips", "dog breed exercise requirements guide"],
    featured: true
  },
  {
    id: "dog-breed-grooming-needs",
    title: "The Ultimate Dog Breed Grooming Needs Guide for Pet Parents",
    description: "Expert guide on dog breed grooming needs for pet owners",
    image: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet care", "care guide", "breed guide", "pet breeding", "dog breed grooming needs"],
    featured: true
  },
  {
    id: "dog-breed-lifespan",
    title: "Understanding Dog Breed Lifespan - A Comprehensive Guide",
    description: "Complete dog breed lifespan information for pets",
    image: "https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["breed guide", "pet breeding", "dog breed lifespan", "dog breed lifespan tips", "dog breed lifespan guide"],
    featured: true
  },
  {
    id: "dog-breed-cost",
    title: "The Ultimate Dog Breed Cost Guide for Pet Parents",
    description: "Complete dog breed cost information for pets",
    image: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["breed guide", "pet breeding", "dog breed cost", "dog breed cost tips", "dog breed cost guide"],
    featured: true
  },
  {
    id: "dog-breed-popularity",
    title: "Complete Guide to Dog Breed Popularity for Pet Owners",
    description: "Expert guide on dog breed popularity for pet owners",
    image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    date: "November 28, 2025",
    tags: ["breed guide", "pet breeding", "dog breed popularity", "dog breed popularity tips", "dog breed popularity guide"],
    featured: true
  },
  {
    id: "dog-breed-history",
    title: "Dog Breed History: Expert Tips and Professional Advice",
    description: "Professional dog breed history advice and tips",
    image: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["breed guide", "pet breeding", "dog breed history", "dog breed history tips", "dog breed history guide"],
    featured: true
  },
  {
    id: "dog-breed-standards",
    title: "The Ultimate Dog Breed Standards Guide for Pet Parents",
    description: "Essential dog breed standards guide for pet care",
    image: "https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["breed guide", "pet breeding", "dog breed standards", "dog breed standards tips", "dog breed standards guide"],
    featured: true
  },
  {
    id: "dog-breed-selection-guide",
    title: "Complete Guide to Dog Breed Selection Guide for Pet Owners",
    description: "Professional dog breed selection guide advice and tips",
    image: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["breed guide", "pet breeding", "dog breed selection guide", "dog breed selection guide tips", "dog breed selection guide guide"],
    featured: true
  },
  {
    id: "pet-grooming-tips",
    title: "Pet Grooming Tips: Expert Tips and Professional Advice",
    description: "Professional pet grooming tips advice and tips",
    image: "https://images.unsplash.com/photo-1587300411107-ec8b1a1b0d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 28, 2025",
    tags: ["pet care", "care guide", "pet grooming tips", "pet grooming tips tips", "pet grooming tips guide"],
    featured: true
  },
  {
    id: "dog-training-basics",
    title: "The Ultimate Dog Training Basics Guide for Pet Parents",
    description: "Essential dog training basics guide for pet care",
    image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    date: "November 28, 2025",
    tags: ["pet care", "care guide", "dog training basics", "dog training basics tips", "dog training basics guide"],
    featured: true
  },
  {
    id: "pet-health-checkup",
    title: "Understanding Pet Health Checkup - A Comprehensive Guide",
    description: "Complete pet health checkup information for pets",
    image: "https://images.unsplash.com/photo-1552053831-71594a27c62d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 27, 2025",
    tags: ["pet health", "health guide", "pet health checkup", "pet health checkup tips", "pet health checkup guide"],
    featured: true
  },
  {
    id: "pet-breed",
    title: "The Ultimate Pet Breed Guide for Pet Parents",
    description: "Professional pet breed advice and tips with practical sol...",
    image: "https://images.unsplash.com/photo-1587300411107-ec8b1a1b0d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 27, 2025",
    tags: ["breed guide", "pet breeding", "pet breed", "pet breed tips", "pet breed guide"],
    featured: true
  },
  {
    id: "pet-breed-identification",
    title: "The Ultimate Pet Breed Identification Guide for Pet Parents",
    description: "Expert guide on pet breed identification for pet owners",
    image: "https://images.unsplash.com/photo-1552053831-71594a27c62d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 27, 2025",
    tags: ["breed guide", "pet breeding", "pet breed identification", "pet breed identification tips", "pet breed identification guide"],
    featured: true
  },
  {
    id: "pet-naming",
    title: "Complete Guide to Pet Naming for Pet Owners",
    description: "Complete pet naming information for pets",
    image: "https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 27, 2025",
    tags: ["pet naming", "pet naming tips", "pet naming guide"],
    featured: true
  },
  {
    id: "pet-breeder",
    title: "Everything You Need to Know About Pet Breeder",
    description: "Essential pet breeder guide for pet care",
    image: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 27, 2025",
    tags: ["breed guide", "pet breeding", "pet breeder", "pet breeder tips", "pet breeder guide"],
    featured: true
  },
  {
    id: "pet-breeding",
    title: "Pet Breeding: Expert Tips and Professional Advice",
    description: "Expert guide on pet breeding for pet owners",
    image: "https://images.unsplash.com/photo-1606214174585-fe31582dc1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 27, 2025",
    tags: ["breed guide", "pet breeding", "pet breeding tips", "pet breeding guide"],
    featured: true
  },
  {
    id: "ai-tools-comparison",
    title: "Best AI Tools for Content Creation in 2024: A Comprehensive Comparison",
    description: "Discover the most innovative AI tools for creative projects, from horror content creation to pet care analysis. Compare features, pricing, and find the perfect tool for your needs.",
    image: "https://images.unsplash.com/photo-1587300411107-ec8b1a1b0d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "December 15, 2024",
    tags: ["AI tools", "comparison", "creative content", "technology"],
    featured: true
  },
  {
    id: "pet-loss-grief-support-guide",
    title: "Pet Loss Grief Support: Coping with Saying Goodbye to Your Beloved Companion",
    description: "Compassionate guide to pet loss grief with healthy coping strategies, memorial ideas, and support resources for healing after losing a beloved pet.",
    image: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 27, 2024",
    tags: ["pet loss", "grief support", "pet memorial", "emotional healing", "pet bereavement"],
    featured: true
  },
  {
    id: "backyard-bird-identification-guide",
    title: "Backyard Bird Identification Guide: Common Species and Expert Tips",
    description: "Complete guide to identifying common backyard birds with expert tips for distinguishing similar species and solving tricky identifications.",
    image: "https://cdn.shopify.com/s/files/1/0311/3149/files/shutterstock_601059413_97867db7-ccf6-45e3-b082-d4af94f1777f.jpg?v=1573605721",
    date: "November 27, 2024",
    tags: ["bird watching", "bird identification", "backyard birding", "wildlife observation", "nature guide"],
    featured: true
  },
  {
    id: "pet-emergency-escape-guide",
    title: "Pet Emergency Guide: What to Do When Your Pet Escapes or Goes Missing",
    description: "Emergency action guide for escaped pets including immediate response steps, species-specific protocols, and prevention strategies for pet safety.",
    image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    date: "November 27, 2024",
    tags: ["pet emergency", "pet safety", "escape prevention", "emergency response", "pet recovery"],
    featured: true
  },
  {
    id: "multi-cat-household-management-guide",
    title: "Multi-Cat Household Management: Preventing Conflicts and Creating Harmony",
    description: "Expert guide to managing multiple cats, preventing conflicts, and creating harmony in multi-cat households with proven strategies and solutions.",
    image: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 27, 2024",
    tags: ["multi-cat care", "cat behavior", "pet conflicts", "cat harmony", "household management"],
    featured: true
  },
  {
    id: "cat-litter-box-problems-solutions",
    title: "Cat Litter Box Problems: Complete Solutions Guide for Inappropriate Elimination",
    description: "Solve cat litter box problems with proven solutions for inappropriate elimination, carpet peeing, and multi-cat household conflicts.",
    image: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "November 27, 2024",
    tags: ["cat behavior", "litter box problems", "inappropriate elimination", "cat training", "behavioral issues"],
    featured: true
  },
  {
    id: "reptile-humidity-control-complete-guide",
    title: "How to Maintain Perfect Humidity in Reptile Enclosures: Complete 2025 Guide",
    description: "Solve reptile humidity problems with proven methods, professional equipment recommendations, and expert techniques for maintaining consistent humidity levels.",
    image: "https://www.thesprucepets.com/thmb/DWmPXX3FB2nkHBvvqo-asPo5BWQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Aquarium-digital-thermometer-59000ef63df78ca1591de6b0.jpg",
    date: "November 27, 2024",
    tags: ["reptile care", "humidity control", "terrarium setup", "reptile health", "enclosure maintenance"],
    featured: true
  },
  {
    id: "aquarium-water-quality-problems-solutions",
    title: "Aquarium Water Quality Problems: Complete pH and Nitrate Solutions Guide",
    description: "Solve aquarium water quality problems with expert solutions for pH control, nitrate management, and maintaining stable water conditions for healthy fish.",
    image: "https://www.thesprucepets.com/thmb/DWmPXX3FB2nkHBvvqo-asPo5BWQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Aquarium-digital-thermometer-59000ef63df78ca1591de6b0.jpg",
    date: "November 27, 2024",
    tags: ["aquarium care", "water quality", "pH control", "nitrate management", "fish health"],
    featured: true
  },
  {
    id: "best-bottom-feeders-for-medium-fish",
    title: "Best Bottom Feeders for Community Tanks: 10 Perfect Clean-Up Crew Options",
    description: "Expert guide to choosing bottom feeders that eat excess food and thrive peacefully with 4-5 inch community fish. Includes compatibility ratings, care tips, and essential products.",
    image: "https://www.hygger-online.com/wp-content/uploads/2023/03/Top-10-Bottom-Feeder-Fish-For-Freshwater-Community-Tank-2.jpg",
    date: "November 26, 2024",
    tags: ["aquarium care", "bottom feeders", "fish compatibility", "tank maintenance", "community tank"],
    featured: true
  },
  {
    id: "best-quiet-filters-40-gallon-tank",
    title: "Best Quiet Filters for 40-Gallon Tanks: 2025 Complete Guide",
    description: "Expert guide to choosing quiet, efficient filters for 40-gallon aquariums. Compare top 10 models with noise levels, flow rates, and performance reviews for whisper-quiet operation.",
    image: "https://images1.ratemyfishtank.com/photo/9/660x508c/47000/46502/23234-1-40-gallon-tank-102c3lb4buxgy.webp",
    date: "November 26, 2024",
    tags: ["aquarium equipment", "filters", "quiet operation", "40 gallon tank", "2025 guide"],
    featured: true
  },
  {
    id: "best-full-spectrum-aquarium-lights",
    title: "Best Full Spectrum Aquarium Lights for Planted Tanks: Complete Guide 2024",
    description: "Expert guide to choosing full-spectrum aquarium lights. Learn about color spectrum, intensity, and light spread. Compare 5 budget-friendly options tested for real plant growth.",
    image: "https://cdn.shopify.com/s/files/1/0311/3149/files/shutterstock_601059413_97867db7-ccf6-45e3-b082-d4af94f1777f.jpg?v=1573605721",
    date: "November 24, 2024",
    tags: ["aquarium lighting", "planted tank", "full spectrum", "LED lights", "plant growth"],
    featured: true
  },
  {
    id: "best-aquarium-thermometers-with-alarm",
    title: "Best Aquarium Thermometers with High Temp Alarm: Keep Your Fish Safe 24/7",
    description: "Expert guide to choosing thermometers with alarm functions. Compare digital LED, LCD, and traditional types. Includes top 3 product recommendations with alarm capability.",
    image: "https://www.thesprucepets.com/thmb/DWmPXX3FB2nkHBvvqo-asPo5BWQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Aquarium-digital-thermometer-59000ef63df78ca1591de6b0.jpg",
    date: "November 23, 2024",
    tags: ["aquarium equipment", "thermometer", "temperature alarm", "fish safety"],
    featured: true
  },
  {
    id: "pet-ranking",
    title: "Pet Popularity Contest: Vote for the Cutest Pets",
    description: "Join our viral pet ranking game inspired by teaspill! Vote between adorable cats and dogs to help crown the cutest pet.",
    image: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "August 1, 2023",
    tags: ["pet contest", "teaspill", "viral", "pet ranking"],
    featured: true
  },
  {
    id: "pet-health-risks-lyme-legionnaires",
    title: "Pet Health Risks: Lyme Disease and Legionnaires",
    description: "Learn about these zoonotic diseases, how they affect your pets, and prevention strategies.",
    image: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "August 1, 2023",
    tags: ["health", "disease prevention", "pet care"],
    featured: true
  }
];
function BlogContent() {
  return (
    <Layout title="Pet Health Blog" showBackButton={true}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">Pet Care & Aquarium Blog</h1>
          <p className="text-gray-600 text-lg">
            Expert insights on pet health, aquarium care, disease prevention, and practical tips to keep your pets thriving.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link 
              href={post.id === "pet-ranking" ? `/pet-ranking` : `/blog/${post.id}`}
              key={post.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={false}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  {post.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Featured</span>
                  )}
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 flex-grow">{post.description}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
export default function Blog() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogContent />
    </Suspense>
  );
} 