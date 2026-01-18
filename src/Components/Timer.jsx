import React from "react";
import { useEffect, useState, useRef } from "react";
const Timer = () => {
    let [count, setCount] = useState(0);

    const IntervalRef = useRef(null);

    useEffect(() => {
        IntervalRef.current = setInterval(() => {
            setCount(count++);
        }, 1000);

        return () => {
            clearInterval(IntervalRef.current);
        };
    }, []);

    return (
        <>
            <h1>Timer: {count}</h1>

            <button
                onClick={() => {
                    clearInterval(IntervalRef.current);
                }}
            >
                Stop Timer
            </button>
        </>
    );
};

export default Timer;
