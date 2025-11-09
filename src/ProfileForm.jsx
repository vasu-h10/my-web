import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./ProfileForm.css";

export default function ProfileForm({ onClose, onRegistered }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add vendor to Firebase "vendors" collection
      await addDoc(collection(db, "vendors"), {
        ...form,
        status: "registered",
        dishes: [],
        createdAt: new Date(),
      });

      if (onRegistered) onRegistered(); // Refresh MainBody immediately
      alert("Vendor registered successfully!");
    } catch (err) {
      console.error("Error adding vendor:", err);
      alert("Failed to register vendor. Please try again.");
    }
  };

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
