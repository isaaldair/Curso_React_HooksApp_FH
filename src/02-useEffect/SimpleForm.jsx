import React, { useState } from 'react'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'aisaccito',
        email: 'contacto@isaacavila.xyz'
    })

    const { username, email } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        useState({ ...formState, [name]: value })
    }

    return (
        <>
            <h2 className='fs-5'>{'Formulario simple'}</h2>
            <br />
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
        </>
    )
}

export default SimpleForm