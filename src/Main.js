import {Container} from 'react-bootstrap'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {Route, Routes} from "react-router-dom"
import Carrito from "./components/Carrito"

import Checkout from "./components/Checkout"

const Main = () => {

  return (
    <Container as="main" fluid>          
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<Carrito/>}/>
            <Route path="/category/:idCategoria" element={<ItemListContainer/>}/>
            <Route path="/item/:idProducto" element={<ItemDetailContainer/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>       
    </Container>
  )
}
export default Main;
