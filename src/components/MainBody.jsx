import React, { useEffect, useState } from "react";
import Search from "./Search";
import VendorCard from "./VendorCard";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import "./MainBody.css";

export default function MainBody() {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "vendors"), (snapshot) => {
      const liveVendors = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVendors(liveVendors);
    });
    return () => unsubscribe();
  }, []);

  const filteredVendors = vendors.filter((v) =>
    [v.firstName, v.lastName, v.email, v.location]
      .filter(Boolean)
      .some((field) =>
        field.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="main-body">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="vendor-grid">
        {filteredVendors.length > 0 ? (
          filteredVendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))
        ) : (
          <p className="no-vendors">No vendors found.</p>
        )}
      </div>
    </div>
  );
}
