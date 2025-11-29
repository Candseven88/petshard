// Data for Healthy Pet Treats Guide

import { HealthyPetTreatsGuideData, RelatedTool, FAQItem, UseCaseItem } from './types';

export const articleData: HealthyPetTreatsGuideData = {
  title: "Healthy Pet Treats: Recipes, Guidelines, and Nutrition Tips",
  description: "Discover healthy pet treat recipes, nutritional guidelines, and homemade treat options for dogs and cats. Learn which treats are safe and how to make nutritious treats at home.",
  content: "Treats are an important part of pet care, offering opportunities for training, bonding, and rewarding good behavior. This comprehensive guide explores healthy treat options for your pet, including homemade recipes, nutritional guidelines, and safe treat practices. By understanding treat nutrition and portion control, you can reward your pet while maintaining their ideal weight and supporting their overall health.",
  metadata: {
    keywords: ["healthy pet treats", "homemade pet treats", "dog treat recipes", "cat treat recipes", "pet treat nutrition", "safe pet treats"],
    category: "Pet Care",
    readTime: "12 min read"
  }
};

export const relatedTools: RelatedTool[] = [
  {
    id: "pet-nutrition-guide",
    name: "Pet Nutrition Guide",
    description: "Learn essential pet nutrition requirements, feeding guidelines, and dietary needs.",
    url: "/blog/pet-nutrition-guide",
    icon: "🍽️"
  },
  {
    id: "pet-weight-management",
    name: "Pet Weight Management",
    description: "Discover strategies for maintaining your pet's ideal weight and preventing obesity.",
    url: "/blog/pet-weight-management",
    icon: "⚖️"
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
    question: "How many treats can I give my pet daily?",
    answer: "Treats should not exceed 10% of your pet's daily caloric intake. For a 10-pound dog eating 400 calories daily, this means no more than 40 calories from treats. Adjust based on your pet's individual caloric needs and activity level."
  },
  {
    question: "Are homemade treats better than commercial treats?",
    answer: "Homemade treats allow you to control ingredients and avoid artificial additives, but commercial treats offer convenience. Many pet owners use both—homemade treats for special occasions and quality commercial treats for daily use."
  },
  {
    question: "Can I give my pet human food as treats?",
    answer: "Some human foods are safe for pets, including plain cooked chicken, carrots, apples (without seeds), and green beans. Avoid chocolate, grapes, raisins, onions, garlic, avocado, and foods containing xylitol."
  },
  {
    question: "How long do homemade treats last?",
    answer: "Homemade treats stored in an airtight container last 5 days in the refrigerator or up to 3 months in the freezer. Always label containers with the date prepared."
  },
  {
    question: "What should I do if my pet has food allergies?",
    answer: "If your pet has food allergies, work with your veterinarian to identify trigger ingredients. Choose treats made with novel proteins or limited ingredients. Always read labels carefully and introduce new treats gradually."
  },
  {
    question: "Can treats help with training?",
    answer: "Yes, treats are excellent training tools. Use small, low-calorie treats during training sessions to maintain your pet's focus and motivation. Keep treats tiny to avoid excessive calorie intake."
  },
  {
    question: "Are frozen treats good for pets?",
    answer: "Frozen treats like frozen yogurt or ice cubes are excellent, especially during hot weather. They provide hydration, mental stimulation, and can help soothe sore gums in teething puppies."
  }
];

export const useCaseItems: UseCaseItem[] = [
  {
    title: "Training Rewards",
    description: "Use small, low-calorie treats like freeze-dried meat or carrot sticks during training sessions. Keep treats tiny to avoid excessive calorie intake during multiple training repetitions."
  },
  {
    title: "Weight Management",
    description: "For overweight pets, choose low-calorie options like carrot sticks, green beans, or apple slices. These provide satisfying crunch and volume without excessive calories."
  },
  {
    title: "Enrichment and Bonding",
    description: "Use frozen yogurt treats or puzzle toys filled with treats for mental stimulation. These activities strengthen your bond while providing entertainment and cognitive engagement."
  }
];
