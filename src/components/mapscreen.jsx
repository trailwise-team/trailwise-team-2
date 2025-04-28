import React, { useState } from "react";
import SearchBar from "./SearchBar";
import BottomTab from "./BottomTab";
import MapPlaceholder from "./MapPlaceholder";
import parks from "../data/parks";

export default function MapScreen() {
  const [search, setSearch] = useState("");

  const filteredParks = parks.filter(park =>
    park.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <SearchBar search={search} setSearch={setSearch} />

      <div style={{ position: "absolute", top: 60, bottom: 60, left: 0, right: 0 }}>
        <MapPlaceholder parks={filteredParks} />
      </div>

      <BottomTab />
    </div>
  );
}
