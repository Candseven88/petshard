import { BottomFeeder, Product, ProTip } from './types';

export const bottomFeeders: BottomFeeder[] = [
  {
    id: 1,
    name: "Corydoras Catfish",
    emoji: "⭐",
    imageUrl: "https://cdn.shopify.com/s/files/1/0311/3149/files/albino_cory_catfish.jpg?v=1586193662",
    size: "2-4 inches",
    compatibility: 5,
    specialSkill: "Living vacuum cleaner with whiskers",
    description: "The beloved cory catfish comes in many varieties and sizes. As peaceful scavengers, they use their barbels (or whiskers) to search for scraps, worms, and tiny crustaceans hidden in the substrate. Like a living robot vacuum, cory catfish happily suck up any food that gets past the surface eaters.",
    tankRequirement: "Any size, groups of 3+",
    whyItWorks: "Peaceful, active scavenger that fits perfectly with 4-5\" fish"
  },
  {
    id: 2,
    name: "Bristlenose Plecos",
    emoji: "🦈",
    imageUrl: "https://cdn.shopify.com/s/files/1/0311/3149/files/Male_and_female_bristlenose_plecos.jpg?v=1586193761",
    size: "4-5 inches",
    compatibility: 4,
    specialSkill: "Algae destroyer + wood keeper",
    description: "Bristlenose plecos only get 4 to 5 inches long and are great cleaners that eat algae, scavenge for food, and keep driftwood clean. They come in several color varieties and are easy to breed. It's easy to differentiate between males and females because only males have bristles on their snouts.",
    tankRequirement: "29+ gallons",
    whyItWorks: "Perfect size match for medium tanks with excellent algae control"
  },
  {
    id: 3,
    name: "Eartheaters (Geophagus)",
    emoji: "🌍",
    imageUrl: "https://cdn.shopify.com/s/files/1/0311/3149/files/Albino_Threadfin_Acara_Acarichthys_heckelii.jpg?v=1586193599",
    size: "Varies by species",
    compatibility: 4,
    specialSkill: "Substrate sifter - natural filtration",
    description: "This group of South American cichlids are known for scooping up substrate into their mouths and filtering it through their gills. Any edible leftovers are swallowed and digested, breaking down waste for plants to absorb. They prefer sand substrate over gravel.",
    tankRequirement: "55+ gallons with sand",
    whyItWorks: "Peaceful cichlids that provide natural substrate cleaning"
  },
  {
    id: 4,
    name: "Loaches (Yoyo, Kuhli)",
    emoji: "🥨",
    imageUrl: "https://cdn.shopify.com/s/files/1/0311/3149/files/yoyo_loach.jpg?v=1586193724",
    size: "3-5 inches",
    compatibility: 4,
    specialSkill: "Snail control + crevice cleaning",
    description: "Loaches are playful bottom dwellers perfect for snail control and crevice cleaning. Yoyo loaches work like a pack of playful puppies, while Kuhli loaches look like tiny snakes that wiggle into narrow spaces. Both are excellent scavengers.",
    tankRequirement: "20+ gallons, groups preferred",
    whyItWorks: "Active, entertaining, and effective at pest snail control"
  },
  {
    id: 5,
    name: "Snails (Ramshorn, Nerite)",
    emoji: "🐌",
    imageUrl: "https://cdn.shopify.com/s/files/1/0311/3149/files/pink_ramshorn_snail.jpg?v=1586193702",
    size: "0.5-2 inches",
    compatibility: 5,
    specialSkill: "Eat almost anything including fish waste",
    description: "One of the best cleaners in the tank because they eat almost anything - fish waste, algae, rotting leaves, and even dead fish. They work 24/7 breaking down organic material for plants to use. Nerite snails won't reproduce in freshwater.",
    tankRequirement: "Any tank size",
    whyItWorks: "Completely peaceful, works around the clock, safe with all fish"
  },
  {
    id: 6,
    name: "Amano Shrimp",
    emoji: "🦐",
    imageUrl: "https://cdn.shopify.com/s/files/1/0311/3149/files/amano_shrimp_911784ef-67a5-4a8e-b2dc-ae13dd0cfc21.jpg?v=1586193781",
    size: "2 inches",
    compatibility: 4,
    specialSkill: "Reaches tiniest cracks",
    description: "Made popular by their algae-eating capabilities in planted aquascapes, these dwarf shrimp are great scavengers that can use their little legs to grab inside the tiniest cracks that most fish and snails can't reach. One of the hardiest dwarf shrimp species.",
    tankRequirement: "10+ gallons, planted preferred",
    whyItWorks: "Access tight spaces other cleaners miss"
  },
  {
    id: 7,
    name: "Platies",
    emoji: "🐟",
    imageUrl: "https://cdn.shopify.com/s/files/1/0311/3149/files/bumble_bee_platies.jpg?v=1586193684",
    size: "2-3 inches",
    compatibility: 5,
    specialSkill: "Constant algae pickers",
    description: "Colorful livebearers with insatiable appetites that cause them to constantly pick at the ground, plants, and décor for edible snacks. They reproduce readily, providing platies of different sizes that can fit into various nooks and crannies.",
    tankRequirement: "10+ gallons",
    whyItWorks: "Peaceful community fish that clean while swimming at all levels"
  },
  {
    id: 8,
    name: "Flagfish",
    emoji: "🇺🇸",
    imageUrl: "https://cdn.shopify.com/s/files/1/0311/3149/files/flagfish.jpg?v=1586193634",
    size: "2.5 inches",
    compatibility: 3,
    specialSkill: "Hair algae specialist",
    description: "North American native fish with a beautiful star-spangled pattern. Their mouths are uniquely shaped for pulling off hair algae and black beard algae, though they may damage delicate plants. Can live in unheated aquariums.",
    tankRequirement: "20+ gallons",
    whyItWorks: "Specialized algae eater for tough algae types"
  },
  {
    id: 9,
    name: "Rainbow/Redtail Sharks",
    emoji: "🦈",
    imageUrl: "https://cdn.shopify.com/s/files/1/0311/3149/files/redtail_shark.jpg?v=1586193578",
    size: "4-6 inches",
    compatibility: 3,
    specialSkill: "Scavenger + algae eater",
    description: "These freshwater 'sharks' are excellent scavengers that clean up excess food between decor, rocks, and equipment, plus they eat algae. Can be territorial, so only keep one shark per tank. Available in many color variations including black, albino, and GloFish.",
    tankRequirement: "29+ gallons, one per tank",
    whyItWorks: "Active cleaners for larger tanks with robust tankmates"
  },
  {
    id: 10,
    name: "Common Goldfish",
    emoji: "🐠",
    imageUrl: "https://cdn.shopify.com/s/files/1/0311/3149/files/orange_common_goldfish.jpg?v=1586193742",
    size: "Up to 12 inches",
    compatibility: 3,
    specialSkill: "Substrate picker, detritus breaker",
    description: "Goldfish love picking through substrate, munching on leftovers and fish waste, and eating algae. Their reputation for being messy comes from being kept in tanks too small. In large aquariums with big peaceful tankmates, they keep the bottom very clean.",
    tankRequirement: "75+ gallons for adults",
    whyItWorks: "For large tanks only - powerful substrate cleaners"
  }
];

