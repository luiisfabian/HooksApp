import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = (iterationNumber = 100) =>{
  for (let i = 0; i < iterationNumber; i++) {
      console.log("Ahi vamos!");    
  }
  return `${iterationNumber} iteraciones realizadas`
}



export const MemoHook = () => {
  

    const {counter, increment } =  useCounter(10);

    const [show, setShow] = useState(true)

    const messageMemorize =   useMemo(()=>heavyStuff(counter), [counter])


  return (
    <>
        <h1>counter <small>{counter}</small></h1>

        <h4>{messageMemorize}</h4>
        <button className="btn btn-primary" onClick={ () => { increment()}}>
            +1
        </button  >
        <button onClick={ () => { setShow(!show)}} className="btn btn-danger">SHOW/ HIDE {JSON.stringify(show)}</button>
    </>
  )
}
