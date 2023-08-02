import "./MenuCard.scss";

export default function MenuCard({number, icon, caption}) {
    return (
        <div className="heroCard">
            <p className="heroCard_number">{number}</p>
            <div className="heroCard_caption">
                <i className={`heroCard_caption_icon fas ${icon}`}></i>
                <p className="heroCard_caption_text">{caption}</p>
            </div>
        </div>
    );
}