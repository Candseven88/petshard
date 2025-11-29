// Data for Pet Dental Health Guide

import { PetDentalHealthGuideData, RelatedTool, FAQItem, UseCaseItem, DentalIssue } from './types';

export const articleData: PetDentalHealthGuideData = {
  title: "Pet Dental Health: Complete Care Guide for Dogs and Cats",
  description: "Learn essential pet dental health care. Understand common dental issues, prevention strategies, and when to seek professional dental treatment.",
  content: "Pet dental health is crucial for your pet's overall wellbeing. Dental disease affects 80% of pets over age three, making preventive care essential. This comprehensive guide covers common dental issues, prevention strategies, and professional care options.",
  metadata: {
    keywords: ["pet dental health", "dog dental care", "cat dental health", "pet teeth cleaning", "dental disease prevention", "pet oral health"],
    category: "Pet Health",
    readTime: "10 min read"
  }
};

export const dentalIssues: DentalIssue[] = [
  {
    title: "Plaque and Tartar Buildup",
    description: "Accumulation of bacteria and minerals on tooth surfaces",
    causes: "Poor oral hygiene, diet lacking abrasive foods, natural bacterial growth",
    severity: "Mild (early plaque) to Severe (extensive tartar)",
    whenToCallVet: "Within 1-2 weeks if visible tartar; immediate if accompanied by bad breath and difficulty eating"
  },
  {
    title: "Periodontal Disease",
    description: "Infection and inflammation of gums and tooth-supporting structures",
    causes: "Untreated plaque and tartar, bacterial infection, poor dental hygiene",
    severity: "Moderate (gum inflammation) to Severe (tooth loss, bone damage)",
    whenToCallVet: "Within 24-48 hours if gums are bleeding or swollen; immediate if severe pain"
  },
  {
    title: "Tooth Decay and Cavities",
    description: "Breakdown of tooth structure due to acid and bacteria",
    causes: "High-sugar diet, poor oral hygiene, acidic environment in mouth",
    severity: "Mild (surface decay) to Severe (deep cavity affecting root)",
    whenToCallVet: "Within 1-2 weeks for visible cavities; immediate if causing pain"
  },
  {
    title: "Broken or Fractured Teeth",
    description: "Cracks or breaks in tooth structure from trauma or chewing",
    causes: "Chewing hard objects, trauma, accidents, weak enamel",
    severity: "Mild (small chip) to Severe (exposed root canal)",
    whenToCallVet: "Within 24 hours for any visible fracture; immediate if tooth is loose or causing pain"
  },
  {
    title: "Gum Disease and Gingivitis",
    description: "Inflammation of gums caused by bacterial infection",
    causes: "Plaque accumulation, poor oral hygiene, immune system issues",
    severity: "Mild (red, swollen gums) to Severe (bleeding, receding gums)",
    whenToCallVet: "Within 1-2 weeks for mild inflammation; within 24 hours if bleeding or severe swelling"
  },
  {
    title: "Tooth Abscess",
    description: "Bacterial infection at tooth root causing pus accumulation",
    causes: "Untreated decay, trauma, periodontal disease, root canal infection",
    severity: "Moderate (localized infection) to Severe (systemic infection)",
    whenToCallVet: "Immediate - abscesses can spread and cause serious complications"
  }
];

export const dentalCareTimeline = [
  {
    age: "Puppies/Kittens (8 weeks - 6 months)",
    care: "Baby teeth eruption; start gentle brushing; introduce dental toys; first vet check"
  },
  {
    age: "Young Adults (6 months - 3 years)",
    care: "Adult teeth fully erupted; establish daily brushing routine; professional cleaning if needed; regular vet exams"
  },
  {
    age: "Adults (3 - 7 years)",
    care: "Maintain daily brushing; annual professional cleaning; monitor for plaque buildup; regular vet exams"
  },
  {
    age: "Seniors (7+ years)",
    care: "More frequent vet exams (twice yearly); professional cleaning as needed; monitor for tooth loss; adjust diet if necessary"
  }
];

export const relatedTools: RelatedTool[] = [
  {
    id: "health-center",
    name: "Pet Health Center",
    description: "Get personalized health advice and symptom checking for your pet.",
    url: "/health-center",
    icon: "🏥"
  },
  {
    id: "pet-care-guide",
    name: "Pet Care Guide",
    description: "Comprehensive care instructions tailored to your pet's needs.",
    url: "/pet-care-guide",
    icon: "📋"
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "How often should I brush my pet's teeth?",
    answer: "Daily brushing is ideal for optimal dental health. If daily brushing isn't possible, aim for at least 3-4 times per week. Even occasional brushing is better than none."
  },
  {
    question: "What's the best way to brush my pet's teeth?",
    answer: "Use a pet-specific toothbrush and toothpaste. Gently brush at a 45-degree angle, focusing on the gum line. Start with short sessions (30 seconds) and gradually increase duration as your pet adjusts."
  },
  {
    question: "How often does my pet need professional dental cleaning?",
    answer: "Most pets benefit from professional cleaning annually. Senior pets or those with existing dental disease may need cleaning every 6 months. Your vet can recommend the best schedule for your pet."
  },
  {
    question: "What are signs my pet has dental disease?",
    answer: "Common signs include bad breath, red or swollen gums, difficulty eating, drooling, loose teeth, and behavioral changes. If you notice any of these, contact your veterinarian."
  },
  {
    question: "Can diet affect my pet's dental health?",
    answer: "Yes, diet plays an important role. Dry kibble helps reduce plaque buildup compared to wet food. Some dental-specific diets are formulated to promote oral health. Avoid hard objects that can crack teeth."
  },
  {
    question: "Are dental treats and toys effective?",
    answer: "Dental treats and toys can help reduce plaque buildup and keep teeth clean. However, they should complement, not replace, regular brushing and professional care."
  },
  {
    question: "What should I expect during a professional dental cleaning?",
    answer: "Your pet will be anesthetized for safety and comfort. The vet will remove plaque and tartar, check for cavities and disease, and may take X-rays. Recovery typically takes a few hours."
  }
];

export const useCaseItems: UseCaseItem[] = [
  {
    title: "Establishing a Daily Dental Routine",
    description: "Creating a consistent brushing habit for busy pet owners",
    example: "Set a specific time each evening to brush your pet's teeth, making it part of your daily routine"
  },
  {
    title: "Managing Dental Disease",
    description: "Caring for pets with existing dental problems",
    example: "Following post-cleaning care instructions and maintaining preventive measures to prevent disease progression"
  },
  {
    title: "Senior Pet Dental Care",
    description: "Special considerations for older pets with dental issues",
    example: "More frequent vet visits, adjusted diet, and careful monitoring for complications"
  },
  {
    title: "Introducing Dental Care to Resistant Pets",
    description: "Strategies for pets who resist tooth brushing",
    example: "Using positive reinforcement, starting slowly, and using pet-friendly products to build tolerance"
  }
];
