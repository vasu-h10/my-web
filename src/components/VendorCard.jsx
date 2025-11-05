import React from "react";
import "./VendorCard.css";
import VendorHeader from "./VendorHeader";
import VendorDishes from "./VendorDishes";
import VendorSourceCard from "./VendorSourceCard";

export default function VendorCard({ vendor }) {
  return (
    <div className="vendor-card">
      {/* 1. Vendor Header */}
      <VendorHeader vendor={vendor} />

      {/* 2. Vendor Dishes */}
      <VendorDishes dishes={vendor.dishes || []} />

      {/* 3. Vendor Source Card */}
      <VendorSourceCard vendor={vendor} />
    </div>
  );
}
