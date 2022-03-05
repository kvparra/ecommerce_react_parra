import {Container, Alert} from 'react-bootstrap'

import { useEffect, useState } from "react"

const Main = (props) => {

/*   const resultado =useState()
  const estado = resultado[0]
  const setEstado = resultado [1] */

  //Con destructuring:
  const inicial=5
  const stock=10

  const [estado, setEstado] = useState(inicial)

  //El estado se actualiza solo por ejecutar la función "setEstado"
  console.log(estado)
  console.log(props.children)

/*   function handleClick (){
    console.log ("Click")
  } */

  const handleSumar = () => {
    console.log ("Click")
    if (estado<stock){
      setEstado(estado + 1)
    }
    
  }

  const handleRestar = () => {
    console.log ("Click")
    if (estado>inicial){
      setEstado(estado - 1)
    }
    
  }

  const handleResetear = () => {
    console.log ("Click")
    setEstado(0)
  }

  return (
    <Container as="main">
      <h2>Bienvenidxs!</h2>
      {props.children}
      <p>El contador va: {estado} </p>
      {/* <button onClick={()=>{console.log("Click")}}>sumar</button> */}

      <button onClick={handleSumar}>SUMAR</button>
      <button onClick={handleRestar}>RESTAR</button>
      <button onClick={handleResetear}>RESETEAR</button>

      <Alert variant='danger'>Test
      </Alert>
    </Container>
  )
}
export default Main;


/* OPCIÓN 2: */
 /* console.log(test)
  console.log(test.nombre)
  console.log(test.edad) */
{/* 
        <h2> WELCOME {test.persona.nombre}! </h2>
        <p> Tu edad es {test.persona.edad}</p> */}

/* const Main = (props) => {

          console.log(props.children)
          
            return (
              <Container as="main">
                <h2>Bienvenidxs!</h2>
                {props.children}
                             
              </Container>
            )
          }
          export default Main; */