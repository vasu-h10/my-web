import React, { useEffect, useState } from "react";
import "./MainBody.css";
import Search from "./Search";
import VendorCard from "./VendorCard";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export default function MainBody({ refreshVendors }) {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const loadVendors = async () => {
    const q = query(
      collection(db, "vendors"),
      where("status", "==", "registered"),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(q);
    const vendorList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setVendors(vendorList);
  };

  useEffect(() => {
    loadVendors();
  }, []);

  useEffect(() => {
    if (refreshVendors) refreshVendors(loadVendors);
  }, [refreshVendors]);

  const filteredVendors = vendors.filter(v =>
    v.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!vendors.length)
    return <div className="main"><p>No registered vendors yet. Please register from the profile icon.</p></div>;

  return (
    <main className="main">
      <Search value={searchTerm} onChange={setSearchTerm} />
      <div className="vendor-grid">
        {filteredVendors.map(v => (
          <VendorCard key={v.id} vendor={v} onVendorUpdate={loadVendors} />
        ))}
        {filteredVendors.length === 0 && <p>No vendors match your search.</p>}
      </div>
    </main>
  );
}
