import React from "react";
import LogoTitle from "./icons/LogoTitle.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-item">👤</div>
      <div className="header-item logo-box">
        <img src={LogoTitle} alt="Logo" style={{ width: "120px", height: "auto" }} />
      </div>
      <div className="header-item">🌓</div>
      <div className="header-item">💝</div>
    </header>
  );
}
