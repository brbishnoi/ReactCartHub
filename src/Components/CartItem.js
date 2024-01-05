import React from "react";

const CartItem = ({ item, onRemove }) => (
  <div className="flex items-center justify-between mb-4 border-b pb-2">
    <div className="flex items-center space-x-4">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-16 h-16 object-cover rounded-md"
      />
      <div>
        <p className="font-semibold text-gray-800">{item.title}</p>
        <p className="text-gray-500">${item.price}</p>
      </div>
    </div>
    <div>
      <button
        className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  </div>
);

export default CartItem;
