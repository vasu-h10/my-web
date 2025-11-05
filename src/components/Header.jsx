import React, { useState } from "react";
import "./Header.css";
import ProfileIcon from "./ProfileIcon";
import LogoTitle from "./LogoTitle";
import ThemeToggle from "./ThemeToggle";
import DonationIcon from "./DonationIcon";
import ProfileForm from "./ProfileForm";

export default function Header({ onRegistered }) {
  const [showForm, setShowForm] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <header className="app-header">
      {/* Left section */}
      <div className="header-section left">
        <ProfileIcon onClick={() => setShowForm((s) => !s)} />
        {showForm && (
          <ProfileForm
            onClose={() => setShowForm(false)}
            onRegistered={onRegistered}
          />
        )}
      </div>

      {/* Center section — wrapped for logo alignment */}
      <div className="header-section center">
        <div className="logo-wrapper">
          <LogoTitle />
        </div>
      </div>

      {/* Right section */}
      <div className="header-section right">
        <ThemeToggle
          dark={dark}
          onToggle={() => {
            setDark((d) => !d);
            document.body.classList.toggle("dark", !dark);
          }}
        />
        <DonationIcon />
      </div>
    </header>
  );
}