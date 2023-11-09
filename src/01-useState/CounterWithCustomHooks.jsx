import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHooks = () => {
    const {counter, increment, decrement, reset } = useCounter();
  return (
    <>
    <h1>counter With Hook: { counter }</h1>
    <hr />
    <button className="btn btn-success" onClick={() => increment(2)}>+2</button>
    <button className="btn btn-info" onClick={reset}>reset</button>
    <button className="btn btn-danger" onClick={() => decrement(2)}>-2</button>
    </>
  )
}
