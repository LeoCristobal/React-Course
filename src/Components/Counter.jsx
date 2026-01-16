import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Counter = () => {
    let [count, setCount] = useState(() => {
        const saved = localStorage.getItem("count");
        return saved ? JSON.parse(saved) : 0;
    });

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);

    const increment = () => setCount(count++);
    const decrement = () => setCount(count--);
    const reset = () => setCount(0);

    return (
        <>
            <p>{count}</p>
            <button onClick={increment}>
                <FaPlus />
            </button>
            <button onClick={decrement}>
                <FaMinus />
            </button>
            <button onClick={reset}>Reset</button>
        </>
    );
};

export default Counter;
