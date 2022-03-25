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
                <p>{item.description}</p>
                <p>{item.ibu} IBU</p>
                <p>{item.alcohol} %ALCH</p>
                <h2>${item.precio}/L</h2>
                {seleccionado === 0 ? (
                    <ItemCount stock={10} initial={0} onAdd={onAdd} />
                ) : (
                    <div className="card__redirect">
                        <button className="btn__terminar"><Link to="/carrito">Terminar compra</Link></button>
                        <Link to="/">Seguir comprando</Link>
                    </div>
                )}
            </div>
        </article>
    )
}

export default ItemDetail