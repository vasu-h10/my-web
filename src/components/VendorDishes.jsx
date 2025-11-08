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
    if (updateVendor) {
      updateVendor({ ...vendor, dishes });
    }
  }, [dishes]);

  const handleNameChange = (idx, name) => {
    const newDishes = [...dishes];
    newDishes[idx].name = name;
    setDishes(newDishes);
  };

  const handleImageUpload = (idx, file) => {
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
          <img
            src={dish.image || "/cat-placeholder.png"}
            alt={dish.name || "Dish"}
          />
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
