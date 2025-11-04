import React from "react";
import ProfileIcon from "./ProfileIcon";
import LogoTitle from "./LogoTitle";
import ThemeToggle from "./ThemeToggle";
import DonationIcon from "./DonationIcon";
import "./Header.css";

export default function Header({ onRegistered }) {
  return (
    <header className="header">
      <ProfileIcon onRegistered={onRegistered} />
      <LogoTitle />
      <ThemeToggle />
      <DonationIcon />
    </header>
  );
}
