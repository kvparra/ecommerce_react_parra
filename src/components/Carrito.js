import React from 'react'
import {useContext} from 'react'
import {contexto} from "./CartContext"
import { Link, useNavigate  } from "react-router-dom"
import {Button} from 'react-bootstrap'
import {db} from "../firebase"
import {collection, serverTimestamp, addDoc} from "firebase/firestore"
import { toast } from 'react-toastify'

const Carrito = () => {
  const newId = Math.round(Math.random()*999999)
  
  const navigate = useNavigate()
  const {carrito, total, removeItem, clear, saveOrder} = useContext (contexto)
  const terminarCompra =() =>{
    const order = {
      buyer: {
        name: "Pepe",
        phone:"12345",
        email:"pepe@pepe.com"
      },
      items:carrito,
      date: serverTimestamp(),
      total: total,
      id: newId
        }
    const ordersCollection = collection(db,"orders")
    const newOrder = addDoc(ordersCollection,order)
    

    newOrder
    .then(res=>{
      toast.success("Tu compra se ha finalizado exitosamente")
      saveOrder(newId)
      clear()
      navigate('../Checkout')
    })
    .catch(()=>{
        toast.error("Ha ocurrido un error")
    })

    /* clear() */
  }
  return (
    <div>
      <h2>Carrito</h2>

      
      {carrito.length === 0 ?
        <div>
          <p className="text">No hay nada en tu carrito</p>
          <Link to="/">Ver productos</Link>
        </div> :
        <>
          {carrito.map((item) =>(
            <div key={item.id}>
              <h5> {item.title}</h5>
              <p> Cantidad: {item.cantidad} x $ {item.price}</p>
              <h6> Precio parcial : $ {item.cantidad * item.price}</h6>
              <Button onClick={()=> removeItem(item)} variant="dark">BORRAR PRODUCTO</Button>
            </div>
          ))}
          {!!total && <h3>TOTAL: $ {Intl.NumberFormat('es-AR').format(total)}</h3>}
          <Button onClick={terminarCompra} variant="success">TERMINAR COMPRA</Button>
          <Button onClick={clear} variant="dark">BORRAR TODO</Button>
        </>
      }
      
    </div>
  )
}

export default Carrito
