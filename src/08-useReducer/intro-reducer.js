const initialState = [{
    id:1, 
    todo: "Recoger",
    done: false,
}]


const todoReducer1 = (state = initialState, action = {}) =>{

    if (action.type === '[TODO] add todo') {
        return [...state, action.payLoad]
    }
    return state
}

let todos = todoReducer1()

const newTodo = {
    id:2, 
    todo: "Limpiar",
    done: false,
}


const addTodoAction = {
    type: '[TODO] add todo',
    payLoad: newTodo
}

todos = todoReducer1(todos, addTodoAction)

console.log(todos);