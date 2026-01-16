import { useEffect } from "react";
import { useState } from "react";

const TodoList = () => {
    let [input, setInput] = useState("");
    let [list, setList] = useState(() => {
        let saved = localStorage.getItem("list");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    const handleChange = (event) => {
        setInput(event.target.value);
    };
    const AddList = () => {
        setList([...list, input]);
        setInput("");
    };
    return (
        <>
            <input
                type="text"
                value={input}
                placeholder="List"
                onChange={handleChange}
            />
            <button onClick={AddList}>Add</button>

            <h3>Lists: </h3>
            {list.map((list) => (
                <p key={Math.random()}>{list}</p>
            ))}
        </>
    );
};

export default TodoList;
