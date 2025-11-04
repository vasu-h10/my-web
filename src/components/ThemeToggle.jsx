import React from "react";

export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button aria-label="theme" onClick={onToggle}
      style={{ background:"transparent", border:"none", color:"white", cursor:"pointer", padding:6 }}>
      { dark ? "☀️" : "🌙" }
    </button>
  );
}
