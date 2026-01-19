import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
const Meal = () => {
    let [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then((res) => {
                // console.log(res.data);
                setItems(res.data.meals);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const itemslist = items.map(({ strMeal, strMealThumb, idMeal }) => {
        return (
            <section className="card">
                <img src={strMealThumb} />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        );
    });

    return (
        <>
            <div>{itemslist}</div>;
        </>
    );
};

export default Meal;
