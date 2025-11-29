import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Vaccination Schedule: Complete Timeline Guide",
  description: "Learn the complete pet vaccination schedule for puppies, kittens, and adult pets. Understand vaccination timelines, booster shots, and when to vaccinate your pet.",
  keywords: ["pet vaccination schedule", "puppy vaccination", "kitten vaccination", "vaccine timeline", "pet vaccines", "vaccination booster"],
  openGraph: {
    title: "Pet Vaccination Schedule: Complete Timeline Guide",
    description: "Learn the complete pet vaccination schedule for puppies, kittens, and adult pets. Understand vaccination timelines, booster shots, and when to vaccinate your pet.",
    type: "article",
    url: "https://petshard.com/blog/pet-vaccination-schedule",
    siteName: "PetShard",
    images: [{
      url: "https://cdn2.thecatapi.com/images/ag4.jpg",
      width: 1200,
      height: 630,
      alt: "Pet Vaccination Schedule: Complete Timeline Guide"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Vaccination Schedule: Complete Timeline Guide",
    description: "Learn the complete pet vaccination schedule for puppies, kittens, and adult pets. Understand vaccination timelines, booster shots, and when to vaccinate your pet.",
    images: ["https://cdn2.thecatapi.com/images/ag4.jpg"]
  },
  alternates: {
    canonical: "https://petshard.com/blog/pet-vaccination-schedule"
  },
  other: {
    "structured-data": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Pet Vaccination Schedule: Complete Timeline Guide",
      "description": "Learn the complete pet vaccination schedule for puppies, kittens, and adult pets. Understand vaccination timelines, booster shots, and when to vaccinate your pet.",
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
        "@id": "https://petshard.com/blog/pet-vaccination-schedule"
      }
    })
  }
};

