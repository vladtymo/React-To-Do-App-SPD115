import { Button, Slider } from "@nextui-org/react";
import { useContext, useState } from "react";
import { CounterContext } from "../contexts/counter.context";

function Counter() {

    // useState(default_value) -> [variable, setter]
    // variable - stores the value
    // setter   - function to set a new value

    // create count state data
    //const [count, setCount] = useState(10);

    // get context data
    const { count, increment, reset, decrement } = useContext(CounterContext);

    // create state array
    // const [numbers, setNumbers] = useState([]);

    // ... logic ...
    //let count = 10;

    // const increment = () => {
    //     console.log(count + " -> " + (count + 1));

    //     //++count;           // does not affect DOM
    //     setCount(count + 1); // affects DOM
    // }
    // const reset = () => setCount(0);

    return (
        <>
            <Slider
                label="Temperature"
                step={0.01}
                maxValue={1}
                minValue={0}
                defaultValue={0.4}
                className="max-w-md"
            />
            <p>Counter value: <strong>[{count == 0 ? "-" : count}]</strong></p>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={reset}>Reset</Button>
            {/* <button onClick={increment}>Increment</button> */}
            {/* <button onClick={reset}>Reset</button> */}
        </>
    );
}

export default Counter;