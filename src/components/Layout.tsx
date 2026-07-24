import { useContext } from "react";
import Card from "./Card";
import { ShopContext } from "../context/ShopContext";

const Layout = () => {
  const context = useContext(ShopContext);
  if (!context) {
    return null;
  }

  const { state } = context

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {state.products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Layout;
