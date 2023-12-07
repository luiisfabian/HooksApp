
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <p className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`} onClick={()=> onToggleTodo(todo.id)}  aria-label="span">
                {todo.description}

            </p>
            <button onClick={()=>onDeleteTodo(todo.id)} className="btn btn-danger">Borrar</button>

        </li>
    )
}
