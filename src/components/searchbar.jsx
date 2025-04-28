import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div style={{
      position: "absolute",
      top: 10,
      left: 10,
      right: 10,
      zIndex: 10,
    }}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search parks"
        style={{
          width: "100%",
          padding: "10px 15px",
          borderRadius: 20,
          border: "1px solid #ccc",
          fontSize: 16,
        }}
      />
    </div>
  );
}
