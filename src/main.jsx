import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HooksApp from './HooksApp'
import CounterApp from './01-useState/CounterApp'
import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
import SimpleForm from './02-useEffect/SimpleForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 className='fs-1 fw-bold'>useState</h1>
    <hr />
    <CounterApp />
    <hr />
    <CounterWithCustomHook />
    <hr />
    <h1 className='fs-1 fw-bold'>useEffect</h1>
    <SimpleForm />
  </React.StrictMode>,
)
