import { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet First Aid: Essential Procedures and Emergency Response Guide",
  description: "Learn critical pet first aid procedures, CPR techniques, wound care, and emergency response. Step-by-step guide with first aid checklist for dogs and cats.",
  keywords: ["pet first aid", "pet CPR", "pet first aid procedures", "emergency pet care", "pet wound care", "pet first aid kit", "pet first aid checklist"],
  openGraph: {
    title: "Pet First Aid: Essential Procedures and Emergency Response Guide",
    description: "Learn critical pet first aid procedures, CPR techniques, wound care, and emergency response. Step-by-step guide with first aid checklist.",
    type: "article",
    url: "https://petshard.com/blog/pet-first-aid",
    siteName: "PetShard",
    images: [{
      url: "https://cdn2.thecatapi.com/images/ag4.jpg",
      width: 1200,
      height: 630,
      alt: "Pet First Aid: Essential Procedures and Emergency Response Guide"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet First Aid: Essential Procedures and Emergency Response Guide",
    description: "Learn critical pet first aid procedures, CPR techniques, wound care, and emergency response. Step-by-step guide with first aid checklist.",
    images: ["https://cdn2.thecatapi.com/images/ag4.jpg"]
  },
  alternates: {
    canonical: "https://petshard.com/blog/pet-first-aid"
  },
  other: {
    "structured-data": JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Pet First Aid: Essential Procedures and Emergency Response Guide",
  "description": "Learn critical pet first aid procedures, CPR techniques, wound care, and emergency response. Step-by-step guide with first aid checklist.",
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
  "datePublished": "2025-11-28T03:43:39.195Z",
  "dateModified": "2025-11-28T03:43:39.195Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://petshard.com/blog/pet-first-aid"
  }
})
  }
};

