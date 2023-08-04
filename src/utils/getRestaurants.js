import { setRestaurants } from "../app/slices/restaurantSlice";

export const getRestaurants = async(dispatch) => {
    try {
        const response = await fetch("/data/restaurants.json");
        const responseJS = await response.json();
        const newRestaurants = responseJS.filter(restaurant => restaurant.new).sort((a, b) => a.name.localeCompare(b.name));
        const oldRestaurants = responseJS.filter(restaurant => !restaurant.new).sort((a, b) => a.name.localeCompare(b.name));
        const formattedRestaurants = [...newRestaurants, ...oldRestaurants];
        formattedRestaurants.forEach(restaurant => {
            restaurant.liked = false;
            restaurant.id = formattedRestaurants.indexOf(restaurant);
        });
        dispatch(setRestaurants(formattedRestaurants));
      } catch(error) {
        console.log(error);
    }
};