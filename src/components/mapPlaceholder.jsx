import React from "react";

export default function MapPlaceholder({ parks }) {
  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#d2e3c8", position: "relative" }}>
      {/* Replace this div with a real map API later */}
      {parks.map((park) => (
        <div
          key={park.id}
          style={{
            position: "absolute",
            top: `${park.position.top}%`,
            left: `${park.position.left}%`,
            transform: "translate(-50%, -50%)",
            width: 40,
            height: 40,
            backgroundColor: "#1a3b1f",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          {park.count}
        </div>
      ))}
    </div>
  );
}
