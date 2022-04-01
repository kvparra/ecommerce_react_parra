import React, {useState, useContext} from 'react';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import {Link} from "react-router-dom";
import ItemCount from './ItemCount';
import { useNavigate } from "react-router-dom";
import {contexto} from './CartContext';

const ItemDetail = ({item}) => {
  const {addItem} = useContext(contexto)
  const [clicked, setClicked] =useState(false)
  const [seleccionado, setSeleccionado] =useState({})
  let navigate = useNavigate();

  const onAdd = (cantidadSeleccionada) =>{
    setSeleccionado(cantidadSeleccionada) 

      setTimeout(()=>{
        navigate('/cart')
      },3000)
       
    addItem (item,cantidadSeleccionada)
    setClicked(true)
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
    
        {clicked ? (<Link to="/cart">Ir al carrito</Link>) : (<ItemCount initial={1} stock={5} onAdd={onAdd} />)}
        
    </article>
  );

}

export default ItemDetail
