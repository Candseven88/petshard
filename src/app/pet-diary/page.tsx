"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

const petImages = [
  "/pet/1.jpg", "/pet/2.jpg", "/pet/3.jpg", "/pet/4.jpg", "/pet/5.jpg", "/pet/6.jpg", "/pet/7.jpg", "/pet/8.jpg", "/pet/9.jpg"
];

const SOCIALS = [
  { name: "Instagram", url: "https://www.instagram.com/" },
  { name: "Facebook", url: "https://www.facebook.com/" },
  { name: "Twitter", url: "https://twitter.com/" },
];

export default function PetDiary() {
  const [prompt, setPrompt] = useState("");
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [heroImgIdx, setHeroImgIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImgIdx((idx) => (idx + 1) % petImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter a topic or idea for your pet's social post.");
      return;
    }
    setLoading(true);
    setError("");
    setPost("");
    setCopied(false);
    try {
      const res = await fetch("/api/pet-diary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt.trim() })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate post.");
      setPost(data.diary);
    } catch (err: unknown) {
      let message = "Failed to generate post.";
      if (
        err &&
        typeof err === 'object' &&
        'message' in err &&
        typeof (err as { message?: unknown }).message === 'string'
      ) {
        message = (err as { message: string }).message;
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!post) return;
    navigator.clipboard.writeText(post);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleGenerate();
  };

  return (
    <Layout title="Pet Social Post Generator" showBackButton={false}>
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-12 md:py-20">
        <div className="flex-1 z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4 drop-shadow-sm animate-fade-in">Pet Social Post Generator</h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-6 animate-fade-in delay-100">Generate a fun, lively social media post for your pet!</p>
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
      <section className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Generate a Pet Social Media Post</h2>
        <div className="mb-6 flex flex-col gap-3">
          <input
            type="text"
            className="border-2 border-pink-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-pink-400 transition"
            placeholder="Describe your pet's moment or give a topic (e.g. A funny walk, A cute nap)"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
            maxLength={100}
          />
          <button
            className="btn-primary px-6 py-3 text-lg"
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
          >
            {loading ? "Generating..." : post ? "Regenerate" : "Generate"}
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
            <p className="text-gray-600">Generating post...</p>
          </div>
        )}
        {post && !loading && (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 mb-4 text-lg leading-relaxed text-gray-900 whitespace-pre-line shadow-inner animate-fade-in">
            {post}
          </div>
        )}
        <div className="flex gap-2 justify-end mt-2">
          <button
            className="px-4 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm"
            onClick={handleGenerate}
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
        <div className="text-gray-400 text-xs text-center mt-4">
          Powered by Bigmodel GLM-4.5-Flash
        </div>
      </section>
    </Layout>
  );
} 