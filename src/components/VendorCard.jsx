import React, { useState } from "react";
import "./VendorCard.css";
import VendorHeader from "./VendorHeader";
import VendorDishes from "./VendorDishes";
import VendorSourceCard from "./VendorSourceCard";
import { getVendors, saveVendors } from "../utils/VendorStorage";

export default function VendorCard({ vendor, onVendorUpdate }) {
  const [currentVendor, setCurrentVendor] = useState(vendor);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this vendor?")) {
      const vendors = getVendors().filter(v => v.id !== currentVendor.id);
      saveVendors(vendors);
      if (onVendorUpdate) onVendorUpdate(); // Refresh MainBody
    }
  };

  return (
    <div className="vendor-card">
      <VendorHeader vendor={currentVendor} />
      <VendorDishes 
        vendor={currentVendor} 
        updateVendor={setCurrentVendor} 
      />
      <VendorSourceCard vendor={currentVendor} />
      
      <button
        onClick={handleDelete}
        style={{
          marginTop: 8,
          background: "#ff4d4d",
          color: "white",
          border: "none",
          padding: "6px 0",
          width: "100%",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Delete Vendor
      </button>
    </div>
  );
}
