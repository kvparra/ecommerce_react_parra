import React from 'react'
import { useContext } from "react"
import {contexto} from "./CartContext"

const CartWidget = () => {
 
  const {cantidad} =useContext(contexto)

  return (
    <div>
      <span className="material-icons" id="cartwidget">
      shopping_cart
      </span>
      <span>{cantidad!==0? cantidad: ""}</span> 
    </div>

  )

}

export default CartWidget

