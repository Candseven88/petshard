"use client";

import { Suspense, useState } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// Health Check Tool Component
function PetHealthCheckTool() {
  const [petType, setPetType] = useState("dog");
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();
  const dogSymptoms = [
    "Fever",
    "Lameness or joint pain",
    "Swollen lymph nodes",
    "Loss of appetite",
    "Lethargy",
    "Difficulty breathing",
    "Coughing",
    "Skin rash or irritation",
    "Tick exposure in the last 30 days"
  ];
  const catSymptoms = [
    "Fever",
    "Lameness or joint pain",
    "Loss of appetite",
    "Lethargy",
    "Difficulty breathing",
    "Coughing",
    "Skin rash or irritation",
    "Tick exposure in the last 30 days"
  ];
  const currentSymptoms = petType === "dog" ? dogSymptoms : catSymptoms;
  const toggleSymptom = (symptom: string) => {
    if (symptoms.includes(symptom)) {
      setSymptoms(symptoms.filter(s => s !== symptom));
    } else {
      setSymptoms([...symptoms, symptom]);
    }
  };
  const getHealthRisk = () => {
    // Check for Lyme disease risk
    const lymeRiskSymptoms = ["Fever", "Lameness or joint pain", "Swollen lymph nodes", "Tick exposure in the last 30 days"];
    const lymeRiskCount = symptoms.filter(s => lymeRiskSymptoms.includes(s)).length;
    
    // Check for Legionnaires risk
    const legionnairesRiskSymptoms = ["Fever", "Difficulty breathing", "Coughing", "Lethargy"];
    const legionnairesRiskCount = symptoms.filter(s => legionnairesRiskSymptoms.includes(s)).length;
    
    if (lymeRiskCount >= 3) {
      return {
        risk: "high",
        disease: "Lyme disease",
        recommendation: "Please consult a veterinarian immediately. Your pet is showing multiple symptoms consistent with Lyme disease."
      };
    } else if (legionnairesRiskCount >= 3) {
      return {
        risk: "high",
        disease: "respiratory infection",
        recommendation: "Please consult a veterinarian immediately. Your pet is showing symptoms of a serious respiratory condition."
      };
    } else if (lymeRiskCount >= 2 || legionnairesRiskCount >= 2) {
      return {
        risk: "moderate",
        disease: "infection",
        recommendation: "Consider scheduling a veterinary appointment soon. Your pet is showing some concerning symptoms."
      };
    } else if (symptoms.length > 0) {
      return {
        risk: "low",
        disease: "",
        recommendation: "Monitor your pet's condition. If symptoms persist or worsen, consult with a veterinarian."
      };
    } else {
      return {
        risk: "none",
        disease: "",
        recommendation: "Your pet appears to be healthy based on the information provided."
      };
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };
  const handleBreedIdentification = () => {
    router.push("/breed-identification");
  };
  const riskResult = getHealthRisk();
  return (
    <div className="bg-blue-50 rounded-xl p-6 shadow-md mt-8">
      <h3 className="text-xl font-bold text-blue-700 mb-4">Pet Health Check Tool</h3>
      <p className="text-gray-600 mb-4">
        Use this simple tool to assess potential health risks for your pet based on observed symptoms.
        This is not a substitute for professional veterinary care.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Pet Type</label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setPetType("dog")}
              className={`px-4 py-2 rounded-lg ${
                petType === "dog" 
                  ? "bg-blue-600 text-white" 
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              Dog
            </button>
            <button
              type="button"
              onClick={() => setPetType("cat")}
              className={`px-4 py-2 rounded-lg ${
                petType === "cat" 
                  ? "bg-blue-600 text-white" 
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              Cat
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Select Observed Symptoms</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {currentSymptoms.map((symptom) => (
              <div 
                key={symptom}
                className={`p-3 rounded-lg cursor-pointer border ${
                  symptoms.includes(symptom) 
                    ? "bg-blue-100 border-blue-400" 
                    : "bg-white border-gray-300"
                }`}
                onClick={() => toggleSymptom(symptom)}
              >
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-sm mr-2 ${
                    symptoms.includes(symptom) ? "bg-blue-600" : "border border-gray-400"
                  }`}>
                    {symptoms.includes(symptom) && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span>{symptom}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Check Health Risk
        </button>
      </form>
      {showResult && (
        <div className="mt-6 p-4 rounded-lg border border-gray-300 bg-white">
          <h4 className="font-bold text-lg mb-2">Assessment Result</h4>
          <div className="flex items-center mb-2">
            <span className="font-medium mr-2">Risk Level:</span>
            <span className={`px-2 py-1 rounded-full text-white ${
              riskResult.risk === "high" ? "bg-red-500" :
              riskResult.risk === "moderate" ? "bg-yellow-500" :
              riskResult.risk === "low" ? "bg-blue-500" : "bg-green-500"
            }`}>
              {riskResult.risk.charAt(0).toUpperCase() + riskResult.risk.slice(1)}
            </span>
          </div>
          <p className="text-gray-700 mb-4">{riskResult.recommendation}</p>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              onClick={handleBreedIdentification}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors flex-1"
            >
              Identify Your Pet's Breed
            </button>
            <Link 
              href="/health-guide"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-center flex-1"
            >
              Get Health Guide
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
function ArticleContent() {
  return (
    <Layout title="Pet Health Blog" showBackButton={true}>
      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/blog" className="hover:text-pink-600">Blog</Link>
            <span className="mx-2">›</span>
            <span>Pet Health</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pet Health Risks: Understanding Lyme Disease and Legionnaires' Disease
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>August 1, 2023</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
        </header>
        {/* Featured Image */}
        <div className="relative h-64 md:h-96 w-full mb-12 rounded-xl overflow-hidden">
          <Image 
            src="/pet/5.jpg" 
            alt="Dog in outdoor environment" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        {/* Article Content - Improved Readability */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction Section */}
          <div className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">Introduction</h2>
            <p className="text-lg leading-relaxed">
              As pet owners, we strive to provide the best care for our furry companions. 
              However, many of us may not be aware of certain health risks that can affect both our pets and ourselves. 
              Two such diseases that have been gaining attention recently are Lyme disease and Legionnaires' disease. 
              Understanding these conditions is crucial for early detection and prevention.
            </p>
          </div>
          {/* Lyme Disease Section */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">What is Lyme Disease?</h2>
            </div>
            
            <div className="pl-4 border-l-4 border-green-200 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Lyme disease is a bacterial infection primarily transmitted through the bite of infected black-legged ticks (deer ticks). 
                The bacterium responsible, <em>Borrelia burgdorferi</em>, can cause a range of symptoms in both humans and animals. 
                This disease is particularly prevalent in wooded, grassy areas where ticks thrive.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Lyme Disease in Pets</h3>
              <p className="mb-4">
                Dogs are particularly susceptible to Lyme disease, while cats rarely show clinical signs even when infected. 
                The symptoms in dogs typically appear 2-5 months after infection and may include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                  <span className="h-2 w-2 bg-red-500 rounded-full mr-2"></span>
                  Fever
                </li>
                <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                  <span className="h-2 w-2 bg-red-500 rounded-full mr-2"></span>
                  Lameness that shifts from leg to leg
                </li>
                <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                  <span className="h-2 w-2 bg-red-500 rounded-full mr-2"></span>
                  Swollen joints
                </li>
                <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                  <span className="h-2 w-2 bg-red-500 rounded-full mr-2"></span>
                  Enlarged lymph nodes
                </li>
                <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                  <span className="h-2 w-2 bg-red-500 rounded-full mr-2"></span>
                  Lethargy and reduced appetite
                </li>
                <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                  <span className="h-2 w-2 bg-red-500 rounded-full mr-2"></span>
                  In severe cases, kidney failure or neurological issues
                </li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <p>
                  <strong>Important:</strong> Many infected pets may not show any symptoms at all, 
                  making regular veterinary check-ups essential for early detection.
                </p>
              </div>
            </div>
          </div>
          {/* Legionnaires' Disease Section */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">What is Legionnaires' Disease?</h2>
            </div>
            
            <div className="pl-4 border-l-4 border-blue-200 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Legionnaires' disease is a severe form of pneumonia caused by the bacterium <em>Legionella pneumophila</em>. 
                Unlike Lyme disease, it's not transmitted directly from animals to humans. Instead, it spreads when people 
                inhale small droplets of water containing the bacteria, typically from contaminated water sources like cooling towers, 
                hot tubs, decorative fountains, or plumbing systems.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Legionnaires' Disease and Pets</h3>
              <p className="mb-4">
                While pets themselves rarely contract Legionnaires' disease, they can be indirectly involved in its transmission:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <span className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">1</span>
                    </span>
                    <p>Pet water features, fountains, and poorly maintained water bowls can become breeding grounds for Legionella bacteria</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <span className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">2</span>
                    </span>
                    <p>Stagnant water in pet bathing areas or outdoor pet equipment can harbor the bacteria</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <span className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">3</span>
                    </span>
                    <p>Some pet cooling systems and misting devices could potentially aerosolize contaminated water</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p>
                  <strong>Note:</strong> Though direct pet-to-human transmission is not a concern, maintaining clean water sources 
                  for your pets is important for both their health and yours.
                </p>
              </div>
            </div>
          </div>
          {/* Prevention Strategies Section */}
          <div className="mb-12 bg-green-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">Prevention Strategies</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Preventing Lyme Disease
              </h3>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Regular tick prevention:</strong> Use veterinarian-recommended tick preventatives year-round</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Daily tick checks:</strong> Examine your pet thoroughly after outdoor activities</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Proper tick removal:</strong> Use fine-tipped tweezers to remove ticks promptly</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Yard maintenance:</strong> Keep grass short and remove leaf litter to reduce tick habitats</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Lyme vaccination:</strong> Consider vaccination for dogs in high-risk areas (consult your veterinarian)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Preventing Legionnaires' Disease
              </h3>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Clean water sources:</strong> Regularly clean and disinfect pet water bowls, fountains, and bathing areas</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Avoid stagnant water:</strong> Don't let water sit in pet equipment or toys for extended periods</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Proper maintenance:</strong> Ensure any water features or cooling systems used for pets are properly maintained</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Fresh water:</strong> Provide fresh water daily and avoid using untreated water sources</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* AI Help Section */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-pink-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">How AI Can Help Protect Your Pet</h2>
            </div>
            
            <div className="pl-4 border-l-4 border-pink-200 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Modern technology offers new ways to safeguard your pet's health. AI-powered tools can assist in early detection 
                and prevention of various health issues, and even help create educational content about pet care:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-pink-400">
                <h4 className="font-bold text-lg mb-3 text-pink-600">Breed Identification</h4>
                <p>Different breeds have different susceptibilities to certain diseases. Knowing your pet's exact breed can help you understand specific health risks.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-pink-400">
                <h4 className="font-bold text-lg mb-3 text-pink-600">Symptom Recognition</h4>
                <p>AI can help identify subtle symptoms that might otherwise go unnoticed, allowing for earlier intervention.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-pink-400">
                <h4 className="font-bold text-lg mb-3 text-pink-600">Personalized Health Recommendations</h4>
                <p>Based on your pet's breed, age, and lifestyle, AI can provide tailored health guidance and preventive care suggestions.</p>
              </div>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg mb-6">
              <p className="text-lg mb-4">
                Our PetShard platform offers AI-powered breed identification that can help you better understand your pet's 
                specific health needs and risks. By identifying your pet's breed accurately, you can take more targeted 
                preventive measures against diseases like Lyme disease.
              </p>
              <p className="text-lg">
                For pet owners interested in creating educational content about pet health and safety, AI tools like 
                <a href="https://www.ghostfaceai.space/" target="_blank" rel="nofollow" className="text-blue-600 hover:text-blue-800 underline ml-1 mr-1">
                  Ghostface AI
                </a>
                can help generate compelling visual content for awareness campaigns, educational posters, and social media content 
                to spread important pet health information in your community.
              </p>
            </div>
          </div>
          {/* When to See a Veterinarian Section */}
          <div className="mb-12 bg-red-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-6">When to See a Veterinarian</h2>
            <p className="mb-6 text-lg">
              While prevention is key, knowing when to seek professional help is equally important. Contact your veterinarian if your pet shows:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <span className="h-3 w-3 bg-red-500 rounded-full mr-3"></span>
                <span>Sudden lameness or joint pain</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <span className="h-3 w-3 bg-red-500 rounded-full mr-3"></span>
                <span>Persistent fever</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <span className="h-3 w-3 bg-red-500 rounded-full mr-3"></span>
                <span>Unusual lethargy or loss of appetite</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <span className="h-3 w-3 bg-red-500 rounded-full mr-3"></span>
                <span>Difficulty breathing or persistent cough</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center col-span-1 md:col-span-2">
                <span className="h-3 w-3 bg-red-500 rounded-full mr-3"></span>
                <span>Any unusual symptoms after tick exposure or contact with potentially contaminated water</span>
              </div>
            </div>
            <div className="mt-6 text-lg">
              Early intervention can significantly improve outcomes for pets affected by these and other diseases.
            </div>
          </div>
          {/* Conclusion Section */}
          <div className="mb-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Conclusion</h2>
            <p className="text-lg leading-relaxed mb-6">
              Both Lyme disease and Legionnaires' disease represent important health considerations for pet owners. 
              By understanding these conditions, implementing preventive measures, and utilizing modern tools like AI-powered 
              breed identification, we can better protect our beloved companions and ourselves.
            </p>
            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400">
              <p className="text-lg">
                Remember that regular veterinary check-ups remain the cornerstone of pet health care, complemented by 
                vigilant home monitoring and appropriate preventive treatments.
              </p>
            </div>
          </div>
          
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <p className="text-lg font-medium text-blue-800">
              Use our Pet Health Check Tool below to assess potential health risks based on your pet's symptoms, 
              and consider using our AI-powered breed identification service for more personalized health insights.
            </p>
          </div>
        </div>
        {/* Health Check Tool */}
        <PetHealthCheckTool />
        {/* Call to Action */}
        <div className="bg-pink-50 rounded-xl p-6 shadow-md mt-8">
          <h3 className="text-xl font-bold text-pink-600 mb-2">Identify Your Pet's Breed for Better Health Insights</h3>
          <p className="text-gray-600 mb-4">
            Different breeds have different health risks. Knowing your pet's exact breed can help you take more targeted preventive measures.
          </p>
          <Link 
            href="/breed-identification"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors"
          >
            Try Our AI Breed Identification
          </Link>
        </div>
        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/health-guide" 
              className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
            >
              <div className="bg-blue-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Pet Health Guide</h4>
                <p className="text-gray-600">Comprehensive health information for your pet</p>
              </div>
            </Link>
            <Link 
              href="/virtual-breeding" 
              className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all flex items-center gap-4"
            >
              <div className="bg-green-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Virtual Breeding Analysis</h4>
                <p className="text-gray-600">Understand genetic factors in pet health</p>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
export default function LymeAndLegionnairesArticle() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArticleContent />
    </Suspense>
  );
} 