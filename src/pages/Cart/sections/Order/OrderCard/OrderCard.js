import "./OrderCard.scss";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../../../../app/slices/cartSlice";

export default function OrderCard({dish, restaurantId}) {
    const dispatch = useDispatch();

    return (
        <section className="orderCard">
            <div className="orderCard_caption">
                <h4 className="orderCard_caption_title">{dish.dish.name}</h4>
                <p className="orderCard_caption_description">{dish.dish.description}</p>
            </div>
            <div className="orderCard_counter">
                <div className="orderCard_counter_quantity">
                    <button className="orderCard_counter_quantity_button" onClick={() => dispatch(decrementQuantity({restaurantId: restaurantId, dishId: dish.dish.id}))}>-</button>
                    <p className="orderCard_counter_quantity_text">{dish.quantity}</p>
                    <button className="orderCard_counter_quantity_button" onClick={() => dispatch(incrementQuantity({restaurantId: restaurantId, dishId: dish.dish.id}))}>+</button>
                </div>
                <p className="orderCard_counter_price">{dish.dish.price * dish.quantity}€</p>
            </div>
        </section>
    );
}