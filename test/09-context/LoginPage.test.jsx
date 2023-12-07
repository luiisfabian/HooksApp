import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('LoginPage Test', () => {

    test('debe mostrar el componente sin el usuario', () => { 
        render(<UserContext.Provider value={{ user: null }}><LoginPage /></UserContext.Provider>);
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
     })

     test('debe llamar el setUser cuando se hace click en el boton', () => { 

        const setUserMock = jest.fn();

        render(<UserContext.Provider value={{ user: null, setUser: setUserMock }}><LoginPage /></UserContext.Provider>);

        const button = screen.getByRole('button');
        fireEvent.click(button)
        expect(setUserMock).toHaveBeenCalledWith({
            "email": "luii@gmail.com", "id": 123, "name": "Fabian"
        });



     })
});