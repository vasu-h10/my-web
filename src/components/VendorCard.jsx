import React from "react";
import "./VendorCard.css";
import VendorHeader from "./VendorHeader";
import VendorDishes from "./VendorDishes";
import VendorSourceCard from "./VendorSourceCard";

export default function VendorCard({ vendor }) {
  return (
    <div className="vendor-card">
      <VendorHeader vendor={vendor} />
      <VendorDishes dishes={vendor.dishes || []} />
      <VendorSourceCard vendor={vendor} />
    </div>
  );
}
