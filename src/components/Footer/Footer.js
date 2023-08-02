import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <Link to={"/"} className="footer_title">ohmyfood</Link>
            <div className="footer_group">
                <i className="footer_icon fas fa-utensils"></i>
                <Link to={"/"} className="footer_link">Proposer un restaurant</Link>
            </div>
            <div className="footer_group">
                <i className="footer_icon fas fa-hands-helping"></i>
                <Link to={"/"} className="footer_link">Devenir partenaire</Link>
            </div>
            <Link to={"/"} className="footer_group footer_link">Mentions légales</Link>
            <Link to={"/"} className="footer_group footer_link">Contact</Link>
        </footer>
    );
}