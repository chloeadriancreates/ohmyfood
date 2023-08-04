import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function Header() {
    let location = useLocation();
    const navigate = useNavigate();
    const {cart} = useSelector((state) => state.cart);

    const compoundCartQuantities = (cart) => {
        let quantity = 0;
        cart.forEach(restaurant => {
            restaurant.order.forEach(item => {
                quantity += item.quantity;
            });
        });
        return quantity;
    };

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <header className="header">
            <button onClick={() => navigate(-1)} className={`header_arrow ${location.pathname === "/" && "header_arrow--hidden"}`}>
                <i className="fas fa-arrow-left"></i>
            </button>
            <h1 className="header_logo">ohmyfood</h1>
            <Link to={"/cart"} className="header_basket">
                <i className="header_basket_icon fa-solid fa-basket-shopping"></i>
                <p className="header_basket_text">{compoundCartQuantities(cart)} plats</p>
            </Link>
        </header>
    );
}