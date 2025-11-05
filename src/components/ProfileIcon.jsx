import React from "react";
import "./ProfileIcon.css";

export default function ProfileIcon({ onClick }) {
  return (
    <button className="profile-icon" aria-label="profile" onClick={onClick}>
      <svg viewBox="0 0 200 200" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        {/* Outer Circle */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="green" strokeWidth="2" />
        {/* Head */}
        <circle cx="100" cy="50" r="30" fill="green" />
        {/* Shoulders */}
        <path d="M30 160 L45 115 100 80 155 115 170 160 Z" fill="green" />
      </svg>
    </button>
  );
}