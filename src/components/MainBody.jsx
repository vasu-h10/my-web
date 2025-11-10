import React, { useState, useEffect } from "react";
import "./MainBody.css";
import Search from "./Search";
import VendorCard from "./VendorCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function MainBody({ refreshTrigger }) {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVendors = async () => {
      setLoading(true);
      try {
        const colRef = collection(db, "vendors");
        const snapshot = await getDocs(colRef);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("Vendors from Firestore:", data); // Debug log
        setVendors(data.filter(v => v.status === "registered"));
      } catch (err) {
        console.error("Error fetching vendors:", err);
        setVendors([]);
      }
      setLoading(false);
    };
    loadVendors();
  }, [refreshTrigger]);

  const filteredVendors = vendors.filter(v =>
    (v.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     v.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     v.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     v.location?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) return <div className="main"><p>Loading vendors...</p></div>;

  return (
    <main className="main">
      <Search value={searchTerm} onChange={setSearchTerm} />
      <div className="vendor-grid">
        {filteredVendors.length > 0 ? (
          filteredVendors.map(v => (
            <VendorCard key={v.id} vendor={v} />
          ))
        ) : (
          <p>No vendors match your search.</p>
        )}
      </div>
    </main>
  );
}
