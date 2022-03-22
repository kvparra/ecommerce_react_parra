import React, { useEffect, useState } from 'react'

const Form = () => {
    /* const [coord, setCoord] = useState({X:'', Y:''})
    useEffect(()=>{
        const handleMouse =(e)=>{
            console.log(e.clientX)
            console.log(e.clientY)
            setCoord({
                X: e.clientX,
                Y: e.clientY,
            })
        }
        window.addEventListener('mousemove', handleMouse)

        return()=>{
            window.removeEventListener('mousemove', handleMouse) //Tengo que desuscribirme al evento, sino se tilda la computdora porque le estoy mandando millones de addEventListeners y me consume mucha memoria
        }
    }) */
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
        <div>
            {/* {coord.X} {coord.Y} */}
        </div>
    </div>
  )
}

export default Form