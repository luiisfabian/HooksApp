import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";
import { useCounter, useFetch } from "../hooks";


export const Layout = () => {

    
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://fakestoreapi.com/products/`+counter);
    const dataNotFound = {
        title: "The developer",
        description: "There are no more quotations or maybe there are 🙄🥲, keep clicking 😅"
      };
      
      const { title, description } = (data !== null && typeof data === 'object' && 'title' in data && 'description' in data) ? data : dataNotFound;
      return (
        <>
            <h1>Breakingbad Quotes</h1>
            <hr />

            {

                isLoading ? <LoadingQuote /> : <Quote title={title} description={description}  /> 
            }

            <button disabled={isLoading} type="button" onClick={()=> increment()} className="btn btn-success">Next Quote</button>




        </>
    )
}
