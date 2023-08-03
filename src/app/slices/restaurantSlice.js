import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setRestaurantList: (state, action) => {
      state.list = action.payload;
    },
    setMenu: (state, action) => {
      state[action.payload.key] = action.payload.menu;
    }
  }
});

export const { setRestaurantList, setMenu } = restaurantSlice.actions;
export default restaurantSlice.reducer;