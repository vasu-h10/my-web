import React, { useState, useEffect } from "react";
import "./VendorDishes.css";
import { getVendors, saveVendors } from "../utils/VendorStorage";

export default function VendorDishes({ vendor, updateVendor }) {
  const totalBoxes = 10;
  const initialDishes = [...(vendor.dishes || [])];
  while (initialDishes.length < totalBoxes) {
    initialDishes.push({ name: "", image: "" });
  }

  const [dishes, setDishes] = useState(initialDishes);

  useEffect(() => {
    if (updateVendor) {
      updateVendor({ ...vendor, dishes });
    }
    const vendors = getVendors();
    const idx = vendors.findIndex((v) => v.id === vendor.id);
    if (idx !== -1) {
      vendors[idx].dishes = dishes;
      saveVendors(vendors);
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
          <div className="dish-image-box">
            <img
              key={dish.image || idx}
              src={dish.image || "/default-dish.png"}
              alt={dish.name || "Dish"}
              className="dish-image"
            />
            <label className="upload-btn">
              +
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(idx, e.target.files[0])}
                style={{ display: "none" }}
              />
            </label>
          </div>
          <input
            type="text"
            placeholder="Dish name"
            value={dish.name}
            onChange={(e) => handleNameChange(idx, e.target.value)}
          />
        </div>
      ))}
      <div className="dish-card add-dish">
        <span>+</span>
      </div>
    </div>
  );
}
