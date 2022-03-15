import { Link } from "react-router-dom"

const Item = ({ estilos }) => {
    return (
        <article className="cards__estilos">
            <div className="cards__estilos--img">
                <img src={estilos.img} alt={estilos.nombre} />
            </div>
            <div className="cards__estilos--text">
                <h2>{estilos.nombre}</h2>
                <Link to={`/estilos/${estilos.idDetalle}`}> Ver detalle</Link>
            </div>
        </article>
    )
}

export default Item