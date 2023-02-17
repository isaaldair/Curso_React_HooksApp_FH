import React, {useMemo, useState} from 'react';
import useCounter from "../hooks/useCounter.js";
import Small from "./Small.jsx";

const heavtStuff = (iterationNumber = 0) => {
    for (let i = 0; i < iterationNumber; i++) {
        // console.log('Ahí vamos...')
    }
    // console.log(`${iterationNumber} completadas`)
}

function MemoHook(props) {
    const {counter, increment} = useCounter(1)
    const [show, setShow] = useState(true)
    const memorizedValue = useMemo(()=>{
        heavtStuff(counter)
    }, [counter])
    return (
        <>
            <h1> Counter: <Small counter={counter}/></h1>
            <hr/>
            <h4> {memorizedValue}</h4>
            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>
            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >
                SHOW/HIDE {show.toString()}
            </button>
        </>
    );
}

export default MemoHook;
