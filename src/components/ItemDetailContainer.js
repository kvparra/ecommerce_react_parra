import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const [item, setItem]= useState({});
  const [loading, setLoading] = useState(true);

  const {idProducto} = useParams()



  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${idProducto}`, 
    )
    .then((response)=>{
      return response.json()
    })
    .then((respuesta)=>{
      /* console.log(respuesta) */
      setItem(respuesta)
    })
    .catch(()=>{
      toast.error("Error al cargar el producto")
    })
    .finally(()=>{
      setLoading(false)
    })
  },[])

  if(loading){
    return <h1>Cargando...</h1>
  }else{
    return (
      <ItemDetail item={item}/>
    )
  }
  
}

export default ItemDetailContainer