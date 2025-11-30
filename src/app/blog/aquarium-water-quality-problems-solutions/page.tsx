import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";

// Water quality problems and solutions data
const waterProblems = [
  {
    id: 1,
    problem: "High Nitrate (20+ ppm)",
    symptoms: "Algae blooms, sluggish fish, yellowing plants",
    causes: "Overfeeding, insufficient water changes, excess waste",
    solutions: [
      "Perform 25-30% water change weekly (or 50% if nitrate > 40 ppm)",
      "Reduce feeding to once daily, only what fish consume in 2-3 minutes",
      "Add live aquatic plants (stem plants consume nitrate rapidly)",
      "Increase mechanical filtration to remove waste before decomposition",
      "Reduce bioload by removing excess decorations that trap detritus"
    ],
    timeline: "Improvement visible in 2-3 weeks with consistent water changes"
  },
  {
    id: 2,
    problem: "Low pH (Below 6.5)",
    symptoms: "Fish lethargy, reduced appetite, fin damage, stress",
    causes: "Acidic substrate, decaying organic matter, CO2 buildup, lack of buffering",
    solutions: [
      "Perform 30% water change with pH-neutral water",
      "Add crushed coral or limestone to substrate (raises pH gradually)",
      "Remove decaying plants and excess food immediately",
      "Increase water circulation and aeration to reduce CO2 accumulation",
      "Test water hardness (GH/KH) - low hardness prevents pH buffering"
    ],
    timeline: "pH stabilizes within 1-2 weeks with substrate additions"
  },
  {
    id: 3,
    problem: "High pH (Above 8.0)",
    symptoms: "Fish stress, reduced breeding, algae growth, plant issues",
    causes: "Alkaline substrate, tap water pH, excess minerals, insufficient CO2",
    solutions: [
      "Perform 30% water change with pH-neutral water",
      "Replace alkaline substrate (limestone, coral sand) with neutral substrate",
      "Add driftwood or peat moss to naturally lower pH",
      "Increase CO2 injection (for planted tanks) to lower pH",
      "Test tap water pH - if high, consider using RO water for water changes"
    ],
    timeline: "pH adjustment takes 2-4 weeks depending on substrate changes"
  },
  {
    id: 4,
    problem: "Ammonia Spike (Above 0.25 ppm)",
    symptoms: "Fish gasping at surface, red gills, lethargy, sudden deaths",
    causes: "New tank syndrome, overstocking, dead fish, filter crash, overfeeding",
    solutions: [
      "Perform 50% water change immediately with dechlorinated water",
      "Add beneficial bacteria (Seachem Stability, Fritz Turbo Start)",
      "Reduce feeding to every other day until ammonia drops",
      "Check for dead fish or decaying plants and remove immediately",
      "Avoid cleaning filter media in tap water (kills beneficial bacteria)"
    ],
    timeline: "Ammonia should drop within 24-48 hours with water changes"
  },
  {
    id: 5,
    problem: "Cloudy Water (Bacterial Bloom)",
    symptoms: "Milky white water, reduced visibility, fish stress",
    causes: "Bacterial bloom from new tank, excess organic matter, filter issues",
    solutions: [
      "Perform 25% water change daily for 3-5 days",
      "Avoid feeding for 1-2 days to reduce organic matter",
      "Increase aeration and water circulation",
      "Do NOT clean filter media - beneficial bacteria are establishing",
      "Add activated carbon to filter to absorb organic compounds"
    ],
    timeline: "Water clears within 3-7 days with consistent water changes"
  }
];

const troubleshootingSteps = [
  {
    step: 1,
    title: "Test Your Water",
    description: "Use API Master Test Kit to measure pH, ammonia, nitrite, and nitrate. Record results and compare to ideal ranges.",
    details: "Ideal ranges: pH 6.5-8.0, Ammonia 0 ppm, Nitrite 0 ppm, Nitrate <20 ppm"
  },
  {
    step: 2,
    title: "Identify the Problem",
    description: "Match your test results to the water quality problems listed above. Determine which parameter is out of range.",
    details: "Multiple problems may exist simultaneously - address the most critical first (ammonia/nitrite)"
  },
  {
    step: 3,
    title: "Perform Immediate Water Change",
    description: "Do a 25-50% water change with dechlorinated water at the same temperature as your tank.",
    details: "Use a gravel vacuum to remove detritus from the substrate during water change"
  },
  {
    step: 4,
    title: "Implement Long-Term Solutions",
    description: "Apply the specific solutions for your identified problem. Most require consistent maintenance over 2-4 weeks.",
    details: "Consistency is more important than dramatic changes - gradual adjustments prevent fish stress"
  },
  {
    step: 5,
    title: "Monitor and Retest",
    description: "Retest water parameters after 1 week. Adjust solutions if parameters haven't improved.",
    details: "Keep a water quality log to track trends and identify patterns"
  }
];

const faqItems = [
  {
    question: "How often should I test my aquarium water?",
    answer: "New tanks (first 4 weeks): Test daily. Established tanks: Test weekly. If problems occur: Test every 2-3 days until resolved. Always test after major changes like adding new fish or plants."
  },
  {
    question: "What's the difference between ammonia, nitrite, and nitrate?",
    answer: "Ammonia (NH3) is produced by fish waste and is highly toxic. Beneficial bacteria convert ammonia to nitrite (NO2), which is also toxic. Other bacteria convert nitrite to nitrate (NO3), which is less toxic but accumulates over time. This is the nitrogen cycle."
  },
  {
    question: "Can I use tap water directly in my aquarium?",
    answer: "Tap water contains chlorine and chloramines that harm fish and beneficial bacteria. Always use a water conditioner (like Seachem Prime) to remove these chemicals before adding tap water to your tank."
  },
  {
    question: "How do I lower nitrate without doing water changes?",
    answer: "Add live aquatic plants (stem plants are most effective), reduce feeding, remove excess decorations that trap waste, and increase mechanical filtration. However, water changes are the most reliable method - aim for 25-30% weekly."
  },
  {
    question: "Why is my pH constantly changing?",
    answer: "Low water hardness (GH/KH) prevents pH buffering. Test your water hardness - if GH is below 4, add mineral supplements or crushed coral to increase buffering capacity. This stabilizes pH naturally."
  },
  {
    question: "What should I do if ammonia or nitrite spikes suddenly?",
    answer: "Perform a 50% water change immediately, add beneficial bacteria, reduce feeding, and check for dead fish or filter problems. Retest after 24 hours. If levels remain high, do another 50% water change."
  },
  {
    question: "Can I fix water quality problems without doing water changes?",
    answer: "Partially - plants and beneficial bacteria help, but water changes are essential. They remove accumulated waste and dilute harmful substances. Aim for at least 25% weekly water changes in established tanks."
  }
];

