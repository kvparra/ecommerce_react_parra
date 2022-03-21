import React from 'react'
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import Contador from './Contador'
import {Link} from "react-router-dom"

const ItemDetail = ({item}) => {

  const onAdd = (cantidadSeleccionada) =>{
    console.log('Añadir al carrito', cantidadSeleccionada)
  }
  return (

    <article className="itemDetail">
        <img src={item.image} alt="prueba2"/>
        <div className="titulos">
          <h1>{item.title}</h1>
          <h3>Precio: ${item.price} </h3>
          <div>
            <Rate allowHalf={true} count={5} value={item.rating.rate}/>
            <span>Rates: {item.rating?.count}</span>
          </div>
          
        </div>
        <p className="descripcion"> {item.description} </p>
        <Contador stock={5} initial={1} onAdd={onAdd}/>
        <Link to={`/cart`}>
          <button>Terminar compra</button> {/* Puedo usar useNavigate en vez de link, para lo que pide el desafío */}
        </Link>
    </article>
  );

}

export default ItemDetail