import "./Restaurant.scss";
import Header from "../../components/Header/Header";
import Banner from "./sections/Banner/Banner";
import Menu from "./sections/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMenu } from "../../app/slices/restaurantSlice";

export default function Restaurant() {
    const dispatch = useDispatch();
    const {restaurantKey} = useParams();
    const restaurant = useSelector((state) => state.restaurants[restaurantKey]);

    useEffect(() => {
        if(!restaurant) {
            const getMenu = async() => {
                try {
                    const response = await fetch(`../data/${restaurantKey}.json`);
                    const responseJS = await response.json();
                    dispatch(setMenu({key: restaurantKey, menu: responseJS}));
                  } catch(error) {
                    console.log(error);
                }
            };
            getMenu();
        }
    }, [dispatch, restaurantKey, restaurant]);

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