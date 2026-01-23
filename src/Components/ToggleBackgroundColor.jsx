import React from "react";
import { useState } from "react";
import "./css/toggle.css";
const ToggleBackgroundColor = () => {
    let [backgroundColor, setBackgroundColor] = useState("white");
    let [textColor, setTextColor] = useState("#1b1b1b");
    let [buttonStyle, setButtonStyle] = useState("white");

    const handleClick = () => {
        setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
        setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
        setButtonStyle(buttonStyle === "#white" ? "#1b1b1b" : "white");
    };
    return (
        <>
            <section style={{ backgroundColor, color: textColor }}>
                <button
                    onClick={handleClick}
                    style={{
                        buttonStyle,
                        color: textColor,
                        border: `2px solid ${textColor}`,
                    }}
                >
                    {backgroundColor === "white" ? "Light Theme" : "Dark Theme"}
                </button>
                <section className="content">
                    <h1>
                        Welcome To A <br /> Real World..
                    </h1>
                </section>
            </section>
        </>
    );
};

export default ToggleBackgroundColor;
