import React, {memo} from 'react';

const Small = memo(({counter}) => {
    // console.log(`change`)
    return (
        <small> {counter}</small>
    );
})

export default Small;
