import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cat Health Symptoms: When to Call the Vet",
  description: "Learn to recognize common cat health symptoms. Understand severity levels, causes, and when to seek veterinary care for your cat.",
  keywords: ["cat health symptoms", "cat symptoms", "when to call vet", "cat illness signs", "cat health problems", "feline symptoms"],
  openGraph: {
    title: "Cat Health Symptoms: When to Call the Vet",
    description: "Learn to recognize common cat health symptoms. Understand severity levels, causes, and when to seek veterinary care for your cat.",
    type: "article",
    url: "https://petshard.com/blog/cat-health-symptoms",
    siteName: "PetShard",
    images: [{
      url: "https://cdn2.thecatapi.com/images/ag4.jpg",
      width: 1200,
      height: 630,
      alt: "Cat Health Symptoms: When to Call the Vet"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cat Health Symptoms: When to Call the Vet",
    description: "Learn to recognize common cat health symptoms. Understand severity levels, causes, and when to seek veterinary care for your cat.",
    images: ["https://cdn2.thecatapi.com/images/ag4.jpg"]
  },
  alternates: {
    canonical: "https://petshard.com/blog/cat-health-symptoms"
  },
  other: {
    "structured-data": JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cat Health Symptoms: When to Call the Vet",
  "description": "Learn to recognize common cat health symptoms. Understand severity levels, causes, and when to seek veterinary care for your cat.",
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
    "@id": "https://petshard.com/blog/cat-health-symptoms"
  }
})
  }
};

