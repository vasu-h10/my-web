import { io } from "socket.io-client";
const socket = io("http://localhost:4000");
import React, { useEffect, useState } from "react";
import "./MainBody.css";
import Search from "./Search";
import VendorCard from "./VendorCard";
import { getVendors } from "../utils/VendorStorage";

export default function MainBody({ onVendorsChange }) {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const loadVendors = () => {
    const stored = getVendors().filter(v => v.status === "registered");
    setVendors(stored);
  };

  useEffect(() => {
  socket.on("vendors", data => { setVendors(data.filter(v => v.status === "registered")); });
    loadVendors();
  }, []);

  const handleVendorUpdate = () => {
    loadVendors();
    if (onVendorsChange) onVendorsChange();
  };

  const filteredVendors = vendors.filter(v =>
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
          <VendorCard
            key={v.id}
            vendor={v}
            onVendorUpdate={handleVendorUpdate}
          />
        ))}
        {filteredVendors.length === 0 && <p>No vendors match your search.</p>}
      </div>
    </main>
  );
}
