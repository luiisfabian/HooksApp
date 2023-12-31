export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add todo':
            return [...initialState, action.payload];
        case '[TODO] remove todo':
            return initialState.filter((todo) => todo.id !== action.payload)
        case '[TODO] toogle todo':
            return initialState.map((todo) =>{
                if (todo.id === action.payload) {
                     return{
                        ...todo,
                        done: !todo.done
                     }
                }
                return todo
            }
                
            )
        default:
            return initialState;
    }
}