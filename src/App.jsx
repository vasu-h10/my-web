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

  // ✅ On mount, check if vendors are already stored
  useEffect(() => {
    const stored = getVendors();
    if (stored && stored.some(v => v.status === "registered")) {
      setRegistered(true);
    }
  }, []);

  return (
    <div className="app">
      {/* Header with profile click handler */}
      <Header onProfileClick={() => setShowProfileForm(true)} />

      {/* Main content area */}
      <main className="main-body">
        {registered ? (
          <MainBody key={vendorVersion} />
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
          onRegistered={() => {
            // Reload vendors and update registered status immediately
            const stored = getVendors();
            setRegistered(stored.some(v => v.status === "registered"));
            setVendorVersion(vendorVersion + 1); // force MainBody re-render
            setShowProfileForm(false);
          }}
        />
      )}
    </div>
  );
}
