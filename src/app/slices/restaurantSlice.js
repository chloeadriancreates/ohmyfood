import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setRestaurants: (state, action) => {
      state.restaurants = action.payload;
    }
  }
});

export const { setRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;