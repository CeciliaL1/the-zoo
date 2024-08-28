import { Link } from "react-router-dom"

export const NotFound = () => {

    return (
        <>
            <h2>404 - Sidan du letar efter finns ej. </h2>
            <Link to='/'>Tillbaka till start</Link>
        </>
    )
}