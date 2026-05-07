export default function TodoItem({item, setTodos, todos}) {
    function handleDelete() {
        const updatdTodos = todos.filter((todo) => todo !== item);
        setTodos(updatdTodos);
    }
    return (
            <li>{item}
                <span>
                    <button onClick={handleDelete}>x</button>
                </span>
            </li>
    )
}