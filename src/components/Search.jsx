import React from "react";
import "./Search.css";

export default function Search({ value, onChange, placeholder = "Search..." }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="search-input"
    />
  );
}
