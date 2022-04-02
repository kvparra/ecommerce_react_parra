import React, {memo} from 'react'
import TestItem from './TestItem'


const TestList = ({usuarios, borrarUsuario}) => {
    console.log("Render lista")
  return (
    <div>
        {usuarios.map(usuario => {
            return <TestItem key={usuario.id} usuario={usuario} borrarUsuario={borrarUsuario}/>
        })
        }
    </div>
  )
}

export default memo(TestList)