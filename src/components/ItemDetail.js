import ItemCount from "./ItemCount"
import {useState} from 'react'

const ItemDetail = ({ item }) => {
    const [seleccionado,setSeleccionado] = useState(false)
    
    const onAdd = (cantidadSeleccionada) => {
        console.log('Añadir al carrito',cantidadSeleccionada)
        setSeleccionado(cantidadSeleccionada)
    }

    return (
        <article>
            <img src={item.img} alt={item.nombre} />
            <div className="itemDetail__content">
                <p>{item.ibu} IBU</p>
                <p>{item.alcohol} %ALCH</p>
                <h2>${item.precio}/L</h2>
            </div>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </article>
    )
}

export default ItemDetail