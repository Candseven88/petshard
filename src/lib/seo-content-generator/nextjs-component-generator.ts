import { ArticleStructure, GeneratedArticle, FAQItem, InternalLink } from './types';

/**
 * NextJSComponentGenerator creates properly formatted TypeScript React components
 * for blog articles with consistent Tailwind CSS styling and SEO metadata
 */
export class NextJSComponentGenerator {
  private readonly siteUrl: string;
  private readonly siteName: string;

  constructor(siteUrl: string = 'https://petshard.com', siteName: string = 'PetShard') {
    this.siteUrl = siteUrl;
    this.siteName = siteName;
  }

  /**
   * Generate a complete Next.js page component from article structure
   */
  generateComponent(article: ArticleStructure, keyword: string): string {
    const componentName = this.generateComponentName(keyword);
    const slug = this.generateSlug(keyword);
    
    return `import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

${this.generateMetadataExport(article, slug)}

function ${componentName}Content() {
  return (
    <Layout title="Blog" showBackButton={true}>
      <article className="max-w-4xl mx-auto px-4">
        
        {/* ========== Header Section ========== */}
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/blog" className="hover:text-pink-600">Blog</Link>
            <span className="mx-2">›</span>
            <span>Pet Care</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ${this.escapeString(article.title)}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>🐾 Pet Care</span>
          </div>
        </header>

        <div className="relative h-64 md:h-96 w-full mb-12 rounded-xl overflow-hidden">
          <Image 
            src="https://cdn2.thecatapi.com/images/ag4.jpg" 
            alt="${this.escapeString(article.title)}" 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* ========== Introduction Section ========== */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
              Introduction
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              ${this.escapeString(article.summary)}
            </p>

            <p className="text-lg leading-relaxed">
              ${this.formatContent(article.sections.introduction)}
            </p>
          </div>

          {/* ========== Core Content Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ${this.generateSectionTitle(keyword)}
            </h2>

            <div className="space-y-6">
              ${this.formatContent(article.sections.coreContent)}
            </div>

            ${this.generateInternalLinksSection(article.internalLinks)}
          </div>

          {/* ========== Use Cases Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Practical Use Cases
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${this.generateUseCasesGrid(article.sections.useCases)}
            </div>
          </div>

          {/* ========== FAQ Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              ${this.generateFAQSection(article.sections.faq)}
            </div>
          </div>

          {/* ========== Conclusion Section ========== */}
          <div className="mb-12 bg-green-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
              Conclusion
            </h2>
            
            <p className="text-lg leading-relaxed">
              ${this.formatContent(article.sections.conclusion)}
            </p>
          </div>

          {/* ========== Related Tools Section ========== */}
          <div className="mb-12 bg-gradient-to-r from-pink-50 to-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Explore Our Pet Care Tools
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/breed-identification" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🔍 Breed Identification</h3>
                <p className="text-gray-600">Upload a photo to identify your pet's breed with AI-powered analysis.</p>
              </Link>
              
              <Link href="/health-center" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🏥 Health Center</h3>
                <p className="text-gray-600">Get personalized health advice and symptom checking for your pet.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export default function ${componentName}() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <${componentName}Content />
    </Suspense>
  );
}
`;
  }

