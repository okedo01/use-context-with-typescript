import { useState } from "react"
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    function handleAddTodo(e) {
        e.preventDefault();
        if (todo.trim() === "") {
            return;
        }
        setTodos([...todos, todo]);
        setTodo("");
    }
    return (
        <div>
            <form>
                <input onChange={(e) => setTodo(e.target.value)} type="text" value={todo} />
                <button onClick={(e) => handleAddTodo(e)}>Add</button>
            </form>
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    )
}