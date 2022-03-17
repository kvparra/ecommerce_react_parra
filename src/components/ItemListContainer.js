import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import products from './database/Products'
import {Container} from 'react-bootstrap'
import {toast } from 'react-toastify';
import {useParams} from "react-router-dom"


function getProducts(){
  return new Promise ((res, rej)=>{
    setTimeout(()=>{
      
      res(products)
      /* rej(products) */
  },2000)
  })
}

const ItemListContainer = () => {

  const[loading, setLoading]= useState(true) 
  const [items, setItems] =useState([]);
  console.log("render nuevo")
  const {idCategoria}= useParams()
  console.log(idCategoria)
  /* const resultado = useParams
  console.log(resultado) */
  
  

  useEffect(()=>{
    toast.info("🦄Se están cargando los productos")
    getProducts()
  .then((respuestaPromise)=>{
    toast.dismiss()
    setItems(respuestaPromise)
  })
  .catch((error)=>{
    toast.error("Error al cargar los productos")
  })
  .finally(()=>{
    setLoading(false)
  })
  },[idCategoria])
     
  if(loading){
    return <h1>Cargando...</h1>
  } else{
    return <ItemList items={items}/>
    
  }
}

export default ItemListContainer

//L 17/03: