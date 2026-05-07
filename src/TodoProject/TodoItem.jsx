export default function TodoItem({item}) {
    return (
        <div>
            <li>{item}
                {<span className="deleteBtn">x</span>}
            </li>
        </div>
    )
}