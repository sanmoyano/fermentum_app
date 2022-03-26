import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
// import itemsIniciales from "./estilosIniciales.js"
import { db } from "./firebase"
import { collection, getDocs } from "firebase/firestore"



const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const { idCategoria } = useParams()

    // const getItems = () => {
    //     return new Promise ((resolve, reject) => {
    //         setTimeout(() => {resolve(itemsIniciales)}, 1000)
    //     })
    // }

    useEffect(() => {

        const itemCollection = collection(db, "items")
        const consulta = getDocs(itemCollection)
        consulta
            .then(promesaRespuesta => setItems(promesaRespuesta))
            .catch(() => toast.error("Error cargando catalogo de productos"))
            .finally(() => { setLoading(false) })

        // getItems()
        // .then(promesaRespuesta => setItems(promesaRespuesta))
        // .catch(() => toast.error("Error cargando catalogo de productos"))
        // .finally(() => {setLoading(false)})
    }, [idCategoria])

    if (loading) {
        return <h1>Cargando...</h1>
    } else {
        return <ItemList items={items} />
    }
}

export default ItemListContainer

