import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senior Pet Care: Complete Guide for Aging Dogs and Cats",
  description: "Learn comprehensive senior pet care strategies. Discover age-specific health management, nutrition, exercise, and comfort measures for aging dogs and cats.",
  keywords: ["senior pet care", "aging dog care", "aging cat care", "senior pet health", "elderly pet care", "senior pet nutrition"],
  openGraph: {
    title: "Senior Pet Care: Complete Guide for Aging Dogs and Cats",
    description: "Learn comprehensive senior pet care strategies for aging dogs and cats. Discover health management, nutrition, and comfort measures.",
    type: "article",
    url: "https://petshard.com/blog/senior-pet-care",
    siteName: "PetShard",
    images: [{
      url: "https://cdn2.thecatapi.com/images/ag4.jpg",
      width: 1200,
      height: 630,
      alt: "Senior Pet Care: Complete Guide for Aging Dogs and Cats"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Pet Care: Complete Guide for Aging Dogs and Cats",
    description: "Learn comprehensive senior pet care strategies for aging dogs and cats.",
    images: ["https://cdn2.thecatapi.com/images/ag4.jpg"]
  },
  alternates: {
    canonical: "https://petshard.com/blog/senior-pet-care"
  },
  other: {
    "structured-data": JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Senior Pet Care: Complete Guide for Aging Dogs and Cats",
  "description": "Learn comprehensive senior pet care strategies for aging dogs and cats.",
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
  "datePublished": "2025-11-29T00:00:00.000Z",
  "dateModified": "2025-11-29T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://petshard.com/blog/senior-pet-care"
  }
})
  }
};

