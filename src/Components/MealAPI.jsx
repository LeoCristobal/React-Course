import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./css/meal.css";
const Meal = () => {
    let [meal, setMeal] = useState([]);

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then((res) => {
                setMeal(res.data.meals);
            })
            .catch((e) => {
                console.error(e);
            });
    }, []);

    return (
        <>
            {meal.map(({ strMeal, strMealThumb, idMeal }) => (
                <section className="card" key={idMeal}>
                    <img src={strMealThumb} />
                    <section className="content">
                        <p>{strMeal}</p>
                        <p>{idMeal}</p>
                    </section>
                </section>
            ))}
        </>
    );
};

export default Meal;
