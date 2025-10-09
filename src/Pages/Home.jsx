import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../Components/ProductCard";
import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Home = () => {
  const products = useLoaderData();
  //   console.log(products);

  return (
    <div className="bg-[#F5F5F5]">
      <div>
        <h2 className="text-7xl text-center font-bold pt-10">
          We Build <br /> <span className="text-[#632EE3]">Productive </span>
          Apps
        </h2>
        <p className="text-center text-[#627382] mt-4">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        {/* Button */}
        <div className="flex justify-center gap-4 mt-6 pb-10">
          <a
            href="https://play.google.com/store/games"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            <FaGooglePlay /> Google Play
          </a>

          <a
            href="https://www.apple.com/app-store/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            <FaAppStoreIos /> App Store
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
