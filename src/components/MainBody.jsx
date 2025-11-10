import React, { useState, useEffect } from "react";
import "./MainBody.css";
import Search from "./Search";
import VendorCard from "./VendorCard";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function MainBody() {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const colRef = collection(db, "vendors");

    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVendors(data.filter(v => v.status === "registered"));
    });

    return () => unsubscribe();
  }, []);

  const filteredVendors = vendors.filter(v =>
    v.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="main">
      <Search value={searchTerm} onChange={setSearchTerm} />
      <div className="vendor-grid">
        {filteredVendors.length > 0 ? (
          filteredVendors.map(v => <VendorCard key={v.id} vendor={v} />)
        ) : (
          <p>No vendors match your search.</p>
        )}
      </div>
    </main>
  );
}
