import React, { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./ProfileForm.css";

export default function ProfileForm({ onClose, onRegistered }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, form.email, form.password || "defaultPassword123"
      );
      const uid = userCredential.user.uid;
      await addDoc(collection(db, "vendors"), {
        uid,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        location: form.location,
        status: "registered",
        createdAt: serverTimestamp(),
      });
      if(onRegistered) onRegistered();
      alert("Vendor registered successfully!");
    } catch(error) {
      console.error("Error adding vendor:", error);
      alert(error.message);
    }
  };

  return (
    <div className="profile-form">
      <h3>Create Vendor Profile</h3>
      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} />
        <input name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} />
        <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} />
        <input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} />
        <input name="location" placeholder="City" value={form.location} onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
