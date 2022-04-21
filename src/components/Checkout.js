import { useContext } from 'react'
import {contexto} from "./CartContext"
import { Link } from "react-router-dom"

const Checkout = () => {

  const {showNumOrder} = useContext(contexto)

  return (
    <>
      <div>
        <h3>¡Gracias por tu compra!</h3>
        
        <p>Tu número de pedido es:<br/><b>{showNumOrder()}</b></p>

        <Link to="/">Volver a la página de inicio</Link>
        
      </div>
    </>
    
  )
}

export default Checkout