import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Bottom Feeder Community Tank Setup: Complete Compatibility Guide",
  description: "Learn how to set up a thriving bottom feeder community tank. Discover species compatibility, tank requirements, and setup tips for peaceful coexistence.",
  keywords: "bottom feeder community tank, aquarium setup, fish compatibility, Corydoras, loaches, community tank guide",
  openGraph: {
    title: "Bottom Feeder Community Tank Setup: Complete Compatibility Guide",
    description: "Expert guide to creating a peaceful community tank with bottom feeders. Learn compatibility, tank size requirements, and setup best practices.",
    url: "https://petshard.com/blog/bottom-feeder-community-tank",
    type: "article",
  },
};

const communityTankSetups = [
  {
    id: 1,
    name: "Peaceful Community Tank (20-30 gallons)",
    description: "Ideal for beginners - slow-moving fish with bottom feeders",
    species: [
      { name: "Corydoras Catfish", count: "3-4", role: "Primary scavenger" },
      { name: "Neon Tetras", count: "6-8", role: "Mid-water schoolers" },
      { name: "Dwarf Gourami", count: "1-2", role: "Top-level swimmers" },
      { name: "Otocinclus Catfish", count: "2-3", role: "Algae eater" }
    ],
    tankRequirements: {
      size: "20-30 gallons",
      substrate: "Fine sand or smooth gravel",
      plants: "Live plants recommended",
      filtration: "Gentle flow (HOB or sponge filter)",
      temperature: "72-78°F"
    },
    advantages: "Low aggression, easy to maintain, beginner-friendly",
    challenges: "Limited bioload capacity, requires frequent water changes"
  },
  {
    id: 2,
    name: "Active Community Tank (40-55 gallons)",
    description: "More active fish with diverse bottom feeders",
    species: [
      { name: "Corydoras Catfish", count: "5-6", role: "Primary scavenger" },
      { name: "Yoyo Loaches", count: "3-4", role: "Active scavenger" },
      { name: "Danios", count: "6-8", role: "Active swimmers" },
      { name: "Pleco (Bristlenose)", count: "1", role: "Algae eater" }
    ],
    tankRequirements: {
      size: "40-55 gallons",
      substrate: "Fine sand or smooth gravel",
      plants: "Live plants (hardy species)",
      filtration: "Moderate flow (canister or HOB)",
      temperature: "72-78°F"
    },
    advantages: "More bioload capacity, diverse species, more active",
    challenges: "Requires more maintenance, higher feeding costs"
  },
  {
    id: 3,
    name: "Planted Community Tank (30-40 gallons)",
    description: "Plant-focused setup with bottom feeders and algae eaters",
    species: [
      { name: "Corydoras Catfish", count: "4-5", role: "Substrate cleaner" },
      { name: "Otocinclus Catfish", count: "3-4", role: "Algae eater" },
      { name: "Amano Shrimp", count: "5-8", role: "Algae grazer" },
      { name: "Cardinal Tetras", count: "8-10", role: "Mid-water schoolers" }
    ],
    tankRequirements: {
      size: "30-40 gallons",
      substrate: "Nutrient-rich substrate (ADA Aquasoil)",
      plants: "Stem plants, carpeting plants, hardscape",
      filtration: "Gentle flow with CO2 injection",
      temperature: "72-76°F"
    },
    advantages: "Natural filtration from plants, beautiful aesthetics, low bioload",
    challenges: "Requires plant knowledge, CO2 maintenance, higher initial cost"
  }
];

const compatibilityChart = [
  { species: "Corydoras Catfish", size: "1-3 inches", temperament: "Peaceful", tankSize: "20+ gallons", compatibility: "Excellent with most fish" },
  { species: "Yoyo Loaches", size: "2-3 inches", temperament: "Active/Playful", tankSize: "30+ gallons", compatibility: "Good with active fish" },
  { species: "Otocinclus Catfish", size: "1-2 inches", temperament: "Peaceful", tankSize: "20+ gallons", compatibility: "Excellent with peaceful fish" },
  { species: "Bristlenose Pleco", size: "3-5 inches", temperament: "Peaceful", tankSize: "40+ gallons", compatibility: "Good with most fish" },
  { species: "Kuhli Loaches", size: "3-4 inches", temperament: "Shy/Nocturnal", tankSize: "30+ gallons", compatibility: "Good with peaceful fish" },
  { species: "Amano Shrimp", size: "2 inches", temperament: "Peaceful", tankSize: "20+ gallons", compatibility: "Good with non-aggressive fish" }
];

const setupSteps = [
  {
    step: 1,
    title: "Choose Your Tank Size & Type",
    description: "Select a tank size based on your desired community type (20-55 gallons recommended)",
    details: "Larger tanks are more stable and forgiving. Minimum 20 gallons for bottom feeders."
  },
  {
    step: 2,
    title: "Prepare Substrate",
    description: "Use fine sand or smooth gravel - sharp gravel damages bottom feeder barbels",
    details: "Corydoras catfish have sensitive barbels that help them search for food. Rough substrate causes injury."
  },
  {
    step: 3,
    title: "Install Filtration",
    description: "Choose gentle filtration (sponge filter or HOB) to avoid stressing bottom feeders",
    details: "Strong currents can stress bottom feeders. Aim for gentle, consistent water flow."
  },
  {
    step: 4,
    title: "Add Hardscape & Plants",
    description: "Create hiding spots with driftwood, rocks, and live plants",
    details: "Bottom feeders need shelter. Plants also help with water quality and aesthetics."
  },
  {
    step: 5,
    title: "Cycle the Tank",
    description: "Run the tank for 4-6 weeks before adding fish to establish beneficial bacteria",
    details: "Use fishless cycling with ammonia or add hardy fish and monitor water parameters closely."
  },
  {
    step: 6,
    title: "Add Fish Gradually",
    description: "Start with bottom feeders, then add mid-water and top-level fish over 2-3 weeks",
    details: "Gradual stocking prevents ammonia spikes and allows fish to establish territories."
  }
];

const faqItems = [
  {
    question: "How many bottom feeders can I have in a community tank?",
    answer: "It depends on tank size and species. Generally: 20 gallons = 3-4 Corydoras, 30 gallons = 5-6 Corydoras, 40+ gallons = 6-8 Corydoras. Always follow the 1 inch per gallon rule as a starting point."
  },
  {
    question: "Can I mix different bottom feeder species?",
    answer: "Yes, but carefully. Corydoras and Otocinclus work well together. Loaches can be territorial - keep them in groups of 3+ or alone. Plecos need their own space. Research compatibility before mixing."
  },
  {
    question: "What's the best substrate for bottom feeders?",
    answer: "Fine sand is ideal - it's soft on barbels and allows bottom feeders to sift naturally. Smooth gravel works but can damage sensitive barbels. Avoid sharp, coarse gravel."
  },
  {
    question: "Do bottom feeders need special food?",
    answer: "They primarily eat excess food and algae, but supplemental feeding helps. Use sinking pellets, algae wafers, and blanched vegetables. Feed 2-3 times weekly in addition to excess food from other fish."
  },
  {
    question: "How often should I clean the substrate in a bottom feeder tank?",
    answer: "Less frequently than tanks without bottom feeders. Perform 25-30% water changes weekly and light substrate vacuuming. Bottom feeders do most of the cleaning work."
  },
  {
    question: "Can I keep bottom feeders with aggressive fish?",
    answer: "Not recommended. Bottom feeders are vulnerable while feeding. Keep them with peaceful, non-aggressive species. Avoid cichlids, piranhas, and large predatory fish."
  },
  {
    question: "What temperature do bottom feeders prefer?",
    answer: "Most bottom feeders prefer 72-78°F. Corydoras are sensitive to cold - keep above 70°F. Loaches prefer slightly warmer water (74-78°F). Check species-specific requirements."
  }
];

