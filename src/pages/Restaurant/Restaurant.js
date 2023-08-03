import "./Restaurant.scss";
import Header from "../../components/Header/Header";
import Banner from "./sections/Banner/Banner";
import Menu from "./sections/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Restaurant() {
    const loc = useLocation();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        if(loc.state && !restaurant) {
            setRestaurant(loc.state.restaurant);
        }
        console.log(restaurant);
    }, [loc, restaurant]);

    if(restaurant) {
        return (
            <div>
                <Header back={true} />
                <Banner restaurantKey={restaurant.key} name={restaurant.name} />
                <Menu menu={restaurant.menu} />
                <Footer />
            </div>
        );
    }
}