import React, { useState } from "react";
import "./ProfileForm.css";

export default function ProfileForm() {

  function handleSubmit(e) {
    e.preventDefault();
    const vendors = JSON.parse(localStorage.getItem("vendors") || "[]");
    const newVendor = {
      id: Date.now(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      location: formData.location,
      status: "registered",
    };
    vendors.push(newVendor);
    localStorage.setItem("vendors", JSON.stringify(vendors));
    alert("✅ Vendor registered successfully!");
  }
}
