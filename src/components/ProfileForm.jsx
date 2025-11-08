import React, { useState } from "react";
import { addProfile } from "../utils/ProfileStorage";
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
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addProfile(form);
    if (onRegistered) onRegistered();
    if (onClose) onClose();
    alert("Vendor registered successfully!");
  }

  return (
    <div
      className="profile-form"
      style={{
        position: "absolute",
        top: 60,
        left: 10,
        background: "#fff",
        padding: 12,
        borderRadius: 10,
        boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
        zIndex: 40,
        width: 260,
      }}
    >
      <h3 style={{ margin: "0 0 8px", color: "#0066ff" }}>
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
