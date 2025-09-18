import React from "react";
import { FaWindowClose } from "react-icons/fa";
import CartItem from "./CartItem";

const Card = ({ cart, onIncrease, onDecrease, onRemove, onClose }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  return (
    <div className="fixed top-0 right-0 bg-[#f3f3f3] w-80 h-full rounded-l-3xl border border-gray-200 p-3 shadow-lg z-50">
      <div className="text-black font-extrabold flex justify-between items-center mr-1 mt-3">
        My Orders
        <FaWindowClose
          onClick={onClose}
          className="text-red-500 text-2xl cursor-pointer"
        />
      </div>

      <div className="mt-4 overflow-y-auto h-[70%]">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onIncrease={() => onIncrease(item.id)}
            onDecrease={() => onDecrease(item.id)}
            onRemove={() => onRemove(item.id)}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full p-3 bg-white border-t">
        <h1>
          Items: <span className="text-green-500">{totalItems}</span>
        </h1>
        <h1>
          Total Amount: <span className="text-green-500">${totalAmount}</span>
        </h1>
        <button className="w-full py-2 mt-2 rounded-md bg-green-500 text-white font-bold hover:bg-green-600 transition text-center">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Card;
