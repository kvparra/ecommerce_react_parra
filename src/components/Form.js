import React, { useEffect, useState } from 'react'

const Form = () => {
    
  return (
    <div>
        <form
            style={{
                marginBottom: '30px',
                display: 'flex',
                flexDirection: 'column',
                width:'40%'
            }}
        >
            <input name="nombre" type="text" placeholder="Nombre"/>
            <input name="email" type="email" placeholder="Email"/>
            <button>Enviar</button>

        </form>
        
    </div>
  )
}

export default Form