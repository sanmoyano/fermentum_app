import ItemList from "./ItemList"

import { useState } from "react"
import { useEffect } from "react"

let productosIniciales = [
    {
        "id": 1,
        "nombre": "Golden Ale",
        "ibu": "16",
        "alcohol": "4.6",
        "precio": 190,
        "stock": 1000,
        "img": "/img/1-golden.jpg",
        "litros": 0
    },
    {
        "id": 2,
        "nombre": "Scotch",
        "ibu": "18",
        "alcohol": "4.6",
        "precio": 190,
        "stock": 1000,
        "img": "/img/2-scotch.jpg",
        "litros": 0
    },
    {
        "id": 3,
        "nombre": "Strong Ale",
        "ibu": "24",
        "alcohol": "7.4",
        "precio": 210,
        "stock": 1000,
        "img": "/img/3-strong.jpg",
        "litros": 0
    },
    {
        "id": 4,
        "nombre": "APA",
        "ibu": "28",
        "alcohol": "5.5",
        "precio": 220,
        "stock": 1000,
        "img": "/img/4-apa.jpg",
        "litros": 0
    },
    {
        "id": 5,
        "nombre": "AAA",
        "ibu": "26",
        "alcohol": "5.5",
        "precio": 220,
        "stock": 1000,
        "img": "/img/5-aaa.jpg",
        "litros": 0
    },
    {
        "id": 6,
        "nombre": "Session IPA",
        "ibu": "32",
        "alcohol": "4.0",
        "precio": 220,
        "stock": 1000,
        "img": "/img/6-session.jpg",
        "litros": 0
    },
    {
        "id": 7,
        "nombre": "Caramel IPA",
        "ibu": "52",
        "alcohol": "6.2",
        "precio": 250,
        "stock": 1000,
        "img": "/img/7-caramel.jpg",
        "litros": 0
    },
    {
        "id": 8,
        "nombre": "American IPA",
        "ibu": "54",
        "alcohol": "6.4",
        "precio": 250,
        "stock": 1000,
        "img": "/img/8-american.jpg",
        "litros": 0
    },
    {
        "id": 9,
        "nombre": "Juicy IPA",
        "ibu": "20",
        "alcohol": "6.6",
        "precio": 250,
        "stock": 1000,
        "img": "/img/9-juicy.jpg",
        "litros": 0
    }
]

const getDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {resolve(productosIniciales)}, 2000)
    })
}

const ItemListContainer = () => {
    const [items, setItems] = useState ([])

    useEffect(() => {
        getDatos()
        .then(promesaRespuesta => setItems(promesaRespuesta))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className="greeting__content">
            <h2>Bienvenido</h2>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer

