import "./Error.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

export default function Error() {
    useEffect(() => {
        document.title = "Erreur – Ohmyfood!";
    }, []);

    return (
        <div className="error">
            <Header />
            <section className="error_section">
                <h2 className="error_section_title">404</h2>
                <p className="error_section_description">Cette page n'existe pas. Revenez à l'accueil pour découvrir nos restaurants !</p>
            </section>
            <Footer />
        </div>
    );
}