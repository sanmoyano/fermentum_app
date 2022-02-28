import ItemCount from "./ItemCount"

const ItemListContainer = (greeting) => {
    const {nombre} = greeting
    return (
        <div className="greeting__content">
            <h2>Bienvenido {nombre}</h2>
            <ItemCount stock ={10} initial= {1} onAdd = {() => {}}/>
        </div>
    )
}

export default ItemListContainer