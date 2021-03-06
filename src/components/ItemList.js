import Item from "./Item"

const ItemList = ({ items }) => {
    return (
        <section className="item__list">
            {items.map((estilo) => {
                return (
                    <Item key={estilo.id} item={estilo}/>
                )
            })}
            
        </section>
    )
}

export default ItemList

