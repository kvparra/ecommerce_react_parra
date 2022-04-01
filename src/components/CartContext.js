import { createContext, useState } from 'react'

export const contexto = createContext() //Creamos el contexto

/* const {Provider, Consumer} = contexto */
const {Provider} = contexto // Y sacamos el provider del contexto

const CartContext = ({children})=>{
  
    const [carrito, setCarrito] = useState ([]) //Para ya no hardcodearlos
    const [cantidad, setCantidad] = useState (0)
    const [total, setTotal] = useState (0)

    const addItem = (producto, cantidad) => {
      const cartCopy = [...carrito]
        //PASO 1) Siempre que quiera modificar un estado y es objeto/array, lo tengo que copiar
        //A esta variable copia puedo hacerle push, o lo q sea. Y no toco la variable carrito, PORQUE A LOS ESTADOS NO HAY QUE MODIFICARLOS DE UNA.
      const itemToCart = {...producto, cantidad}
      
      if(isInCart(producto.id)){
        let index = cartCopy.findIndex (item => item.id === producto.id)
        cartCopy[index].cantidad += cantidad
        setCarrito(cartCopy)
      }else{
        cartCopy.push(itemToCart)
        setCarrito(cartCopy)
      }
      
      /* if (prod.yaExiste){

      }else{

      } */
    } //Significa para el desafío que si ya existe ese prod en el carrito no lo volvés a pushear, sino que modificas la cantidad del que tenés actual
      //y si no existe, sí lo pusheas al final
      //Voy a tener que ir al ItemDetail que es donde está todo el detalle const addItem = (producto, cantidad) => {
        
    const isInCart = (id) =>{
      return carrito.some(function(item){
        return item.id === id;
      })
      /* if(yaExisteEnCarrito(id)){}else{} */
      } //recibe un id, filtras el array en búsqueda del id, si lo encontrás retornás true y de lo contrario retornas false. (1h44 ')
    const removeItem = () =>{    } //iteras todo el array en búsqueda de un id, si lo encontras lo removes. Se resuelver con un filter
    const clear = () =>{
      setCarrito([])
    } //limpiar el carrito: para sacar todo lo que hay en el carrito actual

    const calcularCantidad =() => {
      let cantidad =0;
      carrito.forEach(item => cantidad = item.cantidad)
      return cantidad
    }
    const valorDelContexto = {
        carrito: carrito,
        /* cantidad: cantidad,
        total: total, */
        addItem:addItem,
        calcularCantidad:calcularCantidad
    }
    return (
        <Provider value={valorDelContexto}>
          {children}
        </Provider>
    )
}

export default CartContext 