export const products: Product[] = [
  {
    name: "Luigi's Fish Tank Cleaner",
    affiliateLink: "https://amzn.to/44sGEKR",
    features: [
      "Perfect for Regular Water Changes: Clears 30L in about 5 minutes",
      "Keep your Aquarium Clean: Filter through gravel to remove waste and toxins",
      "Fish & Invertebrate Safe: Attached filter prevents accidental suction",
      "Great Value: Simple, robust product at fraction of expensive siphon cost",
      "Hassle-Free Cleaning: Hand pump - no manual priming needed"
    ],
    description: "Your bottom feeders handle daily maintenance, but for weekly water changes, this is your best friend."
  },
  {
    name: "Automatic Fish Feeder for Aquarium",
    affiliateLink: "https://amzn.to/48doIoy",
    features: [
      "Accurate Food Amount: 16 grids total, each holds up to 2g for precise portions",
      "2 Setup Methods: Adjustable clamp base or suction cup mounting",
      "Moisture-resistant Design: Fully sealed opening prevents food from getting wet",
      "Customized Feeding Time: Up to 3 feedings per day, programmable schedule",
      "USB Rechargeable: 700mAh battery lasts 1-2 months on single charge"
    ],
    description: "The #1 reason for excess food? Overfeeding. This feeder ensures your fish get exactly what they need – nothing more, nothing less."
  }
];

export const proTips: ProTip[] = [
  {
    icon: "⚡",
    text: "Don't rely only on clean-up crew - they need dedicated feeding too"
  },
  {
    icon: "⚡",
    text: "Use the automatic feeder to prevent overfeeding at the source"
  },
  {
    icon: "⚡",
    text: "Match your bottom feeder to your tank size and substrate type"
  }
];
