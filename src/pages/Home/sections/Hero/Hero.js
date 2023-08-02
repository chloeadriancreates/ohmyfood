import "./Hero.scss";
import HeroCard from "./HeroCard/HeroCard";

export default function Hero() {
    const steps = [
        {
            icon: "fa-mobile-alt",
            caption: "Choisissez un restaurant"
        },
        {
            icon: "fa-list-ul",
            caption: "Composez votre menu"
        },
        {
            icon: "fa-store",
            caption: "Dégustez au restaurant"
        }
    ];

    return (
        <section className="hero">
            <h2 className="hero_title">Réservez le menu qui vous convient</h2>
            <p className="hero_description">Découvrez des restaurants d'exception, sélectionnés par nos soins.</p>
            <div className="hero_steps">
                { steps.map(step => <HeroCard key={steps.indexOf(step)} number={steps.indexOf(step) + 1} icon={step.icon} caption={step.caption} />)}
            </div>
        </section>
    );
}