import React from 'react'
import {Container} from 'react-bootstrap'

const ItemDetail = ({productoOne}) => {

  return (
    <Container class="row my-5">
      <div class="col-md-6 text-center">
        <img class= "h-575 w-75" src={productoOne.pictureUrl} alt="prueba2"/>
      </div>
      <div class="col-md-6">
      <h1>{productoOne.title}</h1>
      <p> {productoOne.description}
      </p>
      <h3>Precio: ${productoOne.price} </h3>

      </div>

    </Container>
  );

}

export default ItemDetail