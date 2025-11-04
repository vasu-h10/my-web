import React, { useState } from "react";

export default function ProfileIcon({ onRegistered }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      localStorage.setItem("userName", name);
      setOpen(false);
      onRegistered();
    }
  };

  return (
    <div className="profile-icon">
      <button onClick={() => setOpen(!open)}>👤</button>
      {open && (
        <form className="profile-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}
