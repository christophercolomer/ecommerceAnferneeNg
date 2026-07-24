import { useContext } from "react";
import { Product } from "../types/shop";
import { ShopContext } from "../context/ShopContext";

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const context = useContext(ShopContext);
  if (!context) {
    return null;
  }

  const { dispatch } = context;

  return (
    <div className="flex aspect-square w-full flex-col justify-center rounded-xl bg-black p-4 text-center text-white">
      <div className="aspect-square overflow-hidden">
        <img
          className="h-full w-full cursor-pointer rounded-xl object-cover"
          src={product.image}
          alt={product.name}
        />
      </div>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <button
        className="rounded-xl border-2 border-amber-700"
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
