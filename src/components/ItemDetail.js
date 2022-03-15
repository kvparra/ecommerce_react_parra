import React from 'react'
import {Container, Figure} from 'react-bootstrap'

const ItemDetail = ({productoOne}) => {
  return (
    <Container>
    <div>ItemDetail {productoOne.title}</div>
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={productoOne.pictureUrl}
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.{productoOne.description}
      </Figure.Caption>
    </Figure>
  </Container>
  )
}

export default ItemDetail