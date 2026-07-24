import { Product, State } from "../types/shop";

export type Action = 
| {type: "ADD_TO_CART"; payload: Product}
| {type: "REMOVE_FROM_CART"; payload: string}
| {type: "UPDATE_QUANTITY"; payload: string}
| {type: "CLEAR_CART"; payload: string}
| {type: "SET_SEARCH_QUERY"; payload: string}
| {type: "SET_CATEGORY"; payload: string}
| {type: "SET_SORT"; payload: string}
| {type: "TOGGLE_CART"};


export function shopReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, {...action.payload, quantity: 1}],
      };

    default:
      return state;
  }
}