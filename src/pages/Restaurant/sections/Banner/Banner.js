import "./Banner.scss";
import Like from "../../../../components/Like/Like";

export default function Banner({restaurantKey, name}) {
    return (
        <section className="banner" style={{backgroundImage: `url(/img/${restaurantKey}.jpg)`}}>
            <div className="banner_title">
                <h1 className="banner_title_text">{name}</h1>
                <Like />
            </div>
        </section>
    );
}