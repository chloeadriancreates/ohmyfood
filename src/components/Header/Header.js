import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header({back}) {
    return (
        <header className="header">
            <h1 className="header_logo">ohmyfood</h1>
            { back &&
                <Link to={"/"} className="header_arrow">
                    <i className="fas fa-arrow-left"></i>
                </Link>
            }
        </header>
    );
}