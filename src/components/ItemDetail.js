import React from 'react'
import {Container} from 'react-bootstrap'

const ItemDetail = ({productoOne}) => {

  return (

    <article>
        <img class= "h-575 w-75" src={productoOne.pictureUrl} alt="prueba2"/>
        <h1>{productoOne.title}</h1>
        <h3>Precio: ${productoOne.price} </h3>
        <text> {productoOne.description} </text>
        
    </article>
  );

}

export default ItemDetail