import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CounterApp from './01-useState/CounterApp'
import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
import SimpleForm from './02-useEffect/SimpleForm'
import FormWithCustomHook from "./02-useEffect/FormWithCustomHook.jsx";
import MultipleCustomHooks from "./03-examples/MultipleCustomHooks.jsx";
import FocusScreen from "./04-useRef/FocusScreen.jsx";
import UseLayoutEffect from "./05-useLayoutEffect/useLayoutEffect.jsx";
import Memorize from "./06-memos/Memorize.jsx";
import MemoHook from "./06-memos/MemoHook.jsx";
import CallbackHook from "./06-memos/CallbackHook.jsx";
import {Padre} from "./07-tarea-memo/Padre.jsx";
import './08-useReducer/intro-reducer'
import TodoApp from "./08-useReducer/TodoApp.jsx";
import MainApp from "./09-useContext/MainApp.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <h1 className='fs-1 fw-bold'>useState</h1>
        <hr/>
        <CounterApp/>
        <hr/>
        <CounterWithCustomHook/>
        <hr/>
        <h1 className='fs-1 fw-bold'>useEffect</h1>
        <SimpleForm/>
        <FormWithCustomHook/>
        <hr/>
        <h1 className='fs-1 fw-bold'>Multiple custom hooks</h1>
        <MultipleCustomHooks/>
        <hr/>
        <h1 className='fs-1 fw-bold'>useRef</h1>
        <FocusScreen/>
        <hr/>
        <h1 className='fs-1 fw-bold'>useLayoutEffect</h1>
        <UseLayoutEffect/>
        <hr/>
        <h1 className='fs-1 fw-bold'>useMemo</h1>
        <Memorize/>
        <MemoHook/>
        <CallbackHook/>
        <Padre/>
        <hr/>
        <h1 className='fs-1 fw-bold'>useReducer</h1>
        <TodoApp/>
        <hr/>
        <h1 className='fs-1 fw-bold'>useContext</h1>
        <BrowserRouter>
            <MainApp/>
        </BrowserRouter>
    </>,
)