function WaterQualityGuideContent() {
  return (
    <Layout title="Blog" showBackButton={true}>
      <article className="max-w-4xl mx-auto px-4">
        
        {/* ========== Header Section ========== */}
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/blog" className="hover:text-pink-600">Blog</Link>
            <span className="mx-2">›</span>
            <span>Aquarium Care</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Aquarium Water Quality Problems: Solutions & Troubleshooting
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>November 27, 2024</span>
            <span>•</span>
            <span>16 min read</span>
            <span>•</span>
            <span>🐠 Aquarium Care</span>
          </div>
        </header>
        {/* ========== Introduction Section ========== */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
              Introduction
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Water quality problems are the #1 cause of fish death in home aquariums. Whether you're dealing with high nitrates, pH swings, ammonia spikes, or cloudy water, these issues can devastate your tank within days if left unchecked.
            </p>
            <div className="bg-white rounded-lg p-5 mb-4 border-l-4 border-blue-400">
              <p className="text-lg font-medium text-gray-800">
                <span className="text-blue-600">Common Problem:</span> "My fish are dying, water is cloudy, and I don't know what's wrong. I've tried everything but nothing works."
              </p>
            </div>
            <p className="text-lg leading-relaxed">
              The good news? Most water quality problems are preventable and fixable once you understand what's causing them. This comprehensive guide covers the five most common water quality issues, their specific solutions, and a step-by-step troubleshooting process to get your tank back on track.
            </p>
          </div>

          {/* ========== Water Quality Problems Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              5 Common Water Quality Problems & Solutions
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Each of these problems has specific causes and solutions. Identify your issue below and follow the recommended steps to restore water quality.
            </p>
            
            <div className="space-y-8">
              {waterProblems.map((problem) => (
                <div key={problem.id} className="bg-white rounded-lg shadow-md border-l-4 border-red-400 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Problem {problem.id}: {problem.problem}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-red-50 p-4 rounded">
                      <p className="text-sm font-bold text-red-700 mb-1">Symptoms</p>
                      <p className="text-sm text-gray-700">{problem.symptoms}</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded">
                      <p className="text-sm font-bold text-orange-700 mb-1">Causes</p>
                      <p className="text-sm text-gray-700">{problem.causes}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded">
                      <p className="text-sm font-bold text-green-700 mb-1">Timeline</p>
                      <p className="text-sm text-gray-700">{problem.timeline}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-bold text-gray-800 mb-3">Solutions:</p>
                    <ol className="space-y-2">
                      {problem.solutions.map((solution, idx) => (
                        <li key={idx} className="text-gray-700 flex gap-3">
                          <span className="font-bold text-blue-600 flex-shrink-0">{idx + 1}.</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========== Troubleshooting Guide Section ========== */}
          <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Step-by-Step Troubleshooting Guide
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Follow these five steps to diagnose and fix any water quality problem in your aquarium.
            </p>
            
            <div className="space-y-6">
              {troubleshootingSteps.map((item) => (
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

          {/* ========== Water Quality Parameters Table ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Water Quality Parameters Reference
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">Parameter</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Ideal Range</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Danger Zone</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Test Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-bold">pH</td>
                    <td className="border border-gray-300 px-4 py-3">6.5 - 8.0</td>
                    <td className="border border-gray-300 px-4 py-3">&lt;6.0 or &gt;8.5</td>
                    <td className="border border-gray-300 px-4 py-3">Weekly</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="border border-gray-300 px-4 py-3 font-bold">Ammonia (NH3)</td>
                    <td className="border border-gray-300 px-4 py-3">0 ppm</td>
                    <td className="border border-gray-300 px-4 py-3">&gt;0.25 ppm</td>
                    <td className="border border-gray-300 px-4 py-3">Daily (new tank)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="border border-gray-300 px-4 py-3 font-bold">Nitrite (NO2)</td>
                    <td className="border border-gray-300 px-4 py-3">0 ppm</td>
                    <td className="border border-gray-300 px-4 py-3">&gt;0.25 ppm</td>
                    <td className="border border-gray-300 px-4 py-3">Daily (new tank)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-bold">Nitrate (NO3)</td>
                    <td className="border border-gray-300 px-4 py-3">&lt;20 ppm</td>
                    <td className="border border-gray-300 px-4 py-3">&gt;40 ppm</td>
                    <td className="border border-gray-300 px-4 py-3">Weekly</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-bold">Temperature</td>
                    <td className="border border-gray-300 px-4 py-3">Species-dependent (72-78°F typical)</td>
                    <td className="border border-gray-300 px-4 py-3">&lt;65°F or &gt;82°F</td>
                    <td className="border border-gray-300 px-4 py-3">Daily</td>
                  </tr>
                </tbody>
              </table>
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
              Water quality problems don't have to be a mystery. By understanding the five most common issues, their causes, and specific solutions, you can maintain a healthy aquarium that keeps your fish thriving. The key is consistent testing and maintenance—prevention is always easier than correction.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-4">
              <p className="text-lg">
                <strong>Key Takeaway:</strong> Test your water weekly, perform 25-30% water changes regularly, and address problems immediately when they appear. Most water quality issues are preventable with basic maintenance.
              </p>
            </div>
            <p className="text-lg leading-relaxed">
              Remember: Your fish depend on you to maintain their environment. A few minutes of testing and maintenance each week will save you from hours of troubleshooting and the heartbreak of losing fish to preventable water quality problems.
            </p>
          </div>

          {/* ========== Related Resources ========== */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                href="/blog/best-full-spectrum-aquarium-lights" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-yellow-100 p-3 rounded-full">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Aquarium Lighting Guide</h4>
                  <p className="text-sm text-gray-600">Full spectrum lights for planted tanks</p>
                </div>
              </Link>
              <Link 
                href="/blog/best-aquarium-thermometers-with-alarm" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <span className="text-2xl">🌡️</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Aquarium Thermometers</h4>
                  <p className="text-sm text-gray-600">Temperature monitoring with alarms</p>
                </div>
              </Link>
              <Link 
                href="/blog/best-bottom-feeders-for-medium-fish" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-green-100 p-3 rounded-full">
                  <span className="text-2xl">🐟</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Bottom Feeders Guide</h4>
                  <p className="text-sm text-gray-600">Clean-up crew for planted tanks</p>
                </div>
              </Link>
              <Link 
                href="/blog/best-quiet-filters-40-gallon-tank" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-purple-100 p-3 rounded-full">
                  <span className="text-2xl">🔇</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Quiet Aquarium Filters</h4>
                  <p className="text-sm text-gray-600">Filtration for 40-gallon tanks</p>
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
              "headline": "Aquarium Water Quality Problems: Solutions & Troubleshooting",
              "description": "Fix aquarium water quality problems with expert solutions for high nitrate, pH swings, ammonia spikes, and cloudy water. Complete troubleshooting guide.",
              "url": "https://www.petshard.online/blog/aquarium-water-quality-problems-solutions",
              "datePublished": "2024-11-27",
              "dateModified": "2024-11-27",
              "author": {
                "@type": "Organization",
                "name": "PetShard"
              },
              "publisher": {
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

export default function AquariumWaterQualityPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <WaterQualityGuideContent />
    </Suspense>
  );
}
