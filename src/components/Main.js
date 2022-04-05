import { Route,Routes } from "react-router-dom"
import Carrito from "./Carrito"
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"

const Main = () => {

    return (
        <main>
            <h2>Bienvenido</h2>
            <h3>Conoce todos nuestros productos</h3>
            <Routes>
                <Route path="/" element={<ItemListContainer />}></Route>
                <Route path="/categoria/:idCategoria" element={<ItemListContainer />}></Route>
                <Route path="/item/:idItem" element={<ItemDetailContainer />}></Route>
                <Route path="/carrito" element={<Carrito />}></Route>
            </Routes>
        </main>
    )
}

export default Main

