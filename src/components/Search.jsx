import React from "react";
import "./Search.css";

export default function Search({ value, onChange }) {
  return (
    <div className="search-container">
      <span className="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </span>
      <input
        type="text"
        placeholder="Search vendors..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}