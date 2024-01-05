import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import Logout from "./Logout";
const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleRemoveFromCart = (productId) => {
    const itemIndex = cart.findIndex((item) => item.id === productId);
  
    if (itemIndex !== -1) {
      // If the item is found, create a new array without the item at that index
      const updatedCart = [...cart.slice(0, itemIndex), ...cart.slice(itemIndex + 1)];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
  

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="p-4 border rounded-md">
      <div className="flex justify-end mb-4">
        <Logout />
      </div>
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={() => handleRemoveFromCart(item.id)}
            />
          ))}
          <div className="mt-4">
            <span className="text-xl font-semibold">
              Total Product : {cart.length}
            </span>

            <p className="text-xl font-semibold">
              Total Amount: ${getTotalPrice()}
            </p>

            <button className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
