import { Product } from "../types/shop";
import React from "react";

const Card: React.FC<Product> = ({ name, price }) => {
  return (
    <div className="flex aspect-square w-full flex-col justify-center rounded-xl bg-black p-4 text-center text-white">
      <div className="aspect-square overflow-hidden">
        <img
          className="h-full w-full cursor-pointer rounded-xl object-cover"
          src="https://picsum.photos/200"
          alt={name}
        />
      </div>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <button className="rounded-xl border-2 border-amber-700">
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
