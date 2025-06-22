import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from './cart.action';
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const initialState: CartItem[] = [];

export const cartReducer = createReducer(
  initialState,

  on(addToCart, (state, { item }) => [...state, item]),

  on(removeFromCart, (state, { id }) => {
      console.log('III', id);
      return state.filter((cartItem) => cartItem.id !== id);
  })
);
