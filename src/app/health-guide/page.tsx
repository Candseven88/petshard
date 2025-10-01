"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const petImages = [
  "/pet/1.jpg", "/pet/2.jpg", "/pet/3.jpg", "/pet/4.jpg", "/pet/5.jpg", "/pet/6.jpg", "/pet/7.jpg", "/pet/8.jpg", "/pet/9.jpg"
];

function parseSections(markdown: string) {
  const regex = /(?:^|\n)(\d+\)|#+\s*)([\s\S]*?)(?=(?:\n\d+\)|\n#+\s*|$))/g;
  const sections = [];
  let match;
  while ((match = regex.exec(markdown)) !== null) {
    const title = match[1] ? match[1].replace(/[#\s]/g, "") : "";
    const content = match[2]?.trim() || "";
    if (content) sections.push({ title, content });
  }
  if (sections.length === 0 && markdown) {
    sections.push({ title: "", content: markdown });
  }
  return sections;
}

function HealthGuideContent() {
  const searchParams = useSearchParams();
  const initialBreed = searchParams.get("breed") || "";
  const [breed, setBreed] = useState(initialBreed);
  const [guide, setGuide] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [heroImgIdx, setHeroImgIdx] = useState(0);

  useEffect(() => {
    setBreed(initialBreed);
  }, [initialBreed]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImgIdx((idx) => (idx + 1) % petImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const fetchGuide = useCallback(async () => {
    if (!breed.trim()) {
      setError("Please enter a breed name.");
      return;
    }
    setLoading(true);
    setError("");
    setGuide("");
    setCopied(false);
    try {
      const res = await fetch("/api/health-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ breed: breed.trim() })
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

  const handleCopy = () => {
    if (!guide) return;
    navigator.clipboard.writeText(guide);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") fetchGuide();
  };

  const sections = guide ? parseSections(guide) : [];

  return (
    <Layout title="Pet Health Guide" showBackButton={false}>
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-12 md:py-20">
        <div className="flex-1 z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4 drop-shadow-sm animate-fade-in">Pet Health Guide</h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-6 animate-fade-in delay-100">Get personalized health recommendations for your pet's breed.</p>
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

      {/* Main Card Section */}
      <section className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8 animate-fade-in">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">Get Health Recommendations</h2>
        <div className="mb-4 flex flex-col md:flex-row gap-2 items-center">
          <input
            type="text"
            className="flex-1 border-2 border-pink-200 rounded-lg px-3 py-2 text-lg focus:outline-none focus:border-pink-400 transition"
            placeholder="Enter pet breed (e.g. Golden Retriever)"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
          />
          <button
            className="btn-primary px-5 py-2 text-lg"
            onClick={fetchGuide}
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
                  <span>{section.title ? section.title : `Section ${idx + 1}`}</span>
                  <span>{openSection === idx ? "▲" : "▼"}</span>
                </button>
                {openSection === idx && (
                  <div className="px-2 pb-2 pt-1">
                    <ReactMarkdown>
                      {section.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 flex gap-2 justify-end">
              <button
                className="px-4 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm"
                onClick={fetchGuide}
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
          Powered by Bigmodel GLM-4-Flash-250414
        </div>
      </section>
    </Layout>
  );
}

export default function HealthGuide() {
  return (
    <Suspense fallback={null}>
      <HealthGuideContent />
    </Suspense>
  );
} 