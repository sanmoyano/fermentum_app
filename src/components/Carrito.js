import { useContext } from "react"
import { contexto } from "./CartContext"

const Carrito = () => {

    const {carrito, total} = useContext (contexto)

    return (
        <div>Carrito</div>
    )
}

export default Carrito