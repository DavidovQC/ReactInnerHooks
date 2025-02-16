import { useContext } from "react";
import { AppContext } from "../src/AppContext";

export default function OtherComponent() {
    const data = useContext(AppContext);

    return <div>Other component says: {data.quantity}</div>;
}