function CatHealthSymptomsGuideContent() {
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
            Cat Health Symptoms: When to Call the Vet
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
            alt="The Ultimate Cat Health Symptoms Guide for Pet Parents" 
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
              Recognizing cat health symptoms early can make the difference between a quick recovery and serious complications. As a cat owner, understanding what signs indicate your feline friend needs veterinary attention is essential for their wellbeing.
            </p>

            <p className="text-lg leading-relaxed">
              <p className="text-lg leading-relaxed mb-4">
                Cats are masters at hiding illness, which means symptoms often appear only when a condition has progressed. This comprehensive guide covers the most common cat health symptoms, their severity levels, and when you should contact your veterinarian. By learning to recognize these signs early, you can help ensure your cat receives prompt treatment.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Whether you\'re a new cat owner or have years of experience, this guide will help you understand what\'s normal and what requires professional attention. We\'ll cover specific symptoms, their possible causes, and actionable guidance for each situation.
              </p>
            </p>
          </div>

          {/* ========== Core Content Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Common Cat Health Symptoms
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">1. Vomiting</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Expulsion of stomach contents, occurring once or multiple times.</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Hairballs, food intolerance, gastritis, kidney disease, hyperthyroidism, or intestinal parasites.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Occasional vomiting (mild) vs. frequent vomiting (moderate to severe).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Immediate if vomiting is frequent, contains blood, or accompanied by lethargy. Within 24 hours if occasional.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">2. Diarrhea</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Loose or watery stools, occurring more frequently than normal.</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Dietary changes, food allergies, parasites, bacterial infections, or inflammatory bowel disease.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Occasional loose stools (mild) vs. persistent diarrhea with blood (severe).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Immediate if bloody or accompanied by vomiting. Within 24-48 hours if persistent.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">3. Urinary Issues</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Straining to urinate, frequent urination, or inability to urinate.</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Urinary tract infection, bladder stones, feline lower urinary tract disease (FLUTD), or kidney disease.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Mild straining (mild) vs. complete inability to urinate (emergency).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Immediate if unable to urinate or in severe pain. Within 24 hours for straining or frequent urination.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">4. Loss of Appetite</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Reduced food intake or complete refusal to eat.</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Dental disease, nausea, stress, illness, or medication side effects.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Eating less than usual (mild) vs. not eating for 24+ hours (severe).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Immediate if not eating for more than 24 hours. Within 24 hours if eating significantly less.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">5. Lethargy and Weakness</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Unusual tiredness, lack of energy, or reluctance to move.</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Infection, anemia, hyperthyroidism, kidney disease, or pain.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Sleeping more than usual (mild) vs. unable to stand or move (severe).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Immediate if severe. Within 24 hours if persistent lethargy.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">6. Respiratory Issues</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Coughing, sneezing, wheezing, or difficulty breathing.</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Upper respiratory infection, asthma, allergies, or heart disease.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Occasional sneezing (mild) vs. labored breathing (emergency).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Immediate if difficulty breathing. Within 24 hours for persistent coughing or sneezing.</p>
              </div>
            </div>

            {/* Symptom Severity Table */}
            <div className="mt-12 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Symptom Severity Assessment Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 p-3 text-left font-bold">Symptom</th>
                      <th className="border border-gray-300 p-3 text-left font-bold">Mild (Routine Vet Visit)</th>
                      <th className="border border-gray-300 p-3 text-left font-bold">Moderate (Within 24 Hours)</th>
                      <th className="border border-gray-300 p-3 text-left font-bold">Severe (Immediate/Emergency)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Vomiting</td>
                      <td className="border border-gray-300 p-3">Occasional, no other symptoms</td>
                      <td className="border border-gray-300 p-3">Frequent, mild lethargy</td>
                      <td className="border border-gray-300 p-3">Bloody, with severe lethargy</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Diarrhea</td>
                      <td className="border border-gray-300 p-3">Loose stools, eating normally</td>
                      <td className="border border-gray-300 p-3">Persistent, mild dehydration</td>
                      <td className="border border-gray-300 p-3">Bloody, severe dehydration</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Urinary Issues</td>
                      <td className="border border-gray-300 p-3">Mild straining, normal output</td>
                      <td className="border border-gray-300 p-3">Frequent straining, reduced output</td>
                      <td className="border border-gray-300 p-3">Unable to urinate, severe pain</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Loss of Appetite</td>
                      <td className="border border-gray-300 p-3">Eating less, alert and active</td>
                      <td className="border border-gray-300 p-3">Minimal eating, mild lethargy</td>
                      <td className="border border-gray-300 p-3">No eating for 24+ hours</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Lethargy</td>
                      <td className="border border-gray-300 p-3">Sleeping more, responsive</td>
                      <td className="border border-gray-300 p-3">Very sleepy, slow to respond</td>
                      <td className="border border-gray-300 p-3">Unable to stand or move</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Respiratory Issues</td>
                      <td className="border border-gray-300 p-3">Occasional sneezing/coughing</td>
                      <td className="border border-gray-300 p-3">Frequent sneezing/coughing</td>
                      <td className="border border-gray-300 p-3">Difficulty breathing, gasping</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">
                💡 Important Note
              </h3>
              <p className="text-yellow-900">
                This guide is for informational purposes only and should not replace professional veterinary advice. When in doubt, always consult your veterinarian. Cats can deteriorate quickly, so it\'s better to err on the side of caution.
              </p>
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
                  <li>• Difficulty breathing or gasping for air</li>
                  <li>• Unable to urinate or defecate</li>
                  <li>• Severe bleeding or trauma</li>
                  <li>• Unconsciousness or unresponsiveness</li>
                  <li>• Severe pain or inability to move</li>
                  <li>• Seizures or convulsions</li>
                  <li>• Suspected poisoning or toxin ingestion</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg shadow-md border-t-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-800 mb-4">
                  ⚠️ Call Within 24 Hours
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Persistent vomiting or diarrhea</li>
                  <li>• Not eating for more than 12 hours</li>
                  <li>• Straining to urinate or defecate</li>
                  <li>• Excessive thirst or urination</li>
                  <li>• Persistent coughing or sneezing</li>
                  <li>• Unusual behavior or aggression</li>
                  <li>• Discharge from eyes, nose, or ears</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                📅 Schedule a Routine Appointment
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Occasional vomiting or hairballs</li>
                <li>• Mild lethargy or behavior changes</li>
                <li>• Skin issues or excessive scratching</li>
                <li>• Dental concerns or bad breath</li>
                <li>• Weight changes or appetite variations</li>
                <li>• Annual wellness exams and vaccinations</li>
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
                  Q1: Why do cats hide their illness?
                </h3>
                <p className="text-gray-700">
                  Cats are prey animals by instinct, so they hide signs of weakness or illness to avoid appearing vulnerable. This means symptoms often appear only when a condition is advanced. Regular vet checkups help catch problems early.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q2: What should I do if my cat vomits occasionally?
                </h3>
                <p className="text-gray-700">
                  Occasional vomiting can be normal, especially if related to hairballs. However, if vomiting occurs more than once a week, contains blood, or is accompanied by other symptoms, contact your vet. Keep track of frequency and circumstances.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q3: How can I tell if my cat is in pain?
                </h3>
                <p className="text-gray-700">
                  Signs of pain include reluctance to move, hiding, changes in grooming habits, aggression when touched, or unusual vocalizations. Cats may also show decreased appetite or litter box avoidance. Any significant behavior change warrants a vet visit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q4: What is normal cat behavior vs. a sign of illness?
                </h3>
                <p className="text-gray-700">
                  Normal: Sleeping 12-16 hours daily, occasional grooming, regular eating and litter box use. Abnormal: Extreme lethargy, neglecting grooming, changes in eating/bathroom habits, or unusual aggression. Trust your instincts—you know your cat best.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q5: How often should my cat see the vet?
                </h3>
                <p className="text-gray-700">
                  Healthy adult cats should visit the vet annually for wellness exams. Senior cats (over 7 years) should visit twice yearly. Kittens and cats with health conditions may need more frequent visits. Discuss the best schedule with your veterinarian.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q6: Can I treat cat symptoms at home?
                </h3>
                <p className="text-gray-700">
                  Some minor issues like mild hairballs can be managed at home with proper diet and hydration. However, most symptoms require professional diagnosis. Never give medications without veterinary guidance, as this can mask serious conditions or cause harm.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q7: What should I tell my vet about my cat\'s symptoms?
                </h3>
                <p className="text-gray-700">
                  Provide specific details: when symptoms started, frequency, severity, any recent changes (diet, environment, stress), and what your cat normally acts like. Note any other symptoms you\'ve observed. This information helps your vet make an accurate diagnosis.
                </p>
              </div>
            </div>
          </div>

          {/* ========== Prevention & Management Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Prevention and Health Management
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Preventive Measures</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Regular Vet Checkups:</strong> Annual wellness exams catch problems early</li>
                  <li>• <strong>Proper Nutrition:</strong> High-quality diet supports immune function</li>
                  <li>• <strong>Fresh Water:</strong> Ensure constant access to clean water</li>
                  <li>• <strong>Exercise:</strong> Regular play maintains healthy weight and muscle</li>
                  <li>• <strong>Dental Care:</strong> Brush teeth regularly to prevent dental disease</li>
                  <li>• <strong>Parasite Prevention:</strong> Regular flea, tick, and worm treatments</li>
                  <li>• <strong>Vaccinations:</strong> Keep vaccinations current as recommended</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Lifestyle Factors</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Stress Reduction:</strong> Provide safe spaces and minimize environmental changes</li>
                  <li>• <strong>Environmental Enrichment:</strong> Toys, scratching posts, and climbing areas</li>
                  <li>• <strong>Litter Box Hygiene:</strong> Clean boxes daily to prevent urinary issues</li>
                  <li>• <strong>Temperature Control:</strong> Maintain comfortable indoor temperature</li>
                  <li>• <strong>Social Interaction:</strong> Regular playtime and bonding with your cat</li>
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
              Understanding cat health symptoms is one of the most important responsibilities of cat ownership. By learning to recognize the signs of illness and knowing when to seek veterinary care, you can help ensure your feline companion lives a long, healthy, and happy life.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Remember that cats are individuals, and what\'s normal for one cat may be unusual for another. Pay attention to your cat\'s baseline behavior, eating habits, and litter box use. Any significant changes warrant a call to your veterinarian.
            </p>

            <p className="text-lg leading-relaxed">
              When in doubt, it\'s always better to have your cat checked by a professional. Early detection and treatment of health issues can prevent serious complications and provide your cat with the best possible care. Your veterinarian is your partner in keeping your cat healthy.
            </p>
          </div>

          {/* ========== Related Articles Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Related Health Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/cat-urinary-health" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Cat Urinary Health</h3>
                <p className="text-gray-600">Learn about urinary tract issues, prevention, and when to seek help.</p>
              </Link>
              
              <Link href="/blog/pet-emergency-signs" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Pet Emergency Signs</h3>
                <p className="text-gray-600">Recognize critical symptoms that require immediate veterinary attention.</p>
              </Link>

              <Link href="/blog/pet-dental-health" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Pet Dental Health</h3>
                <p className="text-gray-600">Understand dental care importance and signs of dental disease.</p>
              </Link>

              <Link href="/blog/pet-parasite-prevention" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Pet Parasite Prevention</h3>
                <p className="text-gray-600">Learn about parasites, prevention strategies, and treatment options.</p>
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

export default function CatHealthSymptomsGuide() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CatHealthSymptomsGuideContent />
    </Suspense>
  );
}
