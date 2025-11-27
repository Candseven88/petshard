// Article Structure Generator - Creates consistent article outlines
import { ArticleStructure, FAQItem, GenerationConfig, DEFAULT_CONFIG } from './types';

export class ArticleStructureGenerator {
  private config: GenerationConfig;

  constructor(config: GenerationConfig = DEFAULT_CONFIG) {
    this.config = config;
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
    return `When it comes to ${keyword}, pet owners often have many questions and concerns. Understanding the fundamentals of ${keyword} is crucial for providing the best care for your beloved companion. This comprehensive guide will walk you through everything you need to know, from basic concepts to advanced techniques.

Whether you're a first-time pet owner or an experienced enthusiast, this information will help you make informed decisions and ensure your pet's wellbeing. The world of pet care is constantly evolving, with new research and techniques emerging regularly. Staying informed about best practices helps create stronger bonds between pets and their families.

Professional veterinarians and animal behaviorists emphasize the importance of education in pet ownership. By understanding key concepts and applying proven methods, pet owners can provide optimal care while preventing common issues. This guide combines expert knowledge with practical advice to support your journey as a responsible pet owner.`;
  }

  private generateCoreContent(keyword: string): string {
    return `${this.capitalizeWords(keyword)} encompasses several important aspects that every pet owner should understand. The key elements include proper identification, health considerations, behavioral patterns, and care requirements. When dealing with this topic, it's essential to consider factors such as individual pet needs, environmental conditions, and long-term health implications.

Research shows that understanding these concepts can significantly improve pet health outcomes and strengthen the bond between pets and their owners. Professional veterinarians recommend staying informed about developments and best practices in pet care. This knowledge helps pet owners recognize important signs, make appropriate decisions, and provide optimal care for their companions.

The science behind pet care continues to evolve, with new discoveries and techniques emerging regularly. Modern approaches emphasize prevention, early intervention, and holistic care strategies. By staying current with information and research, pet owners can ensure they're providing the most effective care possible.

Proper nutrition plays a fundamental role in pet health and wellbeing. Understanding dietary requirements, feeding schedules, and nutritional supplements helps maintain optimal health throughout your pet's life. Different life stages require different nutritional approaches, from puppy and kitten formulas to senior pet diets.

Exercise and mental stimulation are equally important components of comprehensive pet care. Regular physical activity helps maintain healthy weight, supports cardiovascular health, and provides essential mental enrichment. Interactive toys, training sessions, and socialization opportunities contribute to balanced development and behavioral health.

Environmental factors significantly impact pet wellbeing and comfort. Creating safe, comfortable living spaces with appropriate temperature, lighting, and enrichment supports both physical and psychological health. Regular veterinary checkups and preventive care help identify potential issues before they become serious problems.`;
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
    const faqTemplates = [
      {
        question: `What is this topic and why is it important?`,
        answer: `This subject refers to important aspects of pet care that directly impact your pet's health and wellbeing. Understanding these concepts helps ensure proper care and early detection of potential issues.`
      },
      {
        question: `How often should I consider this for my pet?`,
        answer: `The frequency depends on various factors including your pet's age, breed, health status, and individual needs. Consult with your veterinarian for personalized recommendations regarding care schedules.`
      },
      {
        question: `What are the signs that indicate attention is needed?`,
        answer: `Common signs include changes in behavior, appetite, energy levels, or physical appearance. If you notice any unusual symptoms, contact your veterinarian promptly for professional assessment.`
      },
      {
        question: `Can I handle this at home or do I need professional help?`,
        answer: `While some aspects can be managed at home with proper knowledge, professional guidance is recommended for complex situations. Always consult with qualified professionals when in doubt about care decisions.`
      },
      {
        question: `What are the costs associated with proper care?`,
        answer: `Costs vary depending on location, complexity, and specific requirements. Investing in proper care often prevents more expensive issues later and supports long-term health.`
      },
      {
        question: `How do I choose the right approach?`,
        answer: `Consider your pet's individual needs, your experience level, available resources, and professional recommendations when selecting care approaches. Research and consultation are key to success.`
      },
      {
        question: `What mistakes should I avoid?`,
        answer: `Common mistakes include inadequate research, ignoring professional advice, rushing the process, and not considering individual pet needs. Take time to understand proper techniques and methods.`
      },
      {
        question: `Is this approach suitable for all pets?`,
        answer: `Care considerations vary by species, breed, age, and individual health conditions. What works for one pet may not be appropriate for another. Always consider your pet's specific needs when making care decisions.`
      },
      {
        question: `How long does it take to see results?`,
        answer: `The timeline for results depends on various factors including the specific approach used, your pet's condition, and consistency of application. Some aspects may show immediate effects while others require patience and persistence.`
      },
      {
        question: `What resources are available for learning more?`,
        answer: `Reliable resources include veterinary professionals, peer-reviewed research, reputable pet care organizations, and educational materials from established institutions. Always verify information from multiple credible sources.`
      },
      {
        question: `How do I know if my approach is working?`,
        answer: `Monitor your pet's response through regular observation, tracking changes in behavior or condition, and consulting with professionals. Keep detailed records to assess progress over time.`
      },
      {
        question: `What should I do if methods don't seem to be helping my pet?`,
        answer: `If approaches aren't producing expected results, consult with a veterinary professional immediately. They can assess the situation, adjust the approach, or recommend alternative strategies for your pet's specific needs.`
      }
    ];

    const requiredCount = Math.max(this.config.minFAQItems, 5);
    
    // If we need more FAQs than available templates, generate additional ones
    if (requiredCount > faqTemplates.length) {
      const additionalFAQs = this.generateAdditionalFAQs(keyword, requiredCount - faqTemplates.length);
      faqTemplates.push(...additionalFAQs);
    }

    // Return the required number of FAQ items
    const shuffled = faqTemplates.sort(() => 0.5 - Math.random());
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