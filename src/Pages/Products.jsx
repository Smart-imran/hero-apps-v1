import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../Components/ProductCard";
import Container from "./Container";

const Products = () => {
  const productList = useLoaderData();
  console.log(productList);
  return (
    <div className="bg-[#F5F5F5]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pt-10">
          {productList.map((proList) => (
            <ProductCard product={proList} key={proList.id}></ProductCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