function BottomFeederCommunityContent() {
  return (
    <Layout title="Blog" showBackButton={true}>
      <article className="max-w-4xl mx-auto px-4">
        
        {/* ========== Header Section ========== */}
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/blog" className="hover:text-pink-600">Blog</Link>
            <span className="mx-2">›</span>
            <span>Aquarium Setup</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Bottom Feeder Community Tank Setup: Complete Compatibility Guide
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>November 28, 2024</span>
            <span>•</span>
            <span>15 min read</span>
            <span>•</span>
            <span>🐠 Aquarium Setup</span>
          </div>
        </header>
        {/* ========== Introduction Section ========== */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
              Creating a Thriving Bottom Feeder Community Tank
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Are you dreaming of a peaceful aquarium where fish coexist harmoniously, the tank stays clean naturally, and everyone thrives? A well-designed bottom feeder community tank makes this possible. But success requires understanding species compatibility, tank requirements, and setup best practices.
            </p>
            <div className="bg-white rounded-lg p-5 mb-4 border-l-4 border-blue-400">
              <p className="text-lg font-medium text-gray-800">
                <span className="text-blue-600">Common Question:</span> "How do I set up a community tank where bottom feeders, mid-water fish, and top swimmers all get along peacefully?"
              </p>
            </div>
            <p className="text-lg leading-relaxed">
              In this comprehensive guide, we'll reveal how to design a community tank that works. You'll learn three proven setup configurations, species compatibility rules, and step-by-step setup instructions. Whether you're a beginner or experienced aquarist, you'll discover how to create a balanced ecosystem where every fish thrives.
            </p>
          </div>

          {/* ========== Community Tank Setups Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Three Proven Community Tank Configurations
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Choose the setup that matches your experience level and available space. Each configuration includes specific species, tank requirements, and maintenance tips.
            </p>
            
            <div className="space-y-8">
              {communityTankSetups.map((setup) => (
                <div key={setup.id} className="bg-white rounded-lg shadow-md border-l-4 border-blue-400 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Setup {setup.id}: {setup.name}
                  </h3>
                  <p className="text-gray-700 mb-4 italic">{setup.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3">Species Composition:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {setup.species.map((sp, idx) => (
                        <div key={idx} className="bg-gray-50 p-3 rounded">
                          <p className="font-semibold text-gray-800">{sp.name}</p>
                          <p className="text-sm text-gray-600">Count: {sp.count} | Role: {sp.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 p-4 rounded">
                      <p className="font-bold text-blue-800 mb-2">Tank Requirements:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li><strong>Size:</strong> {setup.tankRequirements.size}</li>
                        <li><strong>Substrate:</strong> {setup.tankRequirements.substrate}</li>
                        <li><strong>Plants:</strong> {setup.tankRequirements.plants}</li>
                        <li><strong>Filtration:</strong> {setup.tankRequirements.filtration}</li>
                        <li><strong>Temperature:</strong> {setup.tankRequirements.temperature}</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded">
                      <p className="font-bold text-green-800 mb-2">Advantages & Challenges:</p>
                      <p className="text-sm text-gray-700 mb-2"><strong>✓ Advantages:</strong> {setup.advantages}</p>
                      <p className="text-sm text-gray-700"><strong>⚠ Challenges:</strong> {setup.challenges}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========== Compatibility Chart ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Bottom Feeder Species Compatibility Chart
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Use this chart to understand each species' requirements and compatibility with other community tank inhabitants.
            </p>
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Species</th>
                    <th className="px-4 py-3 text-left font-bold">Size</th>
                    <th className="px-4 py-3 text-left font-bold">Temperament</th>
                    <th className="px-4 py-3 text-left font-bold">Tank Size</th>
                    <th className="px-4 py-3 text-left font-bold">Compatibility</th>
                  </tr>
                </thead>
                <tbody>
                  {compatibilityChart.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 font-semibold text-gray-800">{row.species}</td>
                      <td className="px-4 py-3 text-gray-700">{row.size}</td>
                      <td className="px-4 py-3 text-gray-700">{row.temperament}</td>
                      <td className="px-4 py-3 text-gray-700">{row.tankSize}</td>
                      <td className="px-4 py-3 text-gray-700">{row.compatibility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ========== Setup Steps ========== */}
          <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Step-by-Step Community Tank Setup Guide
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Follow these six steps to create a stable, thriving community tank with bottom feeders.
            </p>
            
            <div className="space-y-6">
              {setupSteps.map((item) => (
                <div key={item.step} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 mb-2">{item.description}</p>
                      <p className="text-sm text-gray-600 italic">{item.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========== FAQ Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-400">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    Q: {item.question}
                  </h3>
                  <p className="text-gray-700">
                    <span className="font-bold text-blue-600">A: </span>{item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ========== Conclusion Section ========== */}
          <div className="mb-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Conclusion
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              A well-designed bottom feeder community tank is one of the most rewarding aquarium setups. By understanding species compatibility, tank requirements, and setup best practices, you can create a peaceful ecosystem where every fish thrives. The key is patience—take time to cycle your tank properly, add fish gradually, and monitor water parameters consistently.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-4">
              <p className="text-lg">
                <strong>Key Takeaway:</strong> Start with one of the three proven configurations, follow the setup steps carefully, and adjust based on your specific fish and tank conditions. Success comes from understanding your fish's needs and providing a stable environment.
              </p>
            </div>
            <p className="text-lg leading-relaxed">
              Remember: Your community tank is a living ecosystem. Invest time in learning about your fish, maintain consistent water parameters, and enjoy watching your peaceful community thrive for years to come.
            </p>
          </div>

          {/* ========== Related Resources ========== */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Aquarium Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                href="/blog/best-bottom-feeders-for-medium-fish" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-green-100 p-3 rounded-full">
                  <span className="text-2xl">🐟</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Best Bottom Feeders</h4>
                  <p className="text-sm text-gray-600">Species comparison and selection guide</p>
                </div>
              </Link>
              <Link 
                href="/blog/aquarium-water-quality-problems-solutions" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <span className="text-2xl">💧</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Water Quality Guide</h4>
                  <p className="text-sm text-gray-600">Troubleshooting and solutions</p>
                </div>
              </Link>
              <Link 
                href="/blog/best-full-spectrum-aquarium-lights" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-yellow-100 p-3 rounded-full">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Aquarium Lighting</h4>
                  <p className="text-sm text-gray-600">Full spectrum lights for plants</p>
                </div>
              </Link>
              <Link 
                href="/blog/best-aquarium-thermometers-with-alarm" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-red-100 p-3 rounded-full">
                  <span className="text-2xl">🌡️</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Thermometers & Alarms</h4>
                  <p className="text-sm text-gray-600">Temperature monitoring tools</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* ========== Structured Data (JSON-LD) ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BlogPosting",
              "headline": "Bottom Feeder Community Tank Setup: Complete Compatibility Guide",
              "description": "Learn how to set up a thriving bottom feeder community tank with species compatibility, tank requirements, and setup best practices.",
              "url": "https://petshard.com/blog/bottom-feeder-community-tank",
              "datePublished": "2024-11-28",
              "author": {
                "@type": "Organization",
                "name": "PetShard"
              }
            })
          }}
        />
      </article>
    </Layout>
  );
}

export default function BottomFeederCommunityPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BottomFeederCommunityContent />
    </Suspense>
  );
}
