import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import ProductCard from "../Components/ProductCard";
import Container from "./Container";

const Home = () => {
  const products = useLoaderData();
  const navigate = useNavigate();
  const visibleProducts = products.slice(0, 8);

  return (
    <div className="bg-[#E9E9E9] min-h-screen">
      {/* Header Section */}
      <div className="text-center px-4 py-12 md:py-16">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          We Build <br />
          <span className="text-[#632EE3]">Productive </span>Apps
        </h2>
        <p className="text-[#627382] mt-4 max-w-2xl mx-auto text-sm md:text-base">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br className="hidden sm:block" />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        {/* Store Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 px-4">
          <a
            href="https://play.google.com/store/games"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-bold text-base sm:text-xl bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition w-full sm:w-auto"
          >
            <img src="/public/google-play.png" alt="Google Play" className="w-6 sm:w-8" />
            Google Play
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-bold text-base sm:text-xl bg-white text-black px-4 sm:px-6 py-2 rounded-lg hover:bg-gray-200 transition w-full sm:w-auto"
          >
            <img src="/public/app-store.png" alt="App Store" className="w-6 sm:w-8" />
            App Store
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center items-center px-4">
        <img
          src="/public/hero.png"
          alt="Hero"
          className="w-full max-w-5xl object-contain"
        />
      </div>

      {/* Stats Section */}
      <div className="pt-10 flex flex-col justify-center items-center bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white px-4">
        <h2 className="font-bold text-2xl md:text-4xl text-center">
          Trusted by Millions, Built for You
        </h2>

        <div className="stats stats-vertical md:stats-horizontal py-10 text-white">
          {/* Downloads */}
          <div className="stat space-y-3">
            <div className="stat-figure">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 512 512"
                height="40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M376 160H272v153.37l52.69-52.68a16 16 0 0 1 22.62 22.62l-80 80a16 16 0 0 1-22.62 0l-80-80a16 16 0 0 1 22.62-22.62L240 313.37V160H136a56.06 56.06 0 0 0-56 56v208a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V216a56.06 56.06 0 0 0-56-56zM272 48a16 16 0 0 0-32 0v112h32z"></path>
              </svg>
            </div>
            <div>Total Downloads</div>
            <div className="stat-value text-4xl md:text-5xl text-white">
              29.6M
            </div>
            <div className="stat-desc text-white text-sm">
              21% more than last month
            </div>
          </div>

          {/* Reviews */}
          <div className="stat space-y-3">
            <div className="stat-figure">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 576 512"
                height="40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
              </svg>
            </div>
            <div>Total Reviews</div>
            <div className="stat-value text-4xl md:text-5xl">906K</div>
            <div className="stat-desc text-white text-sm">
              46% more than last month
            </div>
          </div>

          {/* Active Apps */}
          <div className="stat space-y-3">
            <div className="stat-figure">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 512 512"
                height="40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0 0 48 59.49zM345.8 174 89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z"></path>
              </svg>
            </div>
            <div>Active Apps</div>
            <div className="stat-value text-4xl md:text-5xl">132+</div>
            <div className="stat-desc text-white text-sm">
              31 more will Launch
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center pt-16 pb-10">
          Our Featured Apps
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 pb-10">
          {visibleProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>

        {/* Button */}
        {products.length > 8 && (
          <div className="flex justify-center pb-10">
            <button
              onClick={() => navigate("/products")}
              className="bg-[#632EE3] text-white px-6 py-2 rounded-lg hover:bg-[#4b22b5] transition text-sm sm:text-base"
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
