import React from 'react'

import {Container, Button, Card} from 'react-bootstrap'

import { useState } from "react"

const ItemCount = () => {

  const inicial=1
  const stock=10
  const [estado, setEstado] = useState(inicial)

  const handleSumar = () => {
    console.log ("Click")
    if (estado<stock){
      setEstado(estado + 1)
    }  
  }

  const handleRestar = () => {
    console.log ("Click")
    if (estado>inicial){
      setEstado(estado - 1)
    }    
  }

  const onAdd = () => {
    if (stock>=estado){
      console.log ("Se puede despachar la cantidad solicitada, ya que no supera al stock")   
    }   
  }
  return (
    <Container as="div" style={{display:'flex flex-wrap'}}>
      <text>El stock disponible es de {stock} unidades</text>

      <Card style={{display:'flex'}} className="align-content-center text-center"  >
        <Card.Body>
          <Card.Title>Vestido Bla</Card.Title>
          <Card.Text className="d-flex flex-row justify-content-center">   
          
            <Button onClick={handleRestar} variant="danger" size="sm" > - </Button>
            <h3> {estado} </h3>
            <Button onClick={handleSumar} variant="success" size="sm"> + </Button>
          
          </Card.Text>
          <Button onClick={onAdd} variant="dark">Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ItemCount