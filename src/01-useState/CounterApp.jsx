import React, { useState } from 'react'

const CounterApp = () => {
    const [state, setState] = useState(
        {
            counter1: 10,
            counter2: 20,
            counter3: 30
        }
    )

    const { counter1, counter2, counter3 } = state

    const onSetCounter = () => {
        setState({ ...state, counter1: counter1 + 1 })
    }
    return (
        <>
            <h2 className='fs-5'>
                {`Counter: ${counter1}`}
            </h2>
            <h2 className='fs-5'>
                {`Counter: ${counter2}`}
            </h2>
            <h2 className='fs-5'>
                {`Counter: ${counter3}`}
            </h2>
            <br />
            <button className='btn btn-primary' onClick={onSetCounter}> {'+1'} </button>
        </>
    )
}

export default CounterApp