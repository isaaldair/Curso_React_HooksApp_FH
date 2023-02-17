import React from 'react';
import UseCounter from "../hooks/useCounter.js";
import useFetch from "../hooks/useFetch.js";
import LoadingQuote from "../03-examples/LoadingQuote.jsx";
import Quote from "../03-examples/Quote.jsx";
function UseLayoutEffect(props) {
    const {counter, increment} = UseCounter()
    const {data, isLoading, hasError} = useFetch({url: `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`})
    const {author, quote} = !!data && data[0]
    return (<>
        <h1>Layout</h1>
        <hr/>
        {isLoading ? <LoadingQuote/> : <Quote author={author} quote={quote}/>}
        <button className="btn btn-primary" onClick={() => increment()} disabled={isLoading}> Next quote
        </button>
    </>);
}

export default UseLayoutEffect;