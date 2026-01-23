import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./css/search.css";

function HiddenSearchBar() {
    let [showInput, setShowInput] = useState(false);
    let [backgroundColor, setBackgroundColor] = useState("white");

    const handleShow = (e) => {
        setBackgroundColor("#1a1a1a");

        if (e.target.className === "container") {
            setShowInput(false);
            setBackgroundColor("#fff");
        }
    };
    return (
        <section
            className="container"
            onClick={handleShow}
            style={{ backgroundColor: backgroundColor }}
        >
            {showInput ? (
                <input type="text" placeholder="Search... " />
            ) : (
                <FaSearch onClick={() => setShowInput(true)} />
            )}
        </section>
    );
}

export default HiddenSearchBar;
