import React, {useEffect, useState} from 'react';

function useFetch({url}) {
    const [state, setState] = useState(
        {
            data: null,
            isLoading: true,
            hasError: null
        }
    )
    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true
        })
        const res = await fetch(url)
        const data = await res.json()
        setState({
            data,
            hasError: false,
            isLoading: false
        })
    }

    useEffect(() => {
        getFetch().then()
    }, [url])
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}

export default useFetch;