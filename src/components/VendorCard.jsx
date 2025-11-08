import React from "react";
import "./VendorCard.css";
import VendorHeader from "./VendorHeader";
import VendorDishes from "./VendorDishes";
import VendorSourceCard from "./VendorSourceCard";

export default function VendorCard({ vendor, updateVendor }) {
  return (
    <div className="vendor-card">
      <VendorHeader vendor={vendor} />
      {/* Pass updateVendor so VendorDishes can persist changes */}
      <VendorDishes vendor={vendor} updateVendor={updateVendor} />
      <VendorSourceCard vendor={vendor} />
    </div>
  );
}
