// Article Structure Generator - Creates consistent article outlines
import { ArticleStructure, FAQItem, GenerationConfig, DEFAULT_CONFIG } from './types';

// Breed-specific data for generating specific content
const BREED_DATA: Record<string, {
  breeds: string[];
  characteristics: string[];
  sizes: string[];
  lifespans: string[];
  costs: string[];
  healthIssues: string[];
}> = {
  'dog': {
    breeds: ['Labrador Retriever', 'Golden Retriever', 'Beagle', 'Bulldog', 'Poodle', 'German Shepherd', 'Dachshund', 'Husky', 'Boxer', 'Corgi'],
    characteristics: ['friendly', 'intelligent', 'energetic', 'loyal', 'protective', 'playful', 'calm', 'independent', 'social', 'trainable'],
    sizes: ['25-35 pounds', '55-80 pounds', '20-30 pounds', '40-50 pounds', '45-70 pounds', '50-90 pounds', '16-32 pounds', '35-60 pounds', '60-80 pounds', '24-38 pounds'],
    lifespans: ['10-12 years', '10-12 years', '12-15 years', '8-10 years', '12-15 years', '9-13 years', '12-16 years', '12-14 years', '10-12 years', '12-13 years'],
    costs: ['$800-$1200', '$500-$2000', '$300-$1500', '$300-$2000', '$600-$2000', '$500-$1500', '$400-$1200', '$600-$1500', '$500-$2500', '$400-$1800'],
    healthIssues: ['hip dysplasia', 'ear infections', 'obesity', 'breathing problems', 'patellar luxation', 'bloat', 'back problems', 'eye conditions', 'heart disease', 'allergies']
  },
  'cat': {
    breeds: ['Persian', 'Maine Coon', 'Siamese', 'Bengal', 'Ragdoll', 'British Shorthair', 'Sphynx', 'Scottish Fold', 'Abyssinian', 'Birman'],
    characteristics: ['affectionate', 'independent', 'playful', 'vocal', 'calm', 'active', 'social', 'curious', 'intelligent', 'gentle'],
    sizes: ['7-10 pounds', '10-25 pounds', '6-10 pounds', '8-15 pounds', '8-15 pounds', '7-17 pounds', '6-12 pounds', '6-13 pounds', '7-10 pounds', '7-12 pounds'],
    lifespans: ['12-17 years', '12-18 years', '8-15 years', '12-16 years', '12-17 years', '12-20 years', '8-14 years', '11-15 years', '9-13 years', '12-17 years'],
    costs: ['$600-$1500', '$400-$1500', '$400-$1000', '$800-$3000', '$400-$1000', '$300-$1000', '$1500-$3000', '$200-$1500', '$300-$1000', '$400-$1200'],
    healthIssues: ['respiratory issues', 'hip dysplasia', 'crossed eyes', 'heart disease', 'kidney disease', 'dental disease', 'skin conditions', 'ear mites', 'urinary issues', 'obesity']
  }
};

export class ArticleStructureGenerator {
  private config: GenerationConfig;
  private breedData: typeof BREED_DATA;

  constructor(config: GenerationConfig = DEFAULT_CONFIG) {
    this.config = config;
    this.breedData = BREED_DATA;
  }

  /**
   * Generates a complete article structure for a given keyword
   */
  generateStructure(keyword: string): ArticleStructure {
    if (!keyword || keyword.trim().length === 0) {
      throw new Error('Keyword cannot be empty');
    }

    const normalizedKeyword = keyword.trim().toLowerCase();
    const title = this.generateTitle(normalizedKeyword);
    const summary = this.generateSummary(normalizedKeyword);
    
    return {
      title,
      summary,
      sections: {
        introduction: this.generateIntroduction(normalizedKeyword),
        coreContent: this.generateCoreContent(normalizedKeyword),
        useCases: this.generateUseCases(normalizedKeyword),
        faq: this.generateFAQ(normalizedKeyword),
        conclusion: this.generateConclusion(normalizedKeyword)
      },
      metadata: {
        title,
        description: summary,
        keywords: [normalizedKeyword, ...this.generateRelatedKeywords(normalizedKeyword)],
      },
      internalLinks: [] // Will be populated by InternalLinkManager
    };
  }

