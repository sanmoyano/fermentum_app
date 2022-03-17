import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import itemsIniciales from "./estilosIniciales.js"



const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams()
    
    const getDatos = () => {
        return new Promise((resolve, reject) => {
            const buscarItem = itemsIniciales.find(item => item.idCategoria === parseInt(idCategoria))
            setTimeout(() => {
                resolve(buscarItem)
                reject("error buscando el producto")
            }, 1000)
        })
        
    }

    useEffect(() => {
        getDatos()
        .then(promesaRespuesta => setItem(promesaRespuesta))
        .catch(() => {
            toast.error("Error al cargar los productos desde el fetch")
        })
        .finally(() => {setLoading(false)})
    }, [])

    if (loading) {
        return <h1>Cargando...</h1>
    } else {
        return (
            <ItemDetail item={item} />
        )

    }
}

export default ItemDetailContainer


// const getItems = () => {
//     return new Promise((resolver, reject) => {
//         const buscarProducto = items.find((item) => item.idCategoria === parseInt(idCategoria))

//         setTimeout(() => {
//             resolver(buscarProducto)
//             reject("error")
//         }, 2000)
//     })
// }


// useEffect(() => {
//     fetch(`./items.json${idCategoria}`)
//         .then((response) => {
//             return response.json()
//         })
//         .then((resultado) => {
//             setItem(resultado)
//         })
//         .catch(() => {
//             toast.error("Error al cargar los productos desde el fetch")
//         })
//         .finally(() => {
//             setLoading(false)
//         })
// }, [])

// const getDatos = () => {
//     return new Promise((resolve, reject) => {
//         const buscarItem = misItems.find(item => item.idCategoria === parseInt(idCategoria))
//         setTimeout(() => {
//             resolve(buscarItem)
//             reject("error buscando el producto")
//         }, 2000)
//     })
    
// }

// useEffect(() => {
//     getDatos()
//     .then(promesaRespuesta => setItem(promesaRespuesta))
//     .catch(() => {
//         toast.error("Error al cargar los productos desde el fetch")
//     })
// }, [])