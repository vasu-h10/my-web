import React from "react";

export default function DonateIcon({ width = 120, height = 150 }) {
  return (
    <div style={{ width, height, position: "relative", display: "inline-block" }}>
      {/* Hand SVG */}
      <div style={{ position: "absolute", bottom: "12px", width: "100%" }}>
        <svg viewBox="0 0 200 200" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
          <path d="M70 110 L70 105 80 105 80 130 70 130 70 110" fill="skyblue" stroke="#888" strokeWidth="2" />
          <path d="M80 107.5 L92 101 95 101 110 107 115 108 116 109 118 113 114 116 97 112" fill="none" stroke="#888" strokeWidth="2" />
          <path d="M80 127 L104 132 120 125 135 110 135 104 130 104 117 113" fill="none" stroke="#888" strokeWidth="2" />
          <path d="M76 125 L73 125" fill="none" stroke="#888" strokeWidth="2" />
        </svg>
      </div>

      {/* Coin */}
      <div style={{
        position: "absolute",
        bottom: "50px",
        left: "50%",
        width: "30px",
        height: "30px",
        transform: "translateX(-50%) rotateX(10deg) rotateZ(-5deg)",
        zIndex: 2,
        cursor: "pointer",
        borderRadius: "50%",
        background: "radial-gradient(circle at 30% 30%, #FFD84C 0%, #D4A017 55%, #8B5E00 100%)",
        border: "2px solid #B8860B",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        fontWeight: "bold",
        color: "#fff",
        fontFamily: "Arial, Segoe UI, Noto Sans, sans-serif",
        textShadow: "0 1px 2px rgba(0,0,0,0.5), 0 -1px 2px rgba(255,255,255,0.4)"
      }}>
        ₹
      </div>
    </div>
  );
}
