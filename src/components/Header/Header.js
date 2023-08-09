import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
    let location = useLocation();
    const navigate = useNavigate();
    const {cart} = useSelector((state) => state.cart);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth);
        });
    }, []);

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
            <button aria-label="Précédent" onClick={() => navigate(-1)} className={`header_arrow ${location.pathname === "/" && "header_arrow--hidden"}`}>
                <i className="fas fa-arrow-left"></i>
            </button>
            { (location.pathname === "/" || windowWidth > 400) &&
                <Link to={"/"} className="header_logo" title="Accueil">
                    <h1 className="header_logo_text">ohmyfood</h1>
                </Link>
            }
            <Link to={"/cart"} className="header_basket" title="Panier">
                <i className="header_basket_icon fa-solid fa-basket-shopping"></i>
                <p className="header_basket_text">{compoundCartQuantities(cart)}</p>
            </Link>
        </header>
    );
}