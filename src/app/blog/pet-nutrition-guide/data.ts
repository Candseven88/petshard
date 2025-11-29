// Data for Pet Nutrition Guide

import { PetNutritionGuideData, RelatedTool, FAQItem, UseCaseItem } from './types';

export const articleData: PetNutritionGuideData = {
  title: "Pet Nutrition Guide: Complete Feeding Requirements for Dogs and Cats",
  description: "Learn essential pet nutrition requirements, feeding guidelines, and dietary needs for dogs and cats.",
  content: "Proper nutrition is the foundation of your pet's health, longevity, and quality of life. This comprehensive guide covers everything you need to know about pet nutrition, including essential nutrients, feeding guidelines, portion sizes, and dietary considerations for different life stages.",
  metadata: {
    keywords: ["pet nutrition guide", "dog nutrition requirements", "cat nutrition guide", "pet feeding guide", "pet diet requirements", "healthy pet nutrition"],
    category: "Pet Care",
    readTime: "12 min read"
  }
};

export const relatedTools: RelatedTool[] = [
  {
    id: "health-center",
    name: "Health Center",
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
  },
  {
    id: "breed-identification",
    name: "Breed Identification",
    description: "Upload a photo to identify your pet's breed with AI-powered analysis.",
    url: "/breed-identification",
    icon: "🔍"
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "How much should I feed my pet?",
    answer: "Feeding amounts depend on your pet's age, weight, activity level, and metabolism. Start with the amount recommended on your food package, then adjust based on your pet's body condition. Your veterinarian can provide personalized recommendations."
  },
  {
    question: "Can I mix wet and dry food?",
    answer: "Yes, mixing wet and dry food is safe and can provide benefits of both. Wet food increases hydration and palatability, while dry food supports dental health. Ensure total daily calories remain appropriate for your pet's needs."
  },
  {
    question: "How do I transition to a new food?",
    answer: "Transition gradually over 7-10 days to prevent digestive upset. Mix increasing amounts of new food with the old food: 25% new/75% old for 2-3 days, 50/50 for 2-3 days, 75% new/25% old for 2-3 days, then 100% new food."
  },
  {
    question: "Are grain-free diets better for pets?",
    answer: "Grain-free diets are not inherently better unless your pet has a grain allergy. Some grain-free foods contain high levels of legumes, which may be linked to heart issues in some dogs. Choose foods based on your pet's individual needs and your veterinarian's recommendations."
  },
  {
    question: "What human foods are safe for pets?",
    answer: "Safe human foods include plain cooked chicken, turkey, beef, carrots, green beans, and apples (without seeds). Avoid chocolate, grapes, raisins, onions, garlic, avocado, and foods containing xylitol, which are toxic to pets."
  },
  {
    question: "How often should I have my pet's nutrition evaluated?",
    answer: "Discuss nutrition at every veterinary visit. Puppies and kittens need evaluation every 3-4 weeks during growth. Adult pets should have annual nutrition assessments. Senior pets and those with health conditions may need more frequent evaluations."
  },
  {
    question: "Should I give my pet supplements?",
    answer: "Quality commercial pet foods are nutritionally complete. Supplements may be beneficial for specific conditions (joint support for senior dogs, omega-3s for skin health) but should only be given under veterinary guidance to avoid imbalances."
  }
];

export const useCaseItems: UseCaseItem[] = [
  {
    title: "New Puppy Owner",
    description: "A new puppy owner should select a high-quality puppy formula with appropriate calcium and phosphorus for proper bone development. Feed 3-4 times daily and transition to adult food at 12 months."
  },
  {
    title: "Overweight Adult Dog",
    description: "An overweight dog benefits from a weight management formula with reduced calories and increased fiber. Combine with regular exercise and portion control. Monitor progress monthly and adjust as needed."
  },
  {
    title: "Senior Cat with Kidney Issues",
    description: "A senior cat with kidney disease requires a prescription diet low in protein and phosphorus. Wet food increases hydration. Regular veterinary monitoring ensures the diet supports kidney function."
  }
];
