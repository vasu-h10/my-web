import React, { useEffect } from "react";

export default function LogoTitle() {
  useEffect(() => {
    // Axis Labels
    const axisLabels = document.getElementById("axisLabels");
    if (!axisLabels) return;
    axisLabels.innerHTML = ""; // clear old

    for (let i = 5; i <= 202; i += 5) {
      const h = document.createElementNS("http://www.w3.org/2000/svg", "text");
      h.setAttribute("x", i);
      h.setAttribute("y", 2);
      h.setAttribute("text-anchor", "middle");
      h.textContent = i;
      axisLabels.appendChild(h);

      const v = document.createElementNS("http://www.w3.org/2000/svg", "text");
      v.setAttribute("x", 2);
      v.setAttribute("y", i);
      v.setAttribute("text-anchor", "end");
      v.setAttribute("alignment-baseline", "middle");
      v.textContent = i;
      axisLabels.appendChild(v);
    }

    // Zoom & Pan
    const svg = document.getElementById("gridSvg");
    const content = document.getElementById("gridContent");
    let zoom = 1, panX = 0, panY = 0;
    let isPanning = false, startX, startY;
    let lastTouchDist = null, lastTouchMid = null;

    const updateTransform = () => {
      if (content) {
        content.setAttribute("transform", `translate(${panX} ${panY}) scale(${zoom})`);
      }
    };

    const getTouchDistance = (e) => {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const getTouchMidpoint = (e) => ({
      x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
      y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
    });

    svg.addEventListener("wheel", (e) => {
      e.preventDefault();
      zoom *= e.deltaY > 0 ? 0.9 : 1.1;
      updateTransform();
    });

    svg.addEventListener("mousedown", (e) => {
      isPanning = true;
      startX = e.clientX - panX;
      startY = e.clientY - panY;
    });

    svg.addEventListener("mousemove", (e) => {
      if (!isPanning) return;
      panX = e.clientX - startX;
      panY = e.clientY - startY;
      updateTransform();
    });

    svg.addEventListener("mouseup", () => (isPanning = false));
    svg.addEventListener("mouseleave", () => (isPanning = false));

    svg.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        startX = e.touches[0].clientX - panX;
        startY = e.touches[0].clientY - panY;
      } else if (e.touches.length === 2) {
        lastTouchDist = getTouchDistance(e);
        lastTouchMid = getTouchMidpoint(e);
      }
    });

    svg.addEventListener("touchmove", (e) => {
      e.preventDefault();
      if (e.touches.length === 1) {
        panX = e.touches[0].clientX - startX;
        panY = e.touches[0].clientY - startY;
      } else if (e.touches.length === 2) {
        const newDist = getTouchDistance(e);
        const scaleAmount = newDist / lastTouchDist;
        zoom *= scaleAmount;
        lastTouchDist = newDist;
        const newMid = getTouchMidpoint(e);
        panX += newMid.x - lastTouchMid.x;
        panY += newMid.y - lastTouchMid.y;
        lastTouchMid = newMid;
      }
      updateTransform();
    });

    return () => {
      svg.replaceWith(svg.cloneNode(true)); // cleanup listeners
    };
  }, []);

  const zoomIn = () => {
    const content = document.getElementById("gridContent");
    if (content) {
      let scale = parseFloat(content.getAttribute("data-zoom") || "1");
      scale *= 1.2;
      content.setAttribute("data-zoom", scale);
      content.setAttribute("transform", `scale(${scale})`);
    }
  };

  const zoomOut = () => {
    const content = document.getElementById("gridContent");
    if (content) {
      let scale = parseFloat(content.getAttribute("data-zoom") || "1");
      scale *= 0.8;
      content.setAttribute("data-zoom", scale);
      content.setAttribute("transform", `scale(${scale})`);
    }
  };

  return (
    <div style={{ width: "100%", textAlign: "center", background: "#fafafa" }}>
      <svg id="gridSvg" viewBox="0 0 202 202" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="smallGrid" width="1" height="1" patternUnits="userSpaceOnUse">
            <path d="M1 0 L0 0 0 1" fill="none" stroke="#eee" strokeWidth="0.05" />
          </pattern>
          <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
            <rect width="5" height="5" fill="url(#smallGrid)" />
            <path d="M5 0 L0 0 0 5" fill="none" stroke="#888" strokeWidth="0.2" />
          </pattern>
        </defs>

        <g id="gridContent">
          <rect x="0" y="0" width="202" height="202" fill="url(#grid)" />
          <g id="axisLabels" fontSize="2.5" fill="#444" fontFamily="sans-serif"></g>

          {/* Dish Shape */}
          <path
            d="M 35 95 L 41 104 50 110 60 115 105 120 145 115 165 105 170 95 165 130 130 150 75 150 40 130 35 95"
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

          {/* Title */}
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

      <div style={{ marginTop: "8px" }}>
        <button onClick={zoomIn}>+</button>
        <button onClick={zoomOut} style={{ marginLeft: "6px" }}>
          -
        </button>
      </div>
    </div>
  );
}