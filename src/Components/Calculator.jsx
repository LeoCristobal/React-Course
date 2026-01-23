import { useState } from "react";
import { FaTimes, FaDivide, FaMinus, FaPlus, FaEquals } from "react-icons/fa";
import "./css/calculator.css";
import {
    Fa0,
    Fa1,
    Fa2,
    Fa3,
    Fa4,
    Fa5,
    Fa6,
    Fa7,
    Fa8,
    Fa9,
    FaC,
} from "react-icons/fa6";
const Calculator = () => {
    let [inputValue, setInputValue] = useState("");

    const display = (value) => {
        setInputValue(inputValue + value);
    };

    const clear = () => {
        setInputValue("");
    };

    const calculate = () => {
        if (!inputValue) return;

        try {
            const answer = eval(inputValue);
            setInputValue(answer);
        } catch {
            setInputValue("Error");
        }
    };
    return (
        <div className="calculator" name="calc">
            <input type="text" className="value" value={inputValue} />
            <span className="num clear" onClick={() => clear()}>
                <FaC />
            </span>
            <span onClick={() => display("/")}>
                <FaDivide />
            </span>
            <span onClick={() => display("*")}>
                <FaTimes />
            </span>
            <span onClick={() => display("7")}>
                <Fa7 />
            </span>
            <span onClick={() => display("8")}>
                <Fa8 />
            </span>
            <span onClick={() => display("9")}>
                <Fa9 />
            </span>
            <span onClick={() => display("-")}>
                <FaMinus />
            </span>
            <span onClick={() => display("4")}>
                <Fa4 />
            </span>
            <span onClick={() => display("5")}>
                <Fa5 />
            </span>
            <span onClick={() => display("6")}>
                <Fa6 />
            </span>
            <span onClick={() => display("+")}>
                <FaPlus />
            </span>
            <span onClick={() => display("1")}>
                <Fa1 />
            </span>
            <span onClick={() => display("2")}>
                <Fa2 />
            </span>
            <span onClick={() => display("3")}>
                <Fa3 />
            </span>
            <span onClick={() => display("0")}>
                <Fa0 />
            </span>
            <span onClick={() => display("00")}>00</span>
            <span onClick={() => display(".")}>.</span>
            <span className="num equal" onClick={() => calculate()}>
                <FaEquals />
            </span>
        </div>
    );
};

export default Calculator;
