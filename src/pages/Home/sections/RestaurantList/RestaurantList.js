import "./RestaurantList.scss";
import RestaurantCard from "./RestaurantCard/RestaurantCard";
import { useSelector } from "react-redux";

export default function RestaurantList() {
    const {restaurants} = useSelector((state) => state.restaurants);
    console.log(restaurants);

    return (
        <section className="restaurantList">
            <h2 className="restaurantList_title">Restaurants</h2>
            <div className="restaurantList_cards">
                { restaurants.map(restaurant => <RestaurantCard key={restaurant.key} restaurant={restaurant} />) }
            </div>
        </section>
    );
}