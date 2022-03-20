import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import {toast } from 'react-toastify';
import {useParams} from "react-router-dom"

const ItemListContainer = () => {

  const[loading, setLoading]= useState(true) 
  const [items, setItems] =useState([]);
  const {idCategoria}= useParams() 

  useEffect(()=>{
    /* toast.info("Se están cargando los productos") */
    
    fetch('https://fakestoreapi.com/products') // Esto sería una promesa suelta
    .then((response) =>{ //Este primer then me da un objeto de tipo response
      /* console.log(response.json()) */ //Según los pasos, a este objeto le hago el .json (y esto me da un promise en el clg). Y como está dentro del then, lo retorno y pongo un then abajo.
      return response.json()
    })
    .then((resultado)=>{
      /* console.table(resultado) */ //Acá me muestra todos los productos del array
      setItems(resultado)
    })
    .catch(() =>{
      toast.error("Error al cargar los productos")
    })
    .finally(() =>{
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