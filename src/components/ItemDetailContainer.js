import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "./firebase"
import { collection, query, where, getDocs } from "firebase/firestore"



const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { idItem } = useParams()

    useEffect(() => {
        const itemCollection = collection(db, "items")
        const filtro = query(itemCollection, where("id", "==", Number(idItem)))
        const consulta = getDocs(filtro)

        consulta
                .then(promesaRespuesta => setItem(promesaRespuesta.docs[0].data()))
                .catch(() => toast.error("Error cargando catalogo de productos"))
                .finally(() => setLoading(false))
    }, [idItem])

    if (loading) {
        return <h1>Cargando...</h1>
    } else {
        return (
            <ItemDetail item={item} />
        )

    }
}

export default ItemDetailContainer
