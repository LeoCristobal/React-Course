import React from "react";
import { useState } from "react";
import "./css/todo.css";
const Todo = () => {
    let [todo, setTodo] = useState([]);
    let [input, setInput] = useState("");

    function generateId() {
        return Math.floor(Math.random() * 1000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setTodo((todos) =>
            todos.concat({
                text: input,
                id: generateId(),
            }),
        );

        setInput("");
    };

    const removeTodo = (id) =>
        setTodo((todos) => todos.filter((t) => t.id !== id));
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Todo..."
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSubmit();
                            }
                        }}
                    />
                    <button type="submit">Submit</button>
                </form>

                <ul className="todos-list">
                    {todo.map(({ id, text }) => (
                        <li key={id} className="todo">
                            <span>{text}</span>
                            <button
                                className="close"
                                onClick={() => removeTodo(id)}
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Todo;
