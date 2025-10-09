import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../Components/ProductCard";
import Container from "./Container";

const Home = () => {
  const products = useLoaderData();

  const [showAll, setShowAll] = useState(false);

  const [searchText, setSearchText] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      {/* Header Section */}
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

        {/* Store Buttons */}
        <div className="flex justify-center gap-4 mt-6 pb-10">
          <a
            href="https://play.google.com/store/games"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-bold text-xl bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            <img src="/public/google-play.png" alt="" /> Google Play
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-bold text-xl bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            <img src="/public/app-store.png" alt="" /> App Store
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex justify-center items-center">
        <img src="/public/hero.png" alt="" />
      </div>

      <div className="pt-10 flex flex-col justify-center items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
        <h2 className="text-white font-bold text-4xl text-center">
          Trusted by Millions, Built for You
        </h2>

        <div className="stats stats-vertical lg:stats-horizontal text-white py-10">
          {/* Total Downloads */}
          <div className="stat space-y-3">
            <div className="stat-figure">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M376 160H272v153.37l52.69-52.68a16 16 0 0 1 22.62 22.62l-80 80a16 16 0 0 1-22.62 0l-80-80a16 16 0 0 1 22.62-22.62L240 313.37V160H136a56.06 56.06 0 0 0-56 56v208a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V216a56.06 56.06 0 0 0-56-56zM272 48a16 16 0 0 0-32 0v112h32z"></path>
              </svg>
            </div>
            <div>Total Downloads</div>
            <div className="stat-value text-5xl">29.6M</div>
            <div className="stat-desc text-white">21% more than last month</div>
          </div>

          {/* Total Reviews */}
          <div className="stat space-y-3">
            <div className="stat-figure">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                height="48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
              </svg>
            </div>
            <div>Total Reviews</div>
            <div className="stat-value">906K</div>
            <div className="stat-desc text-white">46% more than last month</div>
          </div>

          {/* Active Apps */}
          <div className="stat space-y-3">
            <div className="stat-figure">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0 0 48 59.49zM345.8 174 89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z"></path>
              </svg>
            </div>
            <div>Active Apps</div>
            <div className="stat-value">132+</div>
            <div className="stat-desc text-white">31 more will Launch</div>
          </div>
        </div>
      </div>
      <br />

      <Container>
        {/* ✅ Search Section  */}
        {showAll && (
          <div className="flex items-center justify-between px-6 mb-8">
            {/* Left side  */}
            <p className="text-gray-700 font-medium">
              ({filteredProducts.length}) Apps Found
            </p>

            {/* Right side  */}
            <input
              type="text"
              placeholder="Search apps..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
            />
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pt-10">
          {visibleProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>

        {/*  See All Button */}
        {!showAll && filteredProducts.length > 8 && (
          <div className="flex justify-center pb-10">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#632EE3] text-white px-6 py-2 rounded-lg hover:bg-[#4b22b5] transition"
            >
              See All
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Home;
