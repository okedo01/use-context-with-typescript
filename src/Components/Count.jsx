import { useState } from "react"

export default function Count() {
    const [count, setCount ] = useState(0);
    const [incrementBy, setIncrementBy ] = useState(1);

   function increment() {
    setCount(count+incrementBy);
   }

   function decrement() {
    setCount(count-incrementBy);
   }

   function increase() {
    setIncrementBy(incrementBy+1);
   }
   function decrease() {
    setIncrementBy(incrementBy-1);
   }

    return (
        <>
        <div>
            <h1>The count value is: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
        <div>
            <h1>Increment count by: {incrementBy}</h1>
            <button onClick={increase}>IncrementBy</button>
            <button onClick={decrease}>DecrementBy</button>
        </div>
        </>
    )
}