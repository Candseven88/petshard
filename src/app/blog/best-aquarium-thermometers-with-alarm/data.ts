import { Thermometer, Product, ProTip, TemperatureGuide } from './types';

export const thermometerTypes: Thermometer[] = [
  {
    id: 1,
    name: "Digital Thermometers with LED Display",
    type: "Digital LED",
    imageUrl: "https://www.thesprucepets.com/thmb/DWmPXX3FB2nkHBvvqo-asPo5BWQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Aquarium-digital-thermometer-59000ef63df78ca1591de6b0.jpg",
    priceRange: "$10-$20",
    accuracy: "±0.9°F",
    features: [
      "LED display readable day and night",
      "High/low temperature alarm capability",
      "External probe with cordless design",
      "Touch button operation",
      "Battery-powered with long life"
    ],
    pros: [
      "Most accurate readings",
      "Can set temperature alarms",
      "No wires in water",
      "Easy to read from distance"
    ],
    cons: [
      "Requires battery replacement",
      "Slightly more expensive",
      "Electronic component can fail"
    ],
    bestFor: "Serious aquarists who need precise temperature monitoring and alarm features",
    rating: 5
  },
  {
    id: 2,
    name: "Stick-On LCD Thermometers",
    type: "LCD Strip",
    imageUrl: "https://www.thesprucepets.com/thmb/a79N9fYQU3cgt905TUuPN3VhCdY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-623955102-e4400a2d36214f59b5144d3b94b2d55f.jpg",
    priceRange: "$3-$8",
    accuracy: "±2°F",
    features: [
      "Adheres to outside of tank",
      "Color-changing display",
      "No batteries required",
      "Compact and discreet",
      "Works through glass"
    ],
    pros: [
      "Very affordable",
      "Easy installation",
      "Never needs batteries",
      "Safe for all fish"
    ],
    cons: [
      "Less accurate",
      "No alarm function",
      "Hard to read in some lighting",
      "Can peel off over time"
    ],
    bestFor: "Budget-conscious beginners or as a backup thermometer",
    rating: 3
  },
  {
    id: 3,
    name: "Floating or Standing Glass Thermometers",
    type: "Traditional Glass",
    imageUrl: "https://www.thesprucepets.com/thmb/n-BUPsluHbZ8sLBjYs4OGxqyjVM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-623713564-ed3fbcd194694ed59705b8b1cbb0f980.jpg",
    priceRange: "$4-$10",
    accuracy: "±1°F",
    features: [
      "Classic mercury or alcohol design",
      "Floats or stands in tank",
      "Direct water contact",
      "No power needed",
      "Durable construction"
    ],
    pros: [
      "Reliable and accurate",
      "No batteries required",
      "Time-tested design",
      "Affordable"
    ],
    cons: [
      "Can break and harm fish",
      "No alarm function",
      "Must look inside tank to read",
      "Mercury models are toxic if broken"
    ],
    bestFor: "Traditional aquarists who prefer simple, reliable equipment",
    rating: 3
  }
];

export const products: Product[] = [
  {
    name: "Fish Tank Digital Thermometer with Accurate LED Display",
    affiliateLink: "https://amzn.to/3KjYQ2w",
    features: [
      "HD LED Display: Wide viewing angle, easy to read day or night with saturated colors",
      "Cordless & Touch Design: External sensing probe, no messy wires in water",
      "High Accurate Display: 0-140°F range, accurate to ±0.9°F, 5s refresh speed",
      "Long Battery Life: Built-in 3V button battery, mini design, suitable for all water types",
      "Temperature Alarm: Set high/low temperature alerts to protect your fish"
    ],
    description: "Our top recommendation for aquarists who need reliable temperature monitoring with alarm capability. The LED display is crystal clear and the cordless design keeps your tank clean.",
    price: "$15-18",
    rating: 5
  },
  {
    name: "Aquarium Thermometer with LCD Display and Probe",
    affiliateLink: "https://amzn.to/48dx4wK",
    features: [
      "Wide Application: Ideal for aquarium, terrarium, or vivarium environments",
      "Easy to Read: Large 2.3\" x 1.5\" LCD display",
      "Easy Setup: Submerge probe with suction cup (probe only, not the thermometer)",
      "Free Battery: Includes LR44 button cell battery",
      "Wide Range: Measures -58°F to +158°F with ±1°C accuracy"
    ],
    description: "A reliable budget-friendly option with accurate readings and easy installation. Perfect for standard freshwater or saltwater setups.",
    price: "$8-12",
    rating: 4
  },
  {
    name: "LCD Digital Aquarium Thermometer with Precision Readings",
    affiliateLink: "https://amzn.to/4rcojvz",
    features: [
      "Precision Display: Temperature readings to within 0.1 degree accuracy",
      "Easy Installation: Suction cup probe, easy to read LCD screen",
      "Compact Design: Large display in discrete package for aesthetic tanks",
      "Wide Temperature Range: -50°C to +70°C operating range",
      "Included Battery: Powered by one LR44 button cell (included)"
    ],
    description: "Best value for accuracy-focused aquarists. The 0.1-degree precision helps you maintain perfect water conditions for sensitive species.",
    price: "$10-14",
    rating: 4
  }
];

export const proTips: ProTip[] = [
  {
    icon: "🌡️",
    text: "Place thermometer away from heaters and filters for accurate readings"
  },
  {
    icon: "⚠️",
    text: "Set alarm 2-3°F outside your target range to catch problems early"
  },
  {
    icon: "🔄",
    text: "Replace batteries annually or keep a backup thermometer"
  },
  {
    icon: "📊",
    text: "Check temperature twice daily - morning and evening"
  },
  {
    icon: "🎯",
    text: "Digital thermometers with external probes are most accurate"
  }
];

export const temperatureGuides: TemperatureGuide[] = [
  {
    fishType: "Tropical Freshwater",
    tempRange: "75-80°F (24-27°C)",
    icon: "🐠"
  },
  {
    fishType: "Goldfish & Cold Water",
    tempRange: "65-72°F (18-22°C)",
    icon: "🐟"
  },
  {
    fishType: "Marine/Saltwater",
    tempRange: "76-82°F (24-28°C)",
    icon: "🌊"
  },
  {
    fishType: "Discus & Amazon",
    tempRange: "82-86°F (28-30°C)",
    icon: "🔥"
  },
  {
    fishType: "Reef Tanks",
    tempRange: "75-78°F (24-26°C)",
    icon: "🪸"
  }
];
