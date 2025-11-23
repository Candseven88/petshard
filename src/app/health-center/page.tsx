"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const petImages = [
  "/pet/1.jpg", "/pet/2.jpg", "/pet/3.jpg", "/pet/4.jpg", "/pet/5.jpg", "/pet/6.jpg", "/pet/7.jpg", "/pet/8.jpg", "/pet/9.jpg"
];

type TabType = "breed-health" | "symptom-checker";

// Common symptoms organized by category
const symptomCategories = [
  {
    name: "Digestive System",
    symptoms: ["Vomiting", "Diarrhea", "Loss of appetite", "Constipation", "Bloating"]
  },
  {
    name: "Skin & Coat",
    symptoms: ["Excessive scratching", "Hair loss", "Redness/inflammation", "Dry skin", "Hot spots"]
  },
  {
    name: "Respiratory",
    symptoms: ["Coughing", "Sneezing", "Difficulty breathing", "Nasal discharge", "Wheezing"]
  },
  {
    name: "Behavioral",
    symptoms: ["Lethargy", "Aggression", "Anxiety", "Excessive drinking", "Restlessness"]
  },
  {
    name: "Other",
    symptoms: ["Limping", "Eye discharge", "Ear problems", "Bad breath", "Weight loss"]
  }
];

function parseSections(markdown: string) {
  const regex = /(?:^|\n)(#{1,3}\s+)([\s\S]*?)(?=(?:\n#{1,3}\s+|$))/g;
  const sections = [];
  let match;
  while ((match = regex.exec(markdown)) !== null) {
    const title = match[2]?.split('\n')[0]?.trim() || "";
    const content = match[2]?.substring(title.length).trim() || "";
    if (title && content) sections.push({ title, content });
  }
  if (sections.length === 0 && markdown) {
    sections.push({ title: "Information", content: markdown });
  }
  return sections;
}

function HealthCenterContent() {
  const searchParams = useSearchParams();
  const initialBreed = searchParams.get("breed") || "";
  
  const [activeTab, setActiveTab] = useState<TabType>("symptom-checker");
  const [breed, setBreed] = useState(initialBreed);
  const [guide, setGuide] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [heroImgIdx, setHeroImgIdx] = useState(0);

  // Symptom Checker States
  const [petType, setPetType] = useState<"dog" | "cat" | "other">("dog");
  const [petAge, setPetAge] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [additionalInfo, setAdditionalInfo] = useState("");

  useEffect(() => {
    setBreed(initialBreed);
  }, [initialBreed]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImgIdx((idx) => (idx + 1) % petImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const fetchBreedHealth = useCallback(async () => {
    if (!breed.trim()) {
      setError("Please enter a breed name.");
      return;
    }
    setLoading(true);
    setError("");
    setGuide("");
    setCopied(false);
    try {
      const res = await fetch("/api/health-center", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          type: "breed-health",
          breed: breed.trim() 
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to get health guide.");
      setGuide(data.guide);
    } catch (err: any) {
      setError(err.message || "Failed to get health guide.");
    } finally {
      setLoading(false);
    }
  }, [breed]);

  const checkSymptoms = useCallback(async () => {
    if (selectedSymptoms.length === 0 && !additionalInfo.trim()) {
      setError("Please select at least one symptom or describe your concern.");
      return;
    }
    setLoading(true);
    setError("");
    setGuide("");
    setCopied(false);
    try {
      const res = await fetch("/api/health-center", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "symptom-check",
          petType,
          breed: breed.trim(),
          age: petAge,
          symptoms: selectedSymptoms,
          additionalInfo: additionalInfo.trim()
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to analyze symptoms.");
      setGuide(data.guide);
    } catch (err: any) {
      setError(err.message || "Failed to analyze symptoms.");
    } finally {
      setLoading(false);
    }
  }, [petType, breed, petAge, selectedSymptoms, additionalInfo]);

  const handleCopy = () => {
    if (!guide) return;
    navigator.clipboard.writeText(guide);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const sections = guide ? parseSections(guide) : [];

  return (
    <Layout title="PetShard" showBackButton={false}>
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-12 md:py-20">
        <div className="flex-1 z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4 drop-shadow-sm animate-fade-in">
            Pet Health Center
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-6 animate-fade-in delay-100">
            Check symptoms and get personalized health recommendations for your pet.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center relative min-h-[340px] h-[340px] max-h-[340px]">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200 blur-2xl opacity-60 animate-gradient-move" />
          <Image
            src={petImages[heroImgIdx]}
            alt="Pet Hero"
            width={340}
            height={340}
            className="rounded-3xl shadow-xl border-4 border-white object-cover w-[340px] h-[340px] transition-all duration-700 animate-fade-in"
            priority
          />
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="max-w-4xl mx-auto mb-6 animate-fade-in">
        <div className="flex gap-2 bg-white rounded-xl p-2 shadow-md">
          <button
            onClick={() => setActiveTab("symptom-checker")}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              activeTab === "symptom-checker"
                ? "bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            🩺 Symptom Checker
          </button>
          <button
            onClick={() => setActiveTab("breed-health")}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              activeTab === "breed-health"
                ? "bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            📋 Breed Health Guide
          </button>
        </div>
      </section>

      {/* Symptom Checker Tab */}
      {activeTab === "symptom-checker" && (
        <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-center text-pink-500">Symptom Checker</h2>
          
          {/* Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-sm text-yellow-800">
              ⚠️ <strong>Important:</strong> This is AI-generated advice and should not replace professional veterinary consultation. 
              If your pet shows severe symptoms, please contact a veterinarian immediately.
            </p>
          </div>

          {/* Pet Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pet Type</label>
              <select
                className="w-full border-2 border-pink-200 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-400"
                value={petType}
                onChange={(e) => setPetType(e.target.value as "dog" | "cat" | "other")}
                disabled={loading}
              >
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Breed (Optional)</label>
              <input
                type="text"
                className="w-full border-2 border-pink-200 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-400"
                placeholder="e.g., Golden Retriever"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Age (years)</label>
              <input
                type="number"
                className="w-full border-2 border-pink-200 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-400"
                placeholder="e.g., 3"
                value={petAge}
                onChange={(e) => setPetAge(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          {/* Symptom Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Select Symptoms</label>
            <div className="space-y-4">
              {symptomCategories.map((category) => (
                <div key={category.name} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{category.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.symptoms.map((symptom) => (
                      <button
                        key={symptom}
                        onClick={() => toggleSymptom(symptom)}
                        disabled={loading}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                          selectedSymptoms.includes(symptom)
                            ? "bg-pink-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {symptom}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Information (Optional)
            </label>
            <textarea
              className="w-full border-2 border-pink-200 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-400 min-h-[100px]"
              placeholder="Describe any other symptoms, behaviors, or concerns..."
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              disabled={loading}
            />
          </div>

          <button
            className="w-full btn-primary py-3 text-lg"
            onClick={checkSymptoms}
            disabled={loading || (selectedSymptoms.length === 0 && !additionalInfo.trim())}
          >
            {loading ? "Analyzing..." : "Check Symptoms"}
          </button>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded p-3 mt-4 text-center animate-fade-in">
              {error}
            </div>
          )}

          {loading && (
            <div className="text-center py-8 mt-4">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-pink-500 mb-2"></div>
              <p className="text-gray-600">Analyzing symptoms...</p>
            </div>
          )}

          {sections.length > 0 && !loading && (
            <div className="space-y-4 mt-6">
              {sections.map((section, idx) => (
                <div key={idx} className="bg-pink-50 border-2 border-pink-100 rounded-xl shadow p-4 animate-fade-in">
                  <button
                    className="w-full text-left px-2 py-2 font-semibold text-lg flex justify-between items-center focus:outline-none hover:bg-pink-100 rounded-t-lg"
                    onClick={() => setOpenSection(openSection === idx ? null : idx)}
                    aria-expanded={openSection === idx}
                  >
                    <span>{section.title}</span>
                    <span>{openSection === idx ? "▲" : "▼"}</span>
                  </button>
                  {openSection === idx && (
                    <div className="px-2 pb-2 pt-1 prose prose-sm max-w-none">
                      <ReactMarkdown>{section.content}</ReactMarkdown>
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 flex gap-2 justify-end">
                <button
                  className="px-4 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm"
                  onClick={checkSymptoms}
                >
                  Recheck
                </button>
                <button
                  className={`px-4 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 text-sm ${copied ? 'opacity-70' : ''}`}
                  onClick={handleCopy}
                  disabled={copied}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Breed Health Guide Tab */}
      {activeTab === "breed-health" && (
        <section className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">Breed Health Guide</h2>
          <div className="mb-4 flex flex-col md:flex-row gap-2 items-center">
            <input
              type="text"
              className="flex-1 border-2 border-pink-200 rounded-lg px-3 py-2 text-lg focus:outline-none focus:border-pink-400 transition"
              placeholder="Enter pet breed (e.g. Golden Retriever)"
              value={breed}
              onChange={e => setBreed(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && fetchBreedHealth()}
              disabled={loading}
            />
            <button
              className="btn-primary px-5 py-2 text-lg"
              onClick={fetchBreedHealth}
              disabled={loading || !breed.trim()}
            >
              {loading ? "Generating..." : guide ? "Regenerate" : "Generate"}
            </button>
          </div>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded p-3 mb-4 text-center animate-fade-in">
              {error}
            </div>
          )}
          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-pink-500 mb-2"></div>
              <p className="text-gray-600">Generating health guide...</p>
            </div>
          )}
          {sections.length > 0 && !loading && (
            <div className="space-y-4">
              {sections.map((section, idx) => (
                <div key={idx} className="bg-pink-50 border-2 border-pink-100 rounded-xl shadow p-4 animate-fade-in">
                  <button
                    className="w-full text-left px-2 py-2 font-semibold text-lg flex justify-between items-center focus:outline-none hover:bg-pink-100 rounded-t-lg"
                    onClick={() => setOpenSection(openSection === idx ? null : idx)}
                    aria-expanded={openSection === idx}
                  >
                    <span>{section.title}</span>
                    <span>{openSection === idx ? "▲" : "▼"}</span>
                  </button>
                  {openSection === idx && (
                    <div className="px-2 pb-2 pt-1 prose prose-sm max-w-none">
                      <ReactMarkdown>{section.content}</ReactMarkdown>
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 flex gap-2 justify-end">
                <button
                  className="px-4 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm"
                  onClick={fetchBreedHealth}
                >
                  Regenerate
                </button>
                <button
                  className={`px-4 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 text-sm ${copied ? 'opacity-70' : ''}`}
                  onClick={handleCopy}
                  disabled={copied}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          )}
          <div className="text-gray-400 text-xs text-center mt-4">
            Powered by Bigmodel GLM-4.5-Flash
          </div>
        </section>
      )}
    </Layout>
  );
}

export default function HealthCenter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HealthCenterContent />
    </Suspense>
  );
}

