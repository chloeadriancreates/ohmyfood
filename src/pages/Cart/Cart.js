import "./Cart.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Order from "./sections/Order/Order";
import { useSelector } from "react-redux";

export default function Cart() {
    const {cart} = useSelector((state) => state.cart);
    const {restaurants} = useSelector((state) => state.restaurants);

    return (
        <div>
            <Header back={true} />
            <section className="cart">
                <h2 className="cart_title">Votre panier</h2>
                { (cart && restaurants) &&
                    cart.filter(restaurant => restaurant.order.length).map(restaurant => <Order restaurantOrder={restaurant} key={restaurant.id} />)
                }
            </section>
            <Footer />
        </div>
    );
}