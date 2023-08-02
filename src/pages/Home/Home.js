import "./Home.scss";
import Header from "../../components/Header/Header";
import Location from "./sections/Location/Location";
import Hero from "./sections/Hero/Hero";

export default function Home() {
    return (
        <div>
            <Header back={false} />
            <Location />
            <Hero />
        </div>
    )
}