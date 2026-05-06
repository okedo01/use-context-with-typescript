import { useState } from "react"

export default function Form() {
    const [ name, setName ] = useState({firstName: "", lastName: ""});
    
    return (
        <div>
            <input onChange={(e) => setName({firstName: e.target.value, lastName: ""})} type="text" value={name.firstName} />
            <input onChange={(e) => setName({firstName: "", lastName: e.target.value})} type="text" value={name.lastName} />
        </div>
    )
}