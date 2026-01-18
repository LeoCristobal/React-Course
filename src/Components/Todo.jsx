import { useState } from "react";
import "./style.css";
const Todo = () => {
    let randomId = Math.floor(Math.random() * 100);
    let [todo, setTodo] = useState([]);
    let [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setTodo([
            ...todo,
            {
                text: input,
                id: randomId,
            },
        ]);
        setInput("");
    };

    const handleDelete = (id) => {
        setTodo((todo) => todo.filter((t) => t.id !== t.id));
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Todo"
                    />
                    <button type="submit">Submit</button>
                </form>
                <ul className="todos-list">
                    {todo.map(({ text, id }) => (
                        <li key={id} className="todo">
                            <span>{text}</span>
                            <button
                                className="close"
                                onClick={() => handleDelete(id)}
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
