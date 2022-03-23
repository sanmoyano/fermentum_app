import ItemCount from "./ItemCount"
import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'

import { contexto } from "./CartContext"

const ItemDetail = ({ item }) => {
    const [seleccionado,setSeleccionado] = useState(false)

    const { addItem } = useContext(contexto)

    const onAdd = (cantidadSeleccionada) => {
        console.log('Añadir al carrito',cantidadSeleccionada)
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
                <Link to="/carrito"></Link>
                <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                <Link to="/carrito">Ir al carrito</Link>
            </div>
        </article>
    )
}

export default ItemDetail