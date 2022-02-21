//1) Necesitamos la variable React en scope
/*ES6 Modules*/ import React from 'react'

//2) Necesitamos la variable ReactDOM en scope
import ReactDOM from 'react-dom'

//3) Necesitamos un componente en scope, generalmente esta en otro archivo y se importa.
// const App = () => "Hola Mundo"
import App from './App'
import "./styles.css"

//4) Necesitamos poner el componente en el DOM
ReactDOM.render(<App/>, document.getElementById("root"))