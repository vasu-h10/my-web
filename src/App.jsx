import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import ProfileForm from "./components/ProfileForm";
import Footer from "./components/Footer";
import { getVendors } from "./utils/VendorStorage";
import "./App.css";

export default function App() {
  // Tracks whether the ProfileForm modal is visible
  const [showProfileForm, setShowProfileForm] = useState(false);
  // Tracks whether at least one vendor is registered
  const [registered, setRegistered] = useState(false);
  // Tracks vendor changes to force re-render
  const [vendorVersion, setVendorVersion] = useState(0);

  // Refresh registered state whenever vendorVersion changes
  useEffect(() => {
    const stored = getVendors();
    setRegistered(stored.some(v => v.status === "registered"));
  }, [vendorVersion]);

  const handleRegistered = () => {
    setVendorVersion(prev => prev + 1); // Trigger refresh
    setShowProfileForm(false);
  };

  return (
    <div className="app">
      {/* Header with profile click handler */}
      <Header onProfileClick={() => setShowProfileForm(true)} />

      {/* Main content area */}
      <main className="main-body">
        {registered ? (
          <MainBody key={vendorVersion} /> {/* Force re-render */}
        ) : (
          <p className="no-vendor-text">
            No registered vendors yet. Please register using the profile icon.
          </p>
        )}
      </main>

      {/* Footer always visible */}
      <Footer />

      {/* Profile Form modal */}
      {showProfileForm && (
        <ProfileForm
          onClose={() => setShowProfileForm(false)}
          onRegistered={handleRegistered}
        />
      )}
    </div>
  );
}
