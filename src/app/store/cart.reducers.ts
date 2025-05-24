import { addToCart, removeFromCart } from "./cart.action";
import { createReducer, on } from '@ngrx/store';

export const initialState = 0;

export const cartReducer = createReducer(
    initialState,
    on(addToCart, (state: any, props: any) =>{
         console.log("msg: ", props);
         return state + 1;
    }),
    on(removeFromCart, state => Math.max(state - 1,0)),
)