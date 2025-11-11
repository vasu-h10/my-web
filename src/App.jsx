import React, { useState } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Footer from "./Footer"; // ✅ correct path since Footer.jsx is in src/
import "./App.css"; // ✅ make sure App.css exists in src/

export default function App() {
  const [registered, setRegistered] = useState(() => {
    const vendors = JSON.parse(localStorage.getItem("vendors") || "[]");
    return vendors.some(v => v.status === "registered");
  });

  return (
    <div className="app">
      {/* Fixed header stays on top */}
      <Header onRegistered={() => setRegistered(true)} />

      {/* Main content sits below header */}
      <main>
        {registered ? (
          <MainBody />
        ) : (
          <p className="notice">👤 Please complete profile registration</p>
        )}
      </main>

      <Footer />
    </div>
  );
}
