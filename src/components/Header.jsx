import React from "react";

export default function Header({ onProfileClick }) {
  return (
    <header className="header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 20px", background: "#f5f5f5" }}>
      <h1>MyVindhu</h1>
      <button
        onClick={() => window.dispatchEvent(new CustomEvent("toggle-profile"))}
        style={{ fontSize: "24px", background: "none", border: "none", cursor: "pointer" }}
        title="Open Profile"
      >
        👤
      </button>
    </header>
  );
}
