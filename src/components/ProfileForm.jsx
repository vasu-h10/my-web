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
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addProfile(form);
    if (onRegistered) onRegistered();
    alert("Vendor registered successfully!");
  }

  return (
    <div className="profile-form">
      <h3>Create Vendor Profile</h3>
      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} />
        <input name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} />
        <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} />
        <input name="location" placeholder="City" value={form.location} onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
