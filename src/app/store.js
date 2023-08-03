import { configureStore } from "@reduxjs/toolkit";
import restaurantSliceReducer from "./slices/restaurantSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantSliceReducer
  }
});