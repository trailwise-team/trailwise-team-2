import React from "react";

export default function BottomTab() {
  return (
    <div style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 60,
      backgroundColor: "#000",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      color: "white",
      fontSize: 16,
    }}>
      <div>Explore</div>
      <div>Saved</div>
      <div>Add Park</div>
    </div>
  );
}
