import React, {useLayoutEffect, useRef, useState} from 'react';
function Quote(props) {
    const {quote, author} = props
    const ref = useRef()
    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0
    })
    useLayoutEffect(() => {
        const {height, width} = !!ref.current.getBoundingClientRect() && ref.current.getBoundingClientRect()
        setBoxSize({width, height})
    }, [quote])
    return (
        <>
            <blockquote className="blockquote text-end"
                        style={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
            >
                <p className="mb1" ref={ref}>
                    {quote}
                </p>
                <footer className="blockquote-footer"> {author}</footer>
            </blockquote>
            <code>
                {
                    JSON.stringify(boxSize)
                }
            </code>
        </>
    );
}

export default Quote;