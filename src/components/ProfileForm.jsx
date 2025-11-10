import React, { useState } from "react";
import "./ProfileForm.css";

export default function ProfileForm({ onClose, onRegistered }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Call parent callback for registration
    if (onRegistered) onRegistered(); 
    alert("Vendor registered successfully!");
  }

  return (
    <div
      className="profile-form"
      style={{
        position: "fixed",
        top: "60px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#fff",
        padding: 20,
        borderRadius: 10,
        boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
        zIndex: 40,
        width: "90%",
        maxWidth: 400,
      }}
    >
      <h3 style={{ margin: "0 0 12px", color: "#0066ff" }}>
        Create Vendor Profile
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First name"
          value={form.firstName}
          onChange={handleChange}
        />
        <input
          name="lastName"
          placeholder="Last name"
          value={form.lastName}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="location"
          placeholder="City"
          value={form.location}
          onChange={handleChange}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "8px 0",
            background: "#0066ff",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>

      <button
        onClick={onClose}
        style={{
          marginTop: 8,
          background: "#eee",
          border: "none",
          padding: "6px 0",
          width: "100%",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </div>
  );
}
