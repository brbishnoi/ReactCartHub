import React from "react";

const Product = ({ product, onAddToCart }) => {
  const { title, description, price, thumbnail } = product;

  return (
    <div className="border p-4 rounded-md flex flex-col">
      <img
        src={thumbnail}
        alt={title}
        className="object-cover w-full h-40 mb-2 rounded-md"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <p className="mt-2">${price}</p>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
