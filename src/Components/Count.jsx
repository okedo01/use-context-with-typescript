import { useState } from "react"

export default function Count() {
    const [count, setCount ] = useState(0);

   function increment() {
    setCount(count+1);
   }

   function decrement() {
    setCount(count-1);
   }

    return (
        <div>
            <h1>The count value is: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}