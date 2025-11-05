import React from "react";
import "./ProfileIcon.css";

export default function ProfileIcon({ onClick }) {
  return (
    <button className="profile-icon" aria-label="profile" onClick={onClick}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    </button>
  );
}
