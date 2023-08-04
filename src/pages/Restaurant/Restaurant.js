import "./Restaurant.scss";
import Header from "../../components/Header/Header";
import Banner from "./sections/Banner/Banner";
import Menu from "./sections/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getRestaurants } from "../../utils/getRestaurants";

export default function Restaurant() {
    const dispatch = useDispatch();
    const {restaurantKey} = useParams();
    const {restaurants} = useSelector((state) => state.restaurants);
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        if(!restaurants) {
            getRestaurants(dispatch);
        } else {
            setRestaurant(restaurants.filter(restaurant => restaurant.key === restaurantKey)[0]);
        }
    }, [dispatch, restaurants, restaurantKey]);

    if(restaurant) {
        return (
            <div>
                <Header back={true} />
                <Banner restaurant={restaurant} />
                <Menu menu={restaurant.menu} />
                <Footer />
            </div>
        );
    }
}