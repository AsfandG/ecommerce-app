import React, { useEffect, useState } from "react";
import { useShopContext } from "../context/shop-context";
import Product from "./product";
import Title from "./title";

const BestSeller = () => {
  const { products } = useShopContext();

  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSeller(bestProducts.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text={"BEST"} subText={"SELLERS"} />
        <p className="text-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Shop our most-loved products—customer favorites that deliver style,
          quality, and satisfaction every single time
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item) => (
          <Product
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
