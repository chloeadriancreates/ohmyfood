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
        const itemInCart = restaurant.order.find(item => item.dish.id === action.payload.dish.id);
        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          restaurant.order.push({ dish: action.payload.dish, quantity: 1 });
        }
        restaurant.total += action.payload.dish.price;
    },
    decrementQuantity: (state, action) => {
      const restaurant = state.cart.find(restaurant => restaurant.id === action.payload.restaurantId);
      const itemInCart = restaurant.order.find(item => item.dish.id === action.payload.dishId);
      itemInCart.quantity--;
      restaurant.total -= itemInCart.dish.price;
      if(itemInCart.quantity === 0) {
        restaurant.order = restaurant.order.filter(item => item !== itemInCart);
      }
    },
    incrementQuantity: (state, action) => {
      const restaurant = state.cart.find(restaurant => restaurant.id === action.payload.restaurantId);
      const itemInCart = restaurant.order.find(item => item.dish.id === action.payload.dishId);
      itemInCart.quantity++;
      restaurant.total += itemInCart.dish.price;
    }
  }
});

export const { addRestaurants, addItem, decrementQuantity, incrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;