const Item = ({ estilo }) => {
    return (
        <div className="cards__estilos">
            <div className="cards__estilos--img">
                <img src={estilo.img} alt={estilo.nombre} />
            </div>
            <div className="cards__estilos--text">
                <h2>{estilo.nombre}</h2>
                <p>{estilo.ibu} IBU</p>
                <p>{estilo.alcohol} %ALCH</p>
                <h2>${estilo.precio}/L</h2>
            </div>
        </div>
    )
}

export default Item