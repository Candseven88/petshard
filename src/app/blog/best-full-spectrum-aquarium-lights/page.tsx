import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import LightingFactorCard from "./components/LightingFactorCard";
import AquariumLightCard from "./components/AquariumLightCard";
import ProductCard from "./components/ProductCard";
import VideoEmbed from "./components/VideoEmbed";
import PlantCategoryGuide from "./components/PlantCategoryGuide";
import { lightingFactors, budgetLights, topProducts, proTips, plantCategories, comparisonData } from "./data";

export const metadata = {
  title: "Best Full Spectrum Aquarium Lights: Complete Guide 2024",
  description: "Expert guide to full-spectrum aquarium lights for planted tanks. Compare 5 budget-friendly options and learn about color spectrum, intensity, and light spread.",
  keywords: "full spectrum aquarium lights, planted tank lighting, LED aquarium lights, aquarium light recommendations, plant growth lights",
  openGraph: {
    title: "Best Full Spectrum Aquarium Lights: Complete Guide 2024",
    description: "Discover the best full-spectrum aquarium lights for planted tanks. Learn about color spectrum, intensity, and light spread. Compare budget-friendly options with real-world testing results.",
    url: "https://petshard.com/blog/best-full-spectrum-aquarium-lights",
    type: "article",
  },
};

