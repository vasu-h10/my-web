import React, { useEffect, useState } from "react";
import "./MainBody.css";
import Search from "./Search";

export default function MainBody() {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("vendors") || "[]");
    setVendors(stored.filter(v => v.status === "registered"));
  }, []);

  // Filter vendors based on search term
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
          <div key={v.id} className="vendor-card">
            <div className="vendor-header">
              <img className="profile" src={v.profile || "default-profile.png"} alt="Profile" />
              <div className="vendor-name">{v.firstName} {v.lastName}</div>
              <div className="vendor-details">ID: {v.vendorID} · {v.location}</div>
            </div>

            <div className="dish-row">
              {v.dishes?.map(d => (
                <div key={d.id}>
                  <img src={d.image} alt={d.name} />
                  <div style={{ fontSize: 10, textAlign: "center" }}>{d.name}</div>
                </div>
              ))}
            </div>

            {/* Vendor source card / form wrapper can go here */}
          </div>
        ))}
        {filteredVendors.length === 0 && <p>No vendors match your search.</p>}
      </div>
    </main>
  );
}
