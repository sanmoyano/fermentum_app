const ItemListContainer = (greeting) => {
    const {nombre} = greeting
    return (
        <div className="greeting__content">
            <h2>Bienvenido {nombre}</h2>
        </div>
    )
}

export default ItemListContainer