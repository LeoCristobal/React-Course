import React from "react";
import { useState } from "react";
import { useReducer } from "react";

let initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count++ };
            break;
        case "decrement":
            return { count: state.count-- };
            break;
        case "incrementByAmount":
            return { count: state.count + action.payload };
            break;
        case "decrementByAmount":
            return { count: state.count - action.payload };
            break;
        default:
            return state;
    }
};
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    let [inputValue, setInputValue] = useState(0);

    const handleIncrement = () => {
        dispatch({ type: "increment" });
    };

    const handleDecrement = () => {
        dispatch({ type: "decrement" });
    };

    const handleIncrementByAmount = () => {
        dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
        setInputValue(0);
    };

    const handleDecrementByAmount = () => {
        dispatch({ type: "decrementByAmount", payload: Number(inputValue) });
        setInputValue(0);
    };
    return (
        <>
            <section>
                <h1>Count: {state.count}</h1>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <br />
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleIncrementByAmount}>Increment</button>
                <button onClick={handleDecrementByAmount}>Decrement</button>
            </section>
        </>
    );
};

export default Counter;
