import { useState } from "react";

function Counter() {

    // useState(default_value) -> [variable, setter]
    // variable - stores the value
    // setter   - function to set a new value

    // create count state data
    const [count, setCount] = useState(10);

    // create state array
    // const [numbers, setNumbers] = useState([]);

    // ... logic ...
    //let count = 10;

    const increment = () => {
        console.log(count + " -> " + (count + 1));

        //++count;           // does not affect DOM
        setCount(count + 1); // affects DOM
    }
    const reset = () => setCount(0);

    return (
        <>
            <p>Counter value: [{count == 0 ? "-" : count}]</p>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}

export default Counter;