import { createContext, useState } from "react"
export const contexto = createContext()
const { Provider } = contexto

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (item, cant) => {
        const copiaCarrito = [...carrito]
        const itemAlCarrito = { ...item, cant }
        copiaCarrito.push(itemAlCarrito)
        setCarrito(copiaCarrito)
    }

    const removeItem = (itemId) => {

    }

    const clearCart = () => {
        setCarrito([])
    }

    const isInCart = (id) => {
        return carrito.some(function(item) { 
            return item.id === id
        })
    }

    const valorDelContexto = {
        carrito,
        cantidad,
        total,
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider

