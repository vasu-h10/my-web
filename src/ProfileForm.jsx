import React, { useState } from "react";
import { db, auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import "./ProfileForm.css";

export default function ProfileForm({ onClose, onRegistered }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Create Firebase Auth user
      await createUserWithEmailAndPassword(auth, form.email, form.password);

      // Save vendor info to Firestore
      await addDoc(collection(db, "vendors"), {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        location: form.location,
      });

      alert("Vendor registered successfully!");
      if (onRegistered) onRegistered();
    } catch (error) {
      console.error("Firebase error:", error);
      alert(error.message);
    }
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
        <input name="firstName" placeholder="First name" onChange={handleChange} required />
        <input name="lastName" placeholder="Last name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <input name="location" placeholder="City" onChange={handleChange} required />
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
