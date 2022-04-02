import React from 'react'
import {useContext} from 'react'
import {contexto} from "./CartContext"
import { Link } from "react-router-dom"
import {Button} from 'react-bootstrap'

const Carrito = ({item}) => {
  const {carrito, total, removeItem, clear} = useContext (contexto)

  console.log(carrito)
  return (
    <div>
      <h2>Carrito</h2>

      
      {carrito.length === 0 ? //significa que no hay items en el carrito
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
          {!!total && <h3>TOTAL: $ {total}</h3>}
          <Button onClick={clear} variant="dark">BORRAR TODO</Button>
        </>
      }
    </div>
  )
}

export default Carrito