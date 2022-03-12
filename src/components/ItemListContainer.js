import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import products from './database/Products'
import {Container} from 'react-bootstrap'


//Creamos una promesa que nos devuelva los datos de la DB
// Simulamos la demora de solicitar datos a la red, demorando 2 seg la promesa usando setTimeOut()
function getProducts(){
  return new Promise ((res, rej)=>{
    setTimeout(()=>{
      res(products)
  },2000)
  })
}

function ItemListContainer ({greeting}) {

  const [items, setItems] =useState([]);

  useEffect(()=>{
    getProducts()
  .then(respuestaPromise=>setItems(respuestaPromise))
  .catch(error=>console.error(error));
  },[])
     
  return (
    <Container>
      <h1>{greeting}</h1>
      <ItemList items={items}/>
    </Container>
  )
}

export default ItemListContainer