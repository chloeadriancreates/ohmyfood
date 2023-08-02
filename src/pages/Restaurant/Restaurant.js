import "./Restaurant.scss";
import Header from "../../components/Header/Header";
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

    return (
        <div>
            <Header back={true} />
        </div>
    )
}