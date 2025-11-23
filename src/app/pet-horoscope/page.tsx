"use client";

import { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import ReactMarkdown from "react-markdown";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Image from "next/image";
import { FaTwitter, FaFacebook, FaReddit } from "react-icons/fa";
import { createPopper } from "@popperjs/core";

const petImages = [
  "/pet/1.jpg", "/pet/2.jpg", "/pet/3.jpg", "/pet/4.jpg", "/pet/5.jpg", "/pet/6.jpg", "/pet/7.jpg", "/pet/8.jpg", "/pet/9.jpg"
];

const zodiacList = [
  { name: "Aries", emoji: "🐏", range: ["03-21", "04-19"] },
  { name: "Taurus", emoji: "🐂", range: ["04-20", "05-20"] },
  { name: "Gemini", emoji: "👯", range: ["05-21", "06-20"] },
  { name: "Cancer", emoji: "🦀", range: ["06-21", "07-22"] },
  { name: "Leo", emoji: "🦁", range: ["07-23", "08-22"] },
  { name: "Virgo", emoji: "🌾", range: ["08-23", "09-22"] },
  { name: "Libra", emoji: "⚖️", range: ["09-23", "10-22"] },
  { name: "Scorpio", emoji: "🦂", range: ["10-23", "11-21"] },
  { name: "Sagittarius", emoji: "🏹", range: ["11-22", "12-21"] },
  { name: "Capricorn", emoji: "🐐", range: ["12-22", "01-19"] },
  { name: "Aquarius", emoji: "🏺", range: ["01-20", "02-18"] },
  { name: "Pisces", emoji: "🐟", range: ["02-19", "03-20"] },
];

const commonBreeds = [
  "Golden Retriever", "Labrador Retriever", "Poodle", "Bulldog", "Beagle", "German Shepherd", "Other"
];

type Zodiac = {
  name: string;
  emoji: string;
  range: string[];
};

type Horoscope = {
  zodiac: string;
  date_range: string;
  keywords: string[];
  sections: {
    personality: string;
    compatibility: string;
    tips: string;
    challenges: string;
  };
  lucky_color: string;
  lucky_number: string;
  conclusion: string;
  analysis: string;
};

function getZodiac(month: number, day: number) {
  for (const z of zodiacList) {
    const [start, end] = z.range;
    const [startMonth, startDay] = start.split("-").map(Number);
    const [endMonth, endDay] = end.split("-").map(Number);
    if (
      (month === startMonth && day >= startDay) ||
      (month === endMonth && day <= endDay) ||
      (startMonth > endMonth && (month > startMonth || month < endMonth))
    ) {
      return z;
    }
  }
  return null;
}

export default function PetHoroscope() {
  const [birthday, setBirthday] = useState("");
  const [zodiac, setZodiac] = useState<Zodiac | null>(null);
  const [breed, setBreed] = useState("");
  const [customBreed, setCustomBreed] = useState("");
  const [horoscope, setHoroscope] = useState<Horoscope | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [heroImgIdx, setHeroImgIdx] = useState(0);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const shareBtnRef = useRef<HTMLButtonElement>(null);
  const sharePopupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImgIdx((idx) => (idx + 1) % petImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showShareOptions && shareBtnRef.current && sharePopupRef.current) {
      createPopper(shareBtnRef.current, sharePopupRef.current, {
        placement: "top-end",
        modifiers: [
          { name: "offset", options: { offset: [0, 8] } },
          { name: "preventOverflow", options: { boundary: "viewport" } }
        ]
      });
    }
  }, [showShareOptions]);

  const handleBirthdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBirthday(value);
    if (value) {
      const [year, month, day] = value.split("-").map(Number);
      const z = getZodiac(month, day);
      setZodiac(z);
    } else {
      setZodiac(null);
    }
  };

  const handleBreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBreed(e.target.value);
    setCustomBreed("");
  };

  const handleCustomBreedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomBreed(e.target.value);
    setBreed("");
  };

  const getFinalBreed = () => {
    if (breed && breed !== "Other") return breed;
    if (customBreed) return customBreed;
    return "";
  };

  const handleAnalyze = async () => {
    if (!zodiac || !birthday || !getFinalBreed()) return;
    setLoading(true);
    setError("");
    setHoroscope(null);
    try {
      const res = await fetch("/api/pet-horoscope", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ birthday, zodiac: zodiac.name, breed: getFinalBreed() })
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || "Failed to get analysis.");
      setHoroscope(data);
    } catch (e: any) {
      setError(e.message || "Failed to get analysis.");
    }
    setLoading(false);
  };

  const handleShare = () => {
    if (!zodiac || !horoscope) return;
    setShowShareOptions((v) => !v);
  };
  const shareText = zodiac && horoscope ? `My pet is a ${getFinalBreed()} and a ${zodiac.name}! ${horoscope.analysis}` : "";
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const handleShareTo = (platform: string) => {
    let url = "";
    if (platform === "twitter") {
      url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    } else if (platform === "facebook") {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    } else if (platform === "reddit") {
      url = `https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`;
    }
    if (url) window.open(url, "_blank");
    setShowShareOptions(false);
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const zodiacImageMap: Record<string, string> = {
    Aries: "/horoscope-icons/ARIES.png",
    Taurus: "/horoscope-icons/TAURUS.png",
    Gemini: "/horoscope-icons/GEMINI.png",
    Cancer: "/horoscope-icons/CANCER.png",
    Leo: "/horoscope-icons/LEO.png",
    Virgo: "/horoscope-icons/VIRGO.png",
    Libra: "/horoscope-icons/LIBRA.png",
    Scorpio: "/horoscope-icons/SCORPIUS.png",
    Sagittarius: "/horoscope-icons/SAGITTARIUS.png",
    Capricorn: "/horoscope-icons/CAPRICORN.png",
    Aquarius: "/horoscope-icons/AQUARIUS.png",
    Pisces: "/horoscope-icons/PISCES.png",
  };

  return (
    <Layout title="Pet Horoscope" showBackButton={false}>
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-12 md:py-20">
        <div className="flex-1 z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4 drop-shadow-sm animate-fade-in">Pet Horoscope</h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-6 animate-fade-in delay-100">Discover your pet's zodiac and get a fun, personalized analysis!</p>
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
      <section className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8 animate-fade-in flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">Pet Horoscope</h2>
        <label className="mb-2 font-medium">Select your pet's birthday:</label>
        <input
          type="date"
          value={birthday}
          onChange={handleBirthdayChange}
          className="border-2 border-pink-200 rounded-lg px-3 py-2 mb-4 w-full focus:outline-none focus:border-pink-400 transition"
        />
        <label className="mb-2 font-medium">Select your pet's breed:</label>
        <select
          value={breed}
          onChange={handleBreedChange}
          className="border-2 border-pink-200 rounded-lg px-3 py-2 mb-2 w-full focus:outline-none focus:border-pink-400 transition"
        >
          <option value="">-- Choose a breed --</option>
          {commonBreeds.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        {breed === "Other" && (
          <input
            type="text"
            placeholder="Enter breed"
            value={customBreed}
            onChange={handleCustomBreedChange}
            className="border-2 border-pink-200 rounded-lg px-3 py-2 mb-4 w-full focus:outline-none focus:border-pink-400 transition"
          />
        )}
        <button
          className="btn-primary px-6 py-3 text-lg mt-2 w-full"
          onClick={handleAnalyze}
          disabled={loading || !birthday || !zodiac || !getFinalBreed()}
        >
          {loading ? "Analyzing..." : horoscope ? "Regenerate" : "Analyze"}
        </button>
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 rounded p-3 my-4 text-center animate-fade-in">
            {error}
          </div>
        )}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-pink-500 mb-2"></div>
            <p className="text-gray-600">Analyzing horoscope...</p>
          </div>
        )}
        {horoscope && !loading && (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 mb-4 text-lg leading-relaxed text-gray-900 shadow-inner animate-fade-in w-full mt-6">
            <div className="flex items-center gap-2 mb-2">
              {zodiac && zodiacImageMap[zodiac.name] && (
                <Image
                  src={zodiacImageMap[zodiac.name]}
                  alt={zodiac.name}
                  width={40}
                  height={40}
                  className="rounded-full border border-pink-200 bg-white"
                />
              )}
              <span className="font-bold text-blue-600 text-xl">{horoscope.zodiac}</span>
              <span className="text-gray-500 text-sm">({horoscope.date_range})</span>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-pink-500">Keywords:</span> {horoscope.keywords.join(", ")}
            </div>
            <div className="space-y-2">
              {Object.entries(horoscope.sections).map(([section, content]) => (
                <div key={section} className="bg-white rounded-lg p-3 border border-pink-100">
                  <button
                    className="w-full flex justify-between items-center font-semibold text-blue-500 text-lg focus:outline-none"
                    onClick={() => toggleSection(section)}
                    type="button"
                  >
                    <span className="capitalize">{section}</span>
                    {expandedSections[section] ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
                  </button>
                  {expandedSections[section] && (
                    <div className="mt-2 text-gray-700">
                      <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-4 items-center">
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold">Lucky Color: {horoscope.lucky_color}</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">Lucky Number: {horoscope.lucky_number}</span>
            </div>
            <div className="mt-4 text-pink-600 font-bold">{horoscope.conclusion}</div>
            <button
              className="mt-4 btn-primary px-4 py-2 relative"
              onClick={handleShare}
              type="button"
              ref={shareBtnRef}
            >
              Share
            </button>
            {showShareOptions && (
              <div ref={sharePopupRef} className="z-50 bg-white border border-gray-200 rounded-xl shadow-2xl flex flex-col min-w-[240px] animate-fade-in overflow-hidden absolute">
                <button className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 transition-colors text-blue-500 text-base font-medium focus:outline-none w-full" onClick={() => handleShareTo("twitter")}
                  style={{borderBottom: '1px solid #f0f0f0'}}>
                  <FaTwitter className="text-xl" /> Share to Twitter
                </button>
                <button className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 transition-colors text-blue-700 text-base font-medium focus:outline-none w-full"
                  onClick={() => handleShareTo("facebook")}
                  style={{borderBottom: '1px solid #f0f0f0'}}>
                  <FaFacebook className="text-xl" /> Share to Facebook
                </button>
                <button className="flex items-center gap-3 px-5 py-3 hover:bg-orange-50 transition-colors text-orange-600 text-base font-medium focus:outline-none w-full" onClick={() => handleShareTo("reddit")}
                >
                  <FaReddit className="text-xl" /> Share to Reddit
                </button>
              </div>
            )}
          </div>
        )}
        <div className="text-gray-400 text-xs text-center mt-4">
          Powered by Bigmodel GLM-4.5-Flash
        </div>
      </section>
    </Layout>
  );
} 