  /**
   * Generates multiple article structures for batch processing
   */
  generateBatchStructures(keywords: string[]): ArticleStructure[] {
    if (!keywords || keywords.length === 0) {
      throw new Error('Keywords array cannot be empty');
    }

    return keywords.map(keyword => this.generateStructure(keyword));
  }

  /**
   * Validates that generated structure meets requirements
   */
  validateStructure(structure: ArticleStructure): boolean {
    // Check required sections exist
    if (!structure.title || !structure.summary) return false;
    if (!structure.sections.introduction || !structure.sections.coreContent) return false;
    if (!structure.sections.conclusion) return false;
    
    // Check minimum content requirements
    if (structure.sections.useCases.length < this.config.minUseCases) return false;
    if (structure.sections.faq.length < this.config.minFAQItems) return false;
    
    // Check summary length
    if (structure.summary.length < this.config.summaryMinLength || 
        structure.summary.length > this.config.summaryMaxLength) return false;
    
    return true;
  }

  private generateTitle(keyword: string): string {
    const capitalizedKeyword = this.capitalizeWords(keyword);
    
    // Different templates based on keyword type
    const breedTemplates = [
      `${capitalizedKeyword}: Complete Breed Guide and Care Tips`,
      `Everything About ${capitalizedKeyword} - Breed Information`,
      `${capitalizedKeyword} Breed Guide: Health, Care & Training`,
      `Understanding the ${capitalizedKeyword}: Complete Owner's Guide`
    ];
    
    const careTemplates = [
      `Complete Guide to ${capitalizedKeyword}`,
      `${capitalizedKeyword}: Expert Tips and Best Practices`,
      `Mastering ${capitalizedKeyword} - Professional Guide`,
      `The Ultimate ${capitalizedKeyword} Resource for Pet Owners`
    ];
    
    const healthTemplates = [
      `${capitalizedKeyword}: Health Guide for Pet Owners`,
      `Understanding ${capitalizedKeyword} - Symptoms and Solutions`,
      `${capitalizedKeyword} Prevention and Treatment Guide`,
      `Complete ${capitalizedKeyword} Health Resource`
    ];
    
    // Choose template set based on keyword content
    let templates = careTemplates; // default
    if (keyword.includes('breed') || keyword.includes('dog') || keyword.includes('cat')) {
      templates = breedTemplates;
    } else if (keyword.includes('health') || keyword.includes('disease') || keyword.includes('illness')) {
      templates = healthTemplates;
    }

    return templates[Math.floor(Math.random() * templates.length)];
  }

  private generateSummary(keyword: string): string {
    const summaries = [
      `Discover essential information about ${keyword} with expert insights and practical advice.`,
      `Learn everything about ${keyword} from basics to advanced care tips.`,
      `Complete ${keyword} guide covering health, care, and best practices.`,
      `Expert advice on ${keyword} for pet owners and enthusiasts.`,
      `Comprehensive ${keyword} information for better pet care decisions.`
    ];

    const summary = summaries[Math.floor(Math.random() * summaries.length)];
    
    // Ensure summary is within character limits
    if (summary.length < this.config.summaryMinLength) {
      return summary + ' Get started with our detailed guide today.';
    }
    if (summary.length > this.config.summaryMaxLength) {
      return summary.substring(0, this.config.summaryMaxLength - 3) + '...';
    }
    
    return summary;
  }

