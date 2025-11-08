import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import ProfileForm from "./components/ProfileForm";
import Footer from "./components/Footer";
import { getProfiles } from "./utils/ProfileStorage";
import "./App.css";

export default function App() {
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [vendorVersion, setVendorVersion] = useState(0);
  const hasRegisteredVendors = () => {
    const stored = getProfiles();
    return stored.some(v => v.status === "registered");
  };
  const [registered, setRegistered] = useState(hasRegisteredVendors());

  return (
    <div className="app">
      <Header onProfileClick={() => setShowProfileForm(true)} />

      <main className="main-body">
        {registered ? (
          <MainBody key={vendorVersion} />
        ) : (
          <p className="no-vendor-text">
            No registered vendors yet. Please register using the profile icon.
          </p>
        )}
      </main>

      <Footer />

      {showProfileForm && (
        <ProfileForm
          onClose={() => setShowProfileForm(false)}
          onRegistered={() => {
            setRegistered(true);
            setVendorVersion(vendorVersion + 1);
            setShowProfileForm(false);
          }}
        />
      )}
    </div>
  );
}