function AquariumLightContent() {
  return (
    <Layout title="Blog" showBackButton={true}>
      <article className="max-w-4xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/blog" className="hover:text-pink-600">Blog</Link>
            <span className="mx-2">›</span>
            <span>Aquarium Equipment</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Best Full Spectrum Aquarium Lights: Complete Guide 2024
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>November 24, 2024</span>
            <span>•</span>
            <span>15 min read</span>
            <span>•</span>
            <span>📝 Expert Guide</span>
          </div>
        </header>
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border-l-4 border-blue-500">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
              "I'm Looking for High Intensity Full Spectrum Light for My Aquarium"
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Does this sound familiar? You've set up your planted aquarium, added beautiful plants, but they're struggling—pale leaves, slow growth, or even dying off. The culprit? Inadequate lighting. Unlike terrestrial plants that receive natural sunlight, aquarium plants depend entirely on artificial lighting for photosynthesis.
            </p>
            <div className="bg-white rounded-lg p-5 mb-4 border-l-4 border-pink-400">
              <p className="text-lg font-medium text-gray-800">
                <span className="text-pink-600">Real User Question:</span> "I'm looking for a high intensity full spectrum light for my aquarium. My plants need more light."
              </p>
            </div>
            <p className="text-lg leading-relaxed">
              In this comprehensive guide, we'll explore everything you need to know about full-spectrum aquarium lighting—from understanding the three critical factors (color spectrum, intensity, and spread) to reviewing budget-friendly options that actually work. Whether you're growing easy beginner plants or demanding red species, we've got you covered.
            </p>
          </div>
          {/* Understanding the Three Key Factors */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              🔬 Understanding the 3 Critical Factors of Aquarium Lighting
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Before diving into product recommendations, it's essential to understand what makes aquarium lighting effective. These three factors work together to determine whether your plants will thrive or struggle:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
              {lightingFactors.map((factor) => (
                <LightingFactorCard key={factor.id} factor={factor} />
              ))}
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
              <p className="text-gray-700">
                <strong className="text-blue-700">💡 Key Takeaway:</strong> The best aquarium light isn't just about brightness—it's about delivering the right spectrum at the right intensity with even coverage across your entire tank. Full-spectrum LEDs excel at all three factors while remaining energy-efficient.
              </p>
            </div>
          </div>
          {/* Plant Categories Guide */}
          <div className="mb-12">
            <PlantCategoryGuide categories={plantCategories} />
          </div>
          {/* Budget-Friendly Lights Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-3xl">💰</span>
              5 Budget-Friendly Full Spectrum Lights That Actually Work
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Based on extensive testing and real-world aquascaping experience, these five lights offer excellent value without compromising plant growth. Each has been tested with easy, medium, and advanced category plants to verify performance:
            </p>
            <div className="grid grid-cols-1 gap-6 mb-8">
              {budgetLights.map((light, index) => (
                <AquariumLightCard key={light.id} light={light} rank={index + 1} />
              ))}
            </div>
            
            {/* Comparison Table */}
            <div className="mb-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Comparison Table</h3>
              <table className="w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-4 py-3 text-left font-bold">Light Model</th>
                    <th className="px-4 py-3 text-left font-bold">Price</th>
                    <th className="px-4 py-3 text-left font-bold">Lumens</th>
                    <th className="px-4 py-3 text-left font-bold">Wattage</th>
                    <th className="px-4 py-3 text-left font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-800">Siora SR616</td>
                    <td className="px-4 py-3 text-gray-700">$15-20</td>
                    <td className="px-4 py-3 text-gray-700">720</td>
                    <td className="px-4 py-3 text-gray-700">10W</td>
                    <td className="px-4 py-3 text-gray-700">Beginners, easy plants</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-800">Higer 058</td>
                    <td className="px-4 py-3 text-gray-700">$18-22</td>
                    <td className="px-4 py-3 text-gray-700">774</td>
                    <td className="px-4 py-3 text-gray-700">11W</td>
                    <td className="px-4 py-3 text-gray-700">Entry-level planted tanks</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-800">Higer 957</td>
                    <td className="px-4 py-3 text-gray-700">$27-32</td>
                    <td className="px-4 py-3 text-gray-700">927</td>
                    <td className="px-4 py-3 text-gray-700">20W</td>
                    <td className="px-4 py-3 text-gray-700">Red plants, intermediate</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-800">Higer 076</td>
                    <td className="px-4 py-3 text-gray-700">$25-30</td>
                    <td className="px-4 py-3 text-gray-700">915</td>
                    <td className="px-4 py-3 text-gray-700">14W</td>
                    <td className="px-4 py-3 text-gray-700">Energy-efficient, heavily planted</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-800">Chihiros A2</td>
                    <td className="px-4 py-3 text-gray-700">$47-54</td>
                    <td className="px-4 py-3 text-gray-700">1,628-1,957</td>
                    <td className="px-4 py-3 text-gray-700">15-21W</td>
                    <td className="px-4 py-3 text-gray-700">Advanced plants, serious aquascapers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Video Review Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              📹 Expert Video Review: See These Lights in Action
            </h2>
            <VideoEmbed 
              videoUrl={comparisonData.videoUrl} 
              title={comparisonData.videoTitle}
              description={comparisonData.videoDescription}
            />
          </div>
          {/* Top Product Recommendations */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-pink-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                🏆 Our Top Recommended Products
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              After reviewing dozens of aquarium lights and analyzing thousands of user experiences, these are our top picks for planted tank enthusiasts who want proven performance at reasonable prices:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {topProducts.map((product, index) => (
                <ProductCard key={index} product={product} index={index} />
              ))}
            </div>
          </div>
          {/* How to Choose Section */}
          <div className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              🎯 How to Choose the Right Light for YOUR Tank
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      Identify Your Plant Types
                    </h3>
                    <p className="text-gray-700">
                      Start by categorizing your plants: Easy (Anubias, Java Fern) need 720-900 lumens. Medium (Amazon Sword, Ludwigia) need 900-1,200 lumens. Advanced/Red plants (Rotala, carpeting species) need 1,600+ lumens. Learn more about specific plant requirements in our <Link href="/blog/pet-nutrition-guide" className="text-blue-600 hover:text-blue-800 font-semibold">aquatic plant care guides</Link>.
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
                      Measure Your Tank Size
                    </h3>
                    <p className="text-gray-700">
                      Match light length to tank length. Most budget lights fit 12-18 inch tanks with extendable brackets. For larger tanks, check manufacturer specifications carefully. Fixed-leg lights like Chihiros A2 must match exact tank size.
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
                      Calculate Long-Term Costs
                    </h3>
                    <p className="text-gray-700">
                      Don't just look at purchase price. A 20W light costs ~$12/year to run (6 hours daily). A 14W light costs ~$8.50/year. Energy efficiency pays off, especially in multi-tank setups.
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
                      Consider Control Features
                    </h3>
                    <p className="text-gray-700">
                      Budget lights ($15-22) offer basic brightness control and timers. Mid-range ($25-32) add advanced customization. Premium lights ($47+) include app control and precise scheduling. Choose based on your needs, not just features.
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
                      Start Conservative, Scale Up
                    </h3>
                    <p className="text-gray-700">
                      Begin with 6-hour photoperiods at medium intensity. Monitor plant response over 2-3 weeks. Increase intensity/duration only if plants show signs of insufficient light (pale leaves, slow growth). This prevents algae blooms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pro Tips Section */}
          <div className="mb-12 bg-green-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-2xl">💡</span>
              Expert Tips for Aquarium Lighting Success
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {proTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{tip.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{tip.title}</h3>
                      <p className="text-sm text-gray-700">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Common Mistakes Section */}
          <div className="mb-12 bg-red-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-2xl">⚠️</span>
              Common Mistakes to Avoid
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
                <h3 className="font-bold text-red-700 mb-2">❌ Buying Based on Watts Alone</h3>
                <p className="text-gray-700">
                  Wattage measures power consumption, not light output. A 20W light can produce 927 lumens (Higer 957) or 1,628 lumens (Chihiros A2). Always check lumen ratings instead.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
                <h3 className="font-bold text-red-700 mb-2">❌ Starting with Maximum Intensity</h3>
                <p className="text-gray-700">
                  High light from day one triggers massive algae blooms in new tanks. Start with 6 hours at 50-70% intensity, then gradually increase over 4-6 weeks as plants establish.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
                <h3 className="font-bold text-red-700 mb-2">❌ Ignoring Spectrum Quality</h3>
                <p className="text-gray-700">
                  Not all "full spectrum" lights are equal. White-only LEDs (like Chihiros A2) need higher lumens to match full-spectrum lights with dedicated red/blue/green diodes. Check actual spectrum coverage, not just the label.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
                <h3 className="font-bold text-red-700 mb-2">❌ Forgetting About Heat</h3>
                <p className="text-gray-700">
                  High-wattage lights generate significant heat. Monitor water temperature, especially in rimless tanks or small volumes. Some lights (Higer 957, Chihiros A2) run noticeably warm—ensure adequate ventilation. Use a reliable <Link href="/blog/best-aquarium-thermometers-with-alarm" className="text-blue-600 hover:text-blue-800 font-semibold">aquarium thermometer with alarms</Link> to track temperature changes.
                </p>
              </div>
            </div>
          </div>
          {/* Final Thoughts */}
          <div className="mb-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Final Thoughts
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Choosing the right full-spectrum aquarium light doesn't have to be complicated or expensive. The key is understanding your specific needs: What plants are you growing? What's your tank size? What's your budget—both upfront and long-term electricity costs?
            </p>
            <p className="text-lg leading-relaxed mb-4">
              For beginners with easy plants, the <strong>Siora SR616</strong> or <strong>Higer 058</strong> ($15-22) provides everything you need at an unbeatable price. If you're ready to grow red plants or want more control, the <strong>Higer 957/076</strong> ($25-32) offers excellent mid-range performance. Serious aquascapers pursuing advanced plants should consider the <strong>Chihiros A2 Series</strong> ($47-54) for its exceptional lumen output and professional-grade features.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-4">
              <p className="text-lg">
                <strong>Our Top Recommendation:</strong> For most aquarists, the <strong>Higer 076</strong> hits the sweet spot—enough intensity for a wide variety of plants, energy-efficient operation, advanced controls, and reasonable pricing. Pair it with the <strong>GooingTop LED Grow Light</strong> or <strong>AQUANEAT Full Spectrum Light</strong> for targeted supplemental lighting where needed.
              </p>
            </div>
            <p className="text-lg leading-relaxed">
              Remember: The best light is one that matches your plants' needs, fits your tank properly, and includes features you'll actually use. Start conservative with photoperiods and intensity, monitor your plants' response, and adjust accordingly. Maintain proper <Link href="/blog/aquarium-water-quality-problems-solutions" className="text-blue-600 hover:text-blue-800 font-semibold">water quality</Link> and use a <Link href="/blog/best-bottom-feeders-for-medium-fish" className="text-blue-600 hover:text-blue-800 font-semibold">cleanup crew</Link> to support your planted tank ecosystem. With the right lighting, your planted aquarium will transform into a thriving underwater garden.
            </p>
          </div>
          {/* Call to Action */}
          <div className="bg-pink-50 rounded-xl p-6 shadow-md mb-8">
            <h3 className="text-xl font-bold text-pink-600 mb-2">
              💬 What's Your Experience?
            </h3>
            <p className="text-gray-700 mb-4">
              Which aquarium light are you using? Have questions about choosing the right light for your planted tank? Share your experiences and questions with fellow aquarists!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/contact"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors text-center font-semibold"
              >
                Ask a Question
              </Link>
              <Link 
                href="/blog"
                className="bg-white text-pink-600 border-2 border-pink-500 px-6 py-3 rounded-lg hover:bg-pink-50 transition-colors text-center font-semibold"
              >
                More Aquarium Guides
              </Link>
            </div>
          </div>
          {/* Related Resources */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Aquarium Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                href="/blog/best-aquarium-thermometers-with-alarm" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <span className="text-2xl">🌡️</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Aquarium Thermometers</h4>
                  <p className="text-sm text-gray-600">Temperature monitoring with alarms for planted tanks</p>
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
                  <p className="text-sm text-gray-600">Clean-up crew for planted community tanks</p>
                </div>
              </Link>
              <Link 
                href="/blog/best-quiet-filters-40-gallon-tank" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-purple-100 p-3 rounded-full">
                  <span className="text-2xl">💨</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Quiet Aquarium Filters</h4>
                  <p className="text-sm text-gray-600">Filtration for planted tanks without noise</p>
                </div>
              </Link>
              <Link 
                href="/blog/aquarium-water-quality-problems-solutions" 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="bg-cyan-100 p-3 rounded-full">
                  <span className="text-2xl">💧</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Water Quality Guide</h4>
                  <p className="text-sm text-gray-600">Maintain healthy conditions for aquatic plants</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BlogPosting",
              "headline": "Best Full Spectrum Aquarium Lights: Complete Guide 2024",
              "description": "Expert guide to full-spectrum aquarium lights for planted tanks. Compare 5 budget-friendly options, learn about color spectrum and intensity, and find the perfect light for your plants.",
              "url": "https://petshard.com/blog/best-full-spectrum-aquarium-lights",
              "datePublished": "2024-11-24",
              "dateModified": "2024-11-24",
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
              "image": [
                "https://cdn.shopify.com/s/files/1/0311/3149/files/shutterstock_601059413_97867db7-ccf6-45e3-b082-d4af94f1777f.jpg",
                "https://cdn.shopify.com/s/files/1/0311/3149/files/shutterstock_521539267.jpg",
                "https://cdn.shopify.com/s/files/1/0311/3149/files/shutterstock_1049174078.jpg"
              ]
            })
          }}
        />
      </article>
    </Layout>
  );
}
export default function AquariumLightPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AquariumLightContent />
    </Suspense>
  );
}
