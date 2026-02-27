"use client";

import { useState, useRef } from "react";
import Layout from "@/components/layout/Layout";
import ImageUploader from "@/components/ui/ImageUploader";
import LoadingButton from "@/components/ui/LoadingButton";
import StructuredData from "@/components/ui/StructuredData";

interface PrimateProfile {
  species: string;
  confidence: number;
  scientificName: string;
  habitat: string;
  diet: string;
  socialBehavior: string;
  conservationStatus: string;
  funFact: string;
  similarityToPunch: string;
}

// Punch's timeline data
const timeline = [
  { date: "July 2025", title: "Born at Ichikawa City Zoo", desc: "Punch was born at Ichikawa City Zoo in Chiba Prefecture, Japan. His mother abandoned him shortly after birth, likely due to extreme summer heat." },
  { date: "Day 1", title: "Rescued by Zookeeper", desc: "Zookeeper Kosuke Shikano found the tiny, shivering infant and began round-the-clock care, bottle-feeding him every two hours." },
  { date: "Week 2", title: "Found His Comfort Toy", desc: "After testing towels and various stuffed animals, keepers chose an IKEA plush orangutan. Its long hair and monkey-like shape gave Punch the perfect grip and comfort." },
  { date: "Month 3", title: "Integration Attempts", desc: "Punch began interacting with the macaque troop. He was sometimes chased and pushed away, but showed remarkable resilience — retreating to his toy, then trying again." },
  { date: "Month 6", title: "Signs of Acceptance", desc: "Other macaques were seen grooming Punch, sitting beside him, and even hugging him — heartwarming signs of growing social bonds." },
  { date: "Feb 2026", title: "Global Viral Sensation", desc: "Videos of Punch exploded online with over 40 million views. BBC, NYT, Reuters, and Forbes covered his story. Fans rallied under #GanbarePanchi and #HangInTherePunch." },
];

// Primate facts for the educational section
const primateFacts = [
  { icon: "🐒", title: "162+ Macaque Species", desc: "Japanese macaques (Macaca fuscata) are one of over 162 species in the Old World monkey family." },
  { icon: "♨️", title: "Hot Spring Bathers", desc: "Japanese macaques in Nagano are famous for soaking in natural hot springs during winter — a behavior unique among non-human primates." },
  { icon: "👶", title: "Maternal Bonds", desc: "Baby macaques normally cling to their mothers for warmth and muscle development. When rejected, human intervention is critical for survival." },
  { icon: "🧸", title: "Comfort Objects", desc: "Primates in captivity often form attachments to soft objects. Punch's bond with his IKEA orangutan mirrors natural clinging instincts." },
  { icon: "🌍", title: "Conservation Matters", desc: "Over 60% of primate species are threatened with extinction. Supporting ethical zoos helps fund conservation research and habitat protection." },
  { icon: "🤝", title: "Complex Societies", desc: "Macaque troops have strict social hierarchies. Reintegrating a hand-raised infant requires patience, careful monitoring, and gradual exposure." },
];

