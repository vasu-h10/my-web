import React, { useEffect, useState } from "react";
import "./MainBody.css";
import Search from "./Search";
import VendorCard from "./VendorCard";

export default function MainBody() {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("vendors") || "[]");
    setVendors(stored.filter(v => v.status === "registered"));
  }, []);

  const filteredVendors = vendors.filter(
    v =>
      v.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!vendors.length)
    return (
      <div className="main">
        <p>No registered vendors yet. Please register from the profile icon.</p>
      </div>
    );

  return (
    <main className="main">
      <Search value={searchTerm} onChange={setSearchTerm} />
      <div className="vendor-grid">
        {filteredVendors.map(v => (
          <VendorCard key={v.id} vendor={v} />
        ))}
        {filteredVendors.length === 0 && <p>No vendors match your search.</p>}
      </div>
    </main>
  );
}
