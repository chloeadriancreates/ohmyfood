import "./Home.scss";
import Header from "../../components/Header/Header";
import Location from "./sections/Location/Location";
import Hero from "./sections/Hero/Hero";
import RestaurantList from "./sections/RestaurantList/RestaurantList";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRestaurants } from "../../utils/getRestaurants";

export default function Home() {
    const dispatch = useDispatch();
    const {restaurants} = useSelector((state) => state.restaurants);
    const [favoriteRestaurants, setFavoriteRestaurants] = useState(null);
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        if(!restaurants) {
            setLoaded(false);
            getRestaurants(dispatch);
        } else {
            setFavoriteRestaurants(restaurants.filter(restaurant => restaurant.liked === true));
        }
    }, [dispatch, restaurants]);

    useEffect(() => {
        let timer = setTimeout(() => setLoaded(true), 7000);
        return () => {
            clearTimeout(timer);
        };
    }, [loaded]);

   if(!loaded) {
        return <Loader />;
   } else {
        return (
            <div className="home">
                <Header back={false} />
                <Location />
                <Hero />
                { restaurants &&
                    <RestaurantList title="Tous nos restaurants" restaurants={restaurants} />
                }
                { (favoriteRestaurants && favoriteRestaurants.length > 0) &&
                    <RestaurantList title="Vos restaurants préférés" restaurants={favoriteRestaurants} />
                }
                <Footer />
            </div>
        );
   }
}