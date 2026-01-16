import React from "react";
import { useState } from "react";

const EventDemo = () => {
    let [message, setMessage] =
        useState(`Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique pariatur voluptatum perferendis nisi aliquid totam
                placeat perspiciatis, quos inventore ea eligendi iure molestiae
                maxime libero voluptas a id facere dignissimos?`);

    const change = () => setMessage("Button Clicked");
    return (
        <>
            <p>{message}</p>
            <button onClick={change}>Change</button>
        </>
    );
};

export default EventDemo;
