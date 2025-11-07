import React from "react";
import "./VendorDishes.css";

export default function VendorDishes({ dishes }) {
  return (
    <div className="vendor-dishes">
      {dishes.map((dish, idx) => (
        <div key={idx} className="dish-card">
          <img src={dish.image || "/default-dish.png"} alt={dish.name} />
          <input type="text" placeholder="Dish name" defaultValue={dish.name} />
        </div>
      ))}
      <div className="dish-card add-dish">
        <span>+</span>
      </div>
    </div>
  );
}
// Updated scrollable dish previews
