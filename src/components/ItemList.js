import Item from "./Item"

const ItemList = ({ estilos }) => {
    return (
        <section className="item__list">
            {estilos.map(estilo => {
                return (
                    <Item key={estilo.idCategoria} estilos={estilo}/>
                )
            })}
            
        </section>
    )
}

export default ItemList

