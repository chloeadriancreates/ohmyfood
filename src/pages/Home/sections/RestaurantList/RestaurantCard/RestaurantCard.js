import "./RestaurantCard.scss";
import { Link } from "react-router-dom";

export default function RestaurantCard({restaurant}) {
    return (
        <Link to={`/restaurant/${restaurant.id}`} className="restaurantCard">
            <div className="restaurantCard_photo" style={{backgroundImage: `url(./img/${restaurant.key}.jpg)`}}>
                {restaurant.new && <div className="restaurantCard_flag">Nouveau</div>}
            </div>
            <div className="restaurantCard_caption">
                <h3 className="restaurantCard_caption_title">{restaurant.name}</h3>
                <p className="restaurantCard_caption_city">{restaurant.location}</p>
            </div>
        </Link>
    );
}