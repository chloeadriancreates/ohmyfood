import "./Order.scss";
import { useSelector } from "react-redux";
import OrderCard from "./OrderCard/OrderCard";

export default function Order({restaurantOrder}) {
    const {restaurants} = useSelector((state) => state.restaurants);

    return (
        <section className="order">
            <h3 className="order_title">{restaurants.find(restaurant => restaurant.id === restaurantOrder.id).name}</h3>
            {restaurantOrder.order.map(dish => <OrderCard dish={dish} restaurantId={restaurantOrder.id} key={dish.dish.id} />)}
            <p className="order_total">Total : {restaurantOrder.total}€</p>
        </section>
    );
}