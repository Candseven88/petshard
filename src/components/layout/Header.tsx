"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

// 主要导航项
const mainNavItems = [
  { label: "Breed Identification", href: "/breed-identification" },
  { label: "Pet Age Calculator", href: "/pet-age-calculator" },
  { label: "Video Generator", href: "/pet-video" },
  { label: "Virtual Breeding", href: "/virtual-breeding" },
];

// 次要导航项（将放入下拉菜单）
const dropdownNavItems = [
  { label: "Health Guide", href: "/health-guide" },
  { label: "Pet Diary", href: "/pet-diary" },
  { label: "Pet Horoscope", href: "/pet-horoscope" },
  { label: "AI Tools", href: "/ai-tools" },
  { label: "Blog", href: "/blog" },
];

export default function Header({ title, showBackButton = false }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // 检查当前路径是否匹配导航项
  const isActive = (href: string) => {
    return pathname === href;
  };

  // 点击外部关闭下拉菜单
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-30 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          {showBackButton && (
            <button
              onClick={() => router.back()}
              className="mr-2 px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700"
              aria-label="Back"
            >
              ←
            </button>
          )}
          <span 
            className="font-extrabold text-2xl text-pink-500 tracking-tight cursor-pointer select-none drop-shadow-sm hover:scale-105 transition-transform" 
            onClick={() => router.push("/")}
          >
            {title || "PetShard"}
          </span>
        </div>
        
        {/* 主导航 */}
        <nav className="flex items-center gap-2 md:gap-3">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-1 rounded-lg font-medium transition-all duration-200 ${
                isActive(item.href) 
                ? "bg-pink-100 text-pink-600 font-semibold" 
                : "text-gray-700 hover:bg-pink-100 hover:text-pink-600 active:scale-95"
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          {/* 更多功能下拉菜单 */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center px-3 py-1 rounded-lg font-medium text-gray-700 hover:bg-pink-100 hover:text-pink-600 active:scale-95 transition-all duration-200"
            >
              More
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 ml-1 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-40 animate-fadeIn">
                {dropdownNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 ${
                      isActive(item.href) 
                      ? "bg-pink-50 text-pink-600 font-medium" 
                      : "text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                    }`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
} 