import "./Restaurant.scss";
import Header from "../../components/Header/Header";
import Banner from "./sections/Banner/Banner";
import Menu from "./sections/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Restaurant() {
    const {restaurantKey} = useParams();
    const {restaurants} = useSelector((state) => state.restaurants);
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        if(restaurants) {
            setRestaurant(restaurants.filter(restaurant => restaurant.key === restaurantKey)[0]);
        }
    }, [restaurants, restaurantKey]);

    useEffect(() => {
        console.log(restaurant);
    }, [restaurant]);

    if(restaurant) {
        return (
            <div>
                <Header back={true} />
                    <Banner restaurantKey={restaurantKey} name={restaurant.name} />
                    <Menu menu={restaurant.menu} />
                <Footer />
            </div>
        );
    }
}