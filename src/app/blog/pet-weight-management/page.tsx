import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Weight Management: Complete Guide for Healthy Pets",
  description: "Learn effective pet weight management strategies. Discover ideal weight ranges, nutrition tips, exercise plans, and how to help your pet achieve a healthy weight.",
  keywords: ["pet weight management", "overweight pets", "pet obesity", "healthy pet weight", "pet diet", "pet exercise", "weight loss for pets"],
  openGraph: {
    title: "Pet Weight Management: Complete Guide for Healthy Pets",
    description: "Learn effective pet weight management strategies. Discover ideal weight ranges, nutrition tips, exercise plans, and how to help your pet achieve a healthy weight.",
    type: "article",
    url: "https://petshard.com/blog/pet-weight-management",
    siteName: "PetShard",
    images: [{
      url: "https://images.unsplash.com/photo-1587300411107-ec8b827193b2?w=1200&h=630&fit=crop",
      width: 1200,
      height: 630,
      alt: "Pet Weight Management: Complete Guide for Healthy Pets"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Weight Management: Complete Guide for Healthy Pets",
    description: "Learn effective pet weight management strategies. Discover ideal weight ranges, nutrition tips, exercise plans, and how to help your pet achieve a healthy weight.",
    images: ["https://images.unsplash.com/photo-1587300411107-ec8b827193b2?w=1200&h=630&fit=crop"]
  },
  alternates: {
    canonical: "https://petshard.com/blog/pet-weight-management"
  },
  other: {
    "structured-data": JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Pet Weight Management: Complete Guide for Healthy Pets",
  "description": "Learn effective pet weight management strategies. Discover ideal weight ranges, nutrition tips, exercise plans, and how to help your pet achieve a healthy weight.",
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
    "@id": "https://petshard.com/blog/pet-weight-management"
  }
})
  }
};

