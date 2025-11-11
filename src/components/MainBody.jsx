import React, { useState, useEffect } from "react";
import VendorCard from "./VendorCard";
import "./MainBody.css";

export default function MainBody() {
  const [vendors, setVendors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedVendors = JSON.parse(localStorage.getItem("vendors") || "[]");
    setVendors(storedVendors);
  }, []);

  const filteredVendors = vendors.filter((v) => {
    const q = search.toLowerCase();
    return (
      v.name?.toLowerCase().includes(q) ||
      v.location?.toLowerCase().includes(q) ||
      v.category?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="main-body">
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="🔍 Search vendors by name, location, or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="vendor-list">
        {filteredVendors.length > 0 ? (
          filteredVendors.map((vendor, index) => (
            <VendorCard key={index} vendor={vendor} />
          ))
        ) : (
          <p className="no-results">No vendors found.</p>
        )}
      </div>
    </div>
  );
}