export default function PunchTheMonkeyPage() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PrimateProfile | null>(null);
  const [isFallback, setIsFallback] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File | null) => {
    setImageFile(file);
    setResult(null);
    setError(null);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleIdentify = async () => {
    if (!imageFile) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      const res = await fetch("/api/monkey-identifier", { method: "POST", body: formData });
      const data = await res.json();
      if (data.error && !data.profile) {
        setError(data.error);
      } else {
        setResult(data.profile);
        setIsFallback(data.isFallback || false);
      }
    } catch (e) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StructuredData
        type="article"
        data={{
          headline: "Punch the Monkey — An Unofficial Tribute to the World's Most Beloved Macaque",
          description: "Learn about Punch, the baby Japanese macaque who captured hearts worldwide. Upload a photo to identify primate species with AI.",
        }}
      />
      <Layout title="PetShard" showBackButton={true}>
        {/* Hero Section */}
        <section className="text-center py-10 md:py-16">
          <div className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Unofficial Fan Tribute — Not affiliated with Ichikawa City Zoo
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4">
            🐒 Punch the Monkey
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            A tribute to the baby Japanese macaque who taught the world about resilience, kindness, and the power of a stuffed orangutan.
          </p>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Inspired by the real story of Punch at Ichikawa City Zoo. This page is an independent, fan-made tribute celebrating animal welfare and primate education.
          </p>
        </section>

        {/* Punch's Story Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            The Story That Moved Millions
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-pink-50 to-yellow-50 rounded-2xl p-6 md:p-8 mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                In July 2025, a tiny macaque was born at Ichikawa City Zoo in Chiba Prefecture, Japan. His mother abandoned him shortly after birth — zookeepers believe the extreme summer heat may have triggered the rejection.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zookeeper Kosuke Shikano found the shivering infant and tucked him inside his jacket. What followed was weeks of round-the-clock bottle feeding, careful monitoring, and an unexpected friendship with an IKEA plush orangutan that would capture the hearts of millions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The keepers chose the stuffed toy because its long hair and primate-like shape gave Punch easy places to grip — mimicking the natural clinging behavior baby macaques need for muscle development and emotional security. Punch latched on immediately and has rarely been seen without it since.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-pink-200 transform md:-translate-x-1/2" />
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex items-start mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"} pl-10 md:pl-0`}>
                    <span className="inline-block bg-pink-100 text-pink-600 text-xs font-bold px-2 py-1 rounded-full mb-1">
                      {item.date}
                    </span>
                    <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                  <div className="absolute left-2 md:left-1/2 w-5 h-5 bg-pink-400 rounded-full border-4 border-white shadow transform md:-translate-x-1/2 mt-1" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zoo's Message */}
        <section className="mb-12 max-w-3xl mx-auto">
          <blockquote className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-6 italic text-gray-700">
            &ldquo;While Punch is scolded, he shows resilience and mental strength. We would like you to support Punch&apos;s efforts rather than feel sorry for him. Adversity is not misfortune, but the greatest opportunity — and the beginning of something new.&rdquo;
            <footer className="mt-3 text-sm text-gray-500 not-italic">— Ichikawa City Zoo (as reported by international media)</footer>
          </blockquote>
        </section>

        {/* AI Primate Identifier Tool */}
        <section className="mb-12 max-w-3xl mx-auto" id="identify">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-pink-100">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
              🔬 Primate Species Identifier
            </h2>
            <p className="text-gray-500 text-center mb-6 text-sm">
              Upload a photo of any monkey, ape, or lemur — our AI will identify the species and tell you how it compares to Punch.
            </p>

            <ImageUploader
              onFileChange={handleFileChange}
              preview={preview}
              error={error}
              fileInputRef={fileInputRef}
            />

            <div className="text-center">
              <LoadingButton
                onClick={handleIdentify}
                loading={loading}
                disabled={!imageFile || loading}
                loadingText="Identifying..."
              >
                Identify This Primate
              </LoadingButton>
            </div>

            {error && !result && (
              <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg text-center text-sm">{error}</div>
            )}

            {result && (
              <div className="mt-8 animate-fade-in">
                {isFallback && (
                  <div className="mb-4 p-2 bg-yellow-50 text-yellow-700 rounded-lg text-center text-xs">
                    Showing sample data — API was temporarily unavailable.
                  </div>
                )}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{result.species}</h3>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                      {Math.round(result.confidence * 100)}% match
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 italic mb-4">{result.scientificName}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { label: "Habitat", value: result.habitat, icon: "🌿" },
                      { label: "Diet", value: result.diet, icon: "🍌" },
                      { label: "Social Behavior", value: result.socialBehavior, icon: "👥" },
                      { label: "Conservation Status", value: result.conservationStatus, icon: "🛡️" },
                    ].map((item) => (
                      <div key={item.label} className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <span>{item.icon}</span>
                          <span className="font-semibold text-gray-700 text-sm">{item.label}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 bg-yellow-50 rounded-lg p-3">
                    <p className="font-semibold text-yellow-800 text-sm mb-1">💡 Fun Fact</p>
                    <p className="text-gray-700 text-sm">{result.funFact}</p>
                  </div>

                  {result.similarityToPunch && result.similarityToPunch !== "N/A" && (
                    <div className="mt-4 bg-pink-50 rounded-lg p-3">
                      <p className="font-semibold text-pink-700 text-sm mb-1">🐒 Compared to Punch</p>
                      <p className="text-gray-700 text-sm">{result.similarityToPunch}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Primate Facts Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            🌍 Primate Facts & Why They Matter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {primateFacts.map((fact) => (
              <div
                key={fact.title}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg hover:scale-105 transition-all duration-200 border border-gray-100"
              >
                <span className="text-3xl mb-3 block">{fact.icon}</span>
                <h3 className="font-bold text-gray-800 mb-1">{fact.title}</h3>
                <p className="text-gray-600 text-sm">{fact.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How You Can Help */}
        <section className="mb-12 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
              🤝 How You Can Support Primate Welfare
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Visit Ethical Zoos & Sanctuaries",
                  desc: "Support facilities that prioritize animal welfare, conservation breeding programs, and natural habitat enrichment. Your ticket helps fund their care.",
                },
                {
                  title: "Donate to Conservation Organizations",
                  desc: "Groups like the IUCN Primate Specialist Group, Jane Goodall Institute, and local wildlife foundations work tirelessly to protect primate habitats worldwide.",
                },
                {
                  title: "Spread Awareness, Not Misinformation",
                  desc: "Share verified stories like Punch's from reputable sources. Avoid sensationalized content that exploits animals for clicks.",
                },
                {
                  title: "Respect Wildlife Boundaries",
                  desc: "When visiting zoos, keep noise levels low, avoid flash photography, and follow all posted guidelines. Punch's zoo had to install stronger barriers after crowds surged.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-8 max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-5 text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              This page is an unofficial, fan-made tribute inspired by the widely reported story of Punch the Japanese macaque at Ichikawa City Zoo.
              PetShard is not affiliated with, endorsed by, or connected to Ichikawa City Zoo, its staff, or any official Punch-related organizations.
              All factual information is sourced from international news coverage by Reuters, BBC, The Japan Times, and other reputable outlets.
              We encourage readers to visit official zoo channels for the most up-to-date information.
              This content is intended to celebrate animal welfare and promote primate education.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
