import React from "react";
import FoodCard from "./FoodCard";

const FoodItems = ({ data, onAdd }) => {
  console.log(data);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-2.5">
      {data.map((food) => (
        <FoodCard key={food.id} {...food} onAdd={() => onAdd(food)} />
      ))}
    </div>
  );
};

export default FoodItems;
