import React, {useRef} from 'react';

function FocusScreen(props) {
    const ref = useRef()
    const onClick = () => {
        ref.current.select()
    }
    return (
        <>
            <div>
                <h1> Focus Screen </h1>
                <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    className='form-control'
                    ref={ref}
                />
            </div>
            <button className="btn btn-primary mt2" onClick={onClick}> Focus</button>
        </>
    );
}

export default FocusScreen;
