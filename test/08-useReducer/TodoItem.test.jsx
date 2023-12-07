import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('test in TodoItem', () => {

    const todo = {
        id: 1,
        description: 'piedra del alma',
        done: false,
    }
    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();


    beforeEach(() => jest.clearAllMocks());


    test('test debe de mostrar el componente o todo pendiente de completar', () => {
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />);

        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center')
        // expect(spamElement.)
    })


    test('test debe de mostrar Todo el completado', () => {

        todo.done = true;
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />);



        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center')
        // expect(spamElement.)
    })

    test('el span debe llamar aal toogleTodo cuando se haga click', () => {
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />);

        const spanElement = screen.getByLabelText('span');

        fireEvent.click(spanElement);

        expect(onToggleTodo).toHaveBeenCalledWith(todo.id);
    })


    test('boton debe llamar el deleteTodo', () => {
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />);

        const deleteButton = screen.getByRole('button');

        fireEvent.click(deleteButton);

        expect(onDeleteTodo).toHaveBeenCalledWith(todo.id);
    })




});