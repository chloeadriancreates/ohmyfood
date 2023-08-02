import "./Home.scss";
import Header from "../../components/Header/Header";
import Location from "./sections/Location/Location";
import Hero from "./sections/Hero/Hero";
import RestaurantList from "./sections/RestaurantList/RestaurantList";
import { useEffect, useState } from "react";

export default function Home() {
    const [restaurants, setRestaurants] = useState(null);
    const [formattedRestaurants, setFormattedRestaurants] = useState(null);

    useEffect(() => {
        const getRestaurants = async() => {
            try {
                const response = await fetch("./restaurants.json");
                setRestaurants(await response.json());
              } catch(error) {
                console.log(error);
            }
        };
        getRestaurants();
    }, []);

    useEffect(() => {
        if(restaurants) {
            const newRestaurants = restaurants.filter(restaurant => restaurant.new).sort((a, b) => a.name.localeCompare(b.name));
            const oldRestaurants = restaurants.filter(restaurant => !restaurant.new).sort((a, b) => a.name.localeCompare(b.name));
            setFormattedRestaurants([...newRestaurants, ...oldRestaurants]);
        }
    }, [restaurants]);

    return (
        <div>
            <Header back={false} />
            <Location />
            <Hero />
            { formattedRestaurants &&
                <RestaurantList restaurants={formattedRestaurants} />
            }
        </div>
    );
}