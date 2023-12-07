import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const {user, setUser} = useContext(UserContext);
  return (
    <>
    <h1>Login Page<small>{user?.name}</small></h1>
    <hr />

    <pre  aria-label='pre'>
      {
        JSON.stringify(user, null, 3)
      }
    </pre>

    <button onClick={() => setUser({id: 123, name:"Fabian", email: "luii@gmail.com"})} className="btn btn-primary">SetUser</button>
    </>
  )
}
