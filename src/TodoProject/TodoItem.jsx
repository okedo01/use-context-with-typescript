export default function TodoItem({ item, todos, setTodos }) {
    function handleDelete(item) {
        console.log(item);
        const updatedTodos = todos.filter((todo) => todo !== item);
        setTodos(updatedTodos);

    }
    return (
        <div>
            {item}
            <span>
                <button style={{
                    background: "red"
                }} onClick={() => handleDelete(item)}>x</button>
            </span>

        </div>
    )
}