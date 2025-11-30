import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog Breed Size Comparison: Small to Giant Breeds Guide",
  description: "Compare dog breed sizes from tiny to giant. Learn about small, medium, large, and giant dog breeds with weight, height, and space requirements.",
  keywords: ["dog breed size comparison", "small dog breeds", "large dog breeds", "giant dog breeds", "dog size categories", "dog breed weight chart"],
  openGraph: {
    title: "Dog Breed Size Comparison: Small to Giant Breeds Guide",
    description: "Compare dog breed sizes from tiny to giant. Learn about small, medium, large, and giant dog breeds with weight, height, and space requirements.",
    type: "article",
    url: "https://petshard.com/blog/dog-breed-size-comparison",
    siteName: "PetShard",
    images: [{
      url: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      width: 1200,
      height: 630,
      alt: "Dog Breed Size Comparison: Small to Giant Breeds Guide"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog Breed Size Comparison: Small to Giant Breeds Guide",
    description: "Compare dog breed sizes from tiny to giant. Learn about small, medium, large, and giant dog breeds with weight, height, and space requirements.",
    images: ["https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"]
  },
  alternates: {
    canonical: "https://petshard.com/blog/dog-breed-size-comparison"
  },
  other: {
    "structured-data": JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Dog Breed Size Comparison: Small to Giant Breeds Guide",
  "description": "Compare dog breed sizes from tiny to giant. Learn about small, medium, large, and giant dog breeds with weight, height, and space requirements.",
  "author": {
    "@type": "Organization",
    "name": "PetShard"
  },
  "publisher": {
    "@type": "Organization",
    "name": "PetShard",
    "logo": {
      "@type": "ImageObject",
      "url": "https://petshard.com/logo.png"
    }
  },
  "datePublished": "2025-11-28T03:43:37.966Z",
  "dateModified": "2025-11-28T03:43:37.966Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://petshard.com/blog/dog-breed-size-comparison"
  }
})
  }
};

