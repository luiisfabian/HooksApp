import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('test in MainApp', () => {
    test('debe de mostrar el homePage', () => {

        render(<MemoryRouter><MainApp/></MemoryRouter>);
            screen.debug();

            const homePage = screen.getByText('HomePage');

            expect(homePage).toBeTruthy();
     })

     test('debe de mostrar el LoginPage', () => {

        render(<MemoryRouter initialEntries={['/login']}><MainApp/></MemoryRouter>);
            screen.debug();

            const homePage = screen.getByText('Login Page');

            expect(homePage).toBeTruthy();
     })
});