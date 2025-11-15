import React from "react";
import LogoTitle from "./icons/LogoTitle.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-item">👤</div>
      <div className="header-item logo-item">
        <img src={LogoTitle} alt="Logo" className="logo-img" />
      </div>
      <div className="header-item">🌓</div>
      <div className="header-item">💝</div>
    </header>
  );
}
