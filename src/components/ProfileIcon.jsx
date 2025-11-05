import React from "react";
import "./ProfileIcon.css";

export default function ProfileIcon({ onClick }) {
  return (
    <button className="profile-icon" aria-label="profile" onClick={onClick}>
      <svg viewBox="0 0 200 200" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <!-- Grid (optional, you can remove if not needed) -->
        <defs>
          <pattern id="smallGrid" width="5" height="5" patternUnits="userSpaceOnUse">
            <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#eee" strokeWidth="0.5"/>
          </pattern>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="url(#smallGrid)" />
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ccc" strokeWidth="1"/>
          </pattern>
        </pattern>
        </defs>

        <!-- Outer Circle -->
        <circle cx="100" cy="100" r="95" fill="none" stroke="green" strokeWidth="2"/>

        <!-- Head -->
        <circle cx="100" cy="50" r="30" fill="green" />

        <!-- Shoulders -->
        <path d="M30 160 L45 115 100 80 155 115 170 160 Z" fill="green" />
      </svg>
    </button>
  );
}