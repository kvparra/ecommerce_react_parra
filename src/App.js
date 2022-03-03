
import React from 'react'

import ReactDOM from 'react-dom'



import Header from "./Header"
import Body from "./Body"
import Main from './Main'
import Footer from "./Footer"
import ItemListContainer from './components/ItemListContainer'


const App = () => {


    return (
        <>
            <Header/> 
            <ItemListContainer nombre="Karina" empresa="JUANÍTICA"/>
            <Body/>
            <Main/>
            <Footer/>
        </>
    )
  }

export default App



 /*  const datosPersona= {
    nombre: "Juan",
    empresa: "Juanítica"
  } */

              {/* <Main persona={persona}/> */}