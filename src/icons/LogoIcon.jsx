import React from "react";

export default function LogoIcon({ size = 120 }) {
  return (
    <svg
      width={size}
      height={(size / 120) * 40}
      viewBox="0 0 120 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dish Icon */}
      <circle cx="20" cy="20" r="18" fill="#ff8800" />

      {/* Dish lines */}
      <rect x="10" y="18" width="20" height="4" fill="#ffffff" />
      <rect x="14" y="14" width="12" height="4" fill="#ffffff" />

      {/* Text */}
      <text
        x="45"
        y="26"
        fontSize="16"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
        fill="#222"
      >
        MY VINDHU
      </text>
    </svg>
  );
}
