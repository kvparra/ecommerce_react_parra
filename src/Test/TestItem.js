import React, {memo} from 'react'

const TestItem = ({usuario, borrarUsuario}) => {
    console.log("Render item", usuario.nombre)
    const handleClick =()=>{
        console.log("Borrando", usuario.nombre)
        borrarUsuario(usuario.id)
    }
  return (
    <div>
        <p>{usuario.nombre}</p>
        <button onClick={handleClick}>BORRAR USUARIO</button>
        
    </div>
  )
}

export default memo(TestItem)