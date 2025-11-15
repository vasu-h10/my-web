import DonateIcon from "./icons/DonateIcon";
import React from "react";
import LogoTitle from "./icons/LogoTitle";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-item">👤</div>
      
      <div className="header-item logo-item">
        <LogoTitle width={50} />
      </div>
      
      <div className="header-item">🌓</div>
      <div className="header-item">💝</div>
      
      {/* Add the donation icon here */}
      <div className="header-item">
        <DonateIcon width={120} height={150} />
      </div>
    </header>
  );
}
