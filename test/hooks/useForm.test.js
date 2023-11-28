import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('useForm.js pruebas', () => {

    const initialForm = {
        name: 'John',
        email: 'john.mckinley@examplepetstore.com'
    }

    test('debe de ingresar la informacion por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        console.log(result);
        expect(result.current).toEqual({
            onResetForm: expect.any(Function),
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function)
        }
        )

    })

    test('Debe Cambiar el nombre del formulario', () => { 

        const newValue = "Juan"
        const { result } = renderHook(() => useForm(initialForm));
        const {onInputChange} = result.current

        act(()=>{
            onInputChange({target: {name: 'name', value:  newValue}});
        })

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
     })

     test('Debe Regresar el valor inicial del formulario (reset)', () => { 

        const newValue = "Juan"
        const { result } = renderHook(() => useForm(initialForm));
        const {onInputChange, onResetForm} = result.current

        act(()=>{
            onInputChange({target: {name: 'name', value:  newValue}});

            onResetForm();
        })

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
     })



});