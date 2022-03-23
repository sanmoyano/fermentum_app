import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import MiProvider from "./components/CartContext"

const App = () => {
    return (
        <MiProvider>
            <BrowserRouter>
                <NavBar />
                <Main />
                <Footer />
                <ToastContainer />
            </BrowserRouter>
        </MiProvider>
    )
}

export default App