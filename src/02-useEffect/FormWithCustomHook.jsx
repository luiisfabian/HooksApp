import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, userName, email, password, onResetForm } = useForm({

        userName: "",
        email: "",
        password: ""

    });

    // const {userName, email, password} = formState;



    useEffect(() => {
        // console.log("useEffectt se inicializo");

    }, [])
    useEffect(() => {
        //   console.log("useEffectt change");

    }, [formState])

    useEffect(() => {
        // console.log("email change");

    }, [email])




    return (
        <>
            <h1>Formulario Custom Hook</h1>
            <hr />
            <input type="text" className="form-control" placeholder="UserName" name="userName" value={userName} onChange={onInputChange} />
            <input type="email" className="form-control mt-2" placeholder="Gooogle@gmail.com" name="email" value={email} onChange={onInputChange} />
            <input type="password" className="form-control mt-2" placeholder="******" name="password" value={password} onChange={onInputChange} />
            <button onClick={onResetForm} className="btn btn-danger mt-2">Reset</button>
        </>
    )
}
