/* const App = () => "Hola Mundo con App importado"

export default App */


import React from 'react'

import ReactDOM from 'react-dom'

/* const App = () => {
  return (
    <div>App</div>
  )
} */


import NavBar from "./components/NavBar"
import Body from "./Body"
import Footer from "./Footer"
import Main from './Main'

const App = () => {
    return (
        <>
            <NavBar/> 
            <Body/>
            <Main/>
            <Footer/>
        </>
    )
  }

export default App


