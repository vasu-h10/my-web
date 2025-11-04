import React from "react";
import logo from "../assets/react.svg";

export default function LogoTitle() {
  return (
    <div className="logo-title">
      <img src={logo} alt="Logo" width="40" />
      <h2>My Web</h2>
    </div>
  );
}
