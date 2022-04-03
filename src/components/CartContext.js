import { createContext, useState } from "react"
export const contexto = createContext()

const { Provider } = contexto

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (item, cant) => {
        const copiaCarrito = carrito.slice(0)
        const setEstados = () => {
            setCarrito(copiaCarrito)
            setCantidad(cantidad + cant)
            setTotal(total + item.precio * cant)
        }
        if(isInCart(item.id)) {
            const itemEnCarrito = copiaCarrito.find(i => i.id === item.id)
            itemEnCarrito.cant += cant
            setEstados()
        } else {
            item.cant = cant
            copiaCarrito.push(item)
            setEstados()
        }
    }

    const isInCart = (id) => {
        return carrito.some(function(item) {
            return item.id === id
        })
    }
    const removeItem = (itemId) => {
        const itemsFiltrados = carrito.filter(item => item.id !== itemId)
        setCarrito(itemsFiltrados)
    }

    const clearCart = () => {
        setCarrito([])
    }

    const valorDelContexto = {
        carrito,
        total,
        cantidad,
        addItem,
        removeItem,
        clearCart
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider

