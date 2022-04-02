import {Container} from 'react-bootstrap'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {Link, Route, Routes} from "react-router-dom"
import Carrito from "./components/Carrito"
import TestContainer from "./Test/TestContainer"
import Form from "./components/Form"

const Main = () => {

  return (
    <Container as="main" fluid>          
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<Carrito/>}/>
            <Route path="/category/:idCategoria" element={<ItemListContainer/>}/>
            <Route path="/item/:idProducto" element={<ItemDetailContainer/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="/test" element={<TestContainer/>}/>
          </Routes>       
    </Container>
  )
}
export default Main;
