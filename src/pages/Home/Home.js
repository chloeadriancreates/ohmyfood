import "./Home.scss";
import Header from "../../components/Header/Header";
import Location from "./sections/Location/Location";
import Hero from "./sections/Hero/Hero";
import RestaurantList from "./sections/RestaurantList/RestaurantList";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

export default function Home() {
    const [restaurants, setRestaurants] = useState(null);
    const [formattedRestaurants, setFormattedRestaurants] = useState(null);
    const [loaded, setLoaded] = useState(false);

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
        let timer = setTimeout(() => setLoaded(true), 7000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        if(restaurants) {
            const newRestaurants = restaurants.filter(restaurant => restaurant.new).sort((a, b) => a.name.localeCompare(b.name));
            const oldRestaurants = restaurants.filter(restaurant => !restaurant.new).sort((a, b) => a.name.localeCompare(b.name));
            setFormattedRestaurants([...newRestaurants, ...oldRestaurants]);
        }
    }, [restaurants]);

    return (
        <div className="home">
            {!loaded &&
                <Loader />
            }
            <Header back={false} />
            <Location />
            <Hero />
            { formattedRestaurants &&
                <RestaurantList restaurants={formattedRestaurants} />
            }
            <Footer />
        </div>
    );
}