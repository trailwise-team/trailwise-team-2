// components/SearchBar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    }

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
      // Focus input when activated
      inputRef.current?.focus();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsActive(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      {/* Overlay */}
      {isActive && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm" />
      )}

      {/* Search Bar */}
      <div
        ref={searchRef}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          isActive ? "w-[90%] max-w-2xl" : "w-64"
        }`}
      >
        <form onSubmit={handleSearch}>
          <div
            className={`relative bg-white dark:bg-gray-800 rounded-full shadow-xl border border-gray-300 dark:border-gray-600 transition-all duration-300 ${
              isActive ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              className="w-full py-3 px-6 pr-12 rounded-full bg-transparent outline-none text-gray-900 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsActive(true)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}