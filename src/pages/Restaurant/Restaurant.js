import Header from "../../components/Header/Header";
import Banner from "./sections/Banner/Banner";
import Menu from "./sections/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Error from "../../pages/Error/Error";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getRestaurants } from "../../utils/getRestaurants";

export default function Restaurant() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {restaurants} = useSelector((state) => state.restaurants);
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        if(!restaurants) {
            getRestaurants(dispatch);
        } else {
            setRestaurant(restaurants.filter(restaurant => restaurant.id === parseInt(id))[0]);
        }
    }, [dispatch, restaurants, id]);

    useEffect(() => {
        if(restaurant) {
            document.title = `${restaurant.name} – Ohmyfood!`;
        }
    }, [restaurant]);

    if(restaurant !== null) {
        if(restaurant) {
            return (
                <div>
                    <Header />
                    <Banner restaurant={restaurant} />
                    <Menu restaurant={restaurant} />
                    <Footer />
                </div>
            );
        } else {
            return <Error />;
        }
    }
}