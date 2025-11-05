import React, { useState } from "react";
import "./VendorCard.css";

export default function VendorCard({ vendor }) {
  const [profile, setProfile] = useState(vendor.profile || "");
  const [dishes, setDishes] = useState(vendor.dishes || []);

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if(file) setProfile(URL.createObjectURL(file));
  };

  const handleDishUpload = (e) => {
    const files = Array.from(e.target.files);
    setDishes(prev => [...prev, ...files.map(f => URL.createObjectURL(f))]);
  };

  return (
    <div className="vendor-card">
      <div className="vendor-header">
        <div className="profile">
          <img src={profile || "/default-profile.png"} alt="profile" />
          <div>
            <div>{vendor.firstName} {vendor.lastName}</div>
            <div className="vendor-id">ID: {vendor.id}</div>
          </div>
        </div>
        <div>
          <input type="file" accept="image/*" onChange={handleProfileUpload} />
        </div>
      </div>

      <div className="dish-images">
        {dishes.map((d, i) => <img key={i} src={d} alt={`dish-${i}`} />)}
        <input type="file" accept="image/*" multiple onChange={handleDishUpload} />
      </div>

      <div className="vendor-details">
        <div><span className="label">Email:</span> {vendor.email}</div>
        <div><span className="label">Location:</span> {vendor.location}</div>
        <div><span className="label">Phone:</span> {vendor.phone}</div>
        <div><span className="label">Company:</span> {vendor.company}</div>
      </div>
    </div>
  );
}
