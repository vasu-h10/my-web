import React, { useEffect, useState } from "react";

export default function VendorFeed() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("vendors") || "[]");
    const registered = stored.filter(v => v.status === "registered");
    setVendors(registered);
  }, []);

  if (vendors.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>No vendors registered yet.</p>;
  }

  return (
    <div style={{
      maxHeight: "80vh",
      overflowY: "auto",
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "10px",
    }}>
      {vendors.map(v => (
        <div key={v.id} style={{
          padding: "10px",
          margin: "10px 0",
          background: "#f9f9f9",
          borderRadius: "8px"
        }}>
          <h3>{v.firstName} {v.lastName}</h3>
          <p>Email: {v.email}</p>
          <p>Location: {v.location}</p>
        </div>
      ))}
    </div>
  );
}
