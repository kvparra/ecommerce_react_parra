import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import {toast } from 'react-toastify';
import {useParams} from "react-router-dom"
import {db} from "../firebase"
import {collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = () => {

  const[loading, setLoading]= useState(true) 
  const [items, setItems] =useState([]);
  const {idCategoria}= useParams() 

  useEffect(()=>{
    
    if(!idCategoria){
      const itemCollection = collection(db,"app_ecommerce")
      const consulta = getDocs(itemCollection)

      consulta
      .then(resultado=>setItems(resultado.docs.map(doc=>doc.data())))
      .catch (()=>toast.error("Error al cargar los productos"))
      .finally (()=> setLoading(false))
    }else{
      const itemCollection = collection(db,"app_ecommerce")
      const filter = query(itemCollection, where("category", "==",idCategoria))
      const consulta = getDocs(filter) 
      consulta
      .then(resultado=>setItems(resultado.docs.map(doc=>doc.data())))
      .catch (()=>toast.error("Error al cargar los productos"))
      .finally (()=> setLoading(false))
    }
    
  },[idCategoria])

    return (
      <>
        {loading? <h1>Cargando productos...</h1> : <ItemList items={items}/>}
      </>
    )
   
}
export default ItemListContainer

