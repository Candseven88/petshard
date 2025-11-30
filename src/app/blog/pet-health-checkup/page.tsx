import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Health Checkup Guide: Annual Vet Visits & Preventive Care",
  description: "Complete guide to pet health checkups. Learn what to expect during annual vet visits, preventive care schedules, and how to prepare your pet for veterinary exams.",
  keywords: ["pet health checkup", "annual vet visit", "preventive pet care", "veterinary exam", "pet wellness checkup", "pet health screening"],
  openGraph: {
    title: "Pet Health Checkup Guide: Annual Vet Visits & Preventive Care",
    description: "Expert guide to pet health checkups. Learn what to expect, how to prepare, and why regular veterinary exams are essential for your pet's health.",
    type: "article",
    url: "https://petshard.com/blog/pet-health-checkup",
    siteName: "PetShard",
    images: [{
      url: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      width: 1200,
      height: 630,
      alt: "Pet Health Checkup Guide: Annual Vet Visits & Preventive Care"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Health Checkup Guide: Annual Vet Visits & Preventive Care",
    description: "Learn what happens during pet health checkups and how to keep your pet healthy with preventive veterinary care.",
    images: ["https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"]
  },
  alternates: {
    canonical: "https://petshard.com/blog/pet-health-checkup"
  },
  other: {
    "structured-data": JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Pet Health Checkup Guide: Annual Vet Visits & Preventive Care",
  "description": "Complete guide to pet health checkups and preventive veterinary care for dogs and cats",
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
  "datePublished": "2025-11-27T15:32:13.018Z",
  "dateModified": "2025-11-27T15:32:13.019Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://petshard.com/blog/pet-health-checkup"
  }
})
  }
};

