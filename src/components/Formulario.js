import { useState, useContext } from "react"
import { contexto } from "./CartContext"
import { toast } from "react-toastify"

import { db } from "./firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const Formulario = () => {
    const { carrito, total, clearCart } = useContext(contexto)
    const [datos, setDatos] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        const ordenesDeCompra = {
            buyer: {
                nombre: datos.nombre,
                apellido: datos.apellido,
                email: datos.email,
                telefono: datos.telefono
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

    const handleInputChange = (e) => {
        e.preventDefault()
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form className="formulario__content" onSubmit={handleSubmit} action="">
                <input placeholder="Nombre..."  onChange={handleInputChange} name="nombre" type="nombre" />
                <input placeholder="Apellido..." onChange={handleInputChange} name="apellido" type="apellido" />
                <input placeholder="Email..." onChange={handleInputChange} name="email" type="email" />
                <input placeholder="Tel..." onChange={handleInputChange} name="telefono" type="telefono" />
                <button className="btn__finalizar" type="submit">Finalizar</button>
            </form>
        </div>
    )
}

export default Formulario