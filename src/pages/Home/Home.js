import "./Home.scss";
import Header from "../../components/Header/Header";
import Location from "./sections/Location/Location";
import Hero from "./sections/Hero/Hero";
import RestaurantList from "./sections/RestaurantList/RestaurantList";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRestaurantList } from "../../app/slices/restaurantSlice";

export default function Home() {
    const dispatch = useDispatch();
    const {list} = useSelector((state) => state.restaurants);
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        if(!list) {
            setLoaded(false);
            const getRestaurants = async() => {
                try {
                    const response = await fetch("./data/restaurants.json");
                    const responseJS = await response.json();
                    const newRestaurants = responseJS.filter(restaurant => restaurant.new).sort((a, b) => a.name.localeCompare(b.name));
                    const oldRestaurants = responseJS.filter(restaurant => !restaurant.new).sort((a, b) => a.name.localeCompare(b.name));
                    dispatch(setRestaurantList([...newRestaurants, ...oldRestaurants]));
                  } catch(error) {
                    console.log(error);
                }
            };
            getRestaurants();
        }
    }, [dispatch, list]);

    useEffect(() => {
        let timer = setTimeout(() => setLoaded(true), 7000);
        return () => {
            clearTimeout(timer);
        };
    }, [loaded]);

    return (
        <div className="home">
            {!loaded &&
                <Loader />
            }
            <Header back={false} />
            <Location />
            <Hero />
            { list &&
                <RestaurantList />
            }
            <Footer />
        </div>
    );
}