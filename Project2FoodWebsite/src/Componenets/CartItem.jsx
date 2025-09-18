import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = ({
  name,
  img,
  price,
  qty,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-xl p-3 mb-2">
      <img
        src={img}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1 mx-3">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-green-600 font-medium">${price}</p>
      </div>

      <div className="flex items-center border rounded-lg">
        <button onClick={onDecrease} className="px-2 py-1 text-lg">
          −
        </button>
        <span className="px-2 font-semibold">{qty}</span>
        <button onClick={onIncrease} className="px-2 py-1 text-lg">
          +
        </button>
      </div>

      <FaTrash
        onClick={onRemove}
        className="ml-3 text-gray-500 hover:text-red-500 cursor-pointer"
      />
    </div>
  );
};

export default CartItem;
