import React, { useState } from "react";
import Header from "./components/Header";
import MainBody from "./MainBody";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  const [registered, setRegistered] = useState(false);

  return (
    <div className="app">
      {/* Header includes LogoTitle inside it */}
      <Header onRegistered={() => setRegistered(true)} />

      {/* Main section */}
      <main className="main-body">
        {registered ? (
          <MainBody />
        ) : (
          <p className="notice">👤 Please complete profile registration</p>
        )}
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  );
}
