import React, {useEffect, useState} from 'react'
import Message from "./Message.jsx";
import useForm from "../hooks/useForm.js";

const FormWithCustomHook = () => {
    const initialForm = {
        username: '',
        email: '',
        password: ''
    };
    const {formState, onInputChange, username, email, password, onResetForm } = useForm(
        {initialForm}
    )

    useEffect(() => {
        // console.log(`useeffect`)
    }, [])

    useEffect(() => {
        // console.log(`useeffect email`)
    }, [email])

    useEffect(() => {
        // console.log(`useeffect formState`)
    }, [formState])

    return (
        <>
            <h2 className='fs-5'>{'Formulario simple'}</h2>
            <br/>
            <input
                value={username}
                type='text'
                className='form-control'
                placeholder='Username'
                name='username'
                onChange={onInputChange}
            />
            <input
                value={email}
                type='email'
                className='form-control mt-2'
                placeholder='micorreo@dominio.com'
                name='email'
                onChange={onInputChange}
            />
            <input
                value={password}
                type='password'
                className='form-control mt-2'
                placeholder='12345678'
                name='password'
                onChange={onInputChange}
            />
            <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
        </>
    )
}

export default FormWithCustomHook