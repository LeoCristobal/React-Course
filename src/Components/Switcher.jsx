import React from "react";
import { useState } from "react";

const Switcher = () => {
    let [sw, setSwitch] = useState(false);
    return (
        <>
            <section>{sw ? <span>dark</span> : <span>light</span>}</section>
            <br />

            <input type="text" placeholder={sw ? "dark" : "light"} />
            <button onClick={() => setSwitch((s) => !s)}>Switch</button>
        </>
    );
};

export default Switcher;
