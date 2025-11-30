import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Common Dog Diseases: Symptoms and When to Call the Vet",
  description: "Learn about common dog diseases including hip dysplasia, heartworm, and ear infections. Understand symptoms, severity levels, and when to seek veterinary care.",
  keywords: ["common dog diseases", "dog health problems", "dog illness symptoms", "dog diseases list", "canine diseases", "dog health conditions"],
  openGraph: {
    title: "Common Dog Diseases: Symptoms and When to Call the Vet",
    description: "Learn about common dog diseases including hip dysplasia, heartworm, and ear infections. Understand symptoms, severity levels, and when to seek veterinary care.",
    type: "article",
    url: "https://petshard.com/blog/common-dog-diseases",
    siteName: "PetShard",
    images: [{
      url: "https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      width: 1200,
      height: 630,
      alt: "Common Dog Diseases: Symptoms and When to Call the Vet"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Common Dog Diseases: Symptoms and When to Call the Vet",
    description: "Learn about common dog diseases including hip dysplasia, heartworm, and ear infections. Understand symptoms, severity levels, and when to seek veterinary care.",
    images: ["https://images.unsplash.com/photo-1633722715463-d30628519d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"]
  },
  alternates: {
    canonical: "https://petshard.com/blog/common-dog-diseases"
  },
  other: {
    "structured-data": JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Common Dog Diseases: Symptoms and When to Call the Vet",
  "description": "Learn about common dog diseases including hip dysplasia, heartworm, and ear infections. Understand symptoms, severity levels, and when to seek veterinary care.",
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
    "@id": "https://petshard.com/blog/common-dog-diseases"
  }
})
  }
};

