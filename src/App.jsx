import React, { useState } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Footer from "./Footer";
import ProfileForm from "./components/ProfileForm";
import "./App.css";

export default function App() {
  const [registered, setRegistered] = useState(() => {
    const vendors = JSON.parse(localStorage.getItem("vendors") || "[]");
    return vendors.some(v => v.status === "registered");
  });

  const [showProfileForm, setShowProfileForm] = useState(false);

  return (
    <div className="app">
      <Header onProfileClick={() => setShowProfileForm(true)} />

      <main>
        {registered ? (
          <MainBody />
        ) : (
          <p className="notice">👤 Please complete profile registration</p>
        )}
      </main>

      <Footer />

      {showProfileForm && (
        <ProfileForm
          onRegistered={() => setRegistered(true)}
          onClose={() => setShowProfileForm(false)}
        />
      )}
    </div>
  );
}
