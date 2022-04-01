import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection, getDocs, query, where } from "firebase/firestore"



const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const { idCategoria } = useParams()

    useEffect(() => {
        const itemCollection = collection(db, "items")
        const consulta = getDocs(itemCollection)
        const hacerPerdidoDb = (variableConGetDocs) => {
            variableConGetDocs
                .then(promesaRespuesta => setItems(promesaRespuesta.docs.map(doc => doc.data())))
                .catch(() => toast.error("Error cargando catalogo de productos"))
                .finally(() => setLoading(false))
        }
        (!idCategoria) ? (
            hacerPerdidoDb(consulta)
        ) : (
            hacerPerdidoDb(getDocs(query(itemCollection, where("categoria", "==", idCategoria))))
        )
}, [idCategoria])

if (loading) {
    return <h1>Cargando...</h1>
} else {
    return <ItemList items={items} />
}
}

export default ItemListContainer

