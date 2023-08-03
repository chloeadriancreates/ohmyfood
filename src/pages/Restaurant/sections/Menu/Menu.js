import { useEffect, useState } from "react";
import "./Menu.scss";
import MenuCard from "./MenuCard/MenuCard";

export default function Menu({menu}) {
    const [itemCounter, setItemCounter] = useState(null);
    const typeTranslation = {
        appetizers: "Entrées",
        mains: "Plats",
        desserts: "Desserts"
    };

    useEffect(() => {
        const countItems = (menu) => {
            let currentCounter = 1;
            let itemCount = {};
            Object.keys(menu).forEach(category => {
                itemCount[category] = {
                    title: currentCounter,
                    dishes: []
                };
                currentCounter++;
                menu[category].forEach(dish => {
                    itemCount[category].dishes.push(currentCounter);
                    currentCounter++;
                });
            });
            return itemCount;
        };
        setItemCounter(countItems(menu));
    }, [menu]);

    return (
        <section className="menu">
            {itemCounter && Object.keys(menu).map(category =>
                <section className="menu_category" key={itemCounter[category].title}>
                    <h2 className={`menu_category_heading menuItem--${itemCounter[category].title}`}>{typeTranslation[category]}</h2>
                    {menu[category].map(dish => {
                        return <MenuCard dish={dish} key={itemCounter[category].dishes[menu[category].indexOf(dish)]} itemNumber={itemCounter[category].dishes[menu[category].indexOf(dish)]} />;
                    })}
                </section>
            )}
        </section>
    );
}