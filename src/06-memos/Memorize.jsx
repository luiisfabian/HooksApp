import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {

    const {counter, increment } =  useCounter(10);

    const [show, setShow] = useState(true)

  return (
    <>
        <h1>counter <Small value={counter} /></h1>
        <button className="btn btn-primary" onClick={ () => { increment()}}>
            +1
        </button  >
        <button onClick={ () => { setShow(!show)}} className="btn btn-danger">SHOW/ HIDE {JSON.stringify(show)}</button>
    </>
  )
}
