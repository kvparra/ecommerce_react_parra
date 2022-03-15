import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import ItemDetail from './ItemDetail'
import productoUno from './database/Product1'

function getProductoUno(){
  return new Promise ((res, rej)=>{
    setTimeout(()=>{
      res(productoUno)
  },2000)
  })
}
const ItemDetailContainer = () => {
  const [productoOne, setProducto] =useState({});
  useEffect(()=>{
    getProductoUno()
  .then(respuestaPromise=>setProducto(respuestaPromise))
  .catch(error=>console.error(error));
  },[])

  return (
    <Container>ItemDetailContainer
      <ItemDetail productoOne={productoOne}/>
    </Container>
  )
}
export default ItemDetailContainer