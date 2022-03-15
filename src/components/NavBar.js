import Nav from "./Nav"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <header id="header__layout">
            <Link to="/">
                <h1>Fermentum Faber</h1>
            </Link>
            <Nav />
            <Link to="/carrito">
                <CartWidget />
            </Link>
        </header>
    )
}

export default NavBar