import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import {toast } from 'react-toastify';
import {useParams} from "react-router-dom"
import {db} from "../firebase"
import {collection, getDocs} from "firebase/firestore"

console.log(db)

const ItemListContainer = () => {

  const[loading, setLoading]= useState(true) 
  const [items, setItems] =useState([]);
  const {idCategoria}= useParams() 

  useEffect(()=>{
    const itemCollection = collection(db,"app_ecommerce")
    const consulta = getDocs(itemCollection)
    /* console.log(consulta) */
    consulta
      .then((resultado)=>{
        /* console.log(resultado)
        resultado.docs.forEach((doc)=>{
          console.log(doc.data()) //Esta es la primer consulta a la db
          console.log(doc.id) //Me muestra el id autogenerado */
          const array_rdo = resultado.docs.map((doc)=>{
            return doc.data()
          })
          setItems(array_rdo) // Si voy a Components de consola lo veo como state
          setLoading(false)
        })
      
      .catch (()=>{
        toast.error("Error al cargar los productos")
      })

    /* console.log(itemCollection) */
    /* fetch('https://fakestoreapi.com/products') 
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
    }) */

  },[idCategoria])

    return (
      <>
        {loading? <h1>Cargando productos...</h1> : <ItemList items={items}/>}
      </>
    )
   
}
export default ItemListContainer