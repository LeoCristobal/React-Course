import { useState } from "react";
import "./style.css";

const Counter = () => {
    const [Count, setCount] = useState(0);

    const increment = () => setCount(Count + 1);
    const decrement = () => setCount(Count - 1);
    return (
        <>
            <div>
                <h1 className="number">{Count}</h1>
            </div>
            <section className="btns-container">
                <button onClick={increment} className="increment">
                    +
                </button>
                <button onClick={decrement} className="increment">
                    -
                </button>
            </section>
        </>
    );
};

export default Counter;
