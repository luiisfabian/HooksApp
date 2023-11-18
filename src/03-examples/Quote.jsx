import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({title, description}) => {

    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({
        width: 0, height: 0 
    })

    useLayoutEffect(() => {

const {width, height} = pRef.current.getBoundingClientRect();

        setBoxSize({width, height})
    }, [title])

    return (
        <>
            <blockquote className="blockquote text-end" style={{display: 'flex'}}>
                <p ref={pRef} className="mb-1">{title}</p>
                <footer className="blockquote-footer mt-3">{description}</footer>
            </blockquote>
            <code>{JSON.stringify(boxSize)}</code>
        </>

    )
}
