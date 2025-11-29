import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog Skin Conditions: Symptoms and When to Call the Vet",
  description: "Learn about common dog skin conditions including allergies, mange, and hot spots. Understand symptoms, severity levels, and when to seek veterinary care.",
  keywords: ["dog skin conditions", "dog skin problems", "dog allergies", "mange in dogs", "hot spots dogs", "dog dermatitis"],
  openGraph: {
    title: "Dog Skin Conditions: Symptoms and When to Call the Vet",
    description: "Learn about common dog skin conditions including allergies, mange, and hot spots. Understand symptoms, severity levels, and when to seek veterinary care.",
    type: "article",
    url: "https://petshard.com/blog/dog-skin-conditions",
    siteName: "PetShard",
    images: [{
      url: "https://cdn2.thecatapi.com/images/ag4.jpg",
      width: 1200,
      height: 630,
      alt: "Dog Skin Conditions: Symptoms and When to Call the Vet"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog Skin Conditions: Symptoms and When to Call the Vet",
    description: "Learn about common dog skin conditions including allergies, mange, and hot spots. Understand symptoms, severity levels, and when to seek veterinary care.",
    images: ["https://cdn2.thecatapi.com/images/ag4.jpg"]
  },
  alternates: {
    canonical: "https://petshard.com/blog/dog-skin-conditions"
  },
  other: {
    "structured-data": JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Dog Skin Conditions: Symptoms and When to Call the Vet",
  "description": "Learn about common dog skin conditions including allergies, mange, and hot spots. Understand symptoms, severity levels, and when to seek veterinary care.",
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
  "datePublished": "2025-11-28T03:43:40.402Z",
  "dateModified": "2025-11-28T03:43:40.402Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://petshard.com/blog/dog-skin-conditions"
  }
})
  }
};

