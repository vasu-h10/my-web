import React, { useState } from "react";
import "./VendorCard.css";
import VendorHeader from "./VendorHeader";
import VendorDishes from "./VendorDishes";
import VendorSourceCard from "./VendorSourceCard";

export default function VendorCard({ vendor }) {
  const [currentVendor, setCurrentVendor] = useState(vendor);

  return (
    <div className="vendor-card">
      <VendorHeader vendor={currentVendor} />
      <VendorDishes 
        vendor={currentVendor} 
        updateVendor={setCurrentVendor} 
      />
      <VendorSourceCard vendor={currentVendor} />
    </div>
  );
}
