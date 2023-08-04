import { useEffect, useState } from "react";
import "./Menu.scss";
import MenuCard from "./MenuCard/MenuCard";

export default function Menu({restaurant}) {
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
        setItemCounter(countItems(restaurant.menu));
    }, [restaurant.menu]);

    return (
        <section className="menu">
            {itemCounter && Object.keys(restaurant.menu).map(category =>
                <section className="menu_category" key={itemCounter[category].title}>
                    <h2 className={`menu_category_heading menuItem--${itemCounter[category].title}`}>{typeTranslation[category]}</h2>
                    {restaurant.menu[category].map(dish => {
                        return(
                            <MenuCard
                            dish={dish}
                            key={itemCounter[category].dishes[restaurant.menu[category].indexOf(dish)]}
                            itemNumber={itemCounter[category].dishes[restaurant.menu[category].indexOf(dish)]}
                            restaurantId={restaurant.id}
                            />
                        );
                    })}
                </section>
            )}
        </section>
    );
}