function DogSkinConditionsGuideContent() {
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
            Dog Skin Conditions: Symptoms and When to Call the Vet
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
            alt="The Ultimate Dog Skin Conditions Guide for Pet Parents" 
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
              Understanding common dog skin conditions is essential for every dog owner. Skin problems are among the most common reasons dogs visit the veterinarian, and early recognition of symptoms can prevent serious complications.
            </p>

            <p className="text-lg leading-relaxed">
              <p className="text-lg leading-relaxed mb-4">
                Dogs cannot tell us when their skin is itching or uncomfortable, which is why recognizing the signs of skin problems is crucial. This comprehensive guide covers the most common dog skin conditions, their symptoms, severity levels, and when you should contact your veterinarian. By learning to identify these conditions early, you can help ensure your dog receives prompt treatment and relief from discomfort.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Whether you\'re a new dog owner or have years of experience, understanding these common skin issues will help you make informed decisions about your dog\'s wellbeing. We\'ll cover specific conditions, their causes, symptoms, and actionable guidance for each situation.
              </p>
            </p>
          </div>

          {/* ========== Core Content Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Common Dog Skin Conditions and Symptoms
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">1. Allergic Dermatitis</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> An allergic reaction causing inflammation and itching of the skin, triggered by food, environmental allergens, or contact irritants.</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Food allergies, pollen, dust mites, mold, or contact with irritating substances like certain plants or chemicals.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Mild itching and scratching (mild) vs. severe skin damage and hair loss (severe).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours if persistent itching. Immediate if severe swelling, difficulty breathing, or signs of infection.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">2. Mange (Mites)</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> A parasitic skin disease caused by mites, resulting in severe itching, hair loss, and skin inflammation.</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Sarcoptic mites (contagious) or demodectic mites (not contagious). Stress, poor nutrition, or weakened immune system increase susceptibility.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Localized itching and mild hair loss (mild) vs. widespread hair loss and severe skin damage (severe).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours if excessive scratching or hair loss. Immediate if signs of secondary infection or severe skin damage.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">3. Hot Spots (Acute Moist Dermatitis)</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Localized areas of inflamed, infected skin that develop rapidly, often from excessive licking or scratching.</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Allergies, parasites, ear infections, anal gland problems, or stress-related licking. More common in warm, humid weather.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Small red area with mild discharge (mild) vs. large infected area with pus and odor (severe).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours if hot spot appears. Immediate if spreading rapidly or showing signs of infection.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">4. Seborrhea (Oily or Dry Skin)</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> A skin condition characterized by excessive oil production (oily seborrhea) or dry, flaky skin (dry seborrhea).</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Genetic predisposition, allergies, hormonal imbalances, poor nutrition, or secondary to other skin conditions.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Mild flaking or slight oiliness (mild) vs. severe scaling, odor, and secondary infections (severe).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours if persistent flaking or odor. Immediate if signs of infection or severe skin damage.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">5. Pyoderma (Bacterial Skin Infection)</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> A bacterial infection of the skin, often secondary to other skin conditions like allergies or parasites.</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Breaks in skin barrier from scratching, allergies, parasites, or compromised immune system.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Mild pustules or crusting (mild) vs. widespread infection with systemic symptoms (severe).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours if pustules or crusting appear. Immediate if fever, lethargy, or spreading infection.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">6. Ringworm (Fungal Infection)</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> A contagious fungal infection causing circular patches of hair loss and skin irritation.</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Fungal spores transmitted from other animals, contaminated environments, or compromised immune system.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Single small patch (mild) vs. multiple patches with secondary infection (severe).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours if circular hair loss appears. Immediate if spreading rapidly or signs of infection.</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8 mt-8">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">
                💡 Important Note
              </h3>
              <p className="text-yellow-900">
                This guide is for informational purposes only and should not replace professional veterinary advice. When in doubt, always consult your veterinarian. Early diagnosis and treatment can prevent serious complications and improve your dog\'s quality of life.
              </p>
            </div>
          </div>

          {/* ========== Skin Condition Comparison Table ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Skin Condition Severity Assessment Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left font-bold">Condition</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Mild (Routine Vet Visit)</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Moderate (Within 24 Hours)</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Severe (Immediate/Emergency)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Allergic Dermatitis</td>
                    <td className="border border-gray-300 p-3">Occasional scratching, mild redness</td>
                    <td className="border border-gray-300 p-3">Persistent itching, visible scratches</td>
                    <td className="border border-gray-300 p-3">Severe swelling, hair loss, infection signs</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Mange</td>
                    <td className="border border-gray-300 p-3">Localized itching, minor hair loss</td>
                    <td className="border border-gray-300 p-3">Spreading hair loss, visible skin damage</td>
                    <td className="border border-gray-300 p-3">Widespread infection, severe skin damage</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Hot Spots</td>
                    <td className="border border-gray-300 p-3">Small red area, minimal discharge</td>
                    <td className="border border-gray-300 p-3">Larger area, moderate discharge</td>
                    <td className="border border-gray-300 p-3">Spreading rapidly, pus, strong odor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Seborrhea</td>
                    <td className="border border-gray-300 p-3">Mild flaking or slight oiliness</td>
                    <td className="border border-gray-300 p-3">Noticeable scaling, mild odor</td>
                    <td className="border border-gray-300 p-3">Severe scaling, strong odor, infection</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Pyoderma</td>
                    <td className="border border-gray-300 p-3">Few pustules, mild crusting</td>
                    <td className="border border-gray-300 p-3">Multiple pustules, spreading</td>
                    <td className="border border-gray-300 p-3">Widespread infection, fever, lethargy</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Ringworm</td>
                    <td className="border border-gray-300 p-3">Single small patch, minimal symptoms</td>
                    <td className="border border-gray-300 p-3">Multiple patches, spreading</td>
                    <td className="border border-gray-300 p-3">Widespread patches, secondary infection</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ========== When to Call the Vet Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              When to Call Your Veterinarian
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-lg shadow-md border-t-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-4">
                  🚨 Call Immediately (Emergency)
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Severe swelling of face, lips, or throat</li>
                  <li>• Difficulty breathing or gasping</li>
                  <li>• Signs of severe infection (pus, fever)</li>
                  <li>• Rapid spreading of skin condition</li>
                  <li>• Severe bleeding or open wounds</li>
                  <li>• Signs of shock or collapse</li>
                  <li>• Severe allergic reaction symptoms</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg shadow-md border-t-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-800 mb-4">
                  ⚠️ Call Within 24 Hours
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Persistent itching and scratching</li>
                  <li>• Visible hair loss or bald patches</li>
                  <li>• Redness, swelling, or inflammation</li>
                  <li>• Discharge or oozing from skin</li>
                  <li>• Unusual odor from skin or coat</li>
                  <li>• Scabs or crusting on skin</li>
                  <li>• Signs of parasites or mites</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                📅 Schedule a Routine Appointment
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Annual skin health checkups</li>
                <li>• Preventive parasite and flea treatments</li>
                <li>• Dietary concerns for skin health</li>
                <li>• Grooming and coat care questions</li>
                <li>• Allergy testing or management</li>
                <li>• Skin condition follow-up visits</li>
              </ul>
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
                  Q1: What causes dog skin allergies?
                </h3>
                <p className="text-gray-700">
                  Dog skin allergies can be caused by food ingredients, environmental allergens like pollen and dust mites, or contact irritants. Identifying the specific allergen is key to managing the condition effectively.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q2: Is mange contagious to other dogs or humans?
                </h3>
                <p className="text-gray-700">
                  Sarcoptic mange is highly contagious to other dogs and can cause temporary itching in humans. Demodectic mange is not contagious. Isolate affected dogs and consult your vet for treatment recommendations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q3: How can I prevent hot spots from developing?
                </h3>
                <p className="text-gray-700">
                  Prevent hot spots by addressing underlying allergies or parasites, keeping your dog\'s coat clean and dry, preventing excessive licking, and managing stress. Regular grooming and prompt treatment of skin issues help prevent hot spots.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q4: Can I treat dog skin conditions at home?
                </h3>
                <p className="text-gray-700">
                  Some minor skin issues can be managed at home with proper care, but most conditions require professional diagnosis and treatment. Never apply medications without veterinary guidance, as this can mask serious conditions or cause harm.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q5: Are certain dog breeds more prone to skin conditions?
                </h3>
                <p className="text-gray-700">
                  Yes, breed predispositions exist. Dogs with floppy ears are prone to ear infections, wrinkled breeds to fold dermatitis, and certain breeds to allergies. Discuss breed-specific skin concerns with your veterinarian.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q6: How long does it take to treat dog skin conditions?
                </h3>
                <p className="text-gray-700">
                  Treatment duration varies by condition. Acute conditions like hot spots may improve in 1-2 weeks, while chronic conditions like allergies require ongoing management. Follow your vet\'s treatment plan for best results.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q7: What role does diet play in dog skin health?
                </h3>
                <p className="text-gray-700">
                  Diet significantly impacts skin health. High-quality proteins, omega-3 and omega-6 fatty acids, and essential vitamins support healthy skin and coat. Food allergies can also trigger skin conditions, so discuss dietary options with your vet.
                </p>
              </div>
            </div>
          </div>

          {/* ========== Prevention & Management Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Prevention and Skin Health Management
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Preventive Measures</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Regular Grooming:</strong> Brush coat regularly to remove debris and check for skin issues</li>
                  <li>• <strong>Parasite Prevention:</strong> Use flea, tick, and mite prevention as recommended by your vet</li>
                  <li>• <strong>Bathing:</strong> Bathe with appropriate shampoo every 4-6 weeks or as recommended</li>
                  <li>• <strong>Ear Care:</strong> Clean ears regularly to prevent infections</li>
                  <li>• <strong>Nail Trimming:</strong> Keep nails trimmed to prevent scratching damage</li>
                  <li>• <strong>Vet Checkups:</strong> Annual skin health assessments catch problems early</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Lifestyle Factors</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Quality Diet:</strong> Feed high-quality food with omega fatty acids for skin health</li>
                  <li>• <strong>Hydration:</strong> Ensure constant access to fresh water</li>
                  <li>• <strong>Stress Reduction:</strong> Minimize stress through regular exercise and play</li>
                  <li>• <strong>Environmental Control:</strong> Keep living areas clean and free from irritants</li>
                  <li>• <strong>Healthy Weight:</strong> Maintain ideal weight to reduce skin stress</li>
                  <li>• <strong>Regular Exercise:</strong> Appropriate activity supports overall health</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ========== Conclusion Section ========== */}
          <div className="mb-12 bg-green-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
              Conclusion
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Understanding common dog skin conditions is one of the most important responsibilities of dog ownership. By learning to recognize the signs of skin problems and knowing when to seek veterinary care, you can help ensure your canine companion lives a comfortable, healthy life.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Remember that each dog is an individual, and what\'s normal for one dog may be unusual for another. Pay attention to your dog\'s baseline skin condition, coat quality, and behavior. Any significant changes warrant a call to your veterinarian.
            </p>

            <p className="text-lg leading-relaxed">
              Prevention is always better than treatment. Regular grooming, preventive parasite treatments, a healthy diet, and annual veterinary checkups can prevent many common skin conditions. When in doubt, it\'s always better to have your dog checked by a professional. Your veterinarian is your partner in keeping your dog\'s skin healthy and comfortable.
            </p>
          </div>

          {/* ========== Related Articles Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Related Health Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/dog-breed-health-issues" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Dog Breed Health Issues</h3>
                <p className="text-gray-600">Learn about breed-specific health concerns and predispositions.</p>
              </Link>
              
              <Link href="/blog/pet-emergency-signs" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Pet Emergency Signs</h3>
                <p className="text-gray-600">Recognize critical symptoms that require immediate veterinary attention.</p>
              </Link>

              <Link href="/blog/pet-parasite-prevention" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Pet Parasite Prevention</h3>
                <p className="text-gray-600">Learn about parasites, prevention strategies, and treatment options.</p>
              </Link>

              <Link href="/blog/pet-allergy-management" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Pet Allergy Management</h3>
                <p className="text-gray-600">Understand allergies, symptoms, and management strategies for your pet.</p>
              </Link>
            </div>
          </div>

          {/* ========== Pet Care Tools Section ========== */}
          <div className="mb-12 bg-gradient-to-r from-pink-50 to-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Explore Our Pet Care Tools
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/health-center" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🏥 Health Center</h3>
                <p className="text-gray-600">Get personalized health advice and symptom checking for your pet.</p>
              </Link>
              
              <Link href="/pet-care-guide" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">📋 Pet Care Guide</h3>
                <p className="text-gray-600">Comprehensive care instructions tailored to your pet's needs.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export default function DogSkinConditionsGuide() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DogSkinConditionsGuideContent />
    </Suspense>
  );
}
