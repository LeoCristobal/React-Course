import React from "react";
import { useRef } from "react";

const FocusInput = () => {
    const inputElement = useRef();
    console.log(inputElement);

    const handleFocus = () => {
        inputElement.current.focus();

        inputElement.current.value = "Leo";
    };
    return (
        <>
            <section>
                <input type="text" ref={inputElement} />
                <button onClick={handleFocus}>Focus</button>
            </section>
        </>
    );
};

export default FocusInput;
