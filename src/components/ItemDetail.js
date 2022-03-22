import React, {useState} from 'react'
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import {Link} from "react-router-dom"
import ItemCount from './ItemCount';
import {Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const ItemDetail = ({item}) => {

  const [cantidadSeleccionada, setCantidadSeleccionada] =useState(0)
  let navigate = useNavigate();

  const onAdd = (cantidadSeleccionada) =>{
    /* console.log('Añadir al carrito', cantidadSeleccionada) */
    setCantidadSeleccionada(cantidadSeleccionada) //Acá guarda la cantidad en el estado

    setTimeout(()=>{
      navigate('/cart')
    },3000)
    
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
        {/* <Contador stock={5} initial={1} onAdd={onAdd}/> */}
      
      {/* Para la OPCIÓN 1: USANDO CONDICIONAL */}
      {/*   {
          cantidadSeleccionada===0? <ItemCount stock={5} initial={1} onAdd={onAdd} />: 
          <p>Tu compra ya fue enviada al carrito <br/> Presiona el botón TERMINAR COMPRA para dirigirte al carrito.</p>
        } */}
        {/* PARA LA OPCION 2: USANDO USENAVIGATE */}
        <ItemCount stock={5} initial={1} onAdd={onAdd} />

        <Link to={`/cart`}>
          <Button variant="dark">Terminar compra</Button> {/* Puedo usar useNavigate en vez de link, para lo que pide el desafío */}
        </Link>
    </article>
  );

}

export default ItemDetail