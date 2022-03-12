import React from 'react'
import {Row, Button, Card, Col} from 'react-bootstrap'



const Item = ({item}) => {

  return (
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
  )
}

export default Item