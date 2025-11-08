import React, { useState } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import ProfileForm from "./components/ProfileForm";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [refreshCount, setRefreshCount] = useState(0); // force MainBody update

  return (
    <div className="app">
      <Header onProfileClick={() => setShowProfileForm(true)} />

      <main className="main-body">
        <MainBody refreshCount={refreshCount} />
      </main>

      <Footer />

      {showProfileForm && (
        <ProfileForm
          onClose={() => setShowProfileForm(false)}
          onRegistered={() => {
            setRefreshCount(prev => prev + 1); // triggers MainBody refresh
            setShowProfileForm(false);
          }}
        />
      )}
    </div>
  );
}
