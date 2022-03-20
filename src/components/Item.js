import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from "react-router-dom"



const Item = ({item}) => {

  return (
    <article>
      <img src={item.image}/>
      <h2> {item.title}</h2>
      <h3> $ {item.price} </h3>
      {/* <text> {item.description} </text> */}
      <Link to={`/item/${item.id}`}>ver detalle</Link>
      <hr/>
      <Link to={`/item/${item.id}`}>
        <Button variant="dark" mb-50>Agregar al carrito</Button>
      </Link>
      
    </article>
  )
}

export default Item