function PetWeightManagementContent() {
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
            Pet Weight Management: Complete Guide for Healthy Pets
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>14 min read</span>
            <span>•</span>
            <span>🐾 Pet Health</span>
          </div>
        </header>

        {/* ========== Introduction Section ========== */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
              Introduction
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Pet obesity is one of the most common health problems affecting dogs and cats today. Overweight pets face increased risks of diabetes, heart disease, joint problems, and reduced lifespan. Fortunately, with proper weight management strategies, you can help your pet achieve and maintain a healthy weight.
            </p>

            <p className="text-lg leading-relaxed">
              This comprehensive guide covers everything you need to know about pet weight management, including how to determine your pet's ideal weight, nutrition strategies, exercise plans, and practical tips for successful weight loss. Whether your pet needs to lose weight or maintain their current healthy weight, this guide provides actionable guidance backed by veterinary best practices.
            </p>
          </div>

          {/* ========== Core Content Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Understanding Pet Weight Management
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">What is Pet Obesity?</h3>
                <p className="text-gray-700 mb-2">
                  Pet obesity occurs when a pet weighs more than 15-20% above their ideal body weight. According to veterinary studies, approximately 56% of dogs and 60% of cats in the United States are overweight or obese. This condition significantly impacts quality of life and longevity.
                </p>
                <p className="text-gray-700">
                  Obesity in pets leads to serious health complications including diabetes, hypertension, arthritis, respiratory disease, and certain cancers. The good news is that weight management through proper nutrition and exercise can prevent or reverse many of these conditions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Determining Your Pet's Ideal Weight</h3>
                <p className="text-gray-700 mb-3">
                  Your veterinarian can help determine your pet's ideal weight based on breed, age, and body composition. However, you can also assess your pet's weight using the Body Condition Score (BCS) system:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Ideal Weight (BCS 4-5/9):</strong> You can feel ribs easily without pressing, visible waist when viewed from above, and abdominal tuck when viewed from the side.</li>
                  <li><strong>Overweight (BCS 6-7/9):</strong> Ribs are difficult to feel, minimal waist definition, and reduced abdominal tuck.</li>
                  <li><strong>Obese (BCS 8-9/9):</strong> Ribs cannot be felt, no visible waist, and sagging abdomen.</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Common Causes of Pet Weight Gain</h3>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Overfeeding:</strong> Providing too many calories or treats throughout the day</li>
                  <li><strong>Poor Diet Quality:</strong> High-calorie, low-nutrition foods lacking proper balance</li>
                  <li><strong>Lack of Exercise:</strong> Insufficient physical activity and playtime</li>
                  <li><strong>Age-Related Changes:</strong> Metabolism slows as pets age, requiring fewer calories</li>
                  <li><strong>Medical Conditions:</strong> Hypothyroidism, Cushing's disease, and other hormonal issues</li>
                  <li><strong>Medications:</strong> Some medications increase appetite or slow metabolism</li>
                  <li><strong>Behavioral Issues:</strong> Stress eating or boredom-related overeating</li>
                </ul>
              </div>
            </div>

            {/* Weight Guidelines Table */}
            <div className="mt-12 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ideal Weight Ranges by Pet Type</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 p-3 text-left font-bold">Pet Type/Breed</th>
                      <th className="border border-gray-300 p-3 text-left font-bold">Ideal Weight Range</th>
                      <th className="border border-gray-300 p-3 text-left font-bold">Daily Calorie Needs</th>
                      <th className="border border-gray-300 p-3 text-left font-bold">Weight Loss Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Small Dogs (Chihuahua, Pomeranian)</td>
                      <td className="border border-gray-300 p-3">3-6 lbs</td>
                      <td className="border border-gray-300 p-3">200-400 cal</td>
                      <td className="border border-gray-300 p-3">0.5-1 lb/week</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Medium Dogs (Beagle, Cocker Spaniel)</td>
                      <td className="border border-gray-300 p-3">25-40 lbs</td>
                      <td className="border border-gray-300 p-3">700-1000 cal</td>
                      <td className="border border-gray-300 p-3">1-2 lbs/week</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Large Dogs (Labrador, Golden Retriever)</td>
                      <td className="border border-gray-300 p-3">55-80 lbs</td>
                      <td className="border border-gray-300 p-3">1200-1800 cal</td>
                      <td className="border border-gray-300 p-3">2-3 lbs/week</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Cats (Average)</td>
                      <td className="border border-gray-300 p-3">8-12 lbs</td>
                      <td className="border border-gray-300 p-3">200-250 cal</td>
                      <td className="border border-gray-300 p-3">0.5-1 lb/week</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">Senior Pets (7+ years)</td>
                      <td className="border border-gray-300 p-3">Varies by breed</td>
                      <td className="border border-gray-300 p-3">20% fewer calories</td>
                      <td className="border border-gray-300 p-3">0.5-1 lb/week</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ========== Nutrition Strategies Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Nutrition Strategies for Weight Management
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">1. Choose High-Quality, Low-Calorie Foods</h3>
                <p className="text-gray-700 mb-2">
                  Select pet foods specifically formulated for weight management. These foods typically contain:
                </p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Higher fiber content for satiety</li>
                  <li>• Adequate protein to maintain muscle mass</li>
                  <li>• Lower fat content (10-12% for dogs, 8-10% for cats)</li>
                  <li>• Balanced vitamins and minerals</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">2. Measure Food Portions Accurately</h3>
                <p className="text-gray-700 mb-2">
                  Use a measuring cup or kitchen scale to portion food precisely. Many pet owners overfeed by eyeballing portions. Follow the feeding guidelines on your pet food package, adjusted for your pet's activity level and weight loss goals.
                </p>
                <p className="text-gray-700">
                  For weight loss, reduce daily calories by 10-25% from maintenance levels. This typically results in healthy weight loss of 0.5-2 pounds per week depending on your pet's size.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">3. Limit Treats and Table Scraps</h3>
                <p className="text-gray-700 mb-2">
                  Treats should comprise no more than 10% of daily calorie intake. Many pet owners don't realize that treats can add 200-400 calories daily. Consider these alternatives:
                </p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Low-calorie treats (carrots, green beans, apple slices)</li>
                  <li>• Portion-controlled training treats</li>
                  <li>• Interactive toys that dispense small amounts of food</li>
                  <li>• Praise and playtime instead of food rewards</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">4. Implement Feeding Schedule</h3>
                <p className="text-gray-700 mb-2">
                  Establish a consistent feeding schedule with 2-3 meals per day. This helps regulate metabolism and prevents constant snacking. Benefits include:
                </p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Better portion control</li>
                  <li>• Improved digestion</li>
                  <li>• Reduced begging behavior</li>
                  <li>• Easier monitoring of food intake</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">5. Ensure Adequate Hydration</h3>
                <p className="text-gray-700">
                  Fresh water is essential for weight management and overall health. Proper hydration supports metabolism, aids digestion, and helps pets feel fuller. Ensure your pet has constant access to clean water throughout the day.
                </p>
              </div>
            </div>
          </div>

          {/* ========== Exercise and Activity Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Exercise and Activity Plans
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Dogs: Daily Exercise Requirements</h3>
                <p className="text-gray-700 mb-3">
                  Most dogs need 30-60 minutes of moderate exercise daily. For weight loss, increase to 60-90 minutes. Exercise options include:
                </p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Brisk walking (30-45 minutes daily)</li>
                  <li>• Running or jogging (20-30 minutes)</li>
                  <li>• Swimming (excellent low-impact option)</li>
                  <li>• Fetch and retrieval games</li>
                  <li>• Agility training or obstacle courses</li>
                  <li>• Dog park visits for social play</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Cats: Indoor Activity Enrichment</h3>
                <p className="text-gray-700 mb-3">
                  Cats need 15-30 minutes of active play daily. Create an enriching environment with:
                </p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Interactive toys (feather wands, laser pointers)</li>
                  <li>• Climbing structures and cat trees</li>
                  <li>• Puzzle feeders and treat-dispensing toys</li>
                  <li>• Window perches for bird watching</li>
                  <li>• Scheduled play sessions (2-3 times daily)</li>
                  <li>• Automated toys for independent play</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Progressive Exercise Increase</h3>
                <p className="text-gray-700 mb-2">
                  If your pet is significantly overweight, start slowly and gradually increase exercise intensity:
                </p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Week 1-2: 10-15 minutes of gentle activity</li>
                  <li>• Week 3-4: 15-20 minutes of moderate activity</li>
                  <li>• Week 5-8: 20-30 minutes of moderate activity</li>
                  <li>• Week 9+: 30-60 minutes of regular exercise</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ========== Weight Loss Timeline Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Weight Loss Timeline and Expectations
            </h2>

            <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400 mb-6">
              <p className="text-gray-700 mb-4">
                Healthy weight loss for pets typically occurs at a rate of 0.5-2 pounds per week, depending on starting weight and adherence to the program. Here's what to expect:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Weeks 1-4:</strong> Initial weight loss of 2-8 pounds. Pet may have increased energy and improved appetite control.</li>
                <li><strong>Weeks 5-12:</strong> Steady weight loss continues. Noticeable improvements in mobility and breathing. Increased activity levels.</li>
                <li><strong>Weeks 13-24:</strong> Significant health improvements. Reduced joint stress, better cardiovascular function, improved coat quality.</li>
                <li><strong>Months 6+:</strong> Target weight achieved. Focus shifts to maintenance and preventing weight regain.</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">
                ⚠️ Important Considerations
              </h3>
              <p className="text-yellow-900 mb-2">
                Weight loss should be gradual and consistent. Rapid weight loss can cause health problems. If your pet loses more than 2 pounds per week or shows signs of illness, consult your veterinarian immediately.
              </p>
              <p className="text-yellow-900">
                Some pets may have underlying medical conditions affecting weight. Your veterinarian can test for thyroid disease, Cushing's syndrome, and other conditions that may require treatment.
              </p>
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
                  Q1: How do I know if my pet is overweight?
                </h3>
                <p className="text-gray-700">
                  Use the Body Condition Score system: you should be able to feel your pet's ribs easily without pressing, see a visible waist when viewed from above, and notice an abdominal tuck from the side. If you cannot feel ribs or see a waist, your pet is likely overweight. Your veterinarian can provide a definitive assessment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q2: Can I use human diet foods for my pet?
                </h3>
                <p className="text-gray-700">
                  No. Human diet foods are not formulated for pets' nutritional needs and may contain harmful ingredients. Use pet-specific weight management foods formulated by veterinary nutritionists. These foods provide proper nutrient balance while supporting weight loss.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q3: How long does it take for a pet to lose weight?
                </h3>
                <p className="text-gray-700">
                  Healthy weight loss typically takes 3-6 months for significant results. A 20-pound dog might lose 1-2 pounds per week, requiring 10-20 weeks to reach target weight. Patience and consistency are essential. Rapid weight loss can be dangerous, so gradual progress is preferable.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q4: What if my pet is always hungry during weight loss?
                </h3>
                <p className="text-gray-700">
                  Increased hunger is common during weight loss. Manage this by: feeding multiple small meals, using high-fiber foods that increase satiety, offering low-calorie treats (carrots, green beans), providing more playtime and mental stimulation, and consulting your veterinarian about appetite-suppressing options if needed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q5: Can medications help with pet weight loss?
                </h3>
                <p className="text-gray-700">
                  Some medications can support weight loss, but they work best combined with diet and exercise. Your veterinarian may recommend appetite suppressants or medications to address underlying conditions like hypothyroidism. Medications alone are not sufficient for sustainable weight loss.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q6: How do I prevent weight regain after reaching target weight?
                </h3>
                <p className="text-gray-700">
                  Maintain weight by: continuing portion control and measuring food, sustaining regular exercise routines, limiting treats to 10% of daily calories, monitoring weight monthly, and scheduling regular veterinary checkups. Weight maintenance requires the same commitment as weight loss.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q7: Should I consult my veterinarian before starting weight loss?
                </h3>
                <p className="text-gray-700">
                  Yes, absolutely. Your veterinarian can rule out underlying medical conditions, determine your pet's ideal weight, recommend appropriate foods, and monitor progress. They can also adjust the plan if your pet has health conditions requiring special consideration.
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
              Pet weight management is one of the most important investments you can make in your pet's health and longevity. By combining proper nutrition, regular exercise, and consistent monitoring, you can help your pet achieve and maintain a healthy weight.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Remember that weight loss is a gradual process requiring patience and commitment. Celebrate small victories and stay consistent with your plan. The health benefits—improved mobility, reduced disease risk, increased energy, and extended lifespan—are well worth the effort.
            </p>

            <p className="text-lg leading-relaxed">
              Work closely with your veterinarian throughout the weight management journey. They can provide personalized guidance, monitor progress, and adjust the plan as needed. Your dedication to your pet's weight management will result in a happier, healthier companion for years to come.
            </p>
          </div>

          {/* ========== Related Articles Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Related Nutrition and Health Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/pet-nutrition-guide" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Pet Nutrition Guide</h3>
                <p className="text-gray-600">Learn about balanced nutrition and dietary requirements for your pet.</p>
              </Link>
              
              <Link href="/blog/healthy-pet-treats" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Healthy Pet Treats</h3>
                <p className="text-gray-600">Discover nutritious treat options that support weight management.</p>
              </Link>

              <Link href="/blog/dog-walking-safety" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Dog Walking Safety</h3>
                <p className="text-gray-600">Learn safe walking techniques and exercise routines for dogs.</p>
              </Link>

              <Link href="/blog/senior-pet-care" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-400">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🔗 Senior Pet Care</h3>
                <p className="text-gray-600">Understand weight management and care for aging pets.</p>
              </Link>
            </div>
          </div>

          {/* ========== Pet Care Tools Section ========== */}
          <div className="mb-12 bg-gradient-to-r from-pink-50 to-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Explore Our Pet Care Tools
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/pet-care-guide" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">📋 Pet Care Guide</h3>
                <p className="text-gray-600">Get personalized care advice tailored to your pet's needs.</p>
              </Link>
              
              <Link href="/health-center" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🏥 Health Center</h3>
                <p className="text-gray-600">Access health information and symptom checking for your pet.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export default function PetWeightManagement() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PetWeightManagementContent />
    </Suspense>
  );
}