function PetHealthCheckupGuideContent() {
  return (
    <Layout title="Blog" showBackButton={true}>
      <article className="max-w-4xl mx-auto px-4">
        
        {/* ========== Header Section ========== */}
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/blog" className="hover:text-pink-600">Blog</Link>
            <span className="mx-2">›</span>
            <span>Pet Health</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pet Health Checkup Guide: Annual Vet Visits & Preventive Care
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>November 30, 2024</span>
            <span>•</span>
            <span>14 min read</span>
            <span>•</span>
            <span>🏥 Pet Health</span>
          </div>
        </header>

        {/* ========== Introduction Section ========== */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border-l-4 border-blue-500">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
              "I Want to Keep My Pet Healthy - What Should I Do?"
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Regular pet health checkups are the foundation of preventive care. Just like humans, pets need annual (or more frequent) veterinary exams to catch health problems early, maintain vaccinations, and ensure they're living their healthiest lives. Many pet owners don't realize that what seems like a routine checkup can actually detect serious conditions before they become emergencies.
            </p>

            <div className="bg-white rounded-lg p-5 mb-4 border-l-4 border-pink-400">
              <p className="text-lg font-medium text-gray-800">
                <span className="text-pink-600">Real Pet Owner Question:</span> "What happens during a pet health checkup? How often should my dog/cat see the vet?"
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              In this comprehensive guide, we'll walk you through everything you need to know about pet health checkups—from what to expect during the exam to how to prepare your pet, the different types of checkups available, and why preventive care is so important for your pet's long-term health and happiness.
            </p>
          </div>

          {/* ========== Core Content Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              What Happens During a Pet Health Checkup?
            </h2>

            <div className="bg-yellow-50 rounded-lg p-6 mb-6 border-l-4 border-yellow-400">
              <p className="text-gray-700">
                <strong className="text-yellow-700">🔍 Key Fact:</strong> Pets age 7 times faster than humans. A single year without a vet visit is equivalent to 7 years of human health changes. Annual checkups are essential for catching age-related diseases early.
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              A comprehensive pet health checkup typically includes several important components:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      Physical Examination
                    </h3>
                    <p className="text-gray-700">
                      Your veterinarian will examine your pet's body from nose to tail, checking eyes, ears, mouth, skin, coat, and palpating the abdomen to feel for any abnormalities or lumps.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      Vital Signs Assessment
                    </h3>
                    <p className="text-gray-700">
                      Temperature, heart rate, respiratory rate, and blood pressure are measured to establish baseline health metrics and detect any abnormalities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      Vaccination Review & Updates
                    </h3>
                    <p className="text-gray-700">
                      Your vet will review your pet's vaccination history and administer any necessary boosters based on age, lifestyle, and local disease risks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      Parasite Screening
                    </h3>
                    <p className="text-gray-700">
                      Blood tests and fecal exams check for internal parasites (worms) and external parasites (fleas, ticks). Preventive medications are recommended based on results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      Dental Examination
                    </h3>
                    <p className="text-gray-700">
                      Your vet will check for dental disease, tartar buildup, and tooth problems. Professional cleaning may be recommended if needed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      Blood Work & Laboratory Tests
                    </h3>
                    <p className="text-gray-700">
                      For senior pets or those with health concerns, blood tests check organ function, thyroid levels, and screen for diseases like diabetes and kidney disease.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h3 className="text-lg font-bold text-blue-800 mb-3">
                💡 Pro Tip: Prepare a Health History
              </h3>
              <p className="text-gray-700">
                Before your appointment, write down any changes you've noticed in your pet's behavior, appetite, energy level, or bathroom habits. This information helps your vet provide better care.
              </p>
            </div>
          </div>

          {/* ========== Checkup Schedule Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Pet Health Checkup Schedule: How Often Should Your Pet See the Vet?
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-4 py-3 text-left font-bold">Pet Age/Type</th>
                    <th className="px-4 py-3 text-left font-bold">Recommended Frequency</th>
                    <th className="px-4 py-3 text-left font-bold">Key Focus Areas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-800">Puppies/Kittens (0-1 year)</td>
                    <td className="px-4 py-3 text-gray-700">Every 3-4 weeks until 16 weeks, then every 6-8 weeks</td>
                    <td className="px-4 py-3 text-gray-700">Vaccinations, deworming, growth monitoring</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-800">Adult Pets (1-7 years)</td>
                    <td className="px-4 py-3 text-gray-700">Once per year (annually)</td>
                    <td className="px-4 py-3 text-gray-700">Preventive care, vaccinations, dental health</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-800">Senior Pets (7+ years)</td>
                    <td className="px-4 py-3 text-gray-700">Twice per year (every 6 months)</td>
                    <td className="px-4 py-3 text-gray-700">Blood work, organ function, disease screening</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-800">Pets with Chronic Conditions</td>
                    <td className="px-4 py-3 text-gray-700">Every 3-6 months or as recommended</td>
                    <td className="px-4 py-3 text-gray-700">Disease management, medication adjustments</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  🐶 Young Pets
                </h3>
                <p className="text-gray-700">
                  Frequent visits establish baseline health, complete vaccination series, and catch developmental issues early.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  🐱 Adult Pets
                </h3>
                <p className="text-gray-700">
                  Annual checkups maintain preventive care, update vaccinations, and monitor for early signs of disease.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  👴 Senior Pets
                </h3>
                <p className="text-gray-700">
                  Twice-yearly visits catch age-related diseases early and adjust care plans as health needs change.
                </p>
              </div>
            </div>
          </div>

          {/* ========== FAQ Section ========== */}
          <div className="mb-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Frequently Asked Questions About Pet Health Checkups
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  How much does a pet health checkup cost?
                </h3>
                <p className="text-gray-700">
                  Costs vary by location and veterinary clinic, but a basic annual checkup typically ranges from $100-$300. Senior pets or those requiring blood work may cost $200-$500+. Many clinics offer wellness packages that bundle checkups with vaccinations and preventive care.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  What should I bring to my pet's checkup appointment?
                </h3>
                <p className="text-gray-700">
                  Bring your pet's vaccination records, a list of current medications, your pet's medical history, and any questions or concerns. Also bring a recent stool sample if parasite screening is needed.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Can I skip my pet's annual checkup if they seem healthy?
                </h3>
                <p className="text-gray-700">
                  No. Many serious diseases like diabetes, kidney disease, and cancer show no symptoms in early stages. Annual checkups catch these conditions before they become emergencies, potentially saving your pet's life and thousands in treatment costs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  What if my pet is anxious about vet visits?
                </h3>
                <p className="text-gray-700">
                  Talk to your vet about anxiety management options. Some clinics offer calming treats, pheromone sprays, or anti-anxiety medication before appointments. Arriving early and staying calm yourself also helps reduce your pet's stress.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Are wellness plans worth it?
                </h3>
                <p className="text-gray-700">
                  Yes, many pet owners find wellness plans valuable. They typically cover annual checkups, vaccinations, and preventive care at a fixed monthly cost, making budgeting easier and encouraging regular preventive visits.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  What breed-specific health issues should I discuss with my vet?
                </h3>
                <p className="text-gray-700">
                  Different breeds have predispositions to specific conditions. For example, large breeds are prone to hip dysplasia, and certain breeds have higher cancer rates. Your vet can recommend breed-specific screening tests during checkups.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  How do I prepare my pet for a health checkup?
                </h3>
                <p className="text-gray-700">
                  Exercise your pet before the appointment to reduce anxiety. Avoid feeding right before the visit if blood work is planned. Bring vaccination records and a list of any symptoms or behavioral changes you've noticed.
                </p>
              </div>
            </div>
          </div>

          {/* ========== Conclusion Section ========== */}
          <div className="mb-12 bg-green-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
              Final Thoughts
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Regular pet health checkups are one of the most important investments you can make in your pet's wellbeing. These appointments aren't just about treating illness—they're about preventing disease, catching problems early, and ensuring your pet lives a long, healthy, and happy life.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              By following the recommended checkup schedule for your pet's age and health status, preparing thoroughly for appointments, and maintaining open communication with your veterinarian, you're taking proactive steps to protect your beloved companion.
            </p>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-400">
              <p className="text-lg">
                <strong>Remember:</strong> Your veterinarian is your partner in your pet's health. Don't hesitate to ask questions, discuss concerns, or seek a second opinion if needed. Your pet's health is worth the investment.
              </p>
            </div>
          </div>

          {/* ========== Related Articles Section ========== */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Pet Health Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                href="/blog/pet-vaccination-schedule" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-green-100 p-3 rounded-full">
                  <span className="text-2xl">💉</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Pet Vaccination Schedule</h4>
                  <p className="text-sm text-gray-600">Complete vaccination timeline for puppies and adult pets</p>
                </div>
              </Link>
              <Link 
                href="/blog/pet-dental-health" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <span className="text-2xl">🦷</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Pet Dental Health</h4>
                  <p className="text-sm text-gray-600">Dental care guide and prevention strategies</p>
                </div>
              </Link>
              <Link 
                href="/blog/pet-parasite-prevention" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-purple-100 p-3 rounded-full">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Parasite Prevention</h4>
                  <p className="text-sm text-gray-600">Protection against fleas, ticks, and worms</p>
                </div>
              </Link>
              <Link 
                href="/blog/senior-pet-care" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-orange-100 p-3 rounded-full">
                  <span className="text-2xl">👴</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Senior Pet Care</h4>
                  <p className="text-sm text-gray-600">Age-specific care for older pets</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export default function PetHealthCheckupGuide() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PetHealthCheckupGuideContent />
    </Suspense>
  );
}
