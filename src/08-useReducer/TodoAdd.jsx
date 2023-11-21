import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {

    const { description, formState, onInputChange, onResetForm } = useForm({
        description: ""
    })

    const onFormSubmit = (event) => {
            event.preventDefault();
        if (description.length <= 1) return; 
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,

        }
        onNewTodo(newTodo);
        onResetForm();
    }
    return (
        <>
            <form onSubmit={onFormSubmit} >
                <input name='description' onChange={onInputChange} value={description} type="" placeholder="QUe hay que hacer?" className="form-control" />
                <button type="submit" className="btn btn-outline-success mt-3">Agregar</button>

            </form>
        </>
    )
}
