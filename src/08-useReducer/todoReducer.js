export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [
                ...initialState,
                action.payload
            ]
        case '[TODO] Remove Todo':
            return initialState.filter(
                (e) => e.id !== action.payload.id
            )
        case '[TODO] toggle Todo':
            return initialState.map(
                (item) => {
                    if (item.id === action.payload){
                        return {
                            ...item,
                            done: !item.done
                        }
                    }
                    return item
                }
            )

        default:
            return initialState;
    }
}