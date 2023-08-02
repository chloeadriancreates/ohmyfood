import "./RestaurantCard.scss";
import { Link } from "react-router-dom";

export default function RestaurantCard({restaurant}) {
    console.log(restaurant);
    return (
        <Link to={`/restaurant/${restaurant.key}`} state={{ restaurant: restaurant }} className="restaurantCard">
            <div className="restaurantCard_photo" style={{backgroundImage: `url(./img/${restaurant.key}.jpg)`}}>
                {restaurant.new && <div className="restaurantCard_flag">Nouveau</div>}
            </div>
            <div className="restaurantCard_caption">
                <div>
                    <h3 className="restaurantCard_title">{restaurant.name}</h3>
                    <h3 className="restaurantCard_city">{restaurant.location}</h3>
                </div>
                <button className="restaurantCard_like">
                    <svg className="restaurantCard_like_heart restaurantCard_like_heart--hover" width="22" height="22" viewBox="0 0 22 22">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{stopColor: "rgb(147, 86, 220)", stopOpacity: 1}} />
                                <stop offset="100%" style={{stopColor: "rgb(255, 121, 218)", stopOpacity: 1}} />
                            </linearGradient>
                        </defs>
                        <path d="M19.4578 2.76815C18.9691 2.20759 18.3889 1.76292 17.7503 1.45954C17.1117 1.15615 16.4272 1 15.7359 1C15.0446 1 14.3601 1.15615 13.7215 1.45954C13.0829 1.76292 12.5026 2.20759 12.0139 2.76815L10.9997 3.93095L9.98554 2.76815C8.99842 1.6364 7.6596 1.00059 6.26361 1.00059C4.86761 1.00059 3.52879 1.6364 2.54168 2.76815C1.55456 3.89989 1 5.43487 1 7.03541C1 8.63594 1.55456 10.1709 2.54168 11.3027L3.55588 12.4655L10.9997 21L18.4436 12.4655L19.4578 11.3027C19.9467 10.7424 20.3346 10.0771 20.5992 9.34495C20.8638 8.61276 21 7.82796 21 7.03541C21 6.24285 20.8638 5.45806 20.5992 4.72587C20.3346 3.99368 19.9467 3.32844 19.4578 2.76815V2.76815Z" strokeLinecap="round" strokeLinejoin="round" stroke="url(#grad1)" fill="url(#gradient)"/>
                    </svg>
                    <svg className="restaurantCard_like_heart restaurantCard_like_heart--regular" width="22" height="22" viewBox="0 0 22 22">
                        <path d="M19.4578 2.76815C18.9691 2.20759 18.3889 1.76292 17.7503 1.45954C17.1117 1.15615 16.4272 1 15.7359 1C15.0446 1 14.3601 1.15615 13.7215 1.45954C13.0829 1.76292 12.5026 2.20759 12.0139 2.76815L10.9997 3.93095L9.98554 2.76815C8.99842 1.6364 7.6596 1.00059 6.26361 1.00059C4.86761 1.00059 3.52879 1.6364 2.54168 2.76815C1.55456 3.89989 1 5.43487 1 7.03541C1 8.63594 1.55456 10.1709 2.54168 11.3027L3.55588 12.4655L10.9997 21L18.4436 12.4655L19.4578 11.3027C19.9467 10.7424 20.3346 10.0771 20.5992 9.34495C20.8638 8.61276 21 7.82796 21 7.03541C21 6.24285 20.8638 5.45806 20.5992 4.72587C20.3346 3.99368 19.9467 3.32844 19.4578 2.76815V2.76815Z" strokeLinecap="round" strokeLinejoin="round" stroke="black" fill="none"/>
                    </svg>
                </button>
            </div>
        </Link>
    )
}