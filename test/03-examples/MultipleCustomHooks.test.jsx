import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('test MultipleCustomHooks.jsx', () => {
    test('Debe de mostrar el componente por defecto', () => {
        const mockIncrementCounter = jest.fn();

        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrementCounter
        })

        // beforeEach(() => {
        //     jest.clearAllMocks();
        // })


        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render(<MultipleCustomHooks />)

        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText('Breakingbad Quotes')).toBeTruthy();

        const nextButton = screen.getByRole("button", { name: 'Next Quote' })

        expect(nextButton.disabled).toBeTruthy();
    })

    test('debe de mostrar un quote', () => {
        const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement
        })

        useFetch.mockReturnValue({
            data: [{ title: 'The developer', description: 'There are no more quotations or maybe there are 🙄🥲, keep clicking 😅' }],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks />)


        screen.debug();

        expect(screen.getByText('The developer')).toBeTruthy()
        expect(screen.getByText('There are no more quotations or maybe there are 🙄🥲, keep clicking 😅')).toBeTruthy()


        const nextButton = screen.getByRole("button", { name: "Next Quote" })
        expect(nextButton.disabled).toBeFalsy()
    })

    test('debe llamar a la function de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ title: 'The developer', description: 'There are no more quotations or maybe there are 🙄🥲, keep clicking 😅' }],
            isLoading: false,
            hasError: null
        })
        const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement
        })

        render(<MultipleCustomHooks />)
        const nextButton = screen.getByRole("button", { name: "Next Quote" })
        fireEvent.click(nextButton)
        expect(mockIncrement).toHaveBeenCalled()
    })
});