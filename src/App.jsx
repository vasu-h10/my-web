import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import ProfileForm from "./components/ProfileForm";
import Footer from "./components/Footer";
import { getVendors, saveVendors } from "./utils/VendorStorage";
import "./App.css";

export default function App() {
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [vendors, setVendors] = useState([]);

  // Load vendors from localStorage on mount
  useEffect(() => {
    const stored = getVendors();
    setVendors(stored.filter(v => v.status === "registered"));
  }, []);

  // Function to refresh vendor list
  const refreshVendors = () => {
    const stored = getVendors();
    setVendors(stored.filter(v => v.status === "registered"));
  };

  return (
    <div className="app">
      <Header onProfileClick={() => setShowProfileForm(true)} />

      <main className="main-body">
        {vendors.length > 0 ? (
          <MainBody vendors={vendors} refreshVendors={refreshVendors} />
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
            setShowProfileForm(false);
            refreshVendors(); // immediately update MainBody
          }}
        />
      )}
    </div>
  );
}