function DogBreedSizeComparisonGuideContent() {
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
            Dog Breed Size Comparison: Small to Giant Breeds Guide
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>🐾 Pet Care</span>
          </div>
        </header>

        {/* ========== Introduction Section ========== */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
              Introduction
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Dog breed size is one of the most important factors to consider when choosing a pet. From tiny Chihuahuas weighing just 2-6 pounds to massive Great Danes exceeding 150 pounds, dog breeds vary dramatically in size, space requirements, and care needs.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Understanding dog breed size categories helps you make informed decisions about which breed fits your lifestyle, living situation, and family needs. This comprehensive guide explores the four main size categories—small, medium, large, and giant—with specific breed examples, weight ranges, and practical considerations for each.
            </p>

            <p className="text-lg leading-relaxed">
              Whether you live in a small apartment or have acres of land, whether you prefer a lap dog or a protective guardian, this guide will help you understand how dog size impacts exercise needs, space requirements, food costs, and overall care responsibilities.
            </p>
          </div>

          {/* ========== Core Content Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Dog Breed Size Categories
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">1. Small Dog Breeds (Under 25 pounds)</h3>
                
                <p className="text-lg leading-relaxed mb-4">
                  Small dog breeds are ideal for apartment living, travel, and families with limited space. Despite their size, many small breeds have big personalities and significant exercise needs.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">Popular Small Breeds</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li><strong>Chihuahua:</strong> 2-6 pounds, 5-8 inches tall, 12-18 year lifespan</li>
                    <li><strong>Pomeranian:</strong> 3-7 pounds, 7-12 inches tall, 12-16 year lifespan</li>
                    <li><strong>Shih Tzu:</strong> 9-16 pounds, 8-11 inches tall, 10-18 year lifespan</li>
                    <li><strong>Dachshund:</strong> 11-32 pounds (varies by type), 5-9 inches tall, 12-16 year lifespan</li>
                    <li><strong>Beagle:</strong> 20-30 pounds, 13-15 inches tall, 12-15 year lifespan</li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed mb-4">
                  <strong>Space Requirements:</strong> Small breeds adapt well to apartments and small homes. They need minimal outdoor space but still require daily walks and mental stimulation. Many can exercise adequately indoors with play sessions.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  <strong>Exercise Needs:</strong> Despite their size, small breeds vary in energy levels. Beagles and Dachshunds need 30-60 minutes of daily exercise, while Chihuahuas and Pomeranians need 20-30 minutes. Mental stimulation through puzzle toys is important.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  <strong>Cost Considerations:</strong> Small breeds are generally more affordable. Food costs $20-$40/month, vet care $300-$600/year, and grooming $30-$75 per session. Total annual cost: $800-$1,500.
                </p>

                <p className="text-lg leading-relaxed">
                  <strong>Advantages:</strong> Portable, lower food costs, longer lifespan, easier to handle, suitable for apartments, less intimidating to visitors, easier to travel with.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">2. Medium Dog Breeds (25-50 pounds)</h3>
                
                <p className="text-lg leading-relaxed mb-4">
                  Medium dog breeds offer a balance between small and large breeds. They\'re versatile, often suitable for various living situations, and popular among families seeking a manageable size.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">Popular Medium Breeds</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li><strong>Cocker Spaniel:</strong> 25-30 pounds, 13-15 inches tall, 12-15 year lifespan</li>
                    <li><strong>Bulldog:</strong> 40-50 pounds, 12-16 inches tall, 8-12 year lifespan</li>
                    <li><strong>Brittany Spaniel:</strong> 30-40 pounds, 17-20 inches tall, 12-15 year lifespan</li>
                    <li><strong>Schnauzer:</strong> 30-50 pounds (varies by type), 12-20 inches tall, 12-14 year lifespan</li>
                    <li><strong>Boxer:</strong> 60-70 pounds, 21-25 inches tall, 10-12 year lifespan</li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed mb-4">
                  <strong>Space Requirements:</strong> Medium breeds do well in apartments with regular exercise but prefer homes with yards. They need adequate space to move around comfortably and benefit from outdoor play areas.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  <strong>Exercise Needs:</strong> Most medium breeds need 45-90 minutes of daily exercise. They enjoy walks, running, fetch games, and interactive play. Mental stimulation is important to prevent boredom and destructive behavior.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  <strong>Cost Considerations:</strong> Food costs $40-$80/month, vet care $400-$800/year, and grooming $50-$100 per session. Total annual cost: $1,200-$2,000.
                </p>

                <p className="text-lg leading-relaxed">
                  <strong>Advantages:</strong> Versatile size, good for families, manageable to handle, moderate food costs, suitable for various activities, good balance of companionship and independence.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">3. Large Dog Breeds (50-100 pounds)</h3>
                
                <p className="text-lg leading-relaxed mb-4">
                  Large dog breeds are impressive, often protective, and require significant space and exercise. They\'re popular as family dogs, working dogs, and companions for active individuals.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">Popular Large Breeds</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li><strong>Labrador Retriever:</strong> 55-80 pounds, 21.5-24.5 inches tall, 10-12 year lifespan</li>
                    <li><strong>Golden Retriever:</strong> 55-75 pounds, 20-24 inches tall, 10-12 year lifespan</li>
                    <li><strong>German Shepherd:</strong> 50-90 pounds, 22-26 inches tall, 9-13 year lifespan</li>
                    <li><strong>Rottweiler:</strong> 80-135 pounds, 22-27 inches tall, 8-11 year lifespan</li>
                    <li><strong>Siberian Husky:</strong> 45-60 pounds, 20-23.5 inches tall, 12-14 year lifespan</li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed mb-4">
                  <strong>Space Requirements:</strong> Large breeds need substantial space and ideally a yard. They\'re not suitable for small apartments. They need room to move, play, and exercise safely without damaging furniture or belongings.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  <strong>Exercise Needs:</strong> Large breeds require 1-2 hours of daily exercise including running, swimming, and interactive play. They need mental stimulation and structured activities. Insufficient exercise leads to destructive behavior and health issues.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  <strong>Cost Considerations:</strong> Food costs $60-$120/month, vet care $500-$1,000/year, and grooming $75-$150 per session. Total annual cost: $1,800-$2,800.
                </p>

                <p className="text-lg leading-relaxed">
                  <strong>Advantages:</strong> Loyal and protective, good family dogs, impressive appearance, often intelligent and trainable, suitable for active families, good for outdoor activities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">4. Giant Dog Breeds (Over 100 pounds)</h3>
                
                <p className="text-lg leading-relaxed mb-4">
                  Giant dog breeds are impressive in size and presence. Despite their large stature, many are gentle giants with calm temperaments. They require special considerations for space, exercise, and health care.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">Popular Giant Breeds</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li><strong>Great Dane:</strong> 110-175 pounds, 28-34 inches tall, 7-10 year lifespan</li>
                    <li><strong>Saint Bernard:</strong> 120-180 pounds, 25-27.5 inches tall, 8-10 year lifespan</li>
                    <li><strong>Mastiff:</strong> 120-230 pounds, 27-30 inches tall, 6-10 year lifespan</li>
                    <li><strong>Newfoundland:</strong> 100-150 pounds, 22-28 inches tall, 8-10 year lifespan</li>
                    <li><strong>Irish Wolfhound:</strong> 140-180 pounds, 30-32 inches tall, 6-8 year lifespan</li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed mb-4">
                  <strong>Space Requirements:</strong> Giant breeds need substantial space and a large yard. They\'re not suitable for apartments or small homes. They need room to move comfortably and avoid bumping into furniture or family members.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  <strong>Exercise Needs:</strong> Despite their size, many giant breeds have moderate exercise needs (45-60 minutes daily). Excessive exercise can stress their joints. Controlled walks and play sessions are better than intense running.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  <strong>Health Considerations:</strong> Giant breeds have shorter lifespans (6-10 years) and are prone to hip dysplasia, heart problems, and bloat (a life-threatening condition). Regular vet checkups and proper nutrition are essential.
                </p>

                <p className="text-lg leading-relaxed">
                  <strong>Cost Considerations:</strong> Food costs $100-$200/month, vet care $800-$1,500/year, and grooming $100-$200 per session. Total annual cost: $2,500-$4,000+. Giant breeds are the most expensive to maintain.
                </p>
              </div>
            </div>

            
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">
                🔗 Related Articles & Resources
              </h3>
              <div className="space-y-2">
                <Link href="/blog/dog-breed-characteristics" className="block text-yellow-700 hover:text-yellow-900 font-medium">
                  → Dog Breed Characteristics Guide
                </Link>
                <Link href="/blog/best-dog-breeds-for-families" className="block text-yellow-700 hover:text-yellow-900 font-medium">
                  → Best Dog Breeds for Families
                </Link>
                <Link href="/blog/dog-breed-exercise-requirements" className="block text-yellow-700 hover:text-yellow-900 font-medium">
                  → Dog Breed Exercise Requirements
                </Link>
                <Link href="/blog/dog-breed-health-issues" className="block text-yellow-700 hover:text-yellow-900 font-medium">
                  → Common Dog Breed Health Issues
                </Link>
              </div>
            </div>
          </div>

          {/* ========== Size Comparison Chart ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Dog Breed Size Comparison Chart
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left font-bold">Size Category</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Weight Range</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Height Range</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Example Breeds</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-bold">Small</td>
                    <td className="border border-gray-300 p-3">2-25 lbs</td>
                    <td className="border border-gray-300 p-3">5-15 inches</td>
                    <td className="border border-gray-300 p-3">Chihuahua, Pomeranian, Beagle</td>
                    <td className="border border-gray-300 p-3">Apartments, Travel, Seniors</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-bold">Medium</td>
                    <td className="border border-gray-300 p-3">25-50 lbs</td>
                    <td className="border border-gray-300 p-3">15-22 inches</td>
                    <td className="border border-gray-300 p-3">Cocker Spaniel, Bulldog, Boxer</td>
                    <td className="border border-gray-300 p-3">Families, Moderate Space</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-bold">Large</td>
                    <td className="border border-gray-300 p-3">50-100 lbs</td>
                    <td className="border border-gray-300 p-3">22-28 inches</td>
                    <td className="border border-gray-300 p-3">Labrador, Golden Retriever, German Shepherd</td>
                    <td className="border border-gray-300 p-3">Active Families, Yards</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-bold">Giant</td>
                    <td className="border border-gray-300 p-3">100+ lbs</td>
                    <td className="border border-gray-300 p-3">28+ inches</td>
                    <td className="border border-gray-300 p-3">Great Dane, Mastiff, Saint Bernard</td>
                    <td className="border border-gray-300 p-3">Large Homes, Experienced Owners</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ========== Selection Guide ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              How to Choose the Right Size Dog for Your Lifestyle
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Consider Your Living Space</h3>
                <p className="text-gray-700">
                  Small breeds adapt well to apartments and small homes. Medium breeds need moderate space. Large and giant breeds require substantial space and ideally a yard. Be honest about your living situation before choosing a breed.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Assess Your Activity Level</h3>
                <p className="text-gray-700">
                  Small breeds need 20-30 minutes of daily exercise. Medium breeds need 45-90 minutes. Large breeds need 1-2 hours. Giant breeds need 45-60 minutes of controlled exercise. Match the breed\'s energy level to your lifestyle.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Evaluate Your Budget</h3>
                <p className="text-gray-700">
                  Small breeds cost $800-$1,500/year. Medium breeds cost $1,200-$2,000/year. Large breeds cost $1,800-$2,800/year. Giant breeds cost $2,500-$4,000+/year. Consider food, vet care, grooming, and insurance.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Think About Handling and Control</h3>
                <p className="text-gray-700">
                  Small breeds are easy to handle and control. Medium breeds require moderate strength. Large and giant breeds need experienced owners who can manage their size and strength, especially during walks and play.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Consider Lifespan</h3>
                <p className="text-gray-700">
                  Small breeds live 12-18 years. Medium breeds live 10-15 years. Large breeds live 8-12 years. Giant breeds live 6-10 years. Consider the long-term commitment and potential grief when choosing a breed.
                </p>
              </div>
            </div>
          </div>

          {/* ========== FAQ Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q1: What\'s the difference between weight and height in dog breed size?
                </h3>
                <p className="text-gray-700">
                  Weight is measured in pounds and indicates how heavy a dog is. Height is measured in inches from the ground to the shoulder and indicates how tall a dog stands. Both matter for determining space needs and handling requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q2: Can a small dog breed live in an apartment?
                </h3>
                <p className="text-gray-700">
                  Yes, small breeds are ideal for apartments. They need less space, produce less noise, and require shorter walks. However, they still need daily exercise and mental stimulation. Some small breeds like Beagles have high energy and need more activity.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q3: Are large dogs more expensive than small dogs?
                </h3>
                <p className="text-gray-700">
                  Yes, large and giant breeds are significantly more expensive. They eat more food, require more vet care, and have higher grooming costs. A large dog can cost 2-3 times more annually than a small dog.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q4: Do giant breeds have shorter lifespans than small breeds?
                </h3>
                <p className="text-gray-700">
                  Yes, giant breeds typically live 6-10 years, while small breeds live 12-18 years. This is due to faster metabolism and increased stress on their organs. Giant breed owners should be prepared for a shorter companionship period.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q5: What size dog is best for families with children?
                </h3>
                <p className="text-gray-700">
                  Medium to large breeds are often best for families with children. They\'re sturdy enough to handle rough play and have patient temperaments. Small breeds can be fragile around young children. Always supervise interactions and choose breeds known for being good with kids.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q6: How much space does a large dog breed need?
                </h3>
                <p className="text-gray-700">
                  Large breeds ideally need a yard of at least 1,000 square feet. They can live in apartments with sufficient daily exercise, but a yard is strongly recommended. Giant breeds need even more space to move comfortably.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q7: Can size affect a dog\'s health issues?
                </h3>
                <p className="text-gray-700">
                  Yes, size significantly affects health. Large and giant breeds are prone to hip dysplasia, heart problems, and bloat. Small breeds are prone to dental issues and patellar luxation. Understanding breed-specific health risks is important for preventive care.
                </p>
              </div>
            </div>
          </div>

          {/* ========== Conclusion Section ========== */}
          <div className="mb-12 bg-green-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
              Conclusion
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Understanding dog breed size is crucial for making an informed decision about which dog is right for you. From tiny Chihuahuas to massive Great Danes, each size category offers unique advantages and challenges.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Consider your living space, activity level, budget, and long-term commitment when choosing a dog breed. Small breeds are perfect for apartment dwellers and seniors. Medium breeds offer versatility for various lifestyles. Large breeds suit active families with yards. Giant breeds require experienced owners with substantial space and resources.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Remember that size affects not just space requirements but also exercise needs, food costs, health considerations, and lifespan. A dog that\'s too large for your home or too energetic for your lifestyle will be unhappy, and so will you.
            </p>

            <p className="text-lg leading-relaxed">
              Take time to research breeds, visit breeders or shelters, and honestly assess your lifestyle before bringing a dog home. With the right size match, your dog will thrive, and you\'ll enjoy years of companionship and joy. Use our Breed Identification tool to confirm your dog\'s breed, or explore our Pet Care Guide for personalized advice on training and care.
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

export default function DogBreedSizeComparisonGuide() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DogBreedSizeComparisonGuideContent />
    </Suspense>
  );
}
