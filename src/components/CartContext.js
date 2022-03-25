import { createContext, useState } from "react"
export const contexto = createContext()
const { Provider } = contexto

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const addItem = (item, cant) => {
        const copiaCarrito = [...carrito]
        const itemAlCarrito = { ...item, cant }
        if(isInCart(item.idCategoria)){
            const itemEnCarrito = copiaCarrito.find(i => i.idCategoria === item.idCategoria)
            itemEnCarrito.cant += cant
            setCarrito(copiaCarrito)

            //OTRA OPCION
            // isInCart(item.idCategoria)
            //     ? calCantidad (item, cant)
            //     : setCarrito ([...carrito, {...item, cant}])
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
            return item.idCategoria === id
        })
    }
    const removeItem = (itemId) => {
        const itemsFiltrados = carrito.filter(item => item.idCategoria !== itemId)
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

