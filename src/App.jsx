import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import ProfileForm from "./components/ProfileForm";
import Footer from "./components/Footer";
import { getVendors } from "./utils/VendorStorage";
import "./App.css";

export default function App() {
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [vendorVersion, setVendorVersion] = useState(0); // force MainBody re-render

  useEffect(() => {
    const stored = getVendors();
    if (stored && stored.some(v => v.status === "registered")) {
      setRegistered(true);
    }
  }, []);

  return (
    <div className="app">
      <Header onProfileClick={() => setShowProfileForm(true)} />

      <main className="main-body">
        <MainBody key={vendorVersion} refreshVersion={vendorVersion} />
      </main>

      <Footer />

      {showProfileForm && (
        <ProfileForm
          onClose={() => setShowProfileForm(false)}
          onRegistered={() => {
            setRegistered(true);
            setVendorVersion(vendorVersion + 1); // trigger refresh in MainBody
            setShowProfileForm(false);
          }}
        />
      )}
    </div>
  );
}
