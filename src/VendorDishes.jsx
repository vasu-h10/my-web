import React from "react";
import "./VendorDishes.css";

const placeholderDishes = Array.from({ length: 10 }, (_, i) => ({
  name: `Dish ${i + 1}`,
  image: "/default-dish.png"
}));

export default function VendorDishes({ dishes }) {
  const allDishes = dishes.length ? dishes : placeholderDishes;

  return (
    <div className="vendor-dishes">
      {allDishes.map((dish, idx) => (
        <div key={idx} className="dish-card">
          <img src={dish.image} alt={dish.name} />
          <input type="text" placeholder="Dish name" defaultValue={dish.name} />
        </div>
      ))}
      <div className="dish-card add-dish">
        <span>+</span>
      </div>
    </div>
  );
}
