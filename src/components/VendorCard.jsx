import React, { useState } from "react";
import "./VendorCard.css";
import VendorHeader from "./VendorHeader";
import VendorDishes from "./VendorDishes";
import VendorSourceCard from "./VendorSourceCard";
import { deleteVendor } from "../utils/VendorStorage";

export default function VendorCard({ vendor, onVendorUpdate }) {
  const [currentVendor, setCurrentVendor] = useState(vendor);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this vendor?")) {
      deleteVendor(currentVendor.id);
      if (onVendorUpdate) onVendorUpdate(); // refresh vendor list
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
      <button className="btn-delete" onClick={handleDelete}>Delete Vendor</button>
    </div>
  );
}
