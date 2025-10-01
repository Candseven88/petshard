"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

const petImages = [
  "/pet/1.jpg", "/pet/2.jpg", "/pet/3.jpg", "/pet/4.jpg", "/pet/5.jpg", "/pet/6.jpg", "/pet/7.jpg", "/pet/8.jpg", "/pet/9.jpg"
];

// 预设的宠物数据库
const petData = {
  dog: {
    name: "Dog",
    lifespan: "10-15 years",
    ageCalculation: (age: number, breed: string) => {
      // 不同品种的狗有不同的年龄换算公式
      const smallBreeds = ["chihuahua", "pomeranian", "yorkshire terrier", "maltese", "shih tzu", "poodle (toy)", "dachshund"];
      const largeBreeds = ["german shepherd", "labrador retriever", "golden retriever", "rottweiler", "doberman", "great dane"];
      
      // 小型犬年龄换算
      if (smallBreeds.some(b => breed.toLowerCase().includes(b))) {
        if (age <= 1) return age * 15;
        if (age <= 2) return 15 + (age - 1) * 9;
        return 24 + (age - 2) * 4;
      }
      
      // 大型犬年龄换算
      if (largeBreeds.some(b => breed.toLowerCase().includes(b))) {
        if (age <= 1) return age * 15;
        if (age <= 5) return 15 + (age - 1) * 7;
        return 43 + (age - 5) * 6;
      }
      
      // 中型犬或未指定品种的通用公式
      if (age <= 1) return age * 15;
      if (age <= 2) return 15 + (age - 1) * 9;
      return 24 + (age - 2) * 5;
    }
  },
  cat: {
    name: "Cat",
    lifespan: "12-18 years",
    ageCalculation: (age: number, breed: string) => {
      // 猫的年龄计算与品种关系不大
      if (age <= 1) return age * 15;
      if (age <= 2) return 15 + (age - 1) * 9;
      return 24 + (age - 2) * 4;
    }
  },
  rabbit: {
    name: "Rabbit",
    lifespan: "8-12 years",
    ageCalculation: (age: number, breed: string) => age * 8
  },
  hamster: {
    name: "Hamster",
    lifespan: "2-3 years",
    ageCalculation: (age: number, breed: string) => age * 25
  },
  bird: {
    name: "Bird",
    lifespan: "5-15 years (varies by species)",
    ageCalculation: (age: number, breed: string) => age * 7
  }
};

// 常见狗品种列表
const dogBreeds = [
  "Labrador Retriever", "German Shepherd", "Golden Retriever", "French Bulldog",
  "Bulldog", "Poodle", "Beagle", "Rottweiler", "Yorkshire Terrier", "Boxer",
  "Dachshund", "Shih Tzu", "Siberian Husky", "Great Dane", "Chihuahua",
  "Pomeranian", "Boston Terrier", "Doberman Pinscher", "Australian Shepherd", "Corgi"
];

// 常见猫品种列表
const catBreeds = [
  "Domestic Shorthair", "Maine Coon", "Persian", "Siamese", "Ragdoll",
  "Bengal", "Sphynx", "British Shorthair", "Abyssinian", "Scottish Fold",
  "Norwegian Forest Cat", "Russian Blue", "Devon Rex", "Burmese", "Himalayan"
];

export default function PetAgeCalculator() {
  const [petType, setPetType] = useState<keyof typeof petData>("dog");
  const [petAge, setPetAge] = useState<number | "">(1);
  const [petBreed, setPetBreed] = useState<string>("");
  const [customBreed, setCustomBreed] = useState<string>("");
  const [humanAge, setHumanAge] = useState<number | null>(null);
  const [healthGuide, setHealthGuide] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [heroImgIdx, setHeroImgIdx] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [petImage, setPetImage] = useState<File | null>(null);
  const [petImagePreview, setPetImagePreview] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({});

  // Hero区图片轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImgIdx((idx) => (idx + 1) % petImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // 处理宠物类型变更
  const handlePetTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as keyof typeof petData;
    setPetType(value);
    setPetBreed("");
    setCustomBreed("");
    setHumanAge(null);
    setHealthGuide("");
    setShowResults(false);
  };

  // 处理宠物年龄变更
  const handlePetAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setPetAge("");
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0) {
      setPetAge(numValue);
    }
  };

  // 处理品种变更
  const handleBreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setPetBreed(value);
    setCustomBreed("");
  };

  // 处理自定义品种变更
  const handleCustomBreedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomBreed(e.target.value);
  };

  // 获取最终品种值
  const getFinalBreed = () => {
    if (petBreed && petBreed !== "other") return petBreed;
    return customBreed || "Unknown";
  };

  // 处理图片上传
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setPetImage(file);
    const previewUrl = URL.createObjectURL(file);
    setPetImagePreview(previewUrl);
  };

  // 计算人类年龄
  const calculateHumanAge = () => {
    if (petAge === "" || !petData[petType]) return null;
    
    const ageCalculation = petData[petType].ageCalculation;
    if (petType === "dog") {
      return ageCalculation(petAge, getFinalBreed());
    }
    return ageCalculation(petAge, getFinalBreed());
  };

  // 生成健康指南
  const generateHealthGuide = async () => {
    if (!petType || petAge === "") return;
    
    setLoading(true);
    setError(null);
    
    try {
      // 构建更明确的品种信息
      const breedInfo = getFinalBreed();
      const petTypeInfo = petData[petType].name;
      const fullBreedInfo = `${breedInfo} ${petTypeInfo}`;
      
      console.log("Requesting health guide for:", fullBreedInfo);
      
      const response = await fetch("/api/health-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          breed: fullBreedInfo,
          age: petAge
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Health guide API error:", errorData);
        throw new Error(errorData.error || `Failed to generate health guide (${response.status})`);
      }
      
      const data = await response.json();
      
      if (!data.guide) {
        throw new Error("Empty health guide received");
      }
      
      setHealthGuide(data.guide);
      console.log("Health guide generated successfully");
    } catch (err) {
      console.error("Health guide generation error:", err);
      setError("Failed to generate health guide. Please try again.");
      // 设置一个默认的健康指南，以防API调用失败
      setHealthGuide(`# Health Tips for ${getFinalBreed()} ${petData[petType].name}

## General Care
- Provide regular veterinary check-ups
- Ensure proper nutrition appropriate for ${petData[petType].name}s
- Maintain regular exercise routine
- Keep vaccinations up to date

## Age-Specific Recommendations
For a ${petAge}-year-old ${petData[petType].name} (human age equivalent: ${calculateHumanAge()} years):
- Monitor for age-related health changes
- Adjust diet as needed for their life stage
- Provide appropriate mental stimulation
- Ensure regular dental care

Please consult with your veterinarian for personalized advice.`);
    } finally {
      setLoading(false);
    }
  };

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (petAge === "" || (petType === "dog" && !getFinalBreed())) {
      setError("Please fill in all required fields");
      return;
    }
    
    setError(null);
    setHumanAge(calculateHumanAge());
    setShowResults(true);
    
    // 生成健康指南
    await generateHealthGuide();
  };

  // 添加切换展开/折叠的函数
  const toggleSection = (index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <Head>
        <title>Pet Age Calculator: Dog Years to Human Years, Cat Years to Human Years, Lifespan & FAQ</title>
        <meta
          name="description"
          content="Easily convert dog years to human years and cat years to human years with our interactive pet age calculator. Find out your pet's age in human years, see average dog and cat lifespan, and get answers to common questions like 'how long do dogs live' and 'what is the cat age chart'."
        />
      </Head>
      <Layout title="Pet Age Calculator" showBackButton={false}>
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-12 md:py-20">
          <div className="flex-1 z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4 drop-shadow-sm animate-fade-in">
              Dog & Cat Years to Human Years
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 mb-6 animate-fade-in delay-100">
              Instantly convert <strong>dog years to human years</strong> and <strong>cat years to human years</strong>. Discover your pet's age in human years, check average dog and cat lifespan, and get expert health tips.
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

        {/* Main Content */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
              Dog Age Calculator & Cat Age Chart
            </h2>
            <p className="text-gray-700 mb-4 text-center">
              Use this free tool to convert <strong>dog years</strong> and <strong>cat years</strong> to human years. Understand <strong>canine years</strong>, <strong>average cat lifespan</strong>, and more. Perfect for pet owners who wonder, "How old is my dog in human years?" or "What is my cat's age in human years?"
            </p>
          
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Pet Type</label>
                  <select
                    value={petType}
                    onChange={handlePetTypeChange}
                    className="w-full border-2 border-pink-200 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-400"
                    required
                  >
                    {Object.keys(petData).map((type) => (
                      <option key={type} value={type}>{petData[type as keyof typeof petData].name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Pet's Age (Years)</label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={petAge}
                    onChange={handlePetAgeChange}
                    className="w-full border-2 border-pink-200 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-400"
                    placeholder="Enter age"
                    required
                  />
                </div>
                
                {petType === "dog" && (
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">Dog Breed</label>
                    <select
                      value={petBreed}
                      onChange={handleBreedChange}
                      className="w-full border-2 border-pink-200 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-400"
                      required
                    >
                      <option value="">Select a breed</option>
                      {dogBreeds.map((breed) => (
                        <option key={breed} value={breed}>{breed}</option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                    
                    {petBreed === "other" && (
                      <input
                        type="text"
                        value={customBreed}
                        onChange={handleCustomBreedChange}
                        className="w-full mt-2 border-2 border-pink-200 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-400"
                        placeholder="Enter breed name"
                        required
                      />
                    )}
                  </div>
                )}
                
                {petType === "cat" && (
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">Cat Breed (Optional)</label>
                    <select
                      value={petBreed}
                      onChange={handleBreedChange}
                      className="w-full border-2 border-pink-200 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-400"
                    >
                      <option value="">Select a breed</option>
                      {catBreeds.map((breed) => (
                        <option key={breed} value={breed}>{breed}</option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                    
                    {petBreed === "other" && (
                      <input
                        type="text"
                        value={customBreed}
                        onChange={handleCustomBreedChange}
                        className="w-full mt-2 border-2 border-pink-200 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-400"
                        placeholder="Enter breed name"
                      />
                    )}
                  </div>
                )}
                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">Upload Pet Photo (Optional)</label>
                  <div className="border-2 border-dashed border-pink-200 rounded-lg p-4 text-center">
                    {petImagePreview ? (
                      <div className="relative w-32 h-32 mx-auto">
                        <Image
                          src={petImagePreview}
                          alt="Pet preview"
                          fill
                          className="object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setPetImage(null);
                            setPetImagePreview(null);
                          }}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <>
                        <label className="cursor-pointer bg-pink-100 text-pink-700 px-4 py-2 rounded-lg hover:bg-pink-200 inline-block">
                          Choose File
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                        </label>
                        <p className="text-gray-500 text-sm mt-2">PNG, JPG, GIF up to 5MB</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-center">
                  {error}
                </div>
              )}
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-pink-600 active:scale-95 transition-all text-lg"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Calculating...
                    </span>
                  ) : "Calculate Age"}
                </button>
              </div>
            </form>
          </div>
          
          {/* Results Section */}
          {showResults && humanAge !== null && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-fade-in">
              <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Analysis Results</h2>
              
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left Column - Pet Info */}
                <div className="flex-1">
                  <div className="bg-blue-50 rounded-xl p-6 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      {petImagePreview ? (
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                          <Image
                            src={petImagePreview}
                            alt="Pet"
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                          {petType === "dog" ? "🐕" : petType === "cat" ? "🐈" : "🐾"}
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-blue-700">Your {petData[petType].name}</h3>
                        <p className="text-gray-600">{getFinalBreed()}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-500">Pet Age</p>
                        <p className="text-2xl font-bold text-blue-600">{petAge} years</p>
                      </div>
                      
                      <div>
                        <p className="text-gray-500">Average Lifespan</p>
                        <p className="text-xl font-semibold">{petData[petType].lifespan}</p>
                      </div>
                      
                      <div className="bg-pink-100 rounded-lg p-4">
                        <p className="text-gray-500">Human Age Equivalent</p>
                        <p className="text-3xl font-bold text-pink-600">{humanAge} years</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Health Guide */}
                <div className="flex-1">
                  <div className="bg-green-50 rounded-xl p-6 h-full">
                    <h3 className="text-xl font-bold text-green-700 mb-4">Health Insights</h3>
                    
                    {loading ? (
                      <div className="flex items-center justify-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                      </div>
                    ) : healthGuide ? (
                      <div className="overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                        {healthGuide.split('##').map((section, index) => {
                          if (index === 0 || !section.trim()) return null; // 跳过空分段
                          
                          const lines = section.trim().split('\n');
                          const title = lines[0].trim();
                          const content = lines.slice(1).join('\n').trim();
                          const isExpanded = expandedSections[index] !== false; // 默认展开
                          
                          return (
                            <div key={index} className="mb-3 border-b border-green-100 pb-2 last:border-0">
                              <button 
                                onClick={() => toggleSection(index)}
                                className="w-full flex justify-between items-center font-semibold text-blue-700 mb-1 hover:text-blue-500 transition-colors focus:outline-none text-left py-1"
                              >
                                <span>{title}</span>
                                <span className="text-xs bg-blue-100 rounded-full h-5 w-5 flex items-center justify-center ml-2">
                                  {isExpanded ? '▲' : '▼'}
                                </span>
                              </button>
                              
                              {isExpanded && (
                                <div className="text-gray-700 text-sm pl-1 animate-fadeIn">
                                  {content.split('\n').map((paragraph, i) => (
                                    paragraph.trim() ? (
                                      <p key={i} className="mb-2 leading-relaxed">{paragraph.trim()}</p>
                                    ) : null
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p>Unable to load health guide.</p>
                        <button 
                          onClick={generateHealthGuide}
                          className="mt-2 text-blue-500 hover:text-blue-700 underline"
                        >
                          Try again
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Information Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">How Pet Age Calculation Works</h2>
            
            <div className="space-y-6">
              <p className="text-gray-700">
                Converting pet years to human years is more complex than the old "multiply by 7" rule. Different animals age at different rates, and even within species, factors like breed and size affect aging.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-700 mb-2">Dogs</h3>
                <p className="text-gray-700">
                  Small dogs tend to live longer than large dogs, so their aging is calculated differently. A small dog's first year equals about 15 human years, while the second year adds about 9 more. After that, each dog year equals about 4-5 human years. For large breeds, aging accelerates after middle age.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-700 mb-2">Cats</h3>
                <p className="text-gray-700">
                  Cats age rapidly in their first two years (about 15 human years for the first year, 9 for the second), then slow down to about 4 human years for each cat year thereafter.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-700 mb-2">Other Pets</h3>
                <p className="text-gray-700">
                  Small mammals like hamsters and rabbits have different aging patterns. Our calculator provides approximations based on scientific research for various pet types.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ 区块 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
              Pet Age Calculator FAQ
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">How do you convert dog years to human years?</h3>
                <p className="text-gray-700">
                  The old rule of multiplying dog years by 7 is outdated. Our dog age calculator uses modern formulas that consider breed and size, giving you a more accurate conversion from dog years to human years.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">How long do dogs live?</h3>
                <p className="text-gray-700">
                  The average dog lifespan is 10-15 years, but it varies by breed and size. Small dogs often live longer than large breeds.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">How do you convert cat years to human years?</h3>
                <p className="text-gray-700">
                  Cats age rapidly in their first two years, then more slowly. Our calculator helps you find your cat's age in human years using the latest cat age chart.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">What is the average cat lifespan?</h3>
                <p className="text-gray-700">
                  The average cat lifespan is 12-18 years, but many cats live into their twenties with proper care.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">What are canine years?</h3>
                <p className="text-gray-700">
                  Canine years refer to a dog's age measured in human-equivalent years. Our tool helps you easily convert dog to human years.
                </p>
              </div>
            </div>
          </div>

          {/* 工具说明区块 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
              How Our Dog & Cat Age Calculator Works
            </h2>
            <p className="text-gray-700 mb-2">
              Our pet age calculator uses up-to-date formulas for <strong>dog years to human years</strong> and <strong>cat years to human years</strong>. It considers breed, size, and species to give you the most accurate results.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Enter your pet's age and select the species (dog, cat, etc.)</li>
              <li>For dogs, select the breed for a more precise calculation</li>
              <li>See your pet's age in human years, average lifespan, and health tips</li>
            </ul>
          </div>
        </section>
      </Layout>
    </>
  );
} 