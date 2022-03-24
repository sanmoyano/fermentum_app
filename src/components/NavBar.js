import Nav from "./Nav"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import { contexto } from "./CartContext"
import { useContext } from "react"


const NavBar = () => {
    const { calCantidad } = useContext(contexto)
    return (
        <header id="header__layout">
            <Link to="/">
                <h1>Fermentum Faber</h1>
            </Link>
            <Nav />
            <Link to="/carrito">
                <CartWidget />
                {calCantidad ()}
            </Link>
        </header>
    )
}

export default NavBar