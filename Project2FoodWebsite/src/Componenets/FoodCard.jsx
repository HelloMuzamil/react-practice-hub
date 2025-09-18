import React from "react";

const FoodCard = ({ name, img, desc, rating, price, onAdd }) => {
  return (
    <div className="w-90 border rounded-md ml-2.5 h-90 flex flex-col">
      <img src={img} alt="" className="h-36 w-full object-cover rounded-t-md" />
      <div className="px-3 pt-3 flex-1">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-gray-800">{name}</h1>
          <p className="text-green-500 font-medium">${price}</p>
        </div>
        <p className="mt-2 text-sm text-gray-600">{desc.slice(0, 50)}</p>
        <p className="mt-3 text-base">⭐{rating}</p>
      </div>
      <div className="px-3 pb-3">
        <button
          onClick={onAdd}
          className="w-full py-2 rounded-md bg-green-500 text-white font-bold hover:bg-green-600 transition"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
