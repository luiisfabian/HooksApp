import { render, screen} from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('test in HomePage.jsx', () => {
    const useer ={ id:1, name: 'John', email: 'james.moore.wayne@example-pet-store.com', }
    test('Debe mostrar el componetne sin el usuario', () => {
        render(<UserContext.Provider value={{ user: null }}><HomePage /></UserContext.Provider>);

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    })

    test('Debe mostrar el componetne con el usuario', () => {
        render(<UserContext.Provider value={{ user: useer }}><HomePage /></UserContext.Provider>);

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe(JSON.stringify(useer, null, 3));
        expect(preTag.innerHTML).toContain(JSON.stringify(useer.name));
    })

    
});