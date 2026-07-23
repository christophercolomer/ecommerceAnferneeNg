import Card from "./Card";
import { Product } from "../types/shop";
import products from "../data/products";

const Layout = () => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product: Product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Layout;
