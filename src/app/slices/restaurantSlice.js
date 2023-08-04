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
      const restaurant = state.restaurants.find(restaurant => restaurant.id === action.payload.id);
      restaurant.liked = !restaurant.liked;
    }
  }
});

export const { setRestaurants, toggleLike } = restaurantSlice.actions;
export default restaurantSlice.reducer;