import React, { useState, useEffect } from "react";
import "./VendorDishes.css";

export default function VendorDishes({ vendor, updateVendor }) {
  const totalBoxes = 10;
  const initialDishes = [...(vendor.dishes || [])];
  while (initialDishes.length < totalBoxes - 1) {
    initialDishes.push({ name: "", image: "" });
  }

  const [dishes, setDishes] = useState(initialDishes);

  useEffect(() => {
    if (updateVendor) updateVendor({ ...vendor, dishes });

    try {
      const vendors = getVendors();
      const idx = vendors.findIndex(v => v.id === vendor.id);
      if (idx !== -1) {
        vendors[idx].dishes = dishes;
        saveVendors(vendors);
      }
    } catch(e) {
      if(e.name === "QuotaExceededError") {
        console.error("localStorage quota exceeded for vendor dishes!");
        alert("Cannot save images: storage limit reached.");
      }
    }
  }, [dishes]);

  const handleNameChange = (idx, name) => {
    const newDishes = [...dishes];
    newDishes[idx].name = name;
    setDishes(newDishes);
  };

  const handleImageUpload = (idx, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const newDishes = [...dishes];
      newDishes[idx].image = e.target.result;
      setDishes(newDishes);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="vendor-dishes">
      {dishes.map((dish, idx) => (
        <div key={idx} className="dish-card">
          <img src={dish.image || "/default-dish.png"} alt={dish.name || "Dish"} />
          <input
            type="text"
            placeholder="Dish name"
            value={dish.name}
            onChange={(e) => handleNameChange(idx, e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(idx, e.target.files[0])}
          />
        </div>
      ))}
      <div className="dish-card add-dish">
        <span>+</span>
      </div>
    </div>
  );
}
