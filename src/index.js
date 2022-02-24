// 1) Necesitamos la variable React en scope.
    // Puedo resumir esta linea con imr + enter

import React from 'react'

// 2) Necesitamos la variable ReactDOM en scope
    // Puedo resumir esta linea con imrd + enter

import ReactDOM from 'react-dom'

// 3) Necesitamos un componente en scope

/* function App () {
    return "Hola Mundo"
} */

/* const App =() => {
    return "Hola Mundo Flecha"
} */

import App from './App'

import "./estilos.css"
/* const App = () => "Hola Mundo Flecha sin retorno" */


// 4) Necesitamos poner el componente en el DOM

ReactDOM.render(<App/>,document.getElementById('root'))

