import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addRestaurants: (state, action) => {
      for(const restaurant in action.payload) {
        state.cart.push({id: action.payload[restaurant].id, order: [], total: 0});
      }
    },
    addItem: (state, action) => {
        const restaurant = state.cart.find(restaurant => restaurant.id === action.payload.restaurantId);
        console.log(restaurant);
        const itemInCart = restaurant.order.find(item => item.dish.id === action.payload.dish.id);
        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          restaurant.order.push({ dish: action.payload.dish, quantity: 1 });
        }
        restaurant.total += action.payload.dish.price;
    }
  }
});

export const { addRestaurants, addItem } = cartSlice.actions;
export default cartSlice.reducer;