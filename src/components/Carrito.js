import { useContext } from "react"
import { contexto } from "./CartContext"
import { Link } from "react-router-dom"

import { toast } from "react-toastify"

import { db } from "./firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"



const Carrito = () => {

    const { carrito, total, clearCart, removeItem } = useContext(contexto)

    if (carrito.length === 0) {
        return (
            <div className="carrito__vacio">
                <h3>Carrito vacío</h3>
                <Link to="/">Volver a inicio</Link>
            </div>
        )
    }

    const finalizarCompra = () => {
        const ordenesDeCompra = {
            buyer: {
                nombre: "Juan",
                apellido: "Perez",
                email: "juan@gmail.com",
                telefono: "12345678"
            },
            items: carrito,
            date: serverTimestamp(),
            total: total
        }

        const ordenDeCompraCollection = collection(db, "ordenesDeCompra")
        const ordenDeCompraRef = addDoc(ordenDeCompraCollection, ordenesDeCompra)

        ordenDeCompraRef
            .then(() => {
                clearCart()
                toast.success("Compra realizada con éxito")
            })
            .catch(() => toast.error("Error al realizar la compra"))
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
                            <p>Cantidad: {item.cant}</p>
                            <p>${item.precio}</p>
                        </div>
                        <div className="carrito__seguir">
                            <button onClick={() => removeItem(item.id)}>eliminar</button>
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
                <button className="btn__finalizar" onClick={finalizarCompra}>Finalizar compra</button>
            </div>
        </>
    )
}

export default Carrito