'use client';

import React, { useState, useRef } from 'react';
import { Upload, Sparkles, Loader2, ChevronDown, Dog, Cat, Heart, Star, Calendar, TrendingUp, Info, Download, Share2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';

// Metadata is exported from metadata.ts for SEO optimization

// Type definitions
interface NamingRequirements {
  startsWith?: string;
  gender?: 'male' | 'female' | 'neutral';
  style?: string;
  length?: 'short' | 'medium' | 'long';
  customRequirements?: string;
}

interface SuggestedName {
  name: string;
  meaning: string;
  reason: string;
}

interface Personality {
  traits: string[];
  description: string;
}

interface Astrology {
  zodiacSign: string;
  element: string;
  luckyColor: string;
  compatibility: string[];
}

interface AgeEstimate {
  estimatedAge: string;
  lifestage: string;
  confidence: number;
}

interface PetProfile {
  breed: string;
  suggestedNames: SuggestedName[];
  personality: Personality;
  astrology: Astrology;
  ageEstimate: AgeEstimate;
  healthInsights?: string;
}

interface ApiResponse {
  petProfile: PetProfile;
  uploadedImage: string;
  isFallback?: boolean;
  error?: string;
}

export default function PetNamingPage() {
  // State management
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [requirements, setRequirements] = useState<NamingRequirements>({
    gender: 'neutral',
    length: 'medium'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string>('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle file selection
  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('Image size must be less than 5MB');
      return;
    }

    setSelectedImage(file);
    setError('');
    setResult(null);
    
    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  // Handle drag and drop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Handle file input change
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  // Submit form
  const handleSubmit = async () => {
    if (!selectedImage) {
      setError('Please select an image first');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('image', selectedImage);
      
      // Add requirements if any are specified
      const hasRequirements = 
        requirements.startsWith || 
        requirements.gender !== 'neutral' ||
        requirements.style ||
        requirements.length !== 'medium' ||
        requirements.customRequirements;
      
      if (hasRequirements) {
        formData.append('requirements', JSON.stringify(requirements));
      }

      const response = await fetch('/api/pet-naming', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate pet profile');
      }

      const data: ApiResponse = await response.json();
      setResult(data);
      
      // Scroll to results
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);

    } catch (err) {
      console.error('Error generating pet profile:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate pet profile');
    } finally {
      setIsLoading(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setSelectedImage(null);
    setPreviewUrl('');
    setResult(null);
    setError('');
    setRequirements({ gender: 'neutral', length: 'medium' });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Download card as image
  const handleDownload = async () => {
    if (!cardRef.current || !result) {
      alert('❌ No profile to download. Please generate a profile first.');
      return;
    }

    setIsDownloading(true);
    
    try {
      console.log('Starting download with html-to-image...');
      
      // Dynamic import html-to-image (better support for modern CSS)
      const { toPng } = await import('html-to-image');
      
      console.log('html-to-image loaded, capturing element...');
      
      // Capture the card element as PNG
      const dataUrl = await toPng(cardRef.current, {
        quality: 1.0,
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: '#ffffff'
      });

      console.log('Image created, initiating download...');

      // Create download link
      const link = document.createElement('a');
      const fileName = `${result.petProfile.suggestedNames[0]?.name || 'pet'}-profile.png`;
      link.href = dataUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('Download completed successfully');
      setIsDownloading(false);
      
      // Success message
      alert(`✅ Profile downloaded successfully!\n\nFile: ${fileName}`);
    } catch (error) {
      console.error('Download error:', error);
      setIsDownloading(false);
      
      // More detailed error message
      const errorMsg = error instanceof Error ? error.message : 'Unknown error';
      alert(`❌ Failed to download image\n\nError: ${errorMsg}\n\nTip: Try refreshing the page and generating the profile again.`);
    }
  };

  // Share card - SIMPLIFIED VERSION
  const handleShare = () => {
    // Step 1: Test if button is clicked
    alert('🎯 Share button clicked! Function is working.');
    console.log('=== Share button clicked ===');
    
    if (!result) {
      console.log('❌ No result available');
      alert('❌ No profile to share. Please generate a profile first.');
      return;
    }

    const petName = result.petProfile.suggestedNames[0]?.name || 'My Pet';
    const shareText = `🐾 Meet ${petName}! - ${result.petProfile.breed} with an amazing personality! Generated by PetShard AI`;
    const shareUrl = window.location.href;
    const fullText = `${shareText}\n\n🔗 ${shareUrl}`;

    console.log('Share data ready:', { petName, shareUrl });

    // Simple textarea method (most reliable)
    try {
      console.log('Creating textarea for copy...');
      
      const textarea = document.createElement('textarea');
      textarea.value = fullText;
      textarea.style.position = 'fixed';
      textarea.style.top = '0';
      textarea.style.left = '0';
      textarea.style.width = '2em';
      textarea.style.height = '2em';
      textarea.style.padding = '0';
      textarea.style.border = 'none';
      textarea.style.outline = 'none';
      textarea.style.boxShadow = 'none';
      textarea.style.background = 'transparent';
      
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      
      console.log('Copy result:', successful);
      
      if (successful) {
        alert('✅ Link copied to clipboard!\n\nYou can now paste it anywhere to share your pet profile.');
      } else {
        // Fallback: show text in prompt
        const copied = prompt('📋 Please copy this text (Ctrl+C or Cmd+C):', fullText);
        if (copied !== null) {
          alert('👍 Great! Now you can paste it anywhere.');
        }
      }
    } catch (error) {
      console.error('Copy failed:', error);
      // Final fallback
      prompt('📋 Please copy this text manually:', fullText);
    }
  };

  return (
    <Layout title="Pet Name Generator" showBackButton={false}>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 mb-6 shadow-lg">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Pet Name Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload your pet&apos;s photo and let AI create the perfect name with a complete personality profile
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
          {/* Image Upload Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Upload className="w-6 h-6 mr-2 text-orange-500" />
              Upload Pet Photo
            </h2>
            
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => fileInputRef.current?.click()}
              className={`
                relative border-3 border-dashed rounded-2xl p-12 text-center cursor-pointer
                transition-all duration-300 hover:border-orange-400 hover:bg-orange-50
                ${selectedImage ? 'border-orange-400 bg-orange-50' : 'border-gray-300 bg-gray-50'}
              `}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
                className="hidden"
              />
              
              {previewUrl ? (
                <div className="space-y-4">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="max-h-64 mx-auto rounded-xl shadow-lg object-contain"
                  />
                  <p className="text-sm text-gray-600">
                    {selectedImage?.name} ({(selectedImage!.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReset();
                    }}
                    className="text-sm text-orange-600 hover:text-orange-700 underline"
                  >
                    Change Image
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                      <Upload className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-gray-500">
                      PNG, JPG, JPEG up to 5MB
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Advanced Options */}
          <div className="mb-8">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center text-lg font-semibold text-gray-700 hover:text-orange-600 transition-colors mb-4"
            >
              <ChevronDown className={`w-5 h-5 mr-2 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
              Naming Preferences (Optional)
            </button>

            {showAdvanced && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-xl">
                {/* Starting Letter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Starting Letter
                  </label>
                  <input
                    type="text"
                    maxLength={1}
                    value={requirements.startsWith || ''}
                    onChange={(e) => setRequirements({
                      ...requirements,
                      startsWith: e.target.value.toUpperCase()
                    })}
                    placeholder="e.g., S"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent uppercase"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender Preference
                  </label>
                  <div className="flex gap-3">
                    {(['male', 'female', 'neutral'] as const).map((gender) => (
                      <button
                        key={gender}
                        onClick={() => setRequirements({ ...requirements, gender })}
                        className={`
                          flex-1 px-4 py-2 rounded-lg font-medium transition-all
                          ${requirements.gender === gender
                            ? 'bg-orange-500 text-white shadow-md'
                            : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-400'
                          }
                        `}
                      >
                        {gender.charAt(0).toUpperCase() + gender.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Style */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Naming Style
                  </label>
                  <select
                    value={requirements.style || ''}
                    onChange={(e) => setRequirements({ ...requirements, style: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Any Style</option>
                    <option value="cute">Cute & Adorable</option>
                    <option value="elegant">Elegant & Noble</option>
                    <option value="powerful">Powerful & Strong</option>
                    <option value="literary">Literary & Artistic</option>
                    <option value="funny">Funny & Playful</option>
                  </select>
                </div>

                {/* Length */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name Length
                  </label>
                  <div className="flex gap-3">
                    {(['short', 'medium', 'long'] as const).map((length) => (
                      <button
                        key={length}
                        onClick={() => setRequirements({ ...requirements, length })}
                        className={`
                          flex-1 px-4 py-2 rounded-lg font-medium transition-all
                          ${requirements.length === length
                            ? 'bg-orange-500 text-white shadow-md'
                            : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-400'
                          }
                        `}
                      >
                        {length.charAt(0).toUpperCase() + length.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Requirements */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    value={requirements.customRequirements || ''}
                    onChange={(e) => setRequirements({
                      ...requirements,
                      customRequirements: e.target.value
                    })}
                    placeholder="e.g., Name should be related to nature or mythology..."
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
              <p className="flex items-center">
                <Info className="w-5 h-5 mr-2" />
                {error}
              </p>
            </div>
          )}

          {/* Generate Button */}
          <button
            onClick={handleSubmit}
            disabled={!selectedImage || isLoading}
            className={`
              w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg
              ${!selectedImage || isLoading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 hover:shadow-xl'
              }
            `}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                Generating Pet Profile...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <Sparkles className="w-6 h-6 mr-2" />
                Generate Pet Profile
              </span>
            )}
          </button>
        </div>

        {/* Results Section */}
        {result && (
          <div ref={resultRef} className="bg-white rounded-3xl shadow-2xl p-8 animate-fadeIn">
            {result.isFallback && result.error && (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-800">
                <p className="flex items-center">
                  <Info className="w-5 h-5 mr-2" />
                  {result.error}
                </p>
              </div>
            )}

            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800 flex items-center">
                <Heart className="w-8 h-8 mr-3 text-pink-500" />
                Pet Profile Card
              </h2>
              
              <div className="flex gap-3">
                <button 
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className={`p-2 rounded-lg transition-colors ${
                    isDownloading 
                      ? 'bg-gray-200 cursor-not-allowed' 
                      : 'bg-gray-100 hover:bg-gray-200 hover:shadow-md'
                  }`}
                  title={isDownloading ? 'Downloading...' : 'Download as image'}
                >
                  {isDownloading ? (
                    <Loader2 className="w-5 h-5 text-gray-600 animate-spin" />
                  ) : (
                    <Download className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                <button 
                  onClick={handleShare}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors hover:shadow-md"
                  title="Share"
                >
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Profile Card - Resume Style */}
            <div ref={cardRef} className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden">
              {/* Header Section with Image */}
              <div className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Profile Image */}
                  <div className="w-48 h-48 rounded-full overflow-hidden border-6 border-white shadow-2xl flex-shrink-0">
                    <img
                      src={result.uploadedImage || previewUrl}
                      alt="Pet"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Basic Info */}
                  <div className="text-center md:text-left flex-1">
                    <h2 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">
                      {result.petProfile.suggestedNames[0]?.name || 'Your Pet'}
                    </h2>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur rounded-full text-orange-600 font-bold flex items-center gap-2">
                        <Dog className="w-5 h-5" />
                        {result.petProfile.breed}
                      </span>
                      <span className="px-4 py-2 bg-white/90 backdrop-blur rounded-full text-purple-600 font-bold flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        {result.petProfile.ageEstimate.estimatedAge}
                      </span>
                      <span className="px-4 py-2 bg-white/90 backdrop-blur rounded-full text-pink-600 font-bold flex items-center gap-2">
                        <Star className="w-5 h-5" />
                        {result.petProfile.astrology.zodiacSign}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="p-8 space-y-6">
                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Suggested Names */}
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center border-b-2 border-purple-200 pb-2">
                        <Star className="w-6 h-6 mr-2 text-purple-600" />
                        Name Options
                      </h3>
                      <div className="space-y-3">
                        {result.petProfile.suggestedNames.map((name, index) => (
                          <div key={index} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                {index + 1}
                              </span>
                              <h4 className="text-xl font-bold text-purple-600">{name.name}</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-1">
                              <span className="font-semibold">💫</span> {name.meaning}
                            </p>
                            <p className="text-xs text-gray-500 italic">
                              {name.reason}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Astrology */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center border-b-2 border-amber-200 pb-2">
                        <Star className="w-6 h-6 mr-2 text-amber-600" />
                        Astrology Profile
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Zodiac Sign</p>
                          <p className="text-lg font-bold text-amber-600">
                            {result.petProfile.astrology.zodiacSign}
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Element</p>
                          <p className="text-lg font-bold text-amber-600">
                            {result.petProfile.astrology.element}
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Lucky Color</p>
                          <p className="text-lg font-bold text-amber-600">
                            {result.petProfile.astrology.luckyColor}
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-xs text-gray-600 mb-1">Confidence</p>
                          <div className="flex items-center">
                            <TrendingUp className="w-4 h-4 mr-1 text-green-600" />
                            <span className="text-lg font-bold text-green-600">
                              {Math.round(result.petProfile.ageEstimate.confidence * 100)}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-2">Best Match With</p>
                        <div className="flex flex-wrap gap-2">
                          {result.petProfile.astrology.compatibility.map((comp, i) => (
                            <span key={i} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">

                    {/* Personality */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center border-b-2 border-blue-200 pb-2">
                        <Heart className="w-6 h-6 mr-2 text-blue-600" />
                        Personality Profile
                      </h3>
                      <div className="bg-white rounded-lg p-4 mb-4">
                        <div className="flex flex-wrap gap-2">
                          {result.petProfile.personality.traits.map((trait, index) => (
                            <span
                              key={index}
                              className="px-3 py-2 bg-blue-100 text-blue-700 rounded-full font-medium text-sm"
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm bg-white rounded-lg p-4">
                        {result.petProfile.personality.description}
                      </p>
                    </div>

                    {/* Age & Lifestage */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center border-b-2 border-green-200 pb-2">
                        <Calendar className="w-6 h-6 mr-2 text-green-600" />
                        Age & Lifestage
                      </h3>
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-center mb-4">
                          <p className="text-4xl font-bold text-green-600 mb-2">
                            {result.petProfile.ageEstimate.estimatedAge}
                          </p>
                          <p className="text-lg text-gray-700 font-semibold">
                            {result.petProfile.ageEstimate.lifestage}
                          </p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-green-400 to-emerald-500 h-full rounded-full transition-all duration-500"
                            style={{ width: `${result.petProfile.ageEstimate.confidence * 100}%` }}
                          >
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 text-center mt-2">
                          {Math.round(result.petProfile.ageEstimate.confidence * 100)}% Confidence
                        </p>
                      </div>
                    </div>

                    {/* Health Insights */}
                    {result.petProfile.healthInsights && (
                      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center border-b-2 border-rose-200 pb-2">
                          <Info className="w-6 h-6 mr-2 text-rose-600" />
                          Health Care Tips
                        </h3>
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-gray-700 leading-relaxed text-sm">
                            {result.petProfile.healthInsights}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Generate Another Button */}
            <div className="mt-8 text-center">
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
              >
                Generate Another Profile
              </button>
            </div>
          </div>
        )}
        
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }
        `}</style>
      </div>
      </div>
    </Layout>
  );
}
