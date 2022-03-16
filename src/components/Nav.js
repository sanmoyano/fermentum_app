import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="layout__nav">
            <ul>
                <li> <Link to="/" className="nav__link">Inicio</Link></li>
                <li> <Link to="/Cervezas/:id" className="nav__link">Cervezas</Link></li>
                <li> <Link to="/Contacto" className="nav__link">Contacto</Link></li>
                <li> <Link to="/Accesorios" className="nav__link">Accesorios</Link></li>
            </ul>
        </nav>
    )
}

export default Nav