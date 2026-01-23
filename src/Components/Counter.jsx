import React from "react";
import { useState } from "react";
import "./css/counter.css";
const Counter = () => {
    let [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count++);
    };
    const handleDecrement = () => {
        setCount(count--);
    };
    return (
        <>
            <div>
                <h1 className="number">{count}</h1>
            </div>
            <section className="btns-container">
                <button onClick={handleIncrement} className="increment">
                    +
                </button>
                <button onClick={handleDecrement} className="increment">
                    -
                </button>
            </section>
        </>
    );
};

export default Counter;
