import "./RestaurantList.scss";
import RestaurantCard from "./RestaurantCard/RestaurantCard";

export default function RestaurantList({title, restaurants}) {
    return (
        <section className="restaurantList">
            <h2 className="restaurantList_title">{title}</h2>
            <div className="restaurantList_cards">
                { restaurants.map(restaurant => <RestaurantCard key={restaurant.key} restaurant={restaurant} />) }
            </div>
        </section>
    );
}