  /**
   * Generate metadata export for SEO
   */
  private generateMetadataExport(article: ArticleStructure, slug: string): string {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.metadata.description,
      "author": {
        "@type": "Organization",
        "name": this.siteName
      },
      "publisher": {
        "@type": "Organization",
        "name": this.siteName,
        "logo": {
          "@type": "ImageObject",
          "url": `${this.siteUrl}/logo.png`
        }
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${this.siteUrl}/blog/${slug}`
      }
    };

    return `export const metadata: Metadata = {
  title: "${this.escapeString(article.metadata.title)}",
  description: "${this.escapeString(article.metadata.description)}",
  keywords: [${article.metadata.keywords.map(k => `"${this.escapeString(k)}"`).join(', ')}],
  openGraph: {
    title: "${this.escapeString(article.metadata.title)}",
    description: "${this.escapeString(article.metadata.description)}",
    type: "article",
    url: "${this.siteUrl}/blog/${slug}",
    siteName: "${this.siteName}",
    images: [{
      url: "https://cdn2.thecatapi.com/images/ag4.jpg",
      width: 1200,
      height: 630,
      alt: "${this.escapeString(article.title)}"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "${this.escapeString(article.metadata.title)}",
    description: "${this.escapeString(article.metadata.description)}",
    images: ["https://cdn2.thecatapi.com/images/ag4.jpg"]
  },
  alternates: {
    canonical: "${this.siteUrl}/blog/${slug}"
  },
  other: {
    "structured-data": JSON.stringify(${JSON.stringify(structuredData, null, 2)})
  }
};`;
  }

  /**
   * Generate component name from keyword
   */
  private generateComponentName(keyword: string): string {
    return keyword
      .replace(/[^a-zA-Z0-9\s-_]/g, '') // Remove special characters except spaces, hyphens, underscores
      .split(/[\s-_]+/)
      .filter(word => word.length > 0) // Remove empty strings
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('') + 'Guide';
  }

  /**
   * Generate URL slug from keyword
   */
  private generateSlug(keyword: string): string {
    return keyword
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  /**
   * Generate section title based on keyword
   */
  private generateSectionTitle(keyword: string): string {
    return `Understanding ${keyword.charAt(0).toUpperCase() + keyword.slice(1)}`;
  }

  /**
   * Format content with proper HTML structure
   */
  private formatContent(content: string): string {
    const paragraphs = content.split('\n\n').filter(p => p.trim());
    return paragraphs
      .map(paragraph => `<p className="text-lg leading-relaxed mb-4">\n                ${this.escapeString(paragraph.trim())}\n              </p>`)
      .join('\n\n              ');
  }

  /**
   * Generate internal links section
   */
  private generateInternalLinksSection(links: InternalLink[]): string {
    if (links.length === 0) return '';

    return `
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">
                🔗 Related Tools & Resources
              </h3>
              <div className="space-y-2">
                ${links.map(link => `<Link href="${link.url}" className="block text-yellow-700 hover:text-yellow-900 font-medium">
                  ${this.escapeString(link.text)}
                </Link>`).join('\n                ')}
              </div>
            </div>`;
  }

  /**
   * Generate use cases grid
   */
  private generateUseCasesGrid(useCases: string[]): string {
    return useCases
      .map((useCase, index) => `<div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  ${index + 1}. Use Case
                </h3>
                <p className="text-gray-700">
                  ${this.escapeString(useCase)}
                </p>
              </div>`)
      .join('\n              ');
  }

  /**
   * Generate FAQ section
   */
  private generateFAQSection(faqs: FAQItem[]): string {
    return faqs
      .map((faq, index) => `<div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q${index + 1}: ${this.escapeString(faq.question)}
                </h3>
                <p className="text-gray-700">
                  ${this.escapeString(faq.answer)}
                </p>
              </div>`)
      .join('\n              ');
  }

  /**
   * Escape strings for safe inclusion in JSX
   */
  private escapeString(str: string): string {
    return str
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/'/g, "\\'")
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\t/g, '\\t');
  }

  /**
   * Generate complete article with metadata
   */
  generateArticle(articleStructure: ArticleStructure, keyword: string): GeneratedArticle {
    const componentCode = this.generateComponent(articleStructure, keyword);
    const slug = this.generateSlug(keyword);
    const filePath = `src/app/blog/${slug}/page.tsx`;
    
    // Calculate word count and keyword density
    const allText = [
      articleStructure.title,
      articleStructure.summary,
      articleStructure.sections.introduction,
      articleStructure.sections.coreContent,
      ...articleStructure.sections.useCases,
      ...articleStructure.sections.faq.map(faq => `${faq.question} ${faq.answer}`),
      articleStructure.sections.conclusion
    ].join(' ');
    
    const wordCount = allText.split(/\s+/).length;
    const keywordOccurrences = (allText.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'g')) || []).length;
    const keywordDensity = keywordOccurrences;

    return {
      keyword,
      content: articleStructure,
      componentCode,
      filePath,
      wordCount,
      keywordDensity
    };
  }
}