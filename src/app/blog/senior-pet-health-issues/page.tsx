import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senior Pet Health Issues: Age-Related Care Guide",
  description: "Understand common senior pet health issues including arthritis, cognitive decline, and organ disease. Learn age-specific care guidelines and when to seek veterinary help.",
  keywords: ["senior pet health", "aging pets", "senior dog health", "senior cat health", "age-related pet diseases", "geriatric pet care"],
  openGraph: {
    title: "Senior Pet Health Issues: Age-Related Care Guide",
    description: "Understand common senior pet health issues including arthritis, cognitive decline, and organ disease. Learn age-specific care guidelines and when to seek veterinary help.",
    type: "article",
    url: "https://petshard.com/blog/senior-pet-health-issues",
    siteName: "PetShard",
    images: [{
      url: "https://images.unsplash.com/photo-1587300411107-ec8b827193b2?w=1200&h=630&fit=crop",
      width: 1200,
      height: 630,
      alt: "Senior Pet Health Issues: Age-Related Care Guide"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Pet Health Issues: Age-Related Care Guide",
    description: "Understand common senior pet health issues including arthritis, cognitive decline, and organ disease. Learn age-specific care guidelines and when to seek veterinary help.",
    images: ["https://images.unsplash.com/photo-1587300411107-ec8b827193b2?w=1200&h=630&fit=crop"]
  },
  alternates: {
    canonical: "https://petshard.com/blog/senior-pet-health-issues"
  },
  other: {
    "structured-data": JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Senior Pet Health Issues: Age-Related Care Guide",
  "description": "Understand common senior pet health issues including arthritis, cognitive decline, and organ disease. Learn age-specific care guidelines and when to seek veterinary help.",
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
  "datePublished": "2025-11-28T03:43:40.401Z",
  "dateModified": "2025-11-28T03:43:40.401Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://petshard.com/blog/senior-pet-health-issues"
  }
})
  }
};

