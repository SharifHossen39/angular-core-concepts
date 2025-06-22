import { createAction, props } from '@ngrx/store';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const addToCart = createAction(
  '[Item] Add To Cart',
  props<{ item: CartItem }>()
);
export const removeFromCart = createAction(
  '[Item] Remove From Cart',
  props<{ id: number }>()
);
