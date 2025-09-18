import React, { useState } from "react";
import Navbar from "../Componenets/Navbar";
import Category from "../Componenets/Category";
import FoodItems from "../Componenets/FoodItems";
import Card from "../Componenets/Card";
import FoodData from "../Data/FoodData";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        return [...prev, { ...item, qty: 1 }];
      }
    });

    // ✅ Jab item add ho to cart open karo
    setIsCartOpen(true);
  };

  const handleIncrease = (id) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
    );
  };

  const handleDecrease = (id) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <Navbar />
      <Category />
      <FoodItems data={FoodData} onAdd={handleAddToCart} />
      {isCartOpen && (
        <Card
          cart={cart}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
          onClose={() => setIsCartOpen(false)} // cross click
        />
      )}
    </>
  );
};

export default Home;
