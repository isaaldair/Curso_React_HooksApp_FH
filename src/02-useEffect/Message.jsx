import React, {useEffect, useState} from 'react';

function Message(props) {
    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    })
    useEffect(() => {
        const onMouseMove = ({x, y}) => {
            setCoords({x, y})
        }
        window.addEventListener('mousemove', onMouseMove)
        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])
    return (
        <>
            <h3> Usuario ya existe! </h3>
            <h4> {JSON.stringify(coords)}</h4>
        </>
    );
}

export default Message;