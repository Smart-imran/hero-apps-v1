import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Container from "./Container";
import { LuDownload } from "react-icons/lu";
import { MdReviews } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { addInstalledApp, getInstalledApps } from "../utils/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const product = useLoaderData();
  const navigate = useNavigate();

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installed = getInstalledApps();
    const exists = installed.find((p) => p.id === product.id);
    if (exists) setIsInstalled(true);
  }, [product.id]);

  const handleInstall = () => {
    addInstalledApp(product);
    setIsInstalled(true);
    toast.success("Installed Successfully ✅");
    navigate("/installed");
  };

  if (!product) {
    return (
      <Container>
        <p className="text-center py-10">Product not found!</p>
      </Container>
    );
  }

  return (
    <div className="bg-[#E9E9E9] min-h-screen py-10">
      <Container>
        <button
          className="mb-8 px-5 py-2 bg-[#632EE3] text-white rounded-lg hover:bg-[#4b1fc9] transition-all"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              {product.title}{" "}
              <span className="text-gray-500 text-lg">
                | {product.companyName}
              </span>
            </h2>

            <p className="text-gray-600">
              Developed by{" "}
              <span className="text-[#632EE3] font-medium">
                {product.developer || "productive.io"}
              </span>
            </p>

            <hr className="border-purple-500 border-2 w-full my-4" />

            <div className="flex justify-between text-center">
              <div>
                <div className="text-sm text-gray-600">Downloads</div>
                <div className="font-extrabold text-4xl flex items-center gap-2">
                  {product.downloads} <LuDownload style={{ color: "#632EE3" }} />
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-600">Average Rating</div>
                <div className="font-extrabold text-4xl flex items-center justify-center">
                  {product.ratingAvg} <FaStar style={{ color: "#632EE3" }} />
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-600">Total Reviews</div>
                <div className="flex items-center gap-2 font-extrabold text-4xl">
                  {product.reviews || "N/A"}
                  <MdReviews style={{ color: "#632EE3" }} />
                </div>
              </div>
            </div>

            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`px-6 py-3 rounded-lg text-xl font-medium text-white transition-all ${
                isInstalled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#632EE3] hover:bg-[#4b1fc9]"
              }`}
            >
              {isInstalled ? "Installed" : "Install Now"}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
