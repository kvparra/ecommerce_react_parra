import React from 'react'
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

const ItemDetail = ({item}) => {

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
    </article>
  );

}

export default ItemDetail