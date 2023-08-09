import "./Banner.scss";
import Like from "../../../../components/Like/Like";

export default function Banner({restaurant}) {
    return (
        <section className="banner" style={{backgroundImage: `url(/img/${restaurant.key}.jpg)`}} alt={restaurant.name}>
            <div className="banner_title">
                <h1 className="banner_title_text">{restaurant.name}</h1>
                <Like restaurant={restaurant}/>
            </div>
        </section>
    );
}