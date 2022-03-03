import React from 'react'

const ItemListContainer = (greeting) => {
    const {nombre, empresa}=greeting
    
    return (
    <div>
        <h2 className=" titleH1 row justify-content-md-center" data-aos="zoom-out"> 
        ¡Hola {nombre}! Bienvenida al mundo {empresa}
        </h2>
    </div>

    
  )
}

export default ItemListContainer