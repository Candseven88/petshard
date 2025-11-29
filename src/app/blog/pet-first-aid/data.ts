// Data for PetFirstAidGuide

import { PetFirstAidGuideData, RelatedTool, FAQItem, UseCaseItem } from './types';

export const articleData: PetFirstAidGuideData = {
  title: "Pet First Aid: Essential Procedures and Emergency Response Guide",
  description: "Learn critical pet first aid procedures, CPR techniques, wound care, and emergency response. Step-by-step guide with first aid checklist for dogs and cats.",
  content: "Pet first aid can save your pet\'s life in critical moments. This comprehensive guide covers essential pet first aid procedures including CPR, severe bleeding control, choking response, treating shock, and wound cleaning. Learn step-by-step instructions for common emergencies, how to assemble a pet first aid kit, and when to seek professional veterinary care.",
  metadata: {
    keywords: ["pet first aid", "pet CPR", "pet first aid procedures", "emergency pet care", "pet wound care", "pet first aid kit", "pet first aid checklist"],
    category: "Pet Care",
    readTime: "12 min read"
  }
};

export const relatedTools: RelatedTool[] = [
  {
    id: "pet-emergency-signs",
    name: "Pet Emergency Signs",
    description: "Learn critical signs that require immediate veterinary attention.",
    url: "/blog/pet-emergency-signs",
    icon: "🚨"
  },
  {
    id: "health-center",
    name: "Health Center",
    description: "Get personalized health advice and symptom checking for your pet.",
    url: "/health-center",
    icon: "🏥"
  },
  {
    id: "pet-emergency-escape",
    name: "Emergency Escape Guide",
    description: "Prepare for emergencies with procedures to keep your pet safe.",
    url: "/blog/pet-emergency-escape-guide",
    icon: "🏃"
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "How do I know if my pet needs emergency care?",
    answer: "Signs requiring immediate emergency care include difficulty breathing, unconsciousness, severe bleeding, choking, seizures, inability to urinate or defecate, pale gums, and signs of extreme pain. When in doubt, contact your emergency vet."
  },
  {
    question: "Should I perform CPR on my pet?",
    answer: "Yes, if your pet is unconscious and not breathing, CPR can be life-saving. However, it\'s best learned through hands-on training. Many veterinary clinics offer pet CPR certification courses. Even without formal training, attempting CPR is better than doing nothing."
  },
  {
    question: "What should I do if my pet is poisoned?",
    answer: "Call your veterinarian or poison control immediately. Have the substance container available. Do not induce vomiting unless specifically instructed by a professional. Time is critical with poisoning cases, so seek help immediately."
  },
  {
    question: "How do I transport an injured pet safely?",
    answer: "Keep your pet calm and still. Use a carrier or blanket to immobilize them. Support the head and spine if possible. Drive carefully to avoid jostling. If spinal injury is suspected, minimize movement. Have someone call ahead to the emergency vet."
  },
  {
    question: "Can I treat wounds at home or should I see a vet?",
    answer: "Minor cuts and scrapes can be treated at home with proper cleaning and bandaging. However, deep wounds, puncture wounds, wounds that won\'t stop bleeding, or wounds showing signs of infection require veterinary care. When in doubt, have a vet evaluate the wound."
  },
  {
    question: "How often should I update my pet first aid kit?",
    answer: "Check your first aid kit every 6 months. Replace expired items, replenish used supplies, and update emergency contact information. Keep the kit in an easily accessible location that all family members know about."
  },
  {
    question: "Should I take a pet first aid course?",
    answer: "Absolutely. Hands-on training is invaluable for learning proper techniques and building confidence. Many veterinary clinics, animal shelters, and organizations like the Red Cross offer pet first aid and CPR certification courses. The investment is worth it for your pet\'s safety."
  }
];

export const useCaseItems: UseCaseItem[] = [
  {
    title: "Hit by Car",
    description: "Treat for shock, control bleeding, immobilize spine if possible, transport immediately to emergency vet."
  },
  {
    title: "Choking on Object",
    description: "Perform abdominal thrusts, remove object if visible, monitor breathing, seek vet care even if resolved."
  },
  {
    title: "Severe Bleeding",
    description: "Apply direct pressure, elevate limb, apply tourniquet if needed, transport to emergency vet."
  }
];