  private generateIntroduction(keyword: string): string {
    const keywordLower = keyword.toLowerCase();
    let intentKeywords = '';
    
    // Add search intent keywords based on keyword type
    if (keywordLower.includes('family')) {
      intentKeywords = 'family-friendly, children, gentle, safe, and reliable';
    } else if (keywordLower.includes('apartment')) {
      intentKeywords = 'apartment-suitable, small, quiet, low-energy, and space-efficient';
    } else if (keywordLower.includes('health')) {
      intentKeywords = 'health-conscious, preventive care, symptoms, and wellness';
    } else if (keywordLower.includes('exercise')) {
      intentKeywords = 'active, energetic, exercise needs, and activity levels';
    } else if (keywordLower.includes('temperament')) {
      intentKeywords = 'personality, behavior, temperament, and social traits';
    } else if (keywordLower.includes('cost')) {
      intentKeywords = 'affordable, budget-friendly, pricing, and expenses';
    } else if (keywordLower.includes('training')) {
      intentKeywords = 'trainable, intelligent, obedient, and responsive';
    } else {
      intentKeywords = 'comprehensive, detailed, and practical';
    }

    return `When it comes to ${keyword}, pet owners often have many questions and concerns about finding ${intentKeywords} options. Understanding the fundamentals of ${keyword} is crucial for providing the best care for your beloved companion. This comprehensive guide will walk you through everything you need to know, from basic concepts to advanced techniques.

Whether you're a first-time pet owner or an experienced enthusiast, this information will help you make informed decisions and ensure your pet's wellbeing. The world of pet care is constantly evolving, with new research and techniques emerging regularly. Staying informed about best practices helps create stronger bonds between pets and their families.

Professional veterinarians and animal behaviorists emphasize the importance of education in pet ownership. By understanding key concepts and applying proven methods, pet owners can provide optimal care while preventing common issues. This guide combines expert knowledge with practical advice to support your journey as a responsible pet owner.`;
  }

  private generateCoreContent(keyword: string): string {
    const keywordLower = keyword.toLowerCase();
    let specificContent = '';

    // Generate care guide content if keyword contains care-related terms
    if (keywordLower.includes('groom') || keywordLower.includes('train') || keywordLower.includes('care') || 
        keywordLower.includes('nutrition') || keywordLower.includes('exercise') || keywordLower.includes('first aid') ||
        keywordLower.includes('treat') || keywordLower.includes('walk') || keywordLower.includes('identification') ||
        keywordLower.includes('guide') || keywordLower.includes('tips') || keywordLower.includes('humidity') ||
        keywordLower.includes('litter') || keywordLower.includes('bird') || keywordLower.includes('reptile')) {
      specificContent = this.generateCareGuideContent(keyword);
    }
    // Generate breed-specific content if keyword contains breed-related terms
    else if (keywordLower.includes('breed') || keywordLower.includes('dog') || keywordLower.includes('cat')) {
      const petType = keywordLower.includes('cat') ? 'cat' : 'dog';
      const data = this.breedData[petType];
      
      if (data) {
        // Include specific breed names
        const selectedBreeds = data.breeds.slice(0, 3);
        const breedList = selectedBreeds.join(', ');
        
        // Include specific characteristics
        const selectedCharacteristics = data.characteristics.slice(0, 4).join(', ');
        
        // Include specific data points
        const sizeExample = data.sizes[0];
        const lifespanExample = data.lifespans[0];
        const costExample = data.costs[0];
        const healthExample = data.healthIssues[0];
        
        specificContent = `When considering ${keyword}, several specific breeds stand out: ${breedList}. Each breed has unique characteristics including ${selectedCharacteristics}. Understanding ${keyword} is essential for making informed decisions about which breed suits your lifestyle.

${this.capitalizeWords(selectedBreeds[0])} is a top choice when looking at ${keyword}. This breed typically weighs ${sizeExample} and lives ${lifespanExample}, with an average cost of ${costExample}. These dogs are known for their intelligence and loyalty. Common health considerations for this ${keyword} include ${healthExample}, which responsible breeders screen for.

${this.capitalizeWords(selectedBreeds[1])} represents another excellent option within ${keyword} categories. This breed weighs ${data.sizes[1]} with a lifespan of ${data.lifespans[1]}. The typical cost ranges from ${data.costs[1]}. This ${keyword} breed excels in family environments and requires regular exercise.

${this.capitalizeWords(selectedBreeds[2])} rounds out our top recommendations for ${keyword}. This breed weighs ${data.sizes[2]} and lives ${data.lifespans[2]}. Initial costs are approximately ${data.costs[2]}, with ongoing care expenses for food, veterinary care, and grooming.

Proper nutrition plays a fundamental role in ${petType} health and wellbeing. Understanding dietary requirements, feeding schedules, and nutritional supplements helps maintain optimal health throughout your pet's life. Different life stages require different nutritional approaches, from puppy and kitten formulas to senior pet diets. When selecting a ${keyword}, consider the breed's specific nutritional needs.

Exercise and mental stimulation are equally important components of comprehensive pet care for any ${keyword}. Regular physical activity helps maintain healthy weight, supports cardiovascular health, and provides essential mental enrichment. Interactive toys, training sessions, and socialization opportunities contribute to balanced development and behavioral health. Different ${keyword} have varying exercise requirements.

Environmental factors significantly impact pet wellbeing and comfort for every ${keyword}. Creating safe, comfortable living spaces with appropriate temperature, lighting, and enrichment supports both physical and psychological health. Regular veterinary checkups and preventive care help identify potential issues before they become serious problems. Understanding the specific needs of your chosen ${keyword} ensures optimal care.`;
      }
    }

    // Fallback to generic content if not breed-specific or care-specific
    if (!specificContent) {
      specificContent = `${this.capitalizeWords(keyword)} encompasses several important aspects that every pet owner should understand. The key elements include proper identification, health considerations, behavioral patterns, and care requirements. When dealing with ${keyword}, it's essential to consider factors such as individual pet needs, environmental conditions, and long-term health implications.

Research shows that understanding ${keyword} can significantly improve pet health outcomes and strengthen the bond between pets and their owners. Professional veterinarians recommend staying informed about developments and best practices related to ${keyword}. This knowledge helps pet owners recognize important signs, make appropriate decisions, and provide optimal care for their companions.

The science behind ${keyword} continues to evolve, with new discoveries and techniques emerging regularly. Modern approaches to ${keyword} emphasize prevention, early intervention, and holistic care strategies. By staying current with information and research about ${keyword}, pet owners can ensure they're providing the most effective care possible.

Proper nutrition plays a fundamental role in pet health and wellbeing, especially when considering ${keyword}. Understanding dietary requirements, feeding schedules, and nutritional supplements helps maintain optimal health throughout your pet's life. Different life stages require different nutritional approaches, from puppy and kitten formulas to senior pet diets. When addressing ${keyword}, nutrition is often a key factor.

Exercise and mental stimulation are equally important components of comprehensive pet care related to ${keyword}. Regular physical activity helps maintain healthy weight, supports cardiovascular health, and provides essential mental enrichment. Interactive toys, training sessions, and socialization opportunities contribute to balanced development and behavioral health. Addressing ${keyword} requires attention to exercise needs.

Environmental factors significantly impact pet wellbeing and comfort when managing ${keyword}. Creating safe, comfortable living spaces with appropriate temperature, lighting, and enrichment supports both physical and psychological health. Regular veterinary checkups and preventive care help identify potential issues before they become serious problems. Understanding how environment affects ${keyword} is crucial for pet owners.`;
    }

    return specificContent;
  }

