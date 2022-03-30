import { Link } from "react-router-dom"

const Item = ({ item }) => {
    return (
        <article className="cards__estilos">
            <div className="cards__estilos--img">
                <img src={item.img} alt={item.nombre} />
            </div>
            <div className="cards__estilos--text">
                <h2>{item.nombre}</h2>
                <Link to={`/item/${item.id}`}> Ver detalle</Link>
            </div>
        </article>
    )
}

export default Item