import React from 'react'
import {Row, Button, Card, Col} from 'react-bootstrap'
import productoUno from './database/Product1'
import {Link} from "react-router-dom"



const Item = ({item}) => {

  return (
    <article>
      <img src={item.pictureUrl}/>
      <h2> {item.title}</h2>
      <h3> $ {item.price} </h3>
      <text> {item.description} </text>
      <hr/>
      <Link to={`/item/${item.id}`}>
        <Button variant="dark" mb-50>Agregar al carrito</Button>
      </Link>
    </article>
  )
}

export default Item

//FUNCIONABA:
/* return (
  <Row xs={1} md={4} >
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card >
        <Card.Img variant="top" src={item.pictureUrl}   />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
              <h3> $ {item.price} </h3>
              <text> {item.description} </text>

          </Card.Text>
        </Card.Body>
        <Button variant="dark" mb-50>Agregar al carrito</Button>
      </Card>
    </Col>
  ))}
</Row>
) */