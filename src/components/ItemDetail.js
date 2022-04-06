import ItemCount from "./ItemCount"

import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './CartContext'

const ItemDetail = ({ item }) => {

    const [seleccionado, setSeleccionado] = useState(0)
    const { addItem } = useContext(contexto)

    const onAdd = (cantidadSeleccionada) => {
        setSeleccionado(cantidadSeleccionada)
        addItem(item, cantidadSeleccionada)
    }

    return (
        <article className="card__detail">
            <img src={item.img} alt={item.nombre} />
            <div className="titulos">
                <div className="card__content">
                    <h3>{item.nombre}</h3>
                    {item.description === undefined ? (<p className="text">{item.resume}</p>) : (<p className="text">{item.description}</p>)}
                    {item.ibu !== undefined ? (<p>IBU: {item.ibu}</p>) : ("")}
                    {item.alcohol !== undefined ? (<p>%ALCH: {item.alcohol}</p>) : ("")}
                    <h2>${item.precio}</h2>
                </div>
                {seleccionado === 0 ? (
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                ) : (
                    <div className="card__redirect">
                        <Link to="/">Seguir comprando</Link>
                        <button className="btn__terminar"><Link to="/carrito">Terminar compra</Link></button>
                    </div>
                )}
            </div>
        </article>
    )
}

export default ItemDetail