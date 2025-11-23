"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import Layout from "@/components/layout/Layout";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const petImages = [
  "/pet/1.jpg", "/pet/2.jpg", "/pet/3.jpg", "/pet/4.jpg", "/pet/5.jpg", "/pet/6.jpg", "/pet/7.jpg", "/pet/8.jpg", "/pet/9.jpg"
];

const careTopics = [
  {
    id: "feeding",
    title: "Feeding Guide",
    icon: "🍖",
    description: "Nutrition and feeding schedules",
    color: "from-orange-400 to-red-400"
  },
  {
    id: "training",
    title: "Training Tips",
    icon: "🎾",
    description: "Behavior and obedience training",
    color: "from-blue-400 to-indigo-400"
  },
  {
    id: "environment",
    title: "Environment Setup",
    icon: "🏠",
    description: "Creating a safe living space",
    color: "from-green-400 to-teal-400"
  },
  {
    id: "grooming",
    title: "Grooming Care",
    icon: "✂️",
    description: "Coat, nail, and dental care",
    color: "from-pink-400 to-purple-400"
  },
  {
    id: "puppy-kitten",
    title: "Puppy/Kitten Care",
    icon: "👶",
    description: "Caring for young pets",
    color: "from-yellow-400 to-orange-400"
  },
  {
    id: "senior",
    title: "Senior Pet Care",
    icon: "👴",
    description: "Caring for aging pets",
    color: "from-gray-400 to-slate-400"
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
    sections.push({ title: "Care Guide", content: markdown });
  }
  return sections;
}

function PetCareGuideContent() {
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [petType, setPetType] = useState<"dog" | "cat" | "other">("dog");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [specialConditions, setSpecialConditions] = useState("");
  const [guide, setGuide] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [heroImgIdx, setHeroImgIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImgIdx((idx) => (idx + 1) % petImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const fetchCareGuide = useCallback(async () => {
    if (!selectedTopic) {
      setError("Please select a care topic.");
      return;
    }
    setLoading(true);
    setError("");
    setGuide("");
    setCopied(false);
    try {
      const res = await fetch("/api/pet-care-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: selectedTopic,
          petType,
          breed: breed.trim(),
          age,
          weight,
          specialConditions: specialConditions.trim()
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to get care guide.");
      setGuide(data.guide);
    } catch (err: any) {
      setError(err.message || "Failed to get care guide.");
    } finally {
      setLoading(false);
    }
  }, [selectedTopic, petType, breed, age, weight, specialConditions]);

  const handleCopy = () => {
    if (!guide) return;
    navigator.clipboard.writeText(guide);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
    setGuide("");
    setError("");
  };

  const sections = guide ? parseSections(guide) : [];

  return (
    <Layout title="PetShard" showBackButton={false}>
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-12 md:py-20">
        <div className="flex-1 z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4 drop-shadow-sm animate-fade-in">
            Pet Care Guide
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-6 animate-fade-in delay-100">
            Get personalized care advice for your pet's specific needs.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center relative min-h-[340px] h-[340px] max-h-[340px]">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-200 via-blue-100 to-purple-200 blur-2xl opacity-60 animate-gradient-move" />
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

      {/* Care Topics Selection */}
      <section className="max-w-6xl mx-auto mb-8 animate-fade-in">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Choose a Care Topic</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {careTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => handleTopicSelect(topic.id)}
              className={`p-6 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 ${
                selectedTopic === topic.id
                  ? `bg-gradient-to-br ${topic.color} text-white shadow-xl`
                  : "bg-white hover:shadow-lg"
              }`}
            >
              <div className="text-4xl mb-3">{topic.icon}</div>
              <h3 className={`font-bold text-lg mb-2 ${
                selectedTopic === topic.id ? "text-white" : "text-gray-800"
              }`}>
                {topic.title}
              </h3>
              <p className={`text-sm ${
                selectedTopic === topic.id ? "text-white/90" : "text-gray-600"
              }`}>
                {topic.description}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Pet Information Form */}
      {selectedTopic && (
        <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">
            Tell Us About Your Pet
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pet Type *</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Breed</label>
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
                value={age}
                onChange={(e) => setAge(e.target.value)}
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Weight (lbs/kg)</label>
              <input
                type="text"
                className="w-full border-2 border-pink-200 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-400"
                placeholder="e.g., 30 lbs"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Conditions (Optional)
            </label>
            <textarea
              className="w-full border-2 border-pink-200 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-400 min-h-[80px]"
              placeholder="e.g., pregnant, recovering from illness, allergies..."
              value={specialConditions}
              onChange={(e) => setSpecialConditions(e.target.value)}
              disabled={loading}
            />
          </div>

          <button
            className="w-full btn-primary py-3 text-lg"
            onClick={fetchCareGuide}
            disabled={loading}
          >
            {loading ? "Generating..." : guide ? "Regenerate Guide" : "Generate Care Guide"}
          </button>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded p-3 mt-4 text-center animate-fade-in">
              {error}
            </div>
          )}

          {loading && (
            <div className="text-center py-8 mt-4">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-pink-500 mb-2"></div>
              <p className="text-gray-600">Generating personalized care guide...</p>
            </div>
          )}

          {sections.length > 0 && !loading && (
            <div className="space-y-4 mt-6">
              {sections.map((section, idx) => (
                <div key={idx} className="bg-blue-50 border-2 border-blue-100 rounded-xl shadow p-4 animate-fade-in">
                  <button
                    className="w-full text-left px-2 py-2 font-semibold text-lg flex justify-between items-center focus:outline-none hover:bg-blue-100 rounded-t-lg"
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
                  onClick={fetchCareGuide}
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

      {/* Why Use This Guide Section */}
      <section className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8 animate-fade-in">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Why Use Our Pet Care Guide?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold mb-2">Personalized Advice</h3>
            <p className="text-gray-600 text-sm">
              Tailored recommendations based on your pet's specific breed, age, and needs.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold mb-2">Instant Results</h3>
            <p className="text-gray-600 text-sm">
              Get expert care advice in seconds, powered by advanced AI technology.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="font-bold mb-2">Comprehensive Coverage</h3>
            <p className="text-gray-600 text-sm">
              From feeding to grooming, training to senior care - all topics covered.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default function PetCareGuide() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PetCareGuideContent />
    </Suspense>
  );
}

