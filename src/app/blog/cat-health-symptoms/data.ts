// Data for CatHealthSymptomsGuide

import { CatHealthSymptomsGuideData, RelatedTool, FAQItem, UseCaseItem } from './types';

export const articleData: CatHealthSymptomsGuideData = {
  title: "Cat Health Symptoms: When to Call the Vet",
  description: "Learn to recognize common cat health symptoms. Understand severity levels, causes, and when to seek veterinary care for your cat.",
  content: "Recognizing cat health symptoms early can make the difference between a quick recovery and serious complications. Cats are masters at hiding illness, which means symptoms often appear only when a condition has progressed. This comprehensive guide covers the most common cat health symptoms, their severity levels, and when you should contact your veterinarian.",
  metadata: {
    keywords: ["cat health symptoms", "cat symptoms", "when to call vet", "cat illness signs", "cat health problems", "feline symptoms"],
    category: "Pet Health",
    readTime: "14 min read"
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
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "Why do cats hide their illness?",
    answer: "Cats are prey animals by instinct, so they hide signs of weakness or illness to avoid appearing vulnerable. This means symptoms often appear only when a condition is advanced. Regular vet checkups help catch problems early."
  },
  {
    question: "What should I do if my cat vomits occasionally?",
    answer: "Occasional vomiting can be normal, especially if related to hairballs. However, if vomiting occurs more than once a week, contains blood, or is accompanied by other symptoms, contact your vet. Keep track of frequency and circumstances."
  },
  {
    question: "How can I tell if my cat is in pain?",
    answer: "Signs of pain include reluctance to move, hiding, changes in grooming habits, aggression when touched, or unusual vocalizations. Cats may also show decreased appetite or litter box avoidance. Any significant behavior change warrants a vet visit."
  },
  {
    question: "What is normal cat behavior vs. a sign of illness?",
    answer: "Normal: Sleeping 12-16 hours daily, occasional grooming, regular eating and litter box use. Abnormal: Extreme lethargy, neglecting grooming, changes in eating/bathroom habits, or unusual aggression. Trust your instincts—you know your cat best."
  },
  {
    question: "How often should my cat see the vet?",
    answer: "Healthy adult cats should visit the vet annually for wellness exams. Senior cats (over 7 years) should visit twice yearly. Kittens and cats with health conditions may need more frequent visits. Discuss the best schedule with your veterinarian."
  },
  {
    question: "Can I treat cat symptoms at home?",
    answer: "Some minor issues like mild hairballs can be managed at home with proper diet and hydration. However, most symptoms require professional diagnosis. Never give medications without veterinary guidance, as this can mask serious conditions or cause harm."
  },
  {
    question: "What should I tell my vet about my cat's symptoms?",
    answer: "Provide specific details: when symptoms started, frequency, severity, any recent changes (diet, environment, stress), and what your cat normally acts like. Note any other symptoms you've observed. This information helps your vet make an accurate diagnosis."
  }
];

export const useCaseItems: UseCaseItem[] = [
  {
    title: "Recognizing Emergency Situations",
    description: "Knowing when your cat needs immediate veterinary attention can save their life"
  },
  {
    title: "Monitoring Daily Health",
    description: "Tracking eating, bathroom habits, and behavior changes helps catch illness early"
  },
  {
    title: "Understanding Severity Levels",
    description: "Determining whether symptoms require immediate care or a routine appointment"
  }
];
