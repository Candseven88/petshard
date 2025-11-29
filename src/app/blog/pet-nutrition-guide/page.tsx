import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Nutrition Guide: Complete Feeding Requirements for Dogs and Cats",
  description: "Learn essential pet nutrition requirements, feeding guidelines, and dietary needs for dogs and cats. Discover what nutrients your pet needs for optimal health.",
  keywords: ["pet nutrition guide", "dog nutrition requirements", "cat nutrition guide", "pet feeding guide", "pet diet requirements", "healthy pet nutrition"],
  openGraph: {
    title: "Pet Nutrition Guide: Complete Feeding Requirements for Dogs and Cats",
    description: "Learn essential pet nutrition requirements, feeding guidelines, and dietary needs for dogs and cats.",
    type: "article",
    url: "https://petshard.com/blog/pet-nutrition-guide",
    siteName: "PetShard",
    images: [{
      url: "https://cdn2.thecatapi.com/images/ag4.jpg",
      width: 1200,
      height: 630,
      alt: "Pet Nutrition Guide: Complete Feeding Requirements"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Nutrition Guide: Complete Feeding Requirements for Dogs and Cats",
    description: "Learn essential pet nutrition requirements, feeding guidelines, and dietary needs for dogs and cats.",
    images: ["https://cdn2.thecatapi.com/images/ag4.jpg"]
  },
  alternates: {
    canonical: "https://petshard.com/blog/pet-nutrition-guide"
  },
  other: {
    "structured-data": JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Pet Nutrition Guide: Complete Feeding Requirements for Dogs and Cats",
  "description": "Learn essential pet nutrition requirements, feeding guidelines, and dietary needs for dogs and cats.",
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
  "datePublished": "2025-11-28T03:43:39.193Z",
  "dateModified": "2025-11-28T03:43:39.193Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://petshard.com/blog/pet-nutrition-guide"
  }
})
  }
};

