import React, {useState} from "react";
import Context from "./context";

function ContextProvider({children}) {
    const [color, setColor] = useState(1)
    const [size, setSize] = useState(1)
    const [count, setCount] = useState(1)

    const providedValue = {
        color: color,
        size: size,
        count: count,
        setColor,
        setSize,
        setCount
    }
    return <Context.Provider value={providedValue}>{children}</Context.Provider>
}

export default ContextProvider