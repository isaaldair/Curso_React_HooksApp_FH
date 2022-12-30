import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter()
    return (
        <>
            <h2 className='fs-5'>Counter With Custom Hook XXX</h2>
            <h3 className='fs-6'> {counter}</h3>
            <br />
            <button className='btn btn-primary' onClick={() => { decrement() }}> {'-1'} </button>
            <button className='btn btn-danger' onClick={reset}> {'Rest'} </button>
            <button className='btn btn-primary' onClick={() => { increment(1) }}> {'+1'} </button>
            <button className='btn btn-primary' onClick={() => { increment(10) }}> {'+10'} </button>
        </>
    )
}

export default CounterWithCustomHook