function PetNutritionGuideContent() {
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
            Pet Nutrition Guide: Complete Feeding Requirements for Dogs and Cats
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
            alt="Pet Nutrition Guide: Complete Feeding Requirements" 
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
              Proper nutrition is the foundation of your pet's health, longevity, and quality of life. Just like humans, dogs and cats require specific nutrients in appropriate quantities to thrive.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              This comprehensive guide covers everything you need to know about pet nutrition, including essential nutrients, feeding guidelines, portion sizes, and dietary considerations for different life stages. Whether you're a new pet owner or looking to optimize your pet's diet, you'll find practical information to make informed feeding decisions.
            </p>

            <p className="text-lg leading-relaxed">
              By understanding your pet's nutritional needs and providing balanced, high-quality food, you can help prevent health issues, maintain ideal body weight, and support your pet's overall wellbeing.
            </p>
          </div>

          {/* ========== Nutrition Basics Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Essential Pet Nutrition Basics
            </h2>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed mb-4">
                All pets require six essential nutrient categories: proteins, fats, carbohydrates, vitamins, minerals, and water. Each plays a critical role in maintaining health and supporting bodily functions.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                <strong>Proteins:</strong> Essential for building and repairing muscles, organs, and tissues. Dogs require 18-25% protein in their diet, while cats need 25-30% due to their obligate carnivore nature. High-quality protein sources include chicken, beef, fish, and eggs.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                <strong>Fats:</strong> Provide energy and support skin and coat health. Dogs need 5-15% fat, while cats require 9-15%. Omega-3 and omega-6 fatty acids are particularly important for reducing inflammation and promoting cognitive function.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                <strong>Carbohydrates:</strong> Provide energy and fiber for digestive health. While not essential for cats, carbohydrates can be beneficial for dogs when sourced from whole grains, vegetables, and legumes. Avoid excessive simple carbohydrates and fillers.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                <strong>Vitamins and Minerals:</strong> Support immune function, bone health, and metabolic processes. Calcium and phosphorus are crucial for bone development, while vitamins A, D, E, and B-complex vitamins support various bodily functions. Quality commercial pet foods are typically formulated to meet these requirements.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                <strong>Water:</strong> The most essential nutrient. Ensure your pet has access to fresh, clean water at all times. Proper hydration supports kidney function, digestion, and temperature regulation.
              </p>
            </div>
          </div>

          {/* ========== Nutrition Requirements Table ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Daily Nutrition Requirements by Life Stage
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 mb-8">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left font-bold">Life Stage</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Protein %</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Fat %</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Calories/Day (10 lb pet)</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Key Nutrients</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3"><strong>Puppies (0-12 months)</strong></td>
                    <td className="border border-gray-300 p-3">22-32%</td>
                    <td className="border border-gray-300 p-3">8-15%</td>
                    <td className="border border-gray-300 p-3">400-600</td>
                    <td className="border border-gray-300 p-3">Calcium, phosphorus, DHA</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3"><strong>Adult Dogs (1-7 years)</strong></td>
                    <td className="border border-gray-300 p-3">18-25%</td>
                    <td className="border border-gray-300 p-3">5-15%</td>
                    <td className="border border-gray-300 p-3">200-400</td>
                    <td className="border border-gray-300 p-3">Balanced nutrients, fiber</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3"><strong>Senior Dogs (7+ years)</strong></td>
                    <td className="border border-gray-300 p-3">18-25%</td>
                    <td className="border border-gray-300 p-3">5-12%</td>
                    <td className="border border-gray-300 p-3">150-300</td>
                    <td className="border border-gray-300 p-3">Joint support, antioxidants</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3"><strong>Kittens (0-12 months)</strong></td>
                    <td className="border border-gray-300 p-3">30-40%</td>
                    <td className="border border-gray-300 p-3">9-15%</td>
                    <td className="border border-gray-300 p-3">250-400</td>
                    <td className="border border-gray-300 p-3">Taurine, calcium, DHA</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3"><strong>Adult Cats (1-7 years)</strong></td>
                    <td className="border border-gray-300 p-3">25-30%</td>
                    <td className="border border-gray-300 p-3">9-15%</td>
                    <td className="border border-gray-300 p-3">150-250</td>
                    <td className="border border-gray-300 p-3">Taurine, arachidonic acid</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3"><strong>Senior Cats (7+ years)</strong></td>
                    <td className="border border-gray-300 p-3">25-30%</td>
                    <td className="border border-gray-300 p-3">9-12%</td>
                    <td className="border border-gray-300 p-3">120-200</td>
                    <td className="border border-gray-300 p-3">Kidney support, antioxidants</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 italic">
              Note: Calorie requirements vary based on activity level, metabolism, and individual health conditions. Consult your veterinarian for personalized recommendations.
            </p>
          </div>

          {/* ========== Feeding Guidelines Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Feeding Guidelines and Portion Control
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Puppies and Kittens</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Feeding Frequency:</strong> Feed puppies 3-4 times daily until 6 months, then 2 times daily. Kittens should eat 3-4 times daily until 6 months, then transition to 2 times daily.
                </p>
                <p className="text-gray-700">
                  <strong>Portion Size:</strong> Follow food package guidelines based on age and expected adult weight. Puppies and kittens require more calories per pound of body weight than adults due to growth and development needs.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Adult Dogs and Cats</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Feeding Frequency:</strong> Most adult pets thrive on 2 meals per day, spaced 8-12 hours apart. This supports consistent energy levels and digestive health.
                </p>
                <p className="text-gray-700">
                  <strong>Portion Size:</strong> Use the feeding guide on your pet food package as a starting point. Adjust portions based on your pet's body condition score. A healthy pet should have a visible waist when viewed from above and ribs that are easily felt but not prominently visible.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Senior Pets</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Feeding Frequency:</strong> Continue 2 meals daily, but consider smaller portions to prevent overeating and weight gain.
                </p>
                <p className="text-gray-700">
                  <strong>Portion Size:</strong> Senior pets typically require 10-25% fewer calories than younger adults due to decreased activity levels. Monitor weight closely and adjust portions as needed.
                </p>
              </div>
            </div>
          </div>

          {/* ========== Food Types Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Types of Pet Food: Pros and Cons
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Dry Kibble</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Pros:</strong> Convenient, cost-effective, helps maintain dental health through chewing action, long shelf life, easy portion control.
                </p>
                <p className="text-gray-700">
                  <strong>Cons:</strong> Lower moisture content, may contain more fillers, requires adequate water intake, some pets find it less palatable.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Wet/Canned Food</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Pros:</strong> High moisture content supports hydration, highly palatable, easier for senior pets to eat, nutrient-dense.
                </p>
                <p className="text-gray-700">
                  <strong>Cons:</strong> More expensive, shorter shelf life after opening, requires refrigeration, may contribute to dental issues if fed exclusively.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Raw Diet</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Pros:</strong> Mimics natural diet, high protein content, may improve coat quality, some pets show increased energy.
                </p>
                <p className="text-gray-700">
                  <strong>Cons:</strong> Risk of bacterial contamination, requires careful handling, expensive, nutritional imbalances possible, not recommended for immunocompromised pets.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Home-Cooked Diet</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Pros:</strong> Full control over ingredients, can address specific allergies, fresh food, customizable for individual needs.
                </p>
                <p className="text-gray-700">
                  <strong>Cons:</strong> Time-consuming, risk of nutritional imbalances, requires veterinary guidance, more expensive, difficult to maintain consistency.
                </p>
              </div>
            </div>
          </div>

          {/* ========== Special Dietary Needs Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Special Dietary Considerations
            </h2>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                <strong>Weight Management:</strong> Overweight pets face increased risks of diabetes, joint problems, and heart disease. If your pet is overweight, consult your veterinarian about a weight management diet. These typically contain higher fiber and lower fat to promote satiety while reducing calories.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Food Allergies and Sensitivities:</strong> Common allergens include chicken, beef, dairy, wheat, and soy. If your pet shows signs of allergies (itching, digestive issues, ear infections), work with your veterinarian to identify triggers. Limited ingredient diets or novel protein sources may help.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Digestive Issues:</strong> Pets with sensitive stomachs benefit from easily digestible foods with high-quality proteins and limited ingredients. Probiotics and digestive enzymes may also help. Gradual diet transitions (over 7-10 days) prevent digestive upset.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Kidney Disease:</strong> Senior pets with kidney issues require reduced protein and phosphorus. Your veterinarian may recommend prescription kidney diets formulated to support kidney function and reduce waste products.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Diabetes:</strong> Diabetic pets benefit from high-protein, low-carbohydrate diets. Proper nutrition can sometimes help manage or even reverse diabetes in cats, particularly when combined with weight management.
              </p>
            </div>
          </div>

          {/* ========== Use Cases Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Real-World Nutrition Scenarios
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  New Puppy Owner
                </h3>
                <p className="text-gray-700">
                  A new puppy owner should select a high-quality puppy formula with appropriate calcium and phosphorus for proper bone development. Feed 3-4 times daily and transition to adult food at 12 months.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Overweight Adult Dog
                </h3>
                <p className="text-gray-700">
                  An overweight dog benefits from a weight management formula with reduced calories and increased fiber. Combine with regular exercise and portion control. Monitor progress monthly and adjust as needed.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Senior Cat with Kidney Issues
                </h3>
                <p className="text-gray-700">
                  A senior cat with kidney disease requires a prescription diet low in protein and phosphorus. Wet food increases hydration. Regular veterinary monitoring ensures the diet supports kidney function.
                </p>
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
                  Q1: How much should I feed my pet?
                </h3>
                <p className="text-gray-700">
                  Feeding amounts depend on your pet's age, weight, activity level, and metabolism. Start with the amount recommended on your food package, then adjust based on your pet's body condition. Your veterinarian can provide personalized recommendations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q2: Can I mix wet and dry food?
                </h3>
                <p className="text-gray-700">
                  Yes, mixing wet and dry food is safe and can provide benefits of both. Wet food increases hydration and palatability, while dry food supports dental health. Ensure total daily calories remain appropriate for your pet's needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q3: How do I transition to a new food?
                </h3>
                <p className="text-gray-700">
                  Transition gradually over 7-10 days to prevent digestive upset. Mix increasing amounts of new food with the old food: 25% new/75% old for 2-3 days, 50/50 for 2-3 days, 75% new/25% old for 2-3 days, then 100% new food.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q4: Are grain-free diets better for pets?
                </h3>
                <p className="text-gray-700">
                  Grain-free diets are not inherently better unless your pet has a grain allergy. Some grain-free foods contain high levels of legumes, which may be linked to heart issues in some dogs. Choose foods based on your pet's individual needs and your veterinarian's recommendations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q5: What human foods are safe for pets?
                </h3>
                <p className="text-gray-700">
                  Safe human foods include plain cooked chicken, turkey, beef, carrots, green beans, and apples (without seeds). Avoid chocolate, grapes, raisins, onions, garlic, avocado, and foods containing xylitol, which are toxic to pets.
                </p>
              </div>
              <div className="text-lg font-bold text-gray-800 mb-3">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q6: How often should I have my pet's nutrition evaluated?
                </h3>
                <p className="text-gray-700">
                  Discuss nutrition at every veterinary visit. Puppies and kittens need evaluation every 3-4 weeks during growth. Adult pets should have annual nutrition assessments. Senior pets and those with health conditions may need more frequent evaluations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q7: Should I give my pet supplements?
                </h3>
                <p className="text-gray-700">
                  Quality commercial pet foods are nutritionally complete. Supplements may be beneficial for specific conditions (joint support for senior dogs, omega-3s for skin health) but should only be given under veterinary guidance to avoid imbalances.
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
              Proper nutrition is one of the most important factors in maintaining your pet's health and longevity. By understanding your pet's nutritional needs, selecting high-quality food, and monitoring their body condition, you can help prevent disease and support optimal wellbeing.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Remember that every pet is unique, and nutritional needs vary based on age, activity level, health status, and individual metabolism. Work closely with your veterinarian to develop a nutrition plan tailored to your pet's specific needs.
            </p>

            <p className="text-lg leading-relaxed">
              With proper nutrition and regular veterinary care, you're investing in your pet's health and happiness for years to come.
            </p>
          </div>

          {/* ========== Related Articles Section ========== */}
          <div className="mb-12 bg-gradient-to-r from-pink-50 to-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Related Pet Care Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/healthy-pet-treats" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🍖 Healthy Pet Treats</h3>
                <p className="text-gray-600">Learn about nutritious treat options and homemade treat recipes for your pet.</p>
              </Link>
              
              <Link href="/blog/pet-weight-management" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">⚖️ Pet Weight Management</h3>
                <p className="text-gray-600">Discover strategies for maintaining your pet's ideal weight and preventing obesity.</p>
              </Link>

              <Link href="/blog/pet-allergy-management" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🤧 Pet Allergy Management</h3>
                <p className="text-gray-600">Understand food allergies and dietary solutions for allergic pets.</p>
              </Link>

              <Link href="/blog/pet-care-guide" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">📋 Pet Care Guide</h3>
                <p className="text-gray-600">Comprehensive guide to all aspects of pet care and wellness.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export default function PetNutritionGuide() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PetNutritionGuideContent />
    </Suspense>
  );
}
