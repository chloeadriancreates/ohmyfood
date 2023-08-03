import "./RestaurantList.scss";
import RestaurantCard from "./RestaurantCard/RestaurantCard";
import { useSelector } from "react-redux";

export default function RestaurantList() {
    const {list} = useSelector((state) => state.restaurants);
    console.log(list);

    return (
        <section className="restaurantList">
            <h2 className="restaurantList_title">Restaurants</h2>
            <div className="restaurantList_cards">
                { list.map(restaurant => <RestaurantCard key={restaurant.key} restaurant={restaurant} />) }
            </div>
        </section>
    );
}