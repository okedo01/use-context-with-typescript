import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
    return (
        <div>
            {todos.map((item, index) => (
                <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} />
            ))}
        </div>
    )
}