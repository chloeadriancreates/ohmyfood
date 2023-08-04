import { configureStore } from "@reduxjs/toolkit";
import restaurantSliceReducer from "./slices/restaurantSlice";
import cartSliceReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantSliceReducer,
    cart: cartSliceReducer
  }
});