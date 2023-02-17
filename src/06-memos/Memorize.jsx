import React from 'react';
import useCounter from "../hooks/useCounter.js";
import Small from "./Small.jsx";

function Memorize(props) {
     const { counter, increment} = useCounter()
    return (
        <>
            <h1> Counter: <Small counter={counter}/></h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>
        </>
    );
}

export default Memorize;
