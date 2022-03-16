import { Link } from "react-router-dom"

const Item = ({ items }) => {
    return (
        <article className="cards__estilos">
            <div className="cards__estilos--img">
                <img src={items.img} alt={items.nombre} />
            </div>
            <div className="cards__estilos--text">
                <h2>{items.nombre}</h2>
                <Link to={`/estilos/${items.idCategoria}`}> Ver detalle</Link>
            </div>
        </article>
    )
}

export default Item