function SeniorPetHealthIssuesContent() {
  return (
    <Layout title="Blog" showBackButton={true}>
      <article className="max-w-4xl mx-auto px-4">
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/blog" className="hover:text-pink-600">Blog</Link>
            <span className="mx-2">›</span>
            <span>Pet Health</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Senior Pet Health Issues: Age-Related Care Guide
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>14 min read</span>
            <span>•</span>
            <span>🐾 Pet Health</span>
          </div>
        </header>

        <div className="relative h-64 md:h-96 w-full mb-12 rounded-xl overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1587300411107-ec8b827193b2?w=1200&h=630&fit=crop" 
            alt="Senior pet health issues and age-related care" 
            fill 
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">Introduction</h2>
            <p className="text-lg leading-relaxed mb-4">
              As our beloved pets age, they face unique health challenges that require specialized care and attention. Senior pets (typically 7+ years for dogs and cats) experience age-related changes that can significantly impact their quality of life.
            </p>
            <p className="text-lg leading-relaxed">
              Understanding common senior pet health issues helps you recognize symptoms early and provide appropriate care. This comprehensive guide covers the most prevalent age-related health problems, their warning signs, and practical management strategies to keep your senior pet comfortable and healthy during their golden years.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Common Senior Pet Health Issues</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">1. Arthritis and Joint Disease</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Degenerative joint disease causing stiffness, pain, and reduced mobility, especially after rest or in cold weather.</p>
                <p className="text-gray-700 mb-2"><strong>Symptoms:</strong> Limping, reluctance to jump or climb stairs, difficulty rising, swelling in joints, decreased activity level.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Mild (occasional stiffness) to severe (inability to move comfortably).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours if mobility significantly decreases. Immediate if unable to bear weight on limb.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">2. Cognitive Dysfunction (Dementia)</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Age-related cognitive decline affecting memory, awareness, and behavior patterns.</p>
                <p className="text-gray-700 mb-2"><strong>Symptoms:</strong> Disorientation, confusion, getting lost in familiar places, changes in sleep patterns, inappropriate elimination, decreased recognition of family members.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Mild (occasional confusion) to severe (constant disorientation).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours to rule out other medical conditions. Discuss management strategies.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">3. Kidney Disease</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Progressive loss of kidney function, very common in senior cats and dogs.</p>
                <p className="text-gray-700 mb-2"><strong>Symptoms:</strong> Increased thirst and urination, weight loss, poor appetite, bad breath, lethargy, vomiting.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Mild (early stage) to severe (end-stage renal disease).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours if symptoms appear. Regular monitoring essential for management.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">4. Heart Disease</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Weakening of the heart muscle or valve problems affecting circulation.</p>
                <p className="text-gray-700 mb-2"><strong>Symptoms:</strong> Coughing, difficulty breathing, lethargy, exercise intolerance, fainting, swollen abdomen.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Mild (occasional coughing) to severe (respiratory distress).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Immediate if difficulty breathing. Within 24 hours for persistent coughing.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">5. Diabetes</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Inability to regulate blood sugar levels, increasingly common in senior pets.</p>
                <p className="text-gray-700 mb-2"><strong>Symptoms:</strong> Increased thirst and urination, weight loss despite increased appetite, lethargy, cataracts (in dogs).</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Manageable with treatment to life-threatening if untreated.</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours if symptoms appear. Requires ongoing management and monitoring.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">6. Cancer</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Abnormal cell growth, more common in senior pets.</p>
                <p className="text-gray-700 mb-2"><strong>Symptoms:</strong> Lumps or bumps, weight loss, loss of appetite, lethargy, difficulty eating or swallowing, abnormal bleeding.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Varies widely depending on type and stage.</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours if any lumps or unusual symptoms appear. Early detection improves outcomes.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">7. Dental Disease</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Tooth decay, gum disease, and tooth loss affecting nutrition and overall health.</p>
                <p className="text-gray-700 mb-2"><strong>Symptoms:</strong> Bad breath, difficulty eating, drooling, swollen gums, loose or missing teeth, behavioral changes.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Mild (bad breath) to severe (infection affecting organs).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours for dental concerns. Regular dental checkups essential.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">8. Vision and Hearing Loss</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Age-related decline in sight and hearing, common in senior pets.</p>
                <p className="text-gray-700 mb-2"><strong>Symptoms:</strong> Bumping into objects, reluctance to move in dim light, not responding to sounds, increased anxiety.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Partial to complete loss of vision or hearing.</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours to confirm and discuss management strategies.</p>
              </div>
            </div>

            <div className="mt-12 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Senior Pet Health Issues Severity Assessment Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 p-3 text-left font-bold">Health Issue</th>
                      <th className="border border-gray-300 p-3 text-left font-bold">Mild (Routine Visit)</th>
                      <th className="border border-gray-300 p-3 text-left font-bold">Moderate (Within 24 Hours)</th>
                      <th className="border border-gray-300 p-3 text-left font-bold">Severe (Immediate/Emergency)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Arthritis</td>
                      <td className="border border-gray-300 p-3">Occasional stiffness after rest</td>
                      <td className="border border-gray-300 p-3">Limping, reluctance to move</td>
                      <td className="border border-gray-300 p-3">Unable to bear weight on limb</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Cognitive Dysfunction</td>
                      <td className="border border-gray-300 p-3">Occasional confusion</td>
                      <td className="border border-gray-300 p-3">Frequent disorientation</td>
                      <td className="border border-gray-300 p-3">Constant confusion, safety risk</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Kidney Disease</td>
                      <td className="border border-gray-300 p-3">Slightly increased thirst</td>
                      <td className="border border-gray-300 p-3">Increased thirst/urination, weight loss</td>
                      <td className="border border-gray-300 p-3">Severe symptoms, vomiting, lethargy</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Heart Disease</td>
                      <td className="border border-gray-300 p-3">Occasional coughing</td>
                      <td className="border border-gray-300 p-3">Frequent coughing, mild lethargy</td>
                      <td className="border border-gray-300 p-3">Difficulty breathing, collapse</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Diabetes</td>
                      <td className="border border-gray-300 p-3">Slightly increased thirst</td>
                      <td className="border border-gray-300 p-3">Increased thirst/urination, weight loss</td>
                      <td className="border border-gray-300 p-3">Diabetic emergency, lethargy</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Cancer</td>
                      <td className="border border-gray-300 p-3">Small lump, no symptoms</td>
                      <td className="border border-gray-300 p-3">Growing lump, mild symptoms</td>
                      <td className="border border-gray-300 p-3">Rapid growth, severe symptoms</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Dental Disease</td>
                      <td className="border border-gray-300 p-3">Bad breath, minor tartar</td>
                      <td className="border border-gray-300 p-3">Difficulty eating, swollen gums</td>
                      <td className="border border-gray-300 p-3">Infection, severe pain, tooth loss</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Vision/Hearing Loss</td>
                      <td className="border border-gray-300 p-3">Mild vision/hearing decline</td>
                      <td className="border border-gray-300 p-3">Noticeable vision/hearing loss</td>
                      <td className="border border-gray-300 p-3">Complete blindness or deafness</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">💡 Important Note</h3>
              <p className="text-yellow-900">
                This guide is for informational purposes only and should not replace professional veterinary advice. Senior pets require regular veterinary checkups (twice yearly recommended) to monitor for age-related conditions and adjust care as needed.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Senior Pet Care Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-800 mb-4">🏥 Veterinary Care</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Twice-yearly checkups:</strong> More frequent than younger pets</li>
                  <li>• <strong>Blood work:</strong> Annual or semi-annual screening for organ function</li>
                  <li>• <strong>Dental exams:</strong> Regular assessment and cleaning as needed</li>
                  <li>• <strong>Weight monitoring:</strong> Track changes that may indicate disease</li>
                  <li>• <strong>Pain assessment:</strong> Discuss pain management options</li>
                  <li>• <strong>Medication review:</strong> Adjust medications as health changes</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg shadow-md border-t-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-4">🍽️ Nutrition and Diet</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Senior-formulated food:</strong> Lower calories, easier to digest</li>
                  <li>• <strong>Smaller, frequent meals:</strong> 2-3 meals daily instead of one</li>
                  <li>• <strong>Soft food options:</strong> For pets with dental issues</li>
                  <li>• <strong>Joint support:</strong> Glucosamine and omega-3 supplements</li>
                  <li>• <strong>Hydration:</strong> Ensure constant access to fresh water</li>
                  <li>• <strong>Kidney-friendly diet:</strong> If kidney disease is present</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg shadow-md border-t-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-800 mb-4">🏃 Exercise and Activity</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Gentle exercise:</strong> Short, frequent walks instead of long ones</li>
                  <li>• <strong>Low-impact activities:</strong> Swimming or walking on soft surfaces</li>
                  <li>• <strong>Mental stimulation:</strong> Puzzle toys and interactive games</li>
                  <li>• <strong>Rest periods:</strong> Allow frequent breaks and naps</li>
                  <li>• <strong>Avoid extreme temperatures:</strong> Protect from heat and cold</li>
                  <li>• <strong>Modify environment:</strong> Ramps for stairs, orthopedic bedding</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg shadow-md border-t-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-800 mb-4">🏠 Home Environment</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Comfortable bedding:</strong> Orthopedic beds for joint support</li>
                  <li>• <strong>Easy access:</strong> Food, water, and litter boxes on main level</li>
                  <li>• <strong>Non-slip surfaces:</strong> Prevent slipping on hardwood floors</li>
                  <li>• <strong>Consistent routine:</strong> Maintain predictable schedule</li>
                  <li>• <strong>Quiet space:</strong> Reduce stress and provide safe retreat</li>
                  <li>• <strong>Temperature control:</strong> Keep home at comfortable temperature</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg shadow-md border-t-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-4">💊 Pain Management</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Medications:</strong> NSAIDs or other pain relievers as prescribed</li>
                  <li>• <strong>Supplements:</strong> Joint support and anti-inflammatory options</li>
                  <li>• <strong>Physical therapy:</strong> Massage and gentle stretching</li>
                  <li>• <strong>Heat therapy:</strong> Warm compresses for stiff joints</li>
                  <li>• <strong>Acupuncture:</strong> Alternative pain management option</li>
                  <li>• <strong>Quality of life:</strong> Prioritize comfort over quantity of life</li>
                </ul>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">🧠 Cognitive Support</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Medications:</strong> Discuss cognitive support options with vet</li>
                  <li>• <strong>Routine:</strong> Maintain consistent daily schedule</li>
                  <li>• <strong>Mental enrichment:</strong> Puzzle toys and training exercises</li>
                  <li>• <strong>Nighttime support:</strong> Manage sleep disruptions</li>
                  <li>• <strong>Safety measures:</strong> Prevent wandering and disorientation</li>
                  <li>• <strong>Patience and compassion:</strong> Adapt to behavioral changes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Q1: At what age is my pet considered senior?</h3>
                <p className="text-gray-700">
                  Most pets are considered senior at 7 years old, though larger dog breeds may reach senior status earlier (around 5-6 years). Cats typically reach senior status at 7-10 years. Your veterinarian can help determine your specific pet's senior status based on breed and health.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Q2: How often should senior pets visit the veterinarian?</h3>
                <p className="text-gray-700">
                  Senior pets should visit the veterinarian twice yearly (every 6 months) for wellness exams and health monitoring. This frequency allows early detection of age-related conditions and timely intervention. Pets with existing health conditions may need more frequent visits.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Q3: What blood work should senior pets have?</h3>
                <p className="text-gray-700">
                  Senior pets should have annual or semi-annual blood work including complete blood count (CBC) and comprehensive metabolic panel (CMP) to assess organ function, detect anemia, and identify early disease. Your veterinarian may recommend additional tests based on your pet's health history.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Q4: How can I help my senior pet with arthritis?</h3>
                <p className="text-gray-700">
                  Arthritis management includes pain medications, joint supplements (glucosamine, chondroitin), gentle exercise, weight management, orthopedic bedding, and environmental modifications like ramps. Physical therapy and massage can also help. Discuss all options with your veterinarian.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Q5: What should I feed my senior pet?</h3>
                <p className="text-gray-700">
                  Senior pets benefit from high-quality, senior-formulated diets that are lower in calories, easier to digest, and contain joint-supporting nutrients. Smaller, more frequent meals help with digestion. Soft food options are better for pets with dental issues. Consult your vet for specific dietary recommendations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Q6: How do I know if my senior pet is in pain?</h3>
                <p className="text-gray-700">
                  Signs of pain include reluctance to move, limping, difficulty rising, decreased activity, behavioral changes, aggression when touched, and changes in eating or bathroom habits. Cats may hide more or stop grooming. Any significant behavior change warrants a veterinary evaluation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Q7: When should I consider end-of-life care for my senior pet?</h3>
                <p className="text-gray-700">
                  Consider end-of-life care when your pet has a terminal diagnosis, is experiencing uncontrollable pain, has lost interest in activities they enjoy, or has more bad days than good days. Discuss quality of life with your veterinarian. Palliative care and hospice options can help your pet remain comfortable.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 bg-green-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">Conclusion</h2>
            <p className="text-lg leading-relaxed mb-4">
              Senior pets deserve special attention and care to ensure their golden years are comfortable and fulfilling. Understanding common age-related health issues allows you to recognize symptoms early and seek appropriate veterinary care.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Regular veterinary checkups, appropriate nutrition, gentle exercise, pain management, and environmental modifications all contribute to your senior pet's quality of life. By staying proactive and attentive to changes in your pet's health and behavior, you can help them enjoy their senior years to the fullest.
            </p>
            <p className="text-lg leading-relaxed">
              Remember that every senior pet is unique. Work closely with your veterinarian to develop a personalized care plan that addresses your pet's specific needs and health conditions. Your dedication to their care during this special time will be deeply appreciated by your beloved companion.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Senior Pet Care Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/senior-pet-care" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Senior Pet Care Guide</h3>
                <p className="text-gray-600">Comprehensive care instructions for keeping your senior pet comfortable and healthy.</p>
              </Link>
              <Link href="/blog/pet-emergency-signs" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Pet Emergency Signs</h3>
                <p className="text-gray-600">Recognize critical symptoms that require immediate veterinary attention.</p>
              </Link>
              <Link href="/blog/pet-dental-health" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Pet Dental Health</h3>
                <p className="text-gray-600">Understand dental care importance and signs of dental disease in aging pets.</p>
              </Link>
              <Link href="/blog/pet-weight-management" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Pet Weight Management</h3>
                <p className="text-gray-600">Learn weight management strategies important for senior pet health.</p>
              </Link>
            </div>
          </div>

          <div className="mb-12 bg-gradient-to-r from-pink-50 to-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Our Pet Care Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/health-center" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🏥 Health Center</h3>
                <p className="text-gray-600">Get personalized health advice and symptom checking for your senior pet.</p>
              </Link>
              <Link href="/pet-care-guide" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">📋 Pet Care Guide</h3>
                <p className="text-gray-600">Comprehensive care instructions tailored to your senior pet's needs.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export default function SeniorPetHealthIssues() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SeniorPetHealthIssuesContent />
    </Suspense>
  );
}
