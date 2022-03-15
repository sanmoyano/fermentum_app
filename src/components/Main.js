import { Route,Routes } from "react-router-dom"
import Carrito from "./Carrito"
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"
import Contacto from "./Contacto"
import Accesorios from "./Accesorios"

const Main = () => {

    return (
        <main>
            <h2>Bienvenido</h2>
            <h3>Conoce todos nuestros estilos de cerveza</h3>
            <Routes>
                <Route path="/" element={<ItemListContainer />}></Route>
                <Route path="/carrito" element={<Carrito />}></Route>
                <Route path="/estilos/:idDetalle" element={<ItemDetailContainer />}></Route>
                <Route path="/cervezas" element={<ItemListContainer />}></Route>
                <Route path="/contacto" element={<Contacto />}></Route>
                <Route path="/accesorios" element={<Accesorios />}></Route>
            </Routes>
        </main>
    )
}

export default Main

