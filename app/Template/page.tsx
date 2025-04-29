"use client";

import React, { useState } from "react";

// Dummy park data (you can later replace this with real API calls)
const parks = [
  { id: 1, name: "Greenwood Trail", count: 5, position: { top: "20%", left: "30%" } },
  { id: 2, name: "Eagle Ridge", count: 9, position: { top: "50%", left: "40%" } },
  { id: 3, name: "Lakeside Loop", count: 3, position: { top: "70%", left: "60%" } },
  { id: 4, name: "Sunset Valley", count: 11, position: { top: "35%", left: "70%" } },
  { id: 5, name: "Riverwalk", count: 2, position: { top: "60%", left: "20%" } },
];

export default function ExplorePage() {
  const [search, setSearch] = useState("");

  const filteredParks = parks.filter((park) =>
    park.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-full min-h-screen bg-green-100">
      
      {/* Top Search Bar */}
      <div className="absolute top-4 left-4 right-4 z-10">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search parks"
          className="w-full px-4 py-2 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Map Area (Background) */}
      <div className="absolute top-16 bottom-16 left-0 right-0 bg-green-200">
        {/* Park Markers */}
        {filteredParks.map((park) => (
          <div
            key={park.id}
            style={{ top: park.position.top, left: park.position.left }}
            className="absolute w-10 h-10 bg-green-800 text-white flex items-center justify-center rounded-full text-sm font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
          >
            {park.count}
          </div>
        ))}
      </div>

      {/* Bottom Tab Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-black flex justify-around items-center text-white text-lg">
        <div>Explore</div>
        <div>Saved</div>
        <div>Add Park</div>
      </div>

    </div>
  );
}
