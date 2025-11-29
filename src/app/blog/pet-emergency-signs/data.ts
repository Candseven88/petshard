// Data for PetEmergencySignsGuide

import { PetEmergencySignsGuideData, RelatedTool, FAQItem, UseCaseItem } from './types';

export const articleData: PetEmergencySignsGuideData = {
  title: "Pet Emergency Signs: When to Seek Immediate Veterinary Care",
  description: "Learn critical pet emergency signs that require immediate veterinary attention. Recognize symptoms, understand severity levels, and know when to call the vet.",
  content: "Knowing when your pet needs emergency veterinary care can be the difference between life and death. As a pet owner, recognizing critical emergency signs is essential for making quick decisions that could save your pet\'s life.\n\nThis comprehensive guide covers the most critical pet emergency signs that require immediate veterinary attention. We\'ll help you understand which symptoms demand urgent care, how to respond in emergencies, and what to expect when you contact your veterinarian.\n\nCritical emergency signs include:\n- Difficulty breathing or gasping for air\n- Unconsciousness or unresponsiveness\n- Severe bleeding or trauma\n- Inability to urinate or defecate\n- Severe pain or inability to move\n- Seizures or convulsions\n- Suspected poisoning or toxin ingestion\n- Pale or blue gums\n\nWhen in doubt, contact your veterinarian or emergency vet clinic. It\'s always better to err on the side of caution.",
  metadata: {
    keywords: ["pet emergency signs", "emergency symptoms", "when to call vet", "pet emergency symptoms", "critical pet signs", "veterinary emergency"],
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
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "How do I know if my pet's condition is truly an emergency?",
    answer: "If your pet is having difficulty breathing, is unconscious, bleeding severely, unable to urinate, in extreme pain, or showing signs of shock, it\'s an emergency. When in doubt, call your vet. It\'s better to be cautious than to wait and risk your pet\'s life."
  },
  {
    question: "What should I do if my pet ingests something toxic?",
    answer: "Call your emergency vet or poison control immediately. Have the substance name or container ready. Do not induce vomiting unless instructed by a professional, as some toxins cause more damage coming back up. Time is critical with poisoning cases."
  },
  {
    question: "How can I prepare for a pet emergency?",
    answer: "Keep emergency vet numbers saved in your phone, maintain updated medical records, have a pet first aid kit at home, know the location of the nearest 24-hour emergency clinic, and keep your pet\'s microchip information current."
  },
  {
    question: "What is the difference between an emergency and an urgent situation?",
    answer: "An emergency requires immediate care (within minutes to hours) and could be life-threatening. An urgent situation needs veterinary attention within 24 hours but is not immediately life-threatening. Emergencies include difficulty breathing or unconsciousness."
  },
  {
    question: "Can I treat my pet at home during an emergency?",
    answer: "Basic first aid (like applying pressure to bleeding wounds) can help stabilize your pet, but professional veterinary care is essential for true emergencies. Do not delay getting to a vet to attempt home treatment."
  },
  {
    question: "What should I bring to the emergency vet clinic?",
    answer: "Bring your pet\'s medical records, vaccination history, list of current medications, microchip number, insurance information, and payment method. If possible, bring the substance your pet ingested or a photo of any injuries."
  },
  {
    question: "How much does emergency veterinary care cost?",
    answer: "Emergency vet visits typically cost $500-$2,000+ depending on the condition and treatment needed. Diagnostic tests, medications, and hospitalization add to the cost. Ask about payment plans or pet insurance options."
  }
];

export const useCaseItems: UseCaseItem[] = [
  {
    title: "Pet Choking or Difficulty Breathing",
    description: "Recognizing signs of choking and knowing when to seek immediate emergency care"
  },
  {
    title: "Accidental Toxin Ingestion",
    description: "Responding quickly to suspected poisoning or toxic substance ingestion"
  },
  {
    title: "Severe Trauma or Injury",
    description: "Handling hit-by-car incidents, severe wounds, or traumatic injuries"
  }
];