function PetVaccinationScheduleContent() {
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
            Pet Vaccination Schedule: Complete Timeline Guide
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
            src="https://cdn2.thecatapi.com/images/ag4.jpg" 
            alt="Pet Vaccination Schedule Timeline for Puppies and Kittens" 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* ========== Introduction Section ========== */}
        <div className="mb-12 bg-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
            Introduction
          </h2>
          
          <p className="text-lg leading-relaxed mb-4">
            Vaccinations are one of the most important preventive health measures you can provide for your pet. A proper vaccination schedule protects your dog or cat from serious, potentially life-threatening diseases while building immunity from an early age.
          </p>

          <p className="text-lg leading-relaxed">
            Understanding when and what vaccines your pet needs is essential for responsible pet ownership. This comprehensive guide covers vaccination timelines for puppies, kittens, and adult pets, helping you stay on track with your veterinarian's recommendations and keep your pet protected throughout their life.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">

          {/* ========== Puppy Vaccination Schedule ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Puppy Vaccination Schedule
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Puppies require a series of vaccinations starting at 6-8 weeks of age. These initial vaccines build immunity and are typically given in a series of shots spaced 3-4 weeks apart until 16 weeks of age.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">6-8 Weeks: First Vaccination</h3>
                <p className="text-gray-700 mb-2"><strong>Vaccines:</strong> DHPP (Distemper, Hepatitis, Parvo, Parainfluenza), Bordetella (optional)</p>
                <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Initial immunity building against core diseases</p>
                <p className="text-gray-700"><strong>Notes:</strong> First in a series; booster required in 3-4 weeks</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">10-12 Weeks: Second Vaccination</h3>
                <p className="text-gray-700 mb-2"><strong>Vaccines:</strong> DHPP booster, Bordetella booster (if given at 6-8 weeks)</p>
                <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Strengthen immunity from first vaccination</p>
                <p className="text-gray-700"><strong>Notes:</strong> Third booster needed at 14-16 weeks</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">14-16 Weeks: Third Vaccination</h3>
                <p className="text-gray-700 mb-2"><strong>Vaccines:</strong> DHPP booster, Rabies vaccine, Bordetella booster (if applicable)</p>
                <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Final core vaccination series; rabies protection begins</p>
                <p className="text-gray-700"><strong>Notes:</strong> Rabies booster required 1 year after initial vaccination</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">1 Year: First Annual Booster</h3>
                <p className="text-gray-700 mb-2"><strong>Vaccines:</strong> DHPP booster, Rabies booster</p>
                <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Maintain immunity levels</p>
                <p className="text-gray-700"><strong>Notes:</strong> After this, boosters typically given every 1-3 years</p>
              </div>
            </div>
          </div>

          {/* ========== Kitten Vaccination Schedule ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Kitten Vaccination Schedule
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Kittens follow a similar vaccination timeline to puppies, starting at 6-8 weeks. The core vaccines for cats protect against feline distemper, calicivirus, and rhinotracheitis.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">6-8 Weeks: First Vaccination</h3>
                <p className="text-gray-700 mb-2"><strong>Vaccines:</strong> FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia), Feline Leukemia (optional)</p>
                <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Initial immunity against core feline diseases</p>
                <p className="text-gray-700"><strong>Notes:</strong> First in a series; booster required in 3-4 weeks</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">10-12 Weeks: Second Vaccination</h3>
                <p className="text-gray-700 mb-2"><strong>Vaccines:</strong> FVRCP booster, Feline Leukemia booster (if given at 6-8 weeks)</p>
                <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Strengthen immunity from first vaccination</p>
                <p className="text-gray-700"><strong>Notes:</strong> Third booster needed at 14-16 weeks</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">14-16 Weeks: Third Vaccination</h3>
                <p className="text-gray-700 mb-2"><strong>Vaccines:</strong> FVRCP booster, Rabies vaccine, Feline Leukemia booster (if applicable)</p>
                <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Final core vaccination series; rabies protection begins</p>
                <p className="text-gray-700"><strong>Notes:</strong> Rabies booster required 1 year after initial vaccination</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">1 Year: First Annual Booster</h3>
                <p className="text-gray-700 mb-2"><strong>Vaccines:</strong> FVRCP booster, Rabies booster</p>
                <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Maintain immunity levels</p>
                <p className="text-gray-700"><strong>Notes:</strong> After this, boosters typically given every 1-3 years</p>
              </div>
            </div>
          {/* ========== Vaccination Schedule Table ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Complete Vaccination Timeline Table
            </h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left font-bold">Age</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Puppy Vaccines</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Kitten Vaccines</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">6-8 weeks</td>
                    <td className="border border-gray-300 p-3">DHPP, Bordetella (optional)</td>
                    <td className="border border-gray-300 p-3">FVRCP, Feline Leukemia (optional)</td>
                    <td className="border border-gray-300 p-3">First vaccination series</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">10-12 weeks</td>
                    <td className="border border-gray-300 p-3">DHPP booster</td>
                    <td className="border border-gray-300 p-3">FVRCP booster</td>
                    <td className="border border-gray-300 p-3">Second vaccination series</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">14-16 weeks</td>
                    <td className="border border-gray-300 p-3">DHPP booster, Rabies</td>
                    <td className="border border-gray-300 p-3">FVRCP booster, Rabies</td>
                    <td className="border border-gray-300 p-3">Final series, rabies begins</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">1 year</td>
                    <td className="border border-gray-300 p-3">DHPP booster, Rabies booster</td>
                    <td className="border border-gray-300 p-3">FVRCP booster, Rabies booster</td>
                    <td className="border border-gray-300 p-3">Annual booster</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Every 1-3 years</td>
                    <td className="border border-gray-300 p-3">DHPP booster, Rabies booster</td>
                    <td className="border border-gray-300 p-3">FVRCP booster, Rabies booster</td>
                    <td className="border border-gray-300 p-3">Maintenance schedule</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">
                💡 Important Note
              </h3>
              <p className="text-yellow-900">
                Vaccination schedules may vary based on your pet's health status, lifestyle, and local disease prevalence. Always consult with your veterinarian to determine the best vaccination plan for your specific pet. Some vaccines may be given on different schedules depending on your region and your pet's risk factors.
              </p>
            </div>
          </div>

          {/* ========== Adult Pet Vaccination ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Adult Pet Vaccination Schedule
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Once your pet completes their initial vaccination series, they enter the maintenance phase. Adult pets require regular booster vaccinations to maintain immunity against diseases.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Annual Boosters (Every 1 Year)</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Rabies:</strong> Required annually in most states; some vaccines last 3 years</li>
                  <li>• <strong>DHPP (Dogs):</strong> Annual booster recommended for high-risk dogs</li>
                  <li>• <strong>FVRCP (Cats):</strong> Annual booster recommended for indoor/outdoor cats</li>
                  <li>• <strong>Bordetella:</strong> Annual booster for dogs with kennel exposure</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Triennial Boosters (Every 3 Years)</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>DHPP (Dogs):</strong> Many vets recommend every 3 years for low-risk dogs</li>
                  <li>• <strong>FVRCP (Cats):</strong> Many vets recommend every 3 years for indoor cats</li>
                  <li>• <strong>Rabies:</strong> Some rabies vaccines are approved for 3-year intervals</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Senior Pet Considerations (7+ Years)</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>More Frequent Checkups:</strong> Twice-yearly vet visits recommended</li>
                  <li>• <strong>Health Assessment:</strong> Vet may recommend modified vaccination schedule</li>
                  <li>• <strong>Booster Timing:</strong> May need more frequent boosters due to declining immunity</li>
                  <li>• <strong>Pre-Vaccination Testing:</strong> Blood work may be recommended before vaccines</li>
                </ul>
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
                  Q1: What vaccines are absolutely necessary for my pet?
                </h3>
                <p className="text-gray-700">
                  Core vaccines are essential for all pets: DHPP for dogs and FVRCP for cats protect against serious, potentially fatal diseases. Rabies is required by law in most areas. Non-core vaccines like Bordetella depend on your pet's lifestyle and risk factors. Discuss with your vet which vaccines your pet needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q2: Can I skip booster vaccinations for my adult pet?
                </h3>
                <p className="text-gray-700">
                  Skipping boosters allows immunity to decline, leaving your pet vulnerable to disease. Rabies boosters are legally required in most areas. Regular boosters maintain protection throughout your pet's life. Discuss the appropriate booster schedule with your veterinarian based on your pet's age and health status.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q3: Are there side effects from pet vaccinations?
                </h3>
                <p className="text-gray-700">
                  Most pets experience minimal side effects. Common mild reactions include soreness at injection site, slight fever, or lethargy for 24-48 hours. Serious reactions are rare but can include allergic responses. Contact your vet if your pet shows severe reactions like difficulty breathing, swelling, or persistent vomiting after vaccination.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q4: What if I adopted an adult pet with unknown vaccination history?
                </h3>
                <p className="text-gray-700">
                  Your vet can perform a titer test to check immunity levels, or recommend starting a new vaccination series for safety. Many shelters provide vaccination records. If records are unavailable, your vet will likely recommend core vaccines and a booster 3-4 weeks later to ensure protection.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q5: Can indoor-only pets skip vaccinations?
                </h3>
                <p className="text-gray-700">
                  Even indoor-only pets need core vaccinations. Rabies is required by law regardless of lifestyle. Diseases can enter homes through open doors, windows, or on clothing. Indoor cats can still contract feline distemper and other diseases. Discuss appropriate vaccines with your vet based on your pet's specific situation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q6: How much do pet vaccinations cost?
                </h3>
                <p className="text-gray-700">
                  Vaccination costs vary by location and veterinary clinic. Puppy/kitten series typically costs $100-$300. Annual boosters range from $50-$150. Many clinics offer wellness packages that include vaccinations at discounted rates. Ask your vet about payment plans or low-cost vaccination clinics in your area.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q7: What is a titer test and when is it recommended?
                </h3>
                <p className="text-gray-700">
                  A titer test measures antibody levels to determine if your pet has immunity to specific diseases. It can help determine if boosters are needed or if your pet has adequate protection. Some vets recommend titer testing for senior pets or those with health concerns before administering vaccines. Discuss whether titer testing is appropriate for your pet.
                </p>
              </div>
            </div>
          </div>

          {/* ========== Vaccination Best Practices ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Vaccination Best Practices
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Before Vaccination</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Health Check:</strong> Ensure your pet is healthy before vaccination</li>
                  <li>• <strong>Parasite Prevention:</strong> Treat for parasites before vaccination series</li>
                  <li>• <strong>Medical History:</strong> Inform vet of any previous reactions or health issues</li>
                  <li>• <strong>Medication List:</strong> Tell vet about any medications your pet takes</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">After Vaccination</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Monitor for Reactions:</strong> Watch for swelling, difficulty breathing, or lethargy</li>
                  <li>• <strong>Rest Period:</strong> Keep your pet calm for 24-48 hours after vaccination</li>
                  <li>• <strong>Hydration:</strong> Ensure your pet has access to fresh water</li>
                  <li>• <strong>Contact Vet:</strong> Report any concerning symptoms immediately</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Record Keeping</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Vaccination Records:</strong> Keep detailed records of all vaccines given</li>
                  <li>• <strong>Dates:</strong> Note exact dates of each vaccination</li>
                  <li>• <strong>Booster Reminders:</strong> Set calendar reminders for upcoming boosters</li>
                  <li>• <strong>Travel Documentation:</strong> Keep records for travel or boarding requirements</li>
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
              Following a proper vaccination schedule is one of the most important investments you can make in your pet's health. Vaccinations protect your pet from serious, potentially life-threatening diseases and help maintain public health by preventing disease spread.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Starting with the puppy or kitten vaccination series and maintaining regular boosters throughout your pet's life ensures consistent protection. Work closely with your veterinarian to develop a vaccination plan tailored to your pet's specific needs, lifestyle, and risk factors.
            </p>

            <p className="text-lg leading-relaxed">
              Remember that vaccination requirements and recommendations may vary by location and individual pet circumstances. Your veterinarian is the best resource for determining the appropriate vaccination schedule for your pet. Regular wellness visits combined with proper vaccinations form the foundation of preventive pet care.
            </p>
          </div>

          {/* ========== Related Articles Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Related Health Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/pet-parasite-prevention" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Pet Parasite Prevention</h3>
                <p className="text-gray-600">Learn about parasite prevention and treatment options for your pet.</p>
              </Link>
              
              <Link href="/blog/pet-emergency-signs" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Pet Emergency Signs</h3>
                <p className="text-gray-600">Recognize critical symptoms that require immediate veterinary attention.</p>
              </Link>

              <Link href="/blog/common-dog-diseases" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Common Dog Diseases</h3>
                <p className="text-gray-600">Understand common diseases and their prevention through vaccination.</p>
              </Link>

              <Link href="/blog/cat-health-symptoms" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Cat Health Symptoms</h3>
                <p className="text-gray-600">Learn to recognize common cat health symptoms and when to call the vet.</p>
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
        </div>
      </article>
    </Layout>
  );
}

export default function PetVaccinationSchedule() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PetVaccinationScheduleContent />
    </Suspense>
  );
}
