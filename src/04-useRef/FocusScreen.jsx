import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {

    console.log("sdasd");
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input ref={inputRef} type="text" placeholder="ingrese su nombre" className="form-control" />
      <button  className="btn btn-success mt-2" onClick={onClick}>FOCUS</button>
    </>
  )
}
