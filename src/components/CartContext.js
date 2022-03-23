import { createContext, useState } from "react"

export const contexto = createContext()
const { Provider } = contexto

const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (item, cantidad) => {
        const carritoCopia = [...carrito]
        const itemAlCarrito = {...item, cantidad}
        carritoCopia.push(itemAlCarrito)
        setCarrito(carritoCopia)
    }

    const removeItem = (itemId) => {

    }

    const clearCart = () => {
        
    }

    const isInCart = (id) => {
        setCarrito ([])
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
