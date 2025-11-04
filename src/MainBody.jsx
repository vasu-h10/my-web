import React from "react";

export default function MainBody() {
  const name = localStorage.getItem("userName") || "Guest";
  return (
    <main className="main-body">
      <h1>Welcome, {name} 👋</h1>
      <p>Your main content goes here!</p>
    </main>
  );
}
