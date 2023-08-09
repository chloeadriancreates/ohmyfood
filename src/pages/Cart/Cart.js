import "./Cart.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Order from "./sections/Order/Order";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Cart() {
    const {cart} = useSelector((state) => state.cart);
    const {restaurants} = useSelector((state) => state.restaurants);

    useEffect(() => {
        document.title = "Panier – Ohmyfood!";
    }, []);

    return (
        <div className="cart">
            <Header />
            <section className="cart_section">
                <h2 className="cart_section_title">Votre panier</h2>
                { (cart && restaurants && cart.find(restaurant => restaurant.order.length)) ?
                    cart.filter(restaurant => restaurant.order.length).map(restaurant => <Order restaurantOrder={restaurant} key={restaurant.id} />)
                :
                    <p className="cart_section_description">Votre panier est vide ! Découvrez notre sélection de restaurants pour vous régaler.</p>
                }
            </section>
            <Footer />
        </div>
    );
}