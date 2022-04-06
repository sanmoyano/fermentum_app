import { useContext } from "react"
import { contexto } from "./CartContext"
import { Link } from "react-router-dom"

import Formulario from "./Formulario"

const Carrito = () => {

    const { carrito, total, clearCart, removeItem, addSameItem } = useContext(contexto)

    if (carrito.length === 0) {
        return (
            <div className="carrito__vacio">
                <h3>Carrito vacío</h3>
                <Link to="/">Volver a inicio</Link>
            </div>
        )
    }

    return (
        <>
            {carrito.map((item) => (
                <div className="carrito__card" key={item.id}>
                    <img src={item.img} alt={item.nombre} />
                    <div className="carrito__card--text">
                        <h2>{item.nombre}</h2>
                        <p className="carrito__resume">{item.resume}</p>
                        <div className="carrito__count">
                            <button onClick={() => addSameItem(item.id)}>+</button>
                            <p>{item.cant}</p>
                            {item.cant !== 1 ? (
                                <button onClick={() => removeItem(item.id)}>-</button>
                            ) : (
                                <button className="btn__delete" onClick={() => removeItem(item.id)}>Eliminar</button>)
                            }
                            <p>${item.precio * item.cant}</p>
                            <p className="carrito__resume">stock disponible: {item.stock}</p>

                        </div>
                        <div className="carrito__seguir">
                            <Link to="/">seguir comprando</Link>
                        </div>
                    </div>
                </div>
            ))}
            <div className="carrito__total">
                <div className="carrito__total--edit">
                    <button onClick={() => clearCart()}>Vaciar carrito</button>
                    <h2>TOTAL: ${total}</h2>
                </div>
                <Formulario />
            </div>
        </>
    )
}

export default Carrito