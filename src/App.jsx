import { useState } from "react";
import Cart from "../comps/NestedComponent.jsx";
import OtherComponent from "../comps/OtherComponent.jsx";
import "./App.css";
import { AppContext } from "./AppContext.js";

function App() {
    const [quantity, setQuantity] = useState(0);

    return (
        <AppContext.Provider value={{ quantity, setQuantity }}>
            <Cart></Cart>
            <OtherComponent></OtherComponent>
        </AppContext.Provider>
    );
}

export default App;
