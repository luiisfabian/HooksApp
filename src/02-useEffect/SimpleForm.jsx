import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        userName: "Fabiasn",
        email: "luiisfabian96@gmail.com"
    })

    const { userName, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }


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
            <h1>Formulario Simple</h1>
            <hr />
            <input type="text" className="form-control" placeholder="UserName" name="userName" value={userName} onChange={onInputChange} />
            <input type="email" className="form-control mt-2" placeholder="Gooogle@gmail.com" name="email" value={email} onChange={onInputChange} />
            {userName == 'Fabian2' && <Message />}
        </>
    )
}
