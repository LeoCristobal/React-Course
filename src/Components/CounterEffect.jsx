import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CounterEffect = () => {
    let [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Counts: ${count}`;
    }, [count]);

    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={() => setCount(count++)}>+</button>
            </div>
        </>
    );
};

export default CounterEffect;
