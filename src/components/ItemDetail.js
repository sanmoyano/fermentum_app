

const ItemDetail = ({ item }) => {
    return (
        <article>
            <img src={item.img} alt={item.nombre} />
            <div className="itemDetail__content">
                <p>{item.ibu} IBU</p>
                <p>{item.alcohol} %ALCH</p>
                <h2>${item.precio}/L</h2>
            </div>
        </article>
    )
}

export default ItemDetail