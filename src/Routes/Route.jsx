import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";
import Install from "../Pages/Install";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading.....</p>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/appsData.json").then((res) => res.json()),
      },
      {
        path: "/products",
        Component: Products,
        loader: () => fetch("/appsData.json").then((res) => res.json()),
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: async ({ params }) => {
          const data = await fetch("/appsData.json").then((res) => res.json());
          return data.find((product) => product.id.toString() === params.id);
        },
      },
      {
        path: "/installed",
        element: <Install />,
      },
    ],
  },
]);

export default router;
