import React, { useState } from "react";
import Header from "./components/Header";
import MainBody from "./MainBody";
import Footer from "./Footer";
import "./index.css";

export default function App(){
  const [registered, setRegistered] = useState(!!(JSON.parse(localStorage.getItem("vendors")||"[]").find(v=>v.status==="registered")) );
  return (
    <div className="app">
      <Header onRegistered={() => setRegistered(true)} />
      { registered ? <MainBody/> : <p className="notice">👤 Please complete profile registration</p> }
      <Footer/>
    </div>
  );
}
