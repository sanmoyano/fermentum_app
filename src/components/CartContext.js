import { createContext, useState } from "react"
export const contexto = createContext()
const { Provider } = contexto
const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)

    const addItem = (item, cant) => {
        const copiaCarrito = [...carrito]
        const itemAlCarrito = { ...item, cant }

        if(isInCart(item.id)){
            const itemEnCarrito = copiaCarrito.find(i => i.id === item.id)
            itemEnCarrito.cant += cant
            setCarrito(copiaCarrito)
            setCantidad(cantidad + cant)
            setTotal(total + item.precio * cant)
        } else {
            copiaCarrito.push(itemAlCarrito)
            setCarrito(copiaCarrito)
        }
    }

    const calCantidad = () => {
        let cant = 0
        carrito.forEach(item => cant += item.cant)
        return cant
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

    const calTotal = () => {
        let total = 0
        carrito.forEach(item => total += item.cant * item.precio)
        return total
    }

    const valorDelContexto = {
        carrito,
        total,
        cantidad,
        addItem,
        calCantidad,
        isInCart,
        removeItem,
        clearCart,
        calTotal
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider

