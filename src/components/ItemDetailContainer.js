import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail';
import {db} from "../firebase"
import {collection, query, where, getDocs} from "firebase/firestore"

const ItemDetailContainer = () => {

  const [item, setItem]= useState({});
  const [loading, setLoading] = useState(true)
  const {idProducto} = useParams()



  useEffect(()=>{
    
    const itemCollection = collection(db,"app_ecommerce")
    const filter = query(itemCollection, where("id", "==", Number(idProducto)))
    const consulta = getDocs(filter) 

    consulta
      .then(res => setItem(res.docs[0].data()))
      .catch(() => toast.error("Error al cargar los productos"))
      .finally(() => setLoading(false))
    },[])

  if(loading){
    return <h1>Cargando...</h1>
  }else{
    return (
      <ItemDetail key={item.id} item={item}/>
    )
  }
  
}

export default ItemDetailContainer