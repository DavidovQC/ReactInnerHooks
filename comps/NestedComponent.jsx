import { createContext } from "react";
import { useContext } from "react";
import { AppContext } from "../src/AppContext";

const CartContext = createContext();

export default function Cart() {
    const data = useContext(AppContext);

    return (
        <div>
            <h4>Cart: {data.quantity}</h4>
            <Component1></Component1>
        </div>
    );
}

function Component1() {
    return (
        <div>
            <h6>Component 1</h6>
            <Component2></Component2>
        </div>
    );
}

function Component2() {
    return (
        <div>
            <h6>Component 2</h6>
            <Component3></Component3>
        </div>
    );
}
function Component3() {
    return (
        <div>
            <h6>Component 3</h6>
            <Counter></Counter>
        </div>
    );
}

function Counter() {
    const data = useContext(AppContext);

    function increment() {
        data.setQuantity(data.quantity + 1);
    }

    return (
        <div>
            <h6>Counter</h6>
            <button onClick={increment}>Increment</button>
            {data.quantity}
        </div>
    );
}
