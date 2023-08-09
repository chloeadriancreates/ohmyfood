import "./MenuCard.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../../app/slices/cartSlice";

export default function MenuCard({dish, itemNumber, restaurantId}) {
    const dispatch = useDispatch();

    return (
        <div className={`menuCard menuItem--${itemNumber}`}>
            <div className="menuCard_caption">
                <div>
                    <h3 className="menuCard_caption_title">{dish.name}</h3>
                    <p className="menuCard_caption_description">{dish.description}</p>
                </div>
            </div>
            <button aria-label="Ajouter au panier" className="menuCard_button" onClick={() => dispatch(addItem({dish: dish, restaurantId: restaurantId}))}>
                <p className="menuCard_button_price">{dish.price}€</p>
                <i className="menuCard_button_icon fa-solid fa-basket-shopping"></i>
            </button>
        </div>
    );
}