  private generateCareGuideContent(keyword: string): string {
    const keywordLower = keyword.toLowerCase();
    
    // Generate supplies list
    const suppliesSection = this.generateSuppliesSection(keyword);
    
    // Generate step-by-step guide
    const stepsSection = this.generateStepsSection(keyword);
    
    // Generate breed variations
    const variationsSection = this.generateVariationsSection(keyword);
    
    // Generate professional help section
    const professionalSection = this.generateProfessionalHelpSection(keyword);
    
    return `## Why ${this.capitalizeWords(keyword)} Matters

Regular ${keyword} is essential for maintaining your pet's health, comfort, and wellbeing. Professional guidance can be expensive, but with the right techniques and knowledge, you can achieve excellent results at home. This comprehensive guide will walk you through step-by-step procedures and best practices.

${suppliesSection}

${stepsSection}

${variationsSection}

${professionalSection}

## Key Takeaways

Understanding proper ${keyword} techniques ensures your pet receives optimal care. By following these guidelines and remaining consistent with your approach, you'll strengthen your bond with your pet while maintaining their health and happiness. Remember that every pet is unique, and adjustments may be needed based on individual needs.`;
  }

  private generateSuppliesSection(keyword: string): string {
    const keywordLower = keyword.toLowerCase();
    let supplies: string[] = [];
    
    if (keywordLower.includes('groom')) {
      supplies = [
        'Dog shampoo (appropriate for coat type)',
        'Conditioner (optional but recommended)',
        'Non-slip bath mat',
        'Towels or microfiber drying towel',
        'Slicker brush (for mats and tangles)',
        'Metal comb (for fine detailing)',
        'Dog nail clippers (scissor or guillotine style)',
        'Styptic powder (for bleeding)',
        'Ear cleaning solution',
        'Cotton balls or gauze pads'
      ];
    } else if (keywordLower.includes('train')) {
      supplies = [
        'High-value training treats',
        'Clicker (for clicker training)',
        'Leash and collar',
        'Training harness (optional)',
        'Toys for positive reinforcement',
        'Training mat or designated area',
        'Treat pouch for easy access',
        'Notebook for tracking progress',
        'Training guide or manual',
        'Patience and consistency'
      ];
    } else if (keywordLower.includes('nutrition')) {
      supplies = [
        'High-quality pet food (appropriate for age/size)',
        'Food and water bowls',
        'Measuring cup for portions',
        'Food storage container',
        'Supplements (if recommended)',
        'Treats for training',
        'Feeding schedule chart',
        'Nutritional information guide',
        'Veterinary consultation notes',
        'Weight tracking log'
      ];
    } else if (keywordLower.includes('first aid')) {
      supplies = [
        'First aid kit for pets',
        'Bandages and gauze pads',
        'Antiseptic solution',
        'Tweezers (for splinter removal)',
        'Thermometer (pet-specific)',
        'Pain relief medication',
        'Antibiotic ointment',
        'Saline solution',
        'Emergency contact numbers',
        'Pet medical records'
      ];
    } else {
      supplies = [
        'Essential tools and equipment',
        'Quality materials and products',
        'Reference guides and manuals',
        'Cleaning and maintenance supplies',
        'Safety equipment',
        'Record-keeping materials',
        'Professional resources',
        'Training aids',
        'Comfort items',
        'Emergency supplies'
      ];
    }
    
    const suppliesList = supplies.map(s => `• ${s}`).join('\n');
    return `## Essential Supplies and Tools

Before starting, gather these supplies:

${suppliesList}`;
  }

  private generateStepsSection(keyword: string): string {
    const steps = [
      {
        title: 'Step 1: Preparation',
        content: 'Gather all supplies and arrange them within reach. Set up your workspace with good lighting and a comfortable, non-slip surface. Ensure the environment is calm and your pet is relaxed. Pro tip: Start with short sessions and gradually increase duration. Common mistake: Rushing the preparation phase or working with an anxious pet.'
      },
      {
        title: 'Step 2: Initial Assessment',
        content: 'Examine your pet\'s current condition and identify any specific needs or concerns. Check for any health issues or areas requiring special attention. Take time to understand your pet\'s comfort level and preferences. Pro tip: Document observations for future reference. Common mistake: Skipping this important assessment step.'
      },
      {
        title: 'Step 3: Main Procedure',
        content: 'Execute the primary task using proper techniques and gentle handling. Work systematically and maintain a calm demeanor throughout. Pay attention to your pet\'s comfort and adjust as needed. Pro tip: Use positive reinforcement and rewards frequently. Common mistake: Applying too much pressure or moving too quickly.'
      },
      {
        title: 'Step 4: Detailed Work',
        content: 'Complete any detailed or specialized work required. Focus on areas that need extra attention or precision. Take breaks if your pet becomes stressed or tired. Pro tip: Work in sections and reward completion of each section. Common mistake: Neglecting difficult areas or rushing through important details.'
      },
      {
        title: 'Step 5: Finishing and Cleanup',
        content: 'Complete the final touches and ensure everything is properly finished. Clean up your workspace and put away all supplies. Reward your pet for their cooperation and patience. Pro tip: End on a positive note with treats and praise. Common mistake: Forgetting to reward your pet or leaving the area messy.'
      },
      {
        title: 'Step 6: Follow-up Care',
        content: 'Monitor your pet for any issues or concerns following the procedure. Provide appropriate aftercare as needed. Schedule follow-up appointments or sessions if necessary. Pro tip: Keep records of what was done and how your pet responded. Common mistake: Ignoring signs of discomfort or complications.'
      }
    ];
    
    const stepsContent = steps.map(step => `### ${step.title}\n\n${step.content}`).join('\n\n');
    return `## Complete Step-by-Step Guide\n\n${stepsContent}`;
  }

  private generateVariationsSection(keyword: string): string {
    const variations = [
      {
        type: 'Short-Haired Breeds',
        content: 'Short-haired breeds like Labradors and Beagles require less frequent sessions but benefit from regular maintenance. Focus on shedding control and skin health. Frequency: Every 8-12 weeks.'
      },
      {
        type: 'Long-Haired Breeds',
        content: 'Long-haired breeds like Golden Retrievers require more frequent attention to prevent matting. Daily brushing is often necessary. Frequency: Every 4-6 weeks.'
      },
      {
        type: 'Double-Coated Breeds',
        content: 'Double-coated breeds like German Shepherds need special attention to the undercoat. Use appropriate tools for their coat type. Frequency: Every 6-8 weeks, more during shedding season.'
      },
      {
        type: 'Senior Pets',
        content: 'Senior pets may require gentler handling and shorter sessions. Watch for signs of discomfort or fatigue. Adjust techniques based on mobility and health status.'
      }
    ];
    
    const variationsContent = variations.map(v => `### ${v.type}\n\n${v.content}`).join('\n\n');
    return `## Breed and Type-Specific Variations\n\n${variationsContent}`;
  }

  private generateProfessionalHelpSection(keyword: string): string {
    return `## When to Seek Professional Help

Consider professional assistance if your pet has severe issues, anxiety during procedures, or complex needs requiring specialized expertise. Professional providers can also identify health issues that need veterinary attention.

**Cost Expectations:** Professional services typically range from $50-$150+ depending on your pet's size and specific needs.

**Finding Professionals:** Ask your veterinarian for recommendations, check online reviews, and visit facilities to ensure they meet your standards.

**Frequency Recommendations:** Most pets benefit from professional services every 6-8 weeks, with home maintenance between appointments.`;
  }

  private generateUseCases(keyword: string): string[] {
    const useCases = [
      `New pet owners learning about ${keyword} for the first time`,
      `Experienced pet owners seeking advanced care techniques and methods`,
      `Pet professionals working in clinical and veterinary settings`,
      `Breeders focusing on optimal health and breeding programs`,
      `Veterinarians educating clients about best practices and care`,
      `Pet enthusiasts researching information for competitions and shows`,
      `Rescue organizations dealing with rehabilitation and care challenges`,
      `Pet sitters managing various care situations and requirements`
    ];

    // Return at least the minimum required use cases
    const shuffled = useCases.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.max(this.config.minUseCases, 3));
  }

  private generateFAQ(keyword: string): FAQItem[] {
    const keywordLower = keyword.toLowerCase();
    let specificFAQs: FAQItem[] = [];

    // Generate specific FAQs based on keyword type
    if (keywordLower.includes('breed')) {
      specificFAQs = [
        {
          question: `What are the best dog breeds for families?`,
          answer: `Labrador Retrievers, Golden Retrievers, and Beagles are excellent family choices. They're known for their friendly temperament, patience with children, and loyalty. These breeds typically weigh 20-80 pounds and live 10-15 years.`
        },
        {
          question: `What breed is best for apartment living?`,
          answer: `Smaller breeds like Dachshunds, Corgis, and French Bulldogs adapt well to apartments. They require less space and moderate exercise. These breeds typically weigh 15-40 pounds and are quieter than larger breeds.`
        },
        {
          question: `How much do different dog breeds cost?`,
          answer: `Costs vary significantly by breed. Labrador Retrievers typically cost $800-$1200, while rare breeds can cost $2000-$5000. Adoption from shelters is usually $50-$300 and includes vaccinations.`
        },
        {
          question: `What health issues are common in specific breeds?`,
          answer: `Different breeds have predispositions to specific conditions. Labradors may develop hip dysplasia, while Bulldogs can have breathing problems. Responsible breeders screen for these genetic conditions.`
        },
        {
          question: `How much exercise do different breeds need?`,
          answer: `High-energy breeds like Huskies and Border Collies need 1-2 hours daily. Moderate-energy breeds like Beagles need 30-60 minutes. Low-energy breeds like Bulldogs need 20-30 minutes of daily activity.`
        },
        {
          question: `What's the lifespan of different dog breeds?`,
          answer: `Small breeds typically live 12-18 years, while large breeds live 8-12 years. Labrador Retrievers live 10-12 years, Golden Retrievers 10-12 years, and Dachshunds 12-16 years.`
        },
        {
          question: `Which breeds are easiest to train?`,
          answer: `Intelligent, eager-to-please breeds like Poodles, German Shepherds, and Golden Retrievers are easiest to train. They respond well to positive reinforcement and learn commands quickly.`
        }
      ];
    } else if (keywordLower.includes('health')) {
      specificFAQs = [
        {
          question: `What are common pet health symptoms?`,
          answer: `Common symptoms include lethargy, loss of appetite, vomiting, diarrhea, excessive thirst, and behavioral changes. Any persistent symptoms warrant veterinary evaluation.`
        },
        {
          question: `When should I call the veterinarian?`,
          answer: `Contact your vet immediately for severe symptoms like difficulty breathing, uncontrolled bleeding, or inability to urinate. Schedule appointments within 24 hours for moderate symptoms like persistent vomiting.`
        },
        {
          question: `How often should my pet have checkups?`,
          answer: `Healthy adult pets need annual checkups. Senior pets (over 7 years) should have checkups every 6 months. Puppies and kittens need checkups every 3-4 weeks until 16 weeks old.`
        },
        {
          question: `What vaccinations does my pet need?`,
          answer: `Core vaccinations include rabies and DHPP for dogs, and rabies and FVRCP for cats. Puppies need vaccines at 6, 9, 12, and 16 weeks. Boosters are needed every 1-3 years.`
        },
        {
          question: `How can I prevent common pet diseases?`,
          answer: `Prevention includes regular vaccinations, parasite prevention, dental care, proper nutrition, and exercise. Regular veterinary checkups help catch issues early.`
        },
        {
          question: `What should I do in a pet emergency?`,
          answer: `Contact an emergency veterinary clinic immediately. Have your pet's medical records and vaccination history available. Keep emergency contact numbers posted at home.`
        },
        {
          question: `How much does pet healthcare cost?`,
          answer: `Annual checkups cost $100-$300. Emergency visits can cost $500-$2000. Pet insurance can help manage costs, typically ranging from $20-$50 monthly.`
        }
      ];
    } else if (keywordLower.includes('care') || keywordLower.includes('training')) {
      specificFAQs = [
        {
          question: `How often should I groom my pet?`,
          answer: `Grooming frequency depends on breed and coat type. Long-haired breeds need grooming every 4-8 weeks. Short-haired breeds need grooming every 8-12 weeks. Regular brushing helps prevent matting and skin issues.`
        },
        {
          question: `What's the best way to train my pet?`,
          answer: `Use positive reinforcement with treats and praise. Keep training sessions short (5-10 minutes). Be consistent with commands and rules. Consider professional training for complex behaviors.`
        },
        {
          question: `How much exercise does my pet need?`,
          answer: `Most adult dogs need 30 minutes to 2 hours daily, depending on breed and age. Cats need 15-30 minutes of active play. Senior pets need shorter, gentler exercise sessions.`
        },
        {
          question: `What should I feed my pet?`,
          answer: `Choose high-quality pet food appropriate for your pet's age, size, and health status. Puppies and kittens need specialized formulas. Senior pets benefit from joint-supporting nutrients.`
        },
        {
          question: `How do I socialize my pet?`,
          answer: `Expose puppies to different people, animals, and environments between 3-14 weeks. Adult pets benefit from regular interaction with other pets and people. Positive experiences build confidence.`
        },
        {
          question: `What behavioral issues are common?`,
          answer: `Common issues include excessive barking, aggression, separation anxiety, and destructive behavior. These often stem from lack of exercise, training, or socialization. Professional trainers can help.`
        },
        {
          question: `How do I handle pet anxiety?`,
          answer: `Create a safe space, maintain routines, and use calming techniques like music or pheromone diffusers. Anxiety wraps and supplements may help. Severe cases may require veterinary medication.`
        }
      ];
    }

    // Combine specific FAQs with generic templates
    const genericFAQs = [
      {
        question: `What is this topic and why is it important?`,
        answer: `This subject refers to important aspects of pet care that directly impact your pet's health and wellbeing. Understanding these concepts helps ensure proper care and early detection of potential issues.`
      },
      {
        question: `How do I choose the right approach?`,
        answer: `Consider your pet's individual needs, your experience level, available resources, and professional recommendations when selecting care approaches. Research and consultation are key to success.`
      },
      {
        question: `What mistakes should I avoid?`,
        answer: `Common mistakes include inadequate research, ignoring professional advice, rushing the process, and not considering individual pet needs. Take time to understand proper techniques and methods.`
      }
    ];

    const allFAQs = [...specificFAQs, ...genericFAQs];
    const requiredCount = Math.max(this.config.minFAQItems, 5);
    
    // If we need more FAQs than available, generate additional ones
    if (requiredCount > allFAQs.length) {
      const additionalFAQs = this.generateAdditionalFAQs(keyword, requiredCount - allFAQs.length);
      allFAQs.push(...additionalFAQs);
    }

    // Return the required number of FAQ items
    const shuffled = allFAQs.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, requiredCount);
  }

  private generateAdditionalFAQs(keyword: string, count: number): FAQItem[] {
    const additionalTemplates = [
      {
        question: `What are the latest developments in pet care?`,
        answer: `Recent advances include new research findings, improved techniques, and better understanding of pet needs. Stay updated with current veterinary literature and professional recommendations.`
      },
      {
        question: `How do care requirements differ between pet species?`,
        answer: `Care requirements and approaches can vary significantly between dogs, cats, birds, and other pets. Each species has unique needs that must be considered when developing care plans.`
      },
      {
        question: `What role does diet play in pet health?`,
        answer: `Nutrition often plays a crucial role in health outcomes. A balanced, species-appropriate diet can support your pet's overall health and may influence treatment effectiveness.`
      },
      {
        question: `Can environmental factors affect pet wellbeing?`,
        answer: `Environmental conditions such as temperature, humidity, stress levels, and living conditions can all impact pet health. Creating an optimal environment supports better outcomes.`
      },
      {
        question: `How do I prepare my pet for care procedures?`,
        answer: `Preparation may involve gradual introduction, environmental modifications, dietary adjustments, or behavioral conditioning. Proper preparation often improves success rates.`
      }
    ];

    return additionalTemplates.slice(0, count);
  }

  private generateConclusion(keyword: string): string {
    return `Understanding ${keyword} is essential for responsible pet ownership and ensuring your companion's health and happiness. By following the guidelines and recommendations outlined in this comprehensive guide, you'll be well-equipped to handle situations effectively. Remember that every pet is unique, and what works for one may not work for another.

Stay informed about the latest developments in research and best practices. Regular consultation with veterinary professionals, continued education, and careful observation of your pet will help you provide the best possible care. Building strong relationships with qualified professionals creates a support network for your pet's lifelong health.

The journey of pet ownership is rewarding but requires commitment, patience, and ongoing learning. By applying the knowledge gained from this guide and remaining open to new information, you can create an environment where your pet thrives. Remember that small, consistent efforts in daily care often yield the most significant long-term benefits.

With proper knowledge and attention to detail, you can ensure your pet lives a healthy, happy, and fulfilling life. The investment in understanding proper care techniques pays dividends in the form of stronger bonds, better health outcomes, and years of companionship with your beloved pet.`;
  }

  private generateRelatedKeywords(keyword: string): string[] {
    const related = [
      `${keyword} guide`,
      `${keyword} tips`,
      `${keyword} care`,
      `${keyword} health`,
      `${keyword} advice`
    ];
    return related;
  }

  private capitalizeWords(str: string): string {
    return str.replace(/\b\w/g, l => l.toUpperCase());
  }
}