import {Container} from 'react-bootstrap'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {Link, Route, Routes} from "react-router-dom"
import Carrito from "./components/Carrito"

const Main = () => {
//Imaginariamente en esta line hgo un pedido a una api / DB donde traigo todos los productos
  return (
    <Container as="main" fluid>
            {/* <ItemListContainer nombre="Karina" empresa="JUANÍTICA"/>
            <ItemDetailContainer/> */}

          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
            <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
            <Route path="/producto/:idProducto" element={<ItemDetailContainer/>}/>
          </Routes>

            


    </Container>
  )
}
export default Main;
