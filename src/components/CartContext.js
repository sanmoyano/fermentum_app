import { createContext, useState } from "react"
export const contexto = createContext()

const { Provider } = contexto

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)
    
    const copiaCarrito = carrito.slice(0)

    const addItem = (item, cant) => {

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
        const itemEnCarrito = copiaCarrito.find(i => i.id === itemId)
        console.log(itemEnCarrito.stock)
        itemEnCarrito.cant-- 
        if(itemEnCarrito.cant === 0) {
            const itemsFiltrados = copiaCarrito.filter(item => item.id !== itemId)
            setCarrito(itemsFiltrados)
        } else {
            setCarrito(copiaCarrito)
        }
        setCantidad(cantidad - 1)
        setTotal(total - itemEnCarrito.precio)
    }

    const addSameItem = (itemId) => { 
        const itemEnCarrito = copiaCarrito.find(i => i.id === itemId)
        itemEnCarrito.cant++
        setCarrito(copiaCarrito)
        setCantidad(cantidad + 1)
        setTotal(total + itemEnCarrito.precio)
    }

    const clearCart = () => {
        setCarrito([])
        setCantidad(0)
        setTotal(0)
    }

    const valorDelContexto = {
        carrito,
        total,
        cantidad,
        addItem,
        removeItem,
        addSameItem,
        clearCart
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider

