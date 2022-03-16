import ItemDetail from "./ItemDetail"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"


const ItemDetailContainer = () => {
    const [item, setItem] = useState ({})
    const [loading, setLoading] = useState (true)
    const {idCategoria} = useParams()
    // const parametros = useParams()
    // console.log(parametros)
    // const id = parametros.idCategoria 


    useEffect(() => {
        fetch(`./items.json/${idCategoria}`)
        .then((response) => {
            return response.json()
        })
        .then((resultado) => {
            console.log(resultado)
        })
        .catch(() => {
            toast.error("Error al cargar los productos en el fetch")
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