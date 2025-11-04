import React from "react";
import "./Header.css";
import ProfileIcon from "./ProfileIcon";
import LogoTitle from "./LogoTitle";
import ThemeToggle from "./ThemeToggle";
import DonationIcon from "./DonationIcon";

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-section left">
        <ProfileIcon />
      </div>

      <div className="header-section center">
        <LogoTitle />
      </div>

      <div className="header-section right">
        <ThemeToggle />
        <DonationIcon />
      </div>
    </header>
  );
}
