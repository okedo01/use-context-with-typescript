import { useState } from "react";

export default function TodoItem({ item, todos, setTodos }) {
    const [completed, setCompleted] = useState(false);

    function handleDelete(item) {
        const updatedTodos = todos.filter((todo) => todo !== item);
        setTodos(updatedTodos);
    }
    function handleClick(item) {
        setCompleted(!completed);
    }

    return (
        <div>
            <span style={{
                cursor: "pointer",
                textDecoration: completed ? "line-through" : "none"
            }} onClick={() => handleClick(item)}>
                {item}
            </span>
            <span>
                <button style={{
                    background: "red"
                }} onClick={() => handleDelete(item)}>x</button>
            </span>

        </div>
    )
}