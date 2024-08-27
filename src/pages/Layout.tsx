import { NavLink, Outlet } from "react-router-dom"

export const Layout = () => {

    return (
        <>
            <header>
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