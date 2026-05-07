export default function TodoItem({item}) {
    return (
            <li>{item}
                <span className="deleteBtn">x</span>
            </li>
    )
}