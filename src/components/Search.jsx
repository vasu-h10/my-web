import React from "react";
import "./Search.css";

export default function Search({ value, onChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search vendors..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}