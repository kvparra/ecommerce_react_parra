import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import {toast } from 'react-toastify';
import {useParams} from "react-router-dom"
const ItemListContainer = () => {

  const[loading, setLoading]= useState(true) 
  const [items, setItems] =useState([]);
  const {idCategoria}= useParams() 

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products') 
    .then((response) =>{ 
      return response.json()
    })
    .then((resultado)=>{
      setItems(resultado)
    })
    .catch(() =>{
      toast.error("Error al cargar los productos")
    })
    .finally(() =>{
      setLoading(false)
    })

  },[idCategoria])

    return (
      <>
        {loading? <h1>Cargando productos...</h1> : <ItemList items={items}/>}
      </>
    )
   
}
export default ItemListContainer