import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'


let productosIniciales = [
  {
    id:1,
    nombre: "Producto 1",
    precio:100
  },
  {
    id:2,
    nombre: "Producto 2",
    precio:200
  },
  {
    id:3,
    nombre: "Producto 3",
    precio:300
  },
]
const ItemListContainer = (greeting) => {
    const {nombre, empresa}=greeting
    const [loading, setLoading] = useState(true)
    const [productos, setProductos]=useState([])
    
    //useEffect(function,[array])

    //Este efecto se va a ejecutar solo en el primer render y nunca más
    useEffect(() => {
      console.log("Ejecutando useEffect")
      //acá quiero pedir los productos (x ej: ejecutando una API o a la DB del servidor mío )
      const pedido = new Promise((res,rej)=>{
        
        setTimeout(()=>{
          res(productosIniciales)
        },5000)
      })

      console.log(pedido)

      pedido
      .then((resultado)=>{
        console.log("Estuvo bien")
        setProductos(resultado)
      })
      .catch((error)=>{
        console.log("Estuvo mal")
      })
      /* setTimeout(()=>{
        setProductos(productosIniciales)
      },5000) */
    },[])
    //El 2do parámetro es un array, que si está vacío, el useeffect lo toma como que no tiene q hacer nada.
    //Este efecto se va a ejecutr en el primer render y después de cada render
console.log(productos)

    return (
    <div>
        <h2 className=" titleH1 row justify-content-md-center" data-aos="zoom-out"> 
        ¡Hola {nombre}! Bienvenidos al mundo {empresa}
        </h2>
        <button onClick={()=>setLoading(!loading)}> toggle </button>
        <ul>
          {productos.map((producto)=>{
            return <li key={producto.id}>{producto.nombre}</li>
          })}
        </ul>
        <ItemCount/>
        <ItemList/>

    </div>

    
  )
}

export default ItemListContainer