import React, { useEffect, useState } from "react";
import "./MainBody.css";

export default function MainBody() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("vendors") || "[]");
    setVendors(stored.filter(v => v.status === "registered"));
  }, []);

  if (!vendors.length)
    return (
      <div className="main">
        <p>No registered vendors yet. Please register from the profile icon.</p>
      </div>
    );

  return (
    <main className="main">
      <div className="vendor-grid">
        {vendors.map(v => (
          <div key={v.id} className="vendor-card">
            <div className="vendor-name">{v.firstName} {v.lastName}</div>
            <div className="vendor-details">{v.email} · {v.location}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
