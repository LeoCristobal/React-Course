import React from "react";
import { createPortal } from "react-dom";
const PopUpContent = ({ copied }) => {
    return createPortal(
        <>
            <section>{copied && <div>Copied to clipboard</div>}</section>
        </>,
        document.querySelector("#pop-up")
    );
};

export default PopUpContent;
