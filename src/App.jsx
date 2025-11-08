import React, { useState } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import ProfileForm from "./components/ProfileForm";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [vendorVersion, setVendorVersion] = useState(0); // triggers MainBody re-render

  const handleVendorsChange = () => {
    setVendorVersion(prev => prev + 1);
  };

  return (
    <div className="app">
      <Header onProfileClick={() => setShowProfileForm(true)} />
      <main className="main-body">
        <MainBody key={vendorVersion} onVendorsChange={handleVendorsChange} />
      </main>
      <Footer />
      {showProfileForm && (
        <ProfileForm
          onClose={() => setShowProfileForm(false)}
          onRegistered={() => {
            handleVendorsChange();
            setShowProfileForm(false);
          }}
        />
      )}
    </div>
  );
}