function PetFirstAidGuideContent() {
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
            Pet First Aid: Essential Procedures and Emergency Response Guide
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
            alt="Pet First Aid: Essential Procedures and Emergency Response Guide" 
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
              Pet first aid can save your pet\'s life in critical moments. Knowing how to respond quickly and correctly during emergencies is one of the most important skills every pet owner should develop.
            </p>

            <p className="text-lg leading-relaxed">
              <p className="text-lg leading-relaxed mb-4">
                This comprehensive guide covers essential pet first aid procedures, from CPR and wound care to choking response and shock management. We\'ll walk you through step-by-step instructions for common emergencies, help you assemble a pet first aid kit, and teach you when to seek professional veterinary care.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Whether you\'re a new pet owner or have years of experience, mastering these first aid techniques can mean the difference between a positive outcome and tragedy. By learning proper procedures and staying prepared, you\'ll be ready to handle emergencies with confidence and potentially save your pet\'s life.
              </p>
            </p>
          </div>

          {/* ========== Core Content Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Essential Pet First Aid Procedures
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-800 mb-3">1. Pet CPR (Cardiopulmonary Resuscitation)</h3>
                <p className="text-gray-700 mb-3"><strong>When to Use:</strong> When your pet is unconscious and not breathing.</p>
                <div className="bg-gray-50 p-4 rounded mb-3">
                  <p className="font-bold text-gray-800 mb-2">Step-by-Step Instructions:</p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li><strong>Check responsiveness:</strong> Tap your pet and call their name. If no response, proceed to CPR.</li>
                    <li><strong>Position your pet:</strong> Place on a firm, flat surface. For dogs, lie on their right side. For cats, lie on their back.</li>
                    <li><strong>Open airway:</strong> Gently extend the neck and open the mouth. Clear any debris.</li>
                    <li><strong>Give rescue breaths:</strong> For dogs, seal mouth and blow 2-3 breaths. For cats, cover nose and mouth with your mouth and give gentle breaths.</li>
                    <li><strong>Perform chest compressions:</strong> Place hands on the widest part of the chest. Compress 1-2 inches at a rate of 100-120 compressions per minute.</li>
                    <li><strong>Continue cycle:</strong> Alternate 30 compressions with 2 rescue breaths. Continue until pet breathes or emergency vet arrives.</li>
                  </ol>
                </div>
                <p className="text-gray-700"><strong>Pro Tip:</strong> Call emergency vet immediately while performing CPR. Have someone drive while you continue compressions.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-800 mb-3">2. Severe Bleeding Control</h3>
                <p className="text-gray-700 mb-3"><strong>When to Use:</strong> For uncontrolled bleeding from wounds or injuries.</p>
                <div className="bg-gray-50 p-4 rounded mb-3">
                  <p className="font-bold text-gray-800 mb-2">Step-by-Step Instructions:</p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li><strong>Ensure safety:</strong> Calm your pet and prevent them from moving. Muzzle if necessary (but not if choking).</li>
                    <li><strong>Apply direct pressure:</strong> Use clean cloth or gauze. Press firmly on the wound for 5-10 minutes without lifting.</li>
                    <li><strong>Add layers if needed:</strong> If blood soaks through, add more cloth on top. Do not remove the first layer.</li>
                    <li><strong>Elevate if possible:</strong> Raise the injured limb above heart level to slow bleeding.</li>
                    <li><strong>Apply tourniquet for limb wounds:</strong> If bleeding doesn\'t stop, apply a tourniquet above the wound using cloth or bandage.</li>
                    <li><strong>Secure bandage:</strong> Once bleeding slows, wrap the wound with clean bandage. Keep it snug but not too tight.</li>
                  </ol>
                </div>
                <p className="text-gray-700"><strong>Pro Tip:</strong> Never remove embedded objects. Stabilize them and transport to vet immediately.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-800 mb-3">3. Choking Response</h3>
                <p className="text-gray-700 mb-3"><strong>When to Use:</strong> When your pet is choking on an object or food.</p>
                <div className="bg-gray-50 p-4 rounded mb-3">
                  <p className="font-bold text-gray-800 mb-2">Step-by-Step Instructions:</p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li><strong>Assess the situation:</strong> Look for signs: gasping, pawing at mouth, inability to bark/meow, blue tongue.</li>
                    <li><strong>Open the mouth:</strong> Gently open your pet\'s mouth and look for the object. If visible and loose, remove it carefully.</li>
                    <li><strong>Perform abdominal thrusts:</strong> Stand behind your pet. Place fist just behind the rib cage. Push upward and inward 5 times quickly.</li>
                    <li><strong>Repeat if needed:</strong> Check mouth again. Repeat thrusts if object still present.</li>
                    <li><strong>Try back blows:</strong> For small pets, hold upside down and gently tap the back 5 times.</li>
                    <li><strong>Transport immediately:</strong> Even if object is removed, go to vet to check for damage.</li>
                  </ol>
                </div>
                <p className="text-gray-700"><strong>Pro Tip:</strong> Do not put your fingers too far back in the throat as this can cause gagging.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-800 mb-3">4. Treating Shock</h3>
                <p className="text-gray-700 mb-3"><strong>When to Use:</strong> After trauma, severe injury, or blood loss. Signs include pale gums, rapid heartbeat, weakness.</p>
                <div className="bg-gray-50 p-4 rounded mb-3">
                  <p className="font-bold text-gray-800 mb-2">Step-by-Step Instructions:</p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li><strong>Keep pet calm:</strong> Minimize stress and movement. Speak in soothing tones.</li>
                    <li><strong>Maintain body temperature:</strong> Wrap in blankets or towels. Do not overheat.</li>
                    <li><strong>Position correctly:</strong> Keep head level with body. Elevate hind legs slightly if no spinal injury suspected.</li>
                    <li><strong>Do not give food or water:</strong> Pet may need surgery. Keep stomach empty.</li>
                    <li><strong>Monitor vital signs:</strong> Check breathing, pulse, and gum color every few minutes.</li>
                    <li><strong>Transport immediately:</strong> Get to emergency vet as quickly as possible.</li>
                  </ol>
                </div>
                <p className="text-gray-700"><strong>Pro Tip:</strong> Shock can develop hours after injury. Monitor your pet closely even if they seem stable.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-800 mb-3">5. Wound Cleaning and Bandaging</h3>
                <p className="text-gray-700 mb-3"><strong>When to Use:</strong> For minor cuts, scrapes, or after bleeding is controlled.</p>
                <div className="bg-gray-50 p-4 rounded mb-3">
                  <p className="font-bold text-gray-800 mb-2">Step-by-Step Instructions:</p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li><strong>Calm your pet:</strong> Use treats or gentle voice to keep them still.</li>
                    <li><strong>Flush the wound:</strong> Use clean water or saline solution. Gently rinse away debris.</li>
                    <li><strong>Pat dry:</strong> Use clean cloth or gauze. Do not rub.</li>
                    <li><strong>Apply antiseptic:</strong> Use pet-safe antiseptic (not human products). Avoid hydrogen peroxide for deep wounds.</li>
                    <li><strong>Apply antibiotic ointment:</strong> Use pet-safe ointment if available.</li>
                    <li><strong>Bandage properly:</strong> Cover with sterile gauze. Wrap with self-adhesive bandage. Not too tight.</li>
                    <li><strong>Change bandage daily:</strong> Keep wound clean and dry. Watch for signs of infection.</li>
                  </ol>
                </div>
                <p className="text-gray-700"><strong>Pro Tip:</strong> If wound is deep, gaping, or won\'t stop bleeding, seek veterinary care immediately.</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8 mt-8">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">
                🔗 Related Emergency Resources
              </h3>
              <div className="space-y-2">
                <Link href="/blog/pet-emergency-signs" className="block text-yellow-700 hover:text-yellow-900 font-medium">
                  Pet Emergency Signs: When to Seek Immediate Care
                </Link>
                <Link href="/blog/pet-emergency-escape-guide" className="block text-yellow-700 hover:text-yellow-900 font-medium">
                  Pet Emergency Escape Guide
                </Link>
                <Link href="/health-center" className="block text-yellow-700 hover:text-yellow-900 font-medium">
                  Pet Health Center
                </Link>
              </div>
            </div>
          </div>

          {/* ========== First Aid Kit Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Building Your Pet First Aid Kit
            </h2>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <p className="text-gray-700 mb-4">
                A well-stocked pet first aid kit is essential for handling emergencies at home. Keep your kit in an easily accessible location and check it regularly to replace expired items.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Essential Supplies:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Sterile gauze pads (various sizes)</li>
                    <li>Self-adhesive bandages</li>
                    <li>Elastic bandages for wrapping</li>
                    <li>Antibiotic ointment (pet-safe)</li>
                    <li>Antiseptic solution or saline</li>
                    <li>Cotton balls and swabs</li>
                    <li>Tweezers for splinter removal</li>
                    <li>Scissors (blunt-tipped)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Additional Items:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Thermometer (pet-safe)</li>
                    <li>Hydrogen peroxide (3%)</li>
                    <li>Activated charcoal (for poisoning)</li>
                    <li>Muzzle (appropriate size)</li>
                    <li>Leash and collar</li>
                    <li>Blanket or towel</li>
                    <li>Pet first aid manual</li>
                    <li>Emergency vet contact information</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ========== Use Cases Section ========== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Common Emergency Scenarios
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  1. Hit by Car
                </h3>
                <p className="text-gray-700 mb-3">
                  Treat for shock, control bleeding, immobilize spine if possible, transport immediately to emergency vet.
                </p>
                <p className="text-sm text-gray-600"><strong>Response Time:</strong> Immediate emergency care required</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  2. Choking on Object
                </h3>
                <p className="text-gray-700 mb-3">
                  Perform abdominal thrusts, remove object if visible, monitor breathing, seek vet care even if resolved.
                </p>
                <p className="text-sm text-gray-600"><strong>Response Time:</strong> Immediate action required</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  3. Severe Bleeding
                </h3>
                <p className="text-gray-700 mb-3">
                  Apply direct pressure, elevate limb, apply tourniquet if needed, transport to emergency vet.
                </p>
                <p className="text-sm text-gray-600"><strong>Response Time:</strong> Within minutes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  4. Poisoning
                </h3>
                <p className="text-gray-700 mb-3">
                  Call poison control, do not induce vomiting unless instructed, bring container of substance to vet.
                </p>
                <p className="text-sm text-gray-600"><strong>Response Time:</strong> Within 1-2 hours</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  5. Heatstroke
                </h3>
                <p className="text-gray-700 mb-3">
                  Move to cool area, apply cool (not cold) water, offer water to drink, seek vet care immediately.
                </p>
                <p className="text-sm text-gray-600"><strong>Response Time:</strong> Within 30 minutes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  6. Fracture or Sprain
                </h3>
                <p className="text-gray-700 mb-3">
                  Immobilize limb, apply ice, limit movement, seek vet care for proper diagnosis and treatment.
                </p>
                <p className="text-sm text-gray-600"><strong>Response Time:</strong> Within 24 hours</p>
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
                  Q1: How do I know if my pet needs emergency care?
                </h3>
                <p className="text-gray-700">
                  Signs requiring immediate emergency care include difficulty breathing, unconsciousness, severe bleeding, choking, seizures, inability to urinate or defecate, pale gums, and signs of extreme pain. When in doubt, contact your emergency vet.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q2: Should I perform CPR on my pet?
                </h3>
                <p className="text-gray-700">
                  Yes, if your pet is unconscious and not breathing, CPR can be life-saving. However, it\'s best learned through hands-on training. Many veterinary clinics offer pet CPR certification courses. Even without formal training, attempting CPR is better than doing nothing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q3: What should I do if my pet is poisoned?
                </h3>
                <p className="text-gray-700">
                  Call your veterinarian or poison control immediately. Have the substance container available. Do not induce vomiting unless specifically instructed by a professional. Time is critical with poisoning cases, so seek help immediately.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q4: How do I transport an injured pet safely?
                </h3>
                <p className="text-gray-700">
                  Keep your pet calm and still. Use a carrier or blanket to immobilize them. Support the head and spine if possible. Drive carefully to avoid jostling. If spinal injury is suspected, minimize movement. Have someone call ahead to the emergency vet so they\'re prepared.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q5: Can I treat wounds at home or should I see a vet?
                </h3>
                <p className="text-gray-700">
                  Minor cuts and scrapes can be treated at home with proper cleaning and bandaging. However, deep wounds, puncture wounds, wounds that won\'t stop bleeding, or wounds showing signs of infection require veterinary care. When in doubt, have a vet evaluate the wound.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q6: How often should I update my pet first aid kit?
                </h3>
                <p className="text-gray-700">
                  Check your first aid kit every 6 months. Replace expired items, replenish used supplies, and update emergency contact information. Keep the kit in an easily accessible location that all family members know about.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Q7: Should I take a pet first aid course?
                </h3>
                <p className="text-gray-700">
                  Absolutely. Hands-on training is invaluable for learning proper techniques and building confidence. Many veterinary clinics, animal shelters, and organizations like the Red Cross offer pet first aid and CPR certification courses. The investment is worth it for your pet\'s safety.
                </p>
              </div>
            </div>
          </div>

          {/* ========== First Aid Checklist Section ========== */}
          <div className="mb-12 bg-purple-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">
              Pet First Aid Checklist
            </h2>
            
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Use this checklist to prepare for emergencies and ensure you\'re ready to respond quickly and effectively.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold text-gray-800 mb-3">Preparation:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>☐ Assemble pet first aid kit</li>
                  <li>☐ Know location of emergency vet</li>
                  <li>☐ Have emergency vet phone number saved</li>
                  <li>☐ Know your pet\'s medical history</li>
                  <li>☐ Have recent photos of your pet</li>
                  <li>☐ Take pet first aid course</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold text-gray-800 mb-3">During Emergency:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>☐ Stay calm and assess situation</li>
                  <li>☐ Call emergency vet immediately</li>
                  <li>☐ Apply appropriate first aid</li>
                  <li>☐ Transport pet safely</li>
                  <li>☐ Bring first aid kit to vet</li>
                  <li>☐ Provide medical history to vet</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ========== Conclusion Section ========== */}
          <div className="mb-12 bg-green-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
              Conclusion
            </h2>
            
            <p className="text-lg leading-relaxed">
              <p className="text-lg leading-relaxed mb-4">
                Pet first aid knowledge can literally save your pet\'s life. By learning these essential procedures, assembling a well-stocked first aid kit, and staying prepared, you\'ll be ready to handle emergencies with confidence and composure.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Remember that first aid is meant to stabilize your pet until professional veterinary care is available. Always follow up with your veterinarian, even if your pet seems to recover. Some injuries have delayed complications that only a vet can detect.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Take the time to learn these skills now, before an emergency happens. Your quick thinking and proper response could mean the difference between your pet\'s recovery and tragedy. Invest in a pet first aid course, keep your kit updated, and stay informed about emergency procedures. Your pet depends on you.
              </p>
            </p>
          </div>

          {/* ========== Related Articles Section ========== */}
          <div className="mb-12 bg-gradient-to-r from-pink-50 to-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Related Emergency & Care Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/pet-emergency-signs" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🚨 Pet Emergency Signs</h3>
                <p className="text-gray-600">Learn critical signs that require immediate veterinary attention and when to call the vet.</p>
              </Link>
              
              <Link href="/blog/pet-emergency-escape-guide" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🏃 Emergency Escape Guide</h3>
                <p className="text-gray-600">Prepare for emergencies with procedures to keep your pet safe during disasters.</p>
              </Link>

              <Link href="/health-center" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🏥 Pet Health Center</h3>
                <p className="text-gray-600">Get personalized health advice and symptom checking for your pet.</p>
              </Link>

              <Link href="/blog/pet-dental-health" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🦷 Pet Dental Health</h3>
                <p className="text-gray-600">Learn about dental care and prevention to keep your pet\'s teeth healthy.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export default function PetFirstAidGuide() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PetFirstAidGuideContent />
    </Suspense>
  );
}
