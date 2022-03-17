import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import products from './database/Products'
import {Container} from 'react-bootstrap'
import {toast } from 'react-toastify';
import {useParams} from "react-router-dom"





const ItemListContainer = () => {

  const[loading, setLoading]= useState(true) 
  const [items, setItems] =useState([]);
  
  const {idCategoria}= useParams() 

  useEffect(()=>{
    toast.info("Se están cargando los productos")
    
    const getProducts = new Promise ((res, rej)=>{
      setTimeout(()=>{
        console.log(idCategoria)
        if (idCategoria == undefined){
          return res(products)
        }else if (idCategoria!=null){
          const filtered = products.filter(function(element){
            return element.category==idCategoria;
          })
          return res(filtered)
        }        
        /* rej(products) */
    },2000)
    })
    
    getProducts
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