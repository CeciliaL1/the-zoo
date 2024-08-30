import { NavLink, Outlet } from "react-router-dom"
import './styles/layout.css'

export const Layout = () => {

    return (
        <>
            <header>
                <h2>Zoo</h2>
                <nav>
                    <ul>
                        <li><NavLink to='/'>Start</NavLink></li>
                        <li><NavLink to='/animals'>Djuren</NavLink></li>
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet></Outlet>
            </main>
        </>
    )

}