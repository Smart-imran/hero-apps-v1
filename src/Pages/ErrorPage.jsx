import React from 'react';
import {  useNavigate } from "react-router";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 text-center">
        This is Error 
      </h2>
      <img
        src="/public/error-404.png"
        alt="Error 404"
        className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
      />

      <button
          className="mb-8 px-5 mt-5 py-2 bg-[#632EE3] text-white rounded-lg hover:bg-[#4b1fc9] transition-all"
          onClick={() => navigate(-1)}
        >
          Go Home
        </button>
    </div>
    );
};

export default ErrorPage;