function CommonDogDiseasesGuideContent() {
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
            Common Dog Diseases: Symptoms and When to Call the Vet
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
              Understanding common dog diseases is essential for every dog owner. Early recognition of symptoms can mean the difference between a quick recovery and serious complications.
            </p>

            <p className="text-lg leading-relaxed">
              <p className="text-lg leading-relaxed mb-4">
                Dogs cannot tell us when they\'re feeling unwell, which is why recognizing the signs of illness is crucial. This comprehensive guide covers the most common dog diseases, their symptoms, severity levels, and when you should contact your veterinarian. By learning to identify these conditions early, you can help ensure your dog receives prompt treatment and the best possible care.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Whether you\'re a new dog owner or have years of experience, understanding these common health issues will help you make informed decisions about your dog\'s wellbeing. We\'ll cover specific diseases, their causes, symptoms, and actionable guidance for each situation.
              </p>
            </p>
          </div>

          {/* ========== Core Content Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Common Dog Diseases and Conditions
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">1. Hip Dysplasia</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> A genetic condition where the hip joint doesn\'t fit properly into the socket, causing pain and mobility issues.</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Genetic predisposition, rapid growth, poor nutrition, or excessive exercise in young dogs.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Mild stiffness (mild) vs. severe lameness and inability to walk (severe).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours if limping or reluctant to move. Immediate if unable to bear weight.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">2. Heartworm Disease</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> A serious parasitic disease transmitted by mosquitoes that affects the heart and lungs.</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Mosquito bites carrying heartworm larvae; preventable with medication.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Early stage with no symptoms (mild) vs. advanced with heart failure (severe).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Immediate if coughing, difficulty breathing, or lethargy. Schedule testing annually.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">3. Ear Infections</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Inflammation of the ear canal, often caused by bacteria, yeast, or parasites.</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Moisture in ears, allergies, ear mites, or poor ear hygiene.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Mild itching (mild) vs. severe pain and hearing loss (severe).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours if scratching excessively or discharge present. Immediate if severe pain.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">4. Canine Diabetes</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> A metabolic disorder where the body cannot regulate blood sugar levels properly.</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Genetic factors, obesity, pancreatitis, or age-related changes.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Manageable with treatment (mild) vs. diabetic ketoacidosis emergency (severe).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours if increased thirst/urination. Immediate if vomiting or lethargy.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">5. Allergies</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Immune system overreaction to food, environmental, or contact allergens.</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Food ingredients, pollen, dust mites, or contact with irritants.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Mild itching (mild) vs. severe swelling and difficulty breathing (severe).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours for persistent itching. Immediate if swelling or breathing difficulty.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">6. Arthritis</h3>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> Inflammation of joints causing pain, stiffness, and reduced mobility.</p>
                <p className="text-gray-700 mb-2"><strong>Possible Causes:</strong> Age, joint dysplasia, previous injuries, or obesity.</p>
                <p className="text-gray-700 mb-2"><strong>Severity:</strong> Mild stiffness after rest (mild) vs. severe lameness (severe).</p>
                <p className="text-gray-700"><strong>When to Call Vet:</strong> Within 24 hours if limping or reluctant to move. Discuss pain management options.</p>
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

          {/* ========== Disease Comparison Table ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Disease Severity Assessment Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left font-bold">Disease</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Mild (Routine Vet Visit)</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Moderate (Within 24 Hours)</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Severe (Immediate/Emergency)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Hip Dysplasia</td>
                    <td className="border border-gray-300 p-3">Mild stiffness after rest</td>
                    <td className="border border-gray-300 p-3">Noticeable limping, reluctance to jump</td>
                    <td className="border border-gray-300 p-3">Unable to bear weight, severe pain</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Heartworm</td>
                    <td className="border border-gray-300 p-3">No symptoms, preventable</td>
                    <td className="border border-gray-300 p-3">Mild cough, reduced activity</td>
                    <td className="border border-gray-300 p-3">Severe cough, difficulty breathing, collapse</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Ear Infection</td>
                    <td className="border border-gray-300 p-3">Occasional scratching, mild odor</td>
                    <td className="border border-gray-300 p-3">Frequent scratching, discharge present</td>
                    <td className="border border-gray-300 p-3">Severe pain, head shaking, hearing loss</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Diabetes</td>
                    <td className="border border-gray-300 p-3">Increased thirst/urination</td>
                    <td className="border border-gray-300 p-3">Weight loss, increased appetite</td>
                    <td className="border border-gray-300 p-3">Vomiting, lethargy, diabetic ketoacidosis</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Allergies</td>
                    <td className="border border-gray-300 p-3">Mild itching, occasional scratching</td>
                    <td className="border border-gray-300 p-3">Persistent itching, skin irritation</td>
                    <td className="border border-gray-300 p-3">Severe swelling, difficulty breathing</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Arthritis</td>
                    <td className="border border-gray-300 p-3">Stiffness after rest, improves with activity</td>
                    <td className="border border-gray-300 p-3">Noticeable limping, reluctance to exercise</td>
                    <td className="border border-gray-300 p-3">Severe lameness, unable to move</td>
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
                  <li>• Difficulty breathing or gasping for air</li>
                  <li>• Severe bleeding or trauma</li>
                  <li>• Unconsciousness or unresponsiveness</li>
                  <li>• Severe pain or inability to move</li>
                  <li>• Seizures or convulsions</li>
                  <li>• Suspected poisoning or toxin ingestion</li>
                  <li>• Severe allergic reactions with swelling</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg shadow-md border-t-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-800 mb-4">
                  ⚠️ Call Within 24 Hours
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Persistent vomiting or diarrhea</li>
                  <li>• Not eating for more than 12 hours</li>
                  <li>• Limping or reluctance to move</li>
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
                <li>• Annual wellness exams and vaccinations</li>
                <li>• Preventive heartworm and parasite testing</li>
                <li>• Dental concerns or bad breath</li>
                <li>• Weight changes or appetite variations</li>
                <li>• Skin issues or excessive scratching</li>
                <li>• Joint stiffness or mobility concerns</li>
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
                  Q1: How can I prevent common dog diseases?
                </h3>
                <p className="text-gray-700">
                  Prevention includes regular veterinary checkups, keeping vaccinations current, providing heartworm and parasite prevention, maintaining a healthy weight, and feeding a quality diet. Early detection through annual exams is crucial.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q2: Are certain dog breeds more prone to specific diseases?
                </h3>
                <p className="text-gray-700">
                  Yes, breed predispositions exist. Large breeds are more prone to hip dysplasia, floppy-eared breeds to ear infections, and certain breeds to diabetes or allergies. Discuss breed-specific health concerns with your veterinarian.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q3: What should I do if my dog shows signs of illness?
                </h3>
                <p className="text-gray-700">
                  Document the symptoms, note when they started, and contact your veterinarian. Provide specific details about behavior changes, appetite, bathroom habits, and any other observations. Don\'t wait if symptoms seem serious.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q4: How often should my dog see the vet?
                </h3>
                <p className="text-gray-700">
                  Healthy adult dogs should visit the vet annually for wellness exams. Senior dogs (over 7 years) should visit twice yearly. Puppies and dogs with health conditions may need more frequent visits. Discuss the best schedule with your veterinarian.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q5: Can I treat dog diseases at home?
                </h3>
                <p className="text-gray-700">
                  Some minor issues can be managed at home with proper care, but most diseases require professional diagnosis and treatment. Never give medications without veterinary guidance, as this can mask serious conditions or cause harm.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q6: What is the cost of treating common dog diseases?
                </h3>
                <p className="text-gray-700">
                  Costs vary widely depending on the disease and treatment required. Prevention is typically much cheaper than treatment. Discuss costs with your veterinarian and consider pet insurance to help manage unexpected medical expenses.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q7: How do I know if my dog is in pain?
                </h3>
                <p className="text-gray-700">
                  Signs of pain include limping, reluctance to move or jump, whimpering, aggression when touched, changes in eating habits, or unusual behavior. Dogs may also hide or become withdrawn. Any significant behavior change warrants a vet visit.
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
                  <li>• <strong>Heartworm Prevention:</strong> Monthly medication prevents this serious disease</li>
                  <li>• <strong>Parasite Control:</strong> Regular flea, tick, and worm treatments</li>
                  <li>• <strong>Vaccinations:</strong> Keep vaccinations current as recommended</li>
                  <li>• <strong>Proper Nutrition:</strong> High-quality diet supports immune function</li>
                  <li>• <strong>Dental Care:</strong> Brush teeth regularly to prevent dental disease</li>
                  <li>• <strong>Ear Hygiene:</strong> Regular cleaning prevents ear infections</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Lifestyle Factors</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Healthy Weight:</strong> Maintain ideal weight to reduce joint stress</li>
                  <li>• <strong>Regular Exercise:</strong> Appropriate activity for age and breed</li>
                  <li>• <strong>Stress Reduction:</strong> Provide safe spaces and minimize environmental changes</li>
                  <li>• <strong>Environmental Enrichment:</strong> Toys, play, and mental stimulation</li>
                  <li>• <strong>Fresh Water:</strong> Ensure constant access to clean water</li>
                  <li>• <strong>Social Interaction:</strong> Regular playtime and bonding with your dog</li>
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
              Understanding common dog diseases is one of the most important responsibilities of dog ownership. By learning to recognize the signs of illness and knowing when to seek veterinary care, you can help ensure your canine companion lives a long, healthy, and happy life.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Remember that each dog is an individual, and what\'s normal for one dog may be unusual for another. Pay attention to your dog\'s baseline behavior, eating habits, and activity level. Any significant changes warrant a call to your veterinarian.
            </p>

            <p className="text-lg leading-relaxed">
              Prevention is always better than treatment. Regular veterinary checkups, preventive medications, and a healthy lifestyle can prevent many common diseases. When in doubt, it\'s always better to have your dog checked by a professional. Your veterinarian is your partner in keeping your dog healthy.
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

              <Link href="/blog/pet-dental-health" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Pet Dental Health</h3>
                <p className="text-gray-600">Understand dental care importance and signs of dental disease.</p>
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

export default function CommonDogDiseasesGuide() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CommonDogDiseasesGuideContent />
    </Suspense>
  );
}
