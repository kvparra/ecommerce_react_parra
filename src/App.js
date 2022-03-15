
import React from 'react'

import ReactDOM from 'react-dom'



import Header from "./Header"
import Body from "./Body"
import Main from './Main'
import Footer from "./Footer"
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'


const App = () => {

  const valor_de_a = 1
    return (
        <>
            <Header/> 
            <ItemListContainer nombre="Karina" empresa="JUANÍTICA"/>
            <ItemDetailContainer/>
            <Body/>
            <Main a={valor_de_a}>
                <h2>Hello world</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, error? Inventore, at deleniti, tempore culpa quis atque, expedita sequi consequuntur sint nam modi. Iste illum eius consequatur sapiente, autem velit?
                  
                </p>


            </Main>
            <Footer/>
        </>
    )
  }

export default App