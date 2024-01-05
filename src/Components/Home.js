// Home.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(storedCart);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products from the API using Axios
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    // Filter products based on search term and price range
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!minPrice || product.price >= parseFloat(minPrice)) &&
        (!maxPrice || product.price <= parseFloat(maxPrice))
    );
    setFilteredProducts(filtered);
  }, [products, searchTerm, minPrice, maxPrice]);

  useEffect(() => {
    // Load cart data from localStorage on component mount
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    // Save cart data to localStorage whenever the cart changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleViewCart = () => {
    navigate("/cart");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <Logout />
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center mb-8">
        <button
          onClick={handleViewCart}
          className="relative p-3 bg-blue-500 text-red rounded-md hover:bg-blue-600"
        >
          <FaCartPlus className="text-2xl" />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 text-white  rounded-full p-1">
              {cart.length}
            </span>
          )}
        </button>
        <div className="text-2xl">
          Total Amount of cart: $
          {cart.reduce((total, item) => total + item.price, 0)}
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded-md w-full md:w-auto"
          />
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="p-2 border rounded-md w-full md:w-auto"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="p-2 border rounded-md w-full md:w-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
