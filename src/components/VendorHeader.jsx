import React from "react";
import "./VendorCard.css";

export default function VendorHeader({ vendor }) {
  return (
    <div className="vendor-header">
      <img
        src={vendor.profilePic || "/default-profile.png"}
        alt={`${vendor.firstName} ${vendor.lastName}`}
        className="vendor-profile-pic"
      />
      <div className="vendor-id">
        <div>ID: {vendor.id}</div>
        <div>{vendor.firstName} {vendor.lastName}</div>
      </div>
    </div>
  );
}
