import React from 'react'
import {Button} from 'react-bootstrap'
import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {

  let [estado, setEstado] = useState(initial)

  const handleSumar = () => {
      if(estado < stock){
          setEstado(estado + 1)
      }
  }

  const handleRestar = () => {
      if(estado > initial){
          setEstado(estado - 1)
      }    
  }
  
  const handleAgregar = () => {
      onAdd(estado)
  }


  return (
      <div>
          <p>Cantidad: {estado}</p>
          <Button onClick={handleSumar} variant="success" size="sm"> +</Button>
          <Button onClick={handleAgregar} variant="dark">AGREGAR AL CARRITO</Button>
          <Button onClick={handleRestar} variant="danger" size="sm" >-</Button>
      </div>
  )
}
export default ItemCount