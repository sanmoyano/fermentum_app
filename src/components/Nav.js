import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="layout__nav">
            <ul>
                <li> <Link to="/" className="nav__link">Inicio</Link></li>
                <li> <Link to="/categoria/cerveza" className="nav__link">Cervezas</Link></li>
                <li> <Link to="/categoria/accesorio" className="nav__link">Accesorios</Link></li>
                <li> <Link to="/categoria/packs" className="nav__link">Packs</Link></li>
            </ul>
        </nav>
    )
}

export default Nav