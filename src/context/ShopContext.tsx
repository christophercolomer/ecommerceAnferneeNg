import { createContext, ReactNode, useReducer, Dispatch } from "react";
import products from "../data/products";
import { shopReducer, Action } from "./shopReducer";
import { State } from "../types/shop";

const initialState: State = {
  products,
  cart: [],
  filters: {
    searchQuery: "",
    category: "All",
    maxPrice: 1000,
    sortBy: "default",
  },
  isCartOpen: false,
};

interface ShopContextType {
  state: State;
  dispatch: Dispatch<Action>;
}

export const ShopContext = createContext<ShopContextType | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
}
