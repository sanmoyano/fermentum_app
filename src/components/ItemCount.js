import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {
    // const { stock, initial, onAdd } = props
    const [inicial, setInicial] = useState(initial)

    const clickSumar = () => {
        if (inicial < stock)
            setInicial(inicial + 1)
    }

    const clickRestar = () => {
        if (inicial === stock || inicial !== initial)
            setInicial(inicial - 1)
    }

    const agregarCarrito = () => {
        onAdd(inicial)
    }

    return (
        <div className="item__count">
            <div className="item__count--content">
                <button className="count__button" onClick={clickSumar}>+</button>
                <p>Items: {inicial}</p>
                <button className="count__button" onClick={clickRestar}>-</button>
            </div>
            <button className="item__cart--button" onClick={agregarCarrito}>Agregar al carrito</button>
        </div>

    )
}

export default ItemCount
