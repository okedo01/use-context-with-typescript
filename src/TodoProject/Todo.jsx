import { useState } from "react"

export default function Todo() {
    const [todo, setTodo] = useState("");
    
    return (
        <div>
            <header>Todo Project</header>
            <form>
                <input onChange={(e) => setTodo(e.target.value)} type="text" value={todo} />
            </form>
        </div>
    )
}