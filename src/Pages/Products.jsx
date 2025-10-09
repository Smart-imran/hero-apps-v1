import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../Components/ProductCard";
import Container from "./Container";

const Products = () => {
  const productList = useLoaderData();

  // ✅ Search state
  const [searchText, setSearchText] = useState("");

  // ✅ Filtered data based on search input
  const filteredProducts = productList.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="bg-[#E9E9E9] min-h-screen">
      <Container>
        {/* ✅ Top Section — Count + Search Bar */}
        <div className="text-center pt-5">
            <h2 className="text-5xl font-bold">Our All Application</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between px-6 pt-10 mb-8 gap-4">
          {/* Left: Count */}
          <p className="text-gray-700 font-medium text-lg text-center md:text-left">
            ({filteredProducts.length}) Apps Found
          </p>

          {/* Right: Search bar */}
          <input
            type="text"
            placeholder="Search apps..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border  rounded-lg px-4 py-2 w-full md:w-1/4 focus:outline-none border-[#632EE3] focus:ring-2 focus:ring-[#632EE3] transition-all duration-200"
          />
        </div>

        {/* ✅ Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-10">
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
