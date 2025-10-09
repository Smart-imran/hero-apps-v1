import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Container from "../Pages/Container";

const ProductCard = ({ product }) => {
  const { title, image, downloads, ratingAvg, companyName } = product;

  return (
    <div className="bg-white w-80 rounded-2xl shadow-lg p-4 cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Title */}
      <h2 className="text-center font-semibold text-gray-800 mt-3 text-sm">
        {title}: {companyName}
      </h2>

     
      <div className="flex justify-between items-center mt-3 px-1">        
        <div className="flex items-center gap-1 bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
          <FiDownload className="text-green-600" />
          {downloads}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
          <FaStar className="text-purple-600" />
          {ratingAvg}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
