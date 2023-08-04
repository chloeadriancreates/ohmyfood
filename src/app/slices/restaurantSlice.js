import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
    toggleLike: (state, action) => {
      state.restaurants[action.payload.id].liked = !state.restaurants[action.payload.id].liked;
    }
  }
});

export const { setRestaurants, toggleLike } = restaurantSlice.actions;
export default restaurantSlice.reducer;