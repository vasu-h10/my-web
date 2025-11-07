import React from "react";
import "./VendorDishes.css";

export default function VendorDishes({ dishes }) {
  // Ensure at least 10 boxes
  const totalBoxes = 10;
  const dishBoxes = [...dishes];
  while (dishBoxes.length < totalBoxes - 1) { // reserve last for the + button
    dishBoxes.push({ name: "", image: "" });
  }

  return (
    <div className="vendor-dishes">
      {dishBoxes.map((dish, idx) => (
        <div key={idx} className="dish-card">
          <img src={dish.image || "/default-dish.png"} alt={dish.name || "Dish"} />
          <input type="text" placeholder="Dish name" defaultValue={dish.name} />
        </div>
      ))}
      <div className="dish-card add-dish">
        <span>+</span>
      </div>
    </div>
  );
}