function SeniorPetCareContent() {
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
            Senior Pet Care: Complete Guide for Aging Dogs and Cats
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>14 min read</span>
            <span>•</span>
            <span>🐾 Pet Care</span>
          </div>
        </header>

        <div className="relative h-64 md:h-96 w-full mb-12 rounded-xl overflow-hidden">
          <Image 
            src="https://cdn2.thecatapi.com/images/ag4.jpg" 
            alt="Senior Pet Care: Complete Guide for Aging Dogs and Cats" 
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
              As your beloved pet enters their senior years, their care needs change significantly. Senior dogs and cats require specialized attention to maintain quality of life, manage age-related health conditions, and ensure comfort during their golden years.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              This comprehensive guide covers everything you need to know about senior pet care, including recognizing signs of aging, managing common health conditions, adjusting nutrition and exercise, and creating a comfortable environment for your aging companion.
            </p>

            <p className="text-lg leading-relaxed">
              By understanding your senior pet's unique needs and providing appropriate care, you can help them enjoy their later years with dignity, comfort, and continued joy.
            </p>
          </div>

          {/* ========== When Pets Become Senior Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              When Does Your Pet Become Senior?
            </h2>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed mb-4">
                The age at which pets are considered "senior" varies by species and size. Generally, dogs are considered senior at 7-10 years old, with larger breeds aging faster than smaller breeds. Cats typically become senior at 11-14 years old.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Senior Age Guidelines</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Dogs</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Small breeds (under 25 lbs): 11+ years</li>
                      <li>• Medium breeds (25-50 lbs): 10+ years</li>
                      <li>• Large breeds (50-90 lbs): 8+ years</li>
                      <li>• Giant breeds (over 90 lbs): 6-7+ years</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Cats</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Senior: 11-14 years old</li>
                      <li>• Geriatric: 15+ years old</li>
                      <li>• Indoor cats often live longer</li>
                      <li>• Individual variation is significant</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                <strong>Signs Your Pet is Aging:</strong> Graying fur, reduced activity levels, slower movement, increased sleep, changes in appetite or water intake, accidents in the house, cognitive changes, and decreased interest in play are common signs of aging.
              </p>
            </div>
          </div>

          {/* ========== Common Senior Health Issues Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Common Senior Pet Health Issues
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Arthritis and Joint Problems</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Symptoms:</strong> Limping, stiffness (especially after rest), reluctance to jump or climb stairs, difficulty rising, swelling in joints.
                </p>
                <p className="text-gray-700">
                  <strong>Management:</strong> Maintain healthy weight, provide orthopedic bedding, use ramps or stairs, consider joint supplements (glucosamine, chondroitin), physical therapy, and pain management prescribed by your veterinarian.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Cognitive Dysfunction (Dementia)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Symptoms:</strong> Disorientation, confusion, changes in sleep patterns, loss of house training, decreased recognition of family members, anxiety.
                </p>
                <p className="text-gray-700">
                  <strong>Management:</strong> Maintain consistent routines, provide mental stimulation, use nightlights, consider medications prescribed by your veterinarian, and be patient with behavioral changes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Kidney Disease</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Symptoms:</strong> Increased thirst and urination, weight loss, poor appetite, bad breath, lethargy.
                </p>
                <p className="text-gray-700">
                  <strong>Management:</strong> Prescription kidney diet (low protein and phosphorus), increased water intake, regular veterinary monitoring, and medications as prescribed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Dental Disease</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Symptoms:</strong> Bad breath, difficulty eating, drooling, swollen gums, loose or missing teeth.
                </p>
                <p className="text-gray-700">
                  <strong>Management:</strong> Regular dental cleanings, daily tooth brushing, dental treats, and professional extractions if necessary.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Vision and Hearing Loss</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Symptoms:</strong> Bumping into objects, reluctance to move in dim light, not responding to sounds, increased startle response.
                </p>
                <p className="text-gray-700">
                  <strong>Management:</strong> Keep environment consistent, use verbal cues for deaf pets, provide extra lighting, and be patient with sensory changes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Incontinence</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Symptoms:</strong> Accidents in the house, leaking urine during sleep, frequent urination.
                </p>
                <p className="text-gray-700">
                  <strong>Management:</strong> More frequent bathroom breaks, washable pads, medications prescribed by your veterinarian, and patience with accidents.
                </p>
              </div>
            </div>
          </div>

          {/* ========== Senior Pet Care Checklist Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Age-Specific Senior Pet Care Checklist
            </h2>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Monthly Care Tasks</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-gray-700">Monitor weight and appetite changes</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-gray-700">Check for lumps, bumps, or skin changes</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-gray-700">Inspect ears for infections or discharge</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-gray-700">Check teeth and gums for problems</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-gray-700">Observe mobility and gait for changes</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-gray-700">Monitor water intake and urination patterns</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-6">Quarterly Care Tasks</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-gray-700">Schedule veterinary wellness exam</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-gray-700">Review medications and supplements</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-gray-700">Assess pain levels and mobility</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-gray-700">Evaluate diet and nutrition needs</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-6">Annual Care Tasks</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-gray-700">Complete blood work and urinalysis</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-gray-700">Dental cleaning if needed</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-gray-700">Update vaccinations as recommended</span>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" disabled />
                  <span className="text-gray-700">Discuss quality of life and pain management</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========== Nutrition and Exercise Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Senior Pet Nutrition and Exercise
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Nutrition Adjustments</h3>
                <p className="text-gray-700 mb-3">
                  Senior pets require different nutrition than younger adults. Senior formulas typically contain:
                </p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Reduced calories (10-25% fewer) to prevent weight gain</li>
                  <li>• Higher fiber for digestive health</li>
                  <li>• Joint-supporting supplements (glucosamine, chondroitin)</li>
                  <li>• Antioxidants for cognitive function</li>
                  <li>• Omega-3 fatty acids for joint and coat health</li>
                  <li>• Adjusted protein levels based on kidney function</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Exercise Modifications</h3>
                <p className="text-gray-700 mb-3">
                  Senior pets need regular exercise but at a reduced intensity:
                </p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Shorter, more frequent walks (3-4 times daily instead of 1-2)</li>
                  <li>• Low-impact activities (swimming, gentle play)</li>
                  <li>• Avoid jumping and high-impact exercise</li>
                  <li>• Exercise during cooler parts of the day</li>
                  <li>• Allow extra rest time between activities</li>
                  <li>• Adjust based on your pet's comfort level</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Feeding Adjustments</h3>
                <p className="text-gray-700 mb-3">
                  Modify feeding practices to accommodate aging:
                </p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Feed smaller, more frequent meals (3-4 times daily)</li>
                  <li>• Warm food to enhance palatability and digestion</li>
                  <li>• Soften dry food with water or broth if dental issues exist</li>
                  <li>• Ensure easy access to food and water bowls</li>
                  <li>• Monitor appetite and adjust portions as needed</li>
                  <li>• Provide fresh water constantly</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ========== Creating a Comfortable Environment Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Creating a Comfortable Senior Pet Environment
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Bedding and Resting Areas</h3>
                <p className="text-gray-700">
                  Provide orthopedic beds that support aging joints. Place beds in quiet, easily accessible areas away from high-traffic zones. Use washable covers for easy cleaning. Consider heated beds for arthritic pets during cold months.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Accessibility Modifications</h3>
                <p className="text-gray-700">
                  Install ramps or steps to help pets access furniture and vehicles. Use non-slip rugs on slippery floors. Place food, water, and litter boxes on the same level to minimize climbing. Consider elevated food bowls to reduce strain on the neck and joints.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Lighting and Temperature</h3>
                <p className="text-gray-700">
                  Provide adequate lighting, especially for pets with vision loss. Use nightlights in hallways and near sleeping areas. Maintain consistent, comfortable temperatures. Avoid extreme heat or cold, which can exacerbate health issues.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Bathroom Accessibility</h3>
                <p className="text-gray-700">
                  Place litter boxes on the same level as your cat's sleeping area. Use low-sided litter boxes for easier access. For dogs, provide frequent outdoor bathroom breaks. Consider puppy pads for pets with incontinence issues.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Mental Stimulation</h3>
                <p className="text-gray-700">
                  Continue providing mental enrichment through puzzle toys, gentle play, and social interaction. Maintain consistent routines to reduce anxiety. Spend quality time with your senior pet, as companionship is especially important during their later years.
                </p>
              </div>
            </div>
          </div>

          {/* ========== Real-World Scenarios Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Real-World Senior Pet Care Scenarios
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Senior Dog with Arthritis
                </h3>
                <p className="text-gray-700">
                  An 10-year-old Labrador with arthritis benefits from orthopedic bedding, joint supplements, shorter walks, pain management, and weight control. Ramps help access furniture, and heated beds provide comfort during cold months.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Senior Cat with Kidney Disease
                </h3>
                <p className="text-gray-700">
                  A 14-year-old cat with kidney disease requires a prescription diet low in protein and phosphorus, increased water intake, frequent veterinary monitoring, and medications. Elevated food bowls and accessible litter boxes support comfort.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Senior Pet with Cognitive Decline
                </h3>
                <p className="text-gray-700">
                  An aging pet with cognitive dysfunction benefits from consistent routines, nightlights, medications prescribed by the veterinarian, and patient handling. Maintaining familiar environments reduces anxiety and confusion.
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
                  Q1: How often should I take my senior pet to the veterinarian?
                </h3>
                <p className="text-gray-700">
                  Senior pets should have wellness exams at least twice yearly, compared to once yearly for younger adults. More frequent visits may be necessary if your pet has chronic health conditions. Regular monitoring helps catch problems early.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q2: What supplements are beneficial for senior pets?
                </h3>
                <p className="text-gray-700">
                  Common beneficial supplements include glucosamine and chondroitin for joint health, omega-3 fatty acids for coat and cognitive health, and antioxidants for overall wellness. Always consult your veterinarian before starting supplements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q3: How do I know if my senior pet is in pain?
                </h3>
                <p className="text-gray-700">
                  Signs of pain include limping, reluctance to move, decreased appetite, behavioral changes, excessive licking of joints, and vocalization. Subtle signs like reduced activity or difficulty rising are also indicators. Discuss pain management options with your veterinarian.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q4: Should I change my senior pet's diet?
                </h3>
                <p className="text-gray-700">
                  Yes, senior pets benefit from age-appropriate nutrition. Senior formulas contain adjusted protein, fat, and calorie levels, plus joint-supporting supplements. Transition gradually to new food over 7-10 days. Consult your veterinarian for personalized recommendations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q5: How can I help my senior pet with incontinence?
                </h3>
                <p className="text-gray-700">
                  Provide more frequent bathroom breaks, use washable pads, consider medications prescribed by your veterinarian, and maintain patience. Accidents are not intentional. Consult your vet to rule out underlying medical conditions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q6: When should I consider end-of-life care?
                </h3>
                <p className="text-gray-700">
                  When your senior pet experiences chronic pain, loss of appetite, inability to move comfortably, or loss of interest in life, discuss quality of life with your veterinarian. They can help you make compassionate decisions about end-of-life care and palliative options.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q7: How can I keep my senior pet mentally stimulated?
                </h3>
                <p className="text-gray-700">
                  Provide puzzle toys, gentle play sessions, social interaction, and consistent routines. Mental stimulation helps prevent cognitive decline. Tailor activities to your pet's physical abilities and interests.
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
              Senior pet care requires patience, compassion, and proactive management. By understanding your aging pet's changing needs and providing appropriate care, you can help them enjoy their golden years with comfort and dignity.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Regular veterinary care, proper nutrition, appropriate exercise, and environmental modifications all contribute to your senior pet's quality of life. Remember that every pet ages differently, so work closely with your veterinarian to develop a care plan tailored to your individual pet's needs.
            </p>

            <p className="text-lg leading-relaxed">
              The time you invest in caring for your senior pet is a gift that honors the years of companionship and love they've provided. Cherish these precious moments together.
            </p>
          </div>

          {/* ========== Related Articles Section ========== */}
          <div className="mb-12 bg-gradient-to-r from-pink-50 to-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Related Pet Health and Care Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/senior-pet-health-issues" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Senior Pet Health Issues</h3>
                <p className="text-gray-600">Learn about age-related health conditions and how to manage them effectively.</p>
              </Link>
              
              <Link href="/blog/pet-nutrition-guide" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Pet Nutrition Guide</h3>
                <p className="text-gray-600">Discover complete nutrition requirements for pets at all life stages.</p>
              </Link>

              <Link href="/blog/pet-dental-health" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Pet Dental Health</h3>
                <p className="text-gray-600">Learn essential dental care to maintain your pet's oral health.</p>
              </Link>

              <Link href="/blog/pet-emergency-signs" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Pet Emergency Signs</h3>
                <p className="text-gray-600">Recognize critical symptoms that require immediate veterinary attention.</p>
              </Link>
            </div>
          </div>

          {/* ========== Pet Care Tools Section ========== */}
          <div className="mb-12 bg-gradient-to-r from-blue-50 to-pink-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Explore Our Pet Care Tools
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/pet-care-guide" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">📋 Pet Care Guide</h3>
                <p className="text-gray-600">Get personalized care advice for your senior pet's specific needs.</p>
              </Link>
              
              <Link href="/health-center" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🏥 Health Center</h3>
                <p className="text-gray-600">Get health guidance and symptom checking for your aging pet.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export default function SeniorPetCare() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SeniorPetCareContent />
    </Suspense>
  );
}