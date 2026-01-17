import React from "react";
import { useState, useEffect } from "react";

const BasicEffect = () => {
    let [message, setMessage] = useState("");

    useEffect(() => {
        console.log("Hello from useEffect");
    }, []);

    return (
        <>
            <div>{message}</div>
        </>
    );
};

export default BasicEffect;
