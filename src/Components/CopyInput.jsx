import React from "react";
import { useState } from "react";
import PopUpContent from "./PopUpContent";

const CopyInput = () => {
    let [inputValue, setInputValue] = useState("");
    let [copied, setCopied] = useState(false);

    async function handleCopy() {
        await navigator.clipboard.writeText(inputValue);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 20000);
    }
    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleCopy}>Copy</button>
            <PopUpContent copied={copied} />
        </>
    );
};

export default CopyInput;
