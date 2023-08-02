import "./Home.scss";
import Header from "../../components/Header/Header";
import Location from "./sections/Location/Location";

export default function Home() {
    return (
        <div>
            <Header back={false} />
            <Location />
        </div>
    )
}