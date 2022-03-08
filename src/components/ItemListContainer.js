import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (greeting) => {
    const {nombre, empresa}=greeting
    
    return (
    <div>
        <h2 className=" titleH1 row justify-content-md-center" data-aos="zoom-out"> 
        ¡Hola {nombre}! Bienvenidos al mundo {empresa}
        </h2>
        <ItemCount/>
    </div>

    
  )
}

export default ItemListContainer