import "./MenuCard.scss";

export default function MenuCard({dish, itemNumber}) {
    return (
        <div className={`menuCard menuItem--${itemNumber}`}>
            <div className="menuCard_caption">
                <div>
                    <h3 className="menuCard_caption_title">{dish.name}</h3>
                    <p className="menuCard_caption_description">{dish.description}</p>
                </div>
            </div>
            <button className="menuCard_button">
                <p className="menuCard_button_price">{dish.price}€</p>
                <i className="menuCard_button_icon fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    );
}