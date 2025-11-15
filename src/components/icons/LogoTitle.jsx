import React from "react";

export default function LogoTitle({ width = 50 }) {
  return (
    <svg
      viewBox="0 0 202 202"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: width, height: "auto" }}
    >
      <g id="dish">
        <path
          d="M 35 95 L 41 104 50 110 60 115 105 120 145 115 165 105 170 95 
             165 130 130 150 75 150 40 130 35 95"
          fill="orange"
          stroke="red"
          strokeWidth="1"
        />
        <path
          d="M 130 150 L 133 152 133 155 130 157 75 157 72 155 72 152 75 150"
          fill="orange"
          stroke="red"
          strokeWidth="1"
        />
        <path
          d="M 130 157 L 135 165 70 165 75 157"
          fill="orange"
          stroke="red"
          strokeWidth="1"
        />
        <path
          d="M 35 95 L 37 91 38 87 41 85 43 81 45 79 46 76 50 73 55 71 57 69 60 66 
             65 64 69 60 75 59 80 59 85 57 90 56 100 54 110 54 115 55 120 56 125 58 130 59 
             115 67 100 66 95 66 90 67 95 70 96 75 101 80 103 85 106 87 106 90 109 95 
             113 89 115 86 120 76 135 67 150 58 155 55 156 60 160 61 165 59 167 54 166 50 
             160 47 159 40 155 36 150 36 146 40 146 45 149 48 130 59"
          fill="none"
          stroke="red"
          strokeWidth="1"
        />
        <path
          d="M115 67 L 100 66 95 66 90 67 95 70 96 75 101 80 103 85 106 87 106 90 
             109 95 113 89 115 86 120 76 115 75 115 70 110 70 115 67"
          fill="red"
          stroke="red"
          strokeWidth="1"
        />
        {/* New path added */}
        <path
          d="M 170 95 L 166 90 165 85 162 80 160 75 155 70 150 67 145 65 143 63"
          fill="none"
          stroke="red"
          strokeWidth="1"
        />
        <text
          x="101"
          y="198"
          textAnchor="middle"
          alignmentBaseline="alphabetic"
          fontFamily="Verdana, sans-serif"
          fontSize="32"
          fontWeight="bold"
          fill="red"
          stroke="red"
          strokeWidth="1"
        >
          MY VINDHU
        </text>
      </g>
    </svg>
  );
}
