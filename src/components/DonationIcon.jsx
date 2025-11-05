import React from "react";
import "./DonationIcon.css";

export default function DonationIcon() {
  return (
    <div className="zoom-container">
      {/* Hand */}
      <svg
        className="hand-svg"
        viewBox="0 0 202 202"
        width="80"
        height="80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 70 95 L 70 90 80 90 80 115 70 115 70 95" fill="skyblue" stroke="#888" strokeWidth="2"/>
        <path d="M 80 92.5 L 92 86 95 86 110 92 115 93 116 94 118 98 114 101 97 97" fill="none" stroke="#888" strokeWidth="2"/>
        <path d="M 80 112 L 104 117 120 110 135 95 135 89 130 89 117 98" fill="none" stroke="#888" strokeWidth="2"/>
        <path d="M 76 110 L 73 110" fill="none" stroke="#888" strokeWidth="2"/>
      </svg>

      {/* Coin */}
      <div className="coin-container">
        <div className="coin">
          <div className="coin-face front">$</div>
          <div className="coin-face back">₹</div>
        </div>
      </div>
    </div>
  );
}