import React, {useCallback, useState} from 'react';
import ShowIncrement from "./ShowIncrement.jsx";

function CallbackHook(props) {
    const [counter, setCounter] = useState(10)
    const increment = useCallback((val) => {
        setCounter((counter) => counter + val)
    }, [])
    return (
        <>
            <h1> UseCallback Hook: {counter}</h1>
            <ShowIncrement increment={increment}/>
        </>
    );
}

export default CallbackHook;