import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
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
        if(quantity === 0) {
            return "Panier vide";
        } else if(quantity === 1) {
            return "1 plat";
        } else {
            return `${quantity} plats`;
        }
    };

    return (
        <header className="header">
            <button onClick={() => navigate(-1)} className={`header_arrow ${location.pathname === "/" && "header_arrow--hidden"}`}>
                <i className="fas fa-arrow-left"></i>
            </button>
            <Link to={"/"} className="header_logo">
                <h1 className="header_logo_text">ohmyfood</h1>
            </Link>
            <Link to={"/cart"} className="header_basket">
                <i className="header_basket_icon fa-solid fa-basket-shopping"></i>
                <p className="header_basket_text">{compoundCartQuantities(cart)}</p>
            </Link>
        </header>
    );
}