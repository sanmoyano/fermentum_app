import Nav from "./Nav"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <header id="header__layout">
            <h1>Fermentum Faber</h1>
            <Nav/>
            <CartWidget/>
        </header>
    )
}

export default NavBar