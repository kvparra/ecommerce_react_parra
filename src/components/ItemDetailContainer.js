import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail';
import {db} from "../firebase"
import {collection, getDoc, doc, query, where, getDocs} from "firebase/firestore"

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

    //setItem(res.docs.map(doc => doc.data())[0])
    //const pedido = getDoc(doc(productosCollection,"wGWFvOpJ6M7iB8J9LwCO"))
    //pedido.then((res)=>console.log(res.data())

    //Esta es un opción, pero no me sirve por como hice el itemListContainer (tendría que ser con id autogenerado):
    /* const pedido = getDoc(doc(itemCollection,"0YazuTvH12mpjR8LJB5s"))
    
    pedido.then((res)=>console.log(res.data())) */

    /* .then(resultado=>setItem(resultado.data())) */
    
  

  if(loading){
    return <h1>Cargando...</h1>
  }else{
    return (
      <ItemDetail key={item.id} item={item}/>
    )
  }
  
}

export default ItemDetailContainer

/* fetch(`https://fakestoreapi.com/products/${idProducto}`, 
    )
    .then((response)=>{
      return response.json()
    })
    .then((respuesta)=>{
      
      setItem(respuesta)
    })

    .catch(()=>{
      toast.error("Error al cargar el producto")
    })
    .finally(()=>{
      setLoading(false)
    }) */