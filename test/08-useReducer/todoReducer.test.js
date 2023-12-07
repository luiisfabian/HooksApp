import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('test in todoReducer.js', () => {

    const initialState = [{
        id: 1,
        description: "Hola",
        done: false,
    }]

    test('debe regresar el estado inicial', () => {

        const newState = todoReducer(initialState, {})
        expect(newState).toBe(initialState);

    })

    test('Debe de agregar un Todo', () => {


        const action = {
            type: '[TODO] Add todo',
            payload: {
                id: 2,
                description: "Hola 2",
                done: false,
            }

        }


        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload)

    })


    test('debe de Eliminar un Todo', () => {

        const action = {
            type: '[TODO] remove todo',
            payload: 1

        }
        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(0);
        // expect(newState).toContain(action.payload.id)


    })

    test('debe Realizar el toogle del tood del TODO', () => {
        const action = {
            type: '[TODO] toogle todo',
            payload: 1

        }
        const newState = todoReducer(initialState, action)
        expect(newState[0].done).toBe(true);


        const newState2 = todoReducer(newState, action)
        expect(newState2[0].done).toBe(false);

    })

});