import React, { useState } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import ProfileForm from "./components/ProfileForm";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  // Tracks whether the ProfileForm modal is visible
  const [showProfileForm, setShowProfileForm] = useState(false);
  // Tracks whether a vendor is registered
  const [registered, setRegistered] = useState(false);

  return (
    <div className="app">
      {/* Header with profile click handler */}
      <Header onProfileClick={() => setShowProfileForm(true)} />

      {/* Main content */}
      <main className="main-body">
        {registered ? (
          <MainBody />
        ) : (
          <p>No registered vendors yet. Please register using the profile icon.</p>
        )}
      </main>

      <Footer />

      {/* Profile Form (appears as modal or overlay) */}
      {showProfileForm && (
        <ProfileForm
          onClose={() => setShowProfileForm(false)}
          onRegister={() => setRegistered(true)}
        />
      )}
    </div>
  );
}
