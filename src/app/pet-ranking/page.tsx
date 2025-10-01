"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";

// API keys for The Cat API and The Dog API
const CAT_API_KEY = "live_WTGogyQcQMfrIZSTGjDV9LAHUC5fhdwyhw6rsJ465cMDkRG80gdaSMSvzIP6sJKL";
const DOG_API_KEY = "live_npXo8WrsYZFkByFIUDPrbGhDNjC0ZqIwnRPI5Hx9K2C4voMiK0ktERf5MbpRm8TY";

// Pet type definition
interface Pet {
  id: string;
  url: string;
  type: 'cat' | 'dog';
  votes: number;
}

// Virtual pet data for initial leaderboard
const virtualPets: Pet[] = [
  {
    id: 'virtual-1',
    url: 'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg',
    type: 'cat',
    votes: 124
  },
  {
    id: 'virtual-2',
    url: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
    type: 'dog',
    votes: 118
  },
  {
    id: 'virtual-3',
    url: 'https://cdn2.thecatapi.com/images/MTk4MTgxOQ.jpg',
    type: 'cat',
    votes: 105
  },
  {
    id: 'virtual-4',
    url: 'https://cdn2.thedogapi.com/images/B1uW7l5VX.jpg',
    type: 'dog',
    votes: 92
  },
  {
    id: 'virtual-5',
    url: 'https://cdn2.thecatapi.com/images/a6m.jpg',
    type: 'cat',
    votes: 87
  },
  {
    id: 'virtual-6',
    url: 'https://cdn2.thedogapi.com/images/S1nhWx94Q.jpg',
    type: 'dog',
    votes: 81
  },
  {
    id: 'virtual-7',
    url: 'https://cdn2.thecatapi.com/images/MTY0MzU5Nw.jpg',
    type: 'cat',
    votes: 76
  },
  {
    id: 'virtual-8',
    url: 'https://cdn2.thedogapi.com/images/BkE6Wg5E7.jpg',
    type: 'dog',
    votes: 68
  },
  {
    id: 'virtual-9',
    url: 'https://cdn2.thecatapi.com/images/a9n.jpg',
    type: 'cat',
    votes: 62
  },
  {
    id: 'virtual-10',
    url: 'https://cdn2.thedogapi.com/images/HkNS3gqEm.jpg',
    type: 'dog',
    votes: 55
  }
];

function PetRankingContent() {
  // State for current pets to vote on
  const [petOptions, setPetOptions] = useState<[Pet | null, Pet | null]>([null, null]);
  const [loading, setLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState<Pet[]>([]);
  const [totalVotes, setTotalVotes] = useState(0);
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  // Load leaderboard from localStorage
  useEffect(() => {
    const storedLeaderboard = localStorage.getItem('petLeaderboard');
    const storedVotes = localStorage.getItem('totalPetVotes');
    
    if (storedLeaderboard) {
      const parsedLeaderboard = JSON.parse(storedLeaderboard);
      setLeaderboard(parsedLeaderboard);
    } else {
      // Initialize with virtual pets if no leaderboard exists
      setLeaderboard(virtualPets);
      // Set initial total votes as the sum of virtual pet votes
      const initialVotes = virtualPets.reduce((sum, pet) => sum + pet.votes, 0);
      setTotalVotes(initialVotes);
    }
    
    if (storedVotes) {
      setTotalVotes(parseInt(storedVotes, 10));
    }
    
    fetchNewPets();
  }, []);

  // Save leaderboard to localStorage whenever it changes
  useEffect(() => {
    if (leaderboard.length > 0) {
      localStorage.setItem('petLeaderboard', JSON.stringify(leaderboard));
      localStorage.setItem('totalPetVotes', totalVotes.toString());
    }
  }, [leaderboard, totalVotes]);

  // Handle image loading error
  const handleImageError = (petId: string) => {
    setImageErrors(prev => ({...prev, [petId]: true}));
    // If an image fails to load, fetch a new pair
    if (Object.values(imageErrors).filter(Boolean).length > 0) {
      fetchNewPets();
    }
  };

  // Fetch random pets from APIs
  const fetchNewPets = async () => {
    setLoading(true);
    setImageErrors({});
    try {
      // Randomly decide if we're showing 2 cats, 2 dogs, or 1 of each
      const scenario = Math.floor(Math.random() * 3);
      
      let pet1, pet2;
      
      if (scenario === 0) {
        // 2 cats
        pet1 = await fetchRandomCat();
        pet2 = await fetchRandomCat();
      } else if (scenario === 1) {
        // 2 dogs
        pet1 = await fetchRandomDog();
        pet2 = await fetchRandomDog();
      } else {
        // 1 cat, 1 dog
        pet1 = await fetchRandomCat();
        pet2 = await fetchRandomDog();
      }
      
      // Make sure we don't have the same pet twice
      if (pet1.id === pet2.id) {
        pet2 = pet1.type === 'cat' ? await fetchRandomCat() : await fetchRandomDog();
      }
      
      setPetOptions([pet1, pet2]);
    } catch (error) {
      console.error("Error fetching pets:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a random cat from The Cat API
  const fetchRandomCat = async (): Promise<Pet> => {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search",
      { headers: { "x-api-key": CAT_API_KEY } }
    );
    const data = await response.json();
    return {
      id: data[0].id,
      url: data[0].url,
      type: 'cat',
      votes: 0
    };
  };

  // Fetch a random dog from The Dog API
  const fetchRandomDog = async (): Promise<Pet> => {
    const response = await fetch(
      "https://api.thedogapi.com/v1/images/search",
      { headers: { "x-api-key": DOG_API_KEY } }
    );
    const data = await response.json();
    return {
      id: data[0].id,
      url: data[0].url,
      type: 'dog',
      votes: 0
    };
  };

  // Handle voting for a pet
  const handleVote = (selectedPet: Pet) => {
    // Update the leaderboard
    const existingPet = leaderboard.find(pet => pet.id === selectedPet.id);
    
    if (existingPet) {
      // Update existing pet's votes
      const updatedLeaderboard = leaderboard.map(pet => 
        pet.id === selectedPet.id ? { ...pet, votes: pet.votes + 1 } : pet
      );
      setLeaderboard(updatedLeaderboard.sort((a, b) => b.votes - a.votes));
    } else {
      // Add new pet to leaderboard
      const newPet = { ...selectedPet, votes: 1 };
      const updatedLeaderboard = [...leaderboard, newPet].sort((a, b) => b.votes - a.votes);
      setLeaderboard(updatedLeaderboard);
    }
    
    // Increment total votes
    setTotalVotes(prev => prev + 1);
    
    // Fetch new pets for next vote
    fetchNewPets();
  };

  return (
    <Layout title="Pet Popularity Contest" showBackButton={true}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">Pet Popularity Contest</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Vote for the cutest pet! Choose between two adorable pets and help build our community-driven pet popularity ranking.
          </p>
          <p className="text-gray-500 mt-2">Total votes: {totalVotes}</p>
        </div>

        {/* Voting Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Which pet is cuter?</h2>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-pink-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {petOptions[0] && !imageErrors[petOptions[0].id] && (
                <button
                  onClick={() => handleVote(petOptions[0]!)}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
                >
                  <div className="relative h-64 md:h-80 w-full overflow-hidden">
                    <Image 
                      src={petOptions[0].url} 
                      alt={`${petOptions[0].type} option 1`} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={() => handleImageError(petOptions[0]!.id)}
                      unoptimized
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-lg font-medium capitalize">{petOptions[0].type}</p>
                    <p className="text-pink-600 font-bold mt-2">Vote for me!</p>
                  </div>
                </button>
              )}
              
              {petOptions[1] && !imageErrors[petOptions[1].id] && (
                <button
                  onClick={() => handleVote(petOptions[1]!)}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
                >
                  <div className="relative h-64 md:h-80 w-full overflow-hidden">
                    <Image 
                      src={petOptions[1].url} 
                      alt={`${petOptions[1].type} option 2`} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={() => handleImageError(petOptions[1]!.id)}
                      unoptimized
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-lg font-medium capitalize">{petOptions[1].type}</p>
                    <p className="text-pink-600 font-bold mt-2">Vote for me!</p>
                  </div>
                </button>
              )}
            </div>
          )}
          
          <div className="text-center mt-8">
            <button
              onClick={fetchNewPets}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-full font-medium transition-colors"
            >
              Skip this pair
            </button>
          </div>
        </div>

        {/* Leaderboard Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Pet Leaderboard</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaderboard.slice(0, 10).map((pet, index) => (
              <div 
                key={pet.id}
                className="bg-white rounded-xl shadow-md overflow-hidden relative"
              >
                <div className="absolute top-2 left-2 z-10 bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="relative h-48 w-full">
                  <Image 
                    src={pet.url} 
                    alt={`Ranked #${index + 1} ${pet.type}`} 
                    fill 
                    className="object-cover"
                    onError={() => {}}
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <p className="font-medium capitalize">{pet.type}</p>
                    <p className="text-pink-600 font-bold">{pet.votes} votes</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Share the Contest</h2>
          <p className="text-gray-600 mb-6">
            Help us find the cutest pet by sharing this contest with your friends!
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href={`https://twitter.com/intent/tweet?text=Vote for the cutest pets at PetShard's Pet Popularity Contest! %23teaspill %23petcontest&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1DA1F2] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Share on Twitter
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4267B2] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Share on Facebook
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default function PetRanking() {
  return <PetRankingContent />;
} 