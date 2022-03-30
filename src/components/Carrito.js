import { useContext } from "react"
import { contexto } from "./CartContext"
import { Link } from "react-router-dom"
import { db } from "./firebase"
import { collection, getDocs, query, where } from "firebase/firestore"


const Carrito = () => {

    const { carrito, calTotal, clearCart, removeItem } = useContext(contexto)

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
                <div className="carrito__card" key={item.idCategoria}>
                    <img src={item.img} alt={item.nombre} />
                    <div className="carrito__card--text">
                        <h2>{item.nombre}</h2>
                        <p>Cantidad:{item.cant}</p>
                        <p>Precio: ${item.precio}</p>
                        <button onClick={() => removeItem(item.idCategoria)}>Eliminar producto</button>
                    </div>
                </div>
            ))}
            <div className="carrito__total">
                <h3>TOTAL:${calTotal()}</h3>
                <button onClick={() => clearCart()}>Vaciar carrito</button>
                <Link to="/">Seguir comprando</Link>
            </div>
        </>
    )
}

export default Carrito