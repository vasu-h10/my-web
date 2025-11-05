import React from "react";
import "./VendorCard.css";

export default function VendorSourceCard({ vendor }) {
  return (
    <div className="vendor-source-card">
      <div>Email: {vendor.email}</div>
      <div>Location: {vendor.location}</div>
      <div>Phone: {vendor.phone || "N/A"}</div>
      {/* Add more fields or form inputs as needed */}
    </div>
  );
}
