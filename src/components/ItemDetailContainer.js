import ItemDetail from "./ItemDetail"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"


const ItemDetailContainer = () => {
    const [item, setItem] = useState ({})
    const [loading, setLoading] = useState (true)
    const {idDetalle} = useParams()

    useEffect(() => {
        fetch(`./items.json${idDetalle}`)
        .then((response) => {
            return response.json()
        })
        .then((resp) => {
            console.log(resp)
        })
        .catch(() => {
            toast.error("Error al cargar los productos")
        })
        .finally(() => {
            setLoading(false)
        })
    })

    if(loading) {
        return <h1>Cargando...</h1>
    } else {
        return (
            <ItemDetail item={item}/>
        )
        
    }
}

export default ItemDetailContainer