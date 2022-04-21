import { createContext, useState } from 'react'

export const contexto = createContext() 
const {Provider} = contexto 

const CartContext = ({children})=>{
  
    const [carrito, setCarrito] = useState ([]) 
    const cantidad = carrito.reduce ((cantAnterior, productoActual)=> cantAnterior + productoActual.cantidad,0)
    const total= carrito.reduce((totalAnterior, productoActual) =>totalAnterior + (productoActual.price * productoActual.cantidad),0)
    const [numOrder, setNumOrder] =useState (0)

    const isInCart = (id) =>{
      return carrito.some((producto)=> producto.id === id)
      }

    const addItem = (producto, cantidad) => {
    
      const itemToCart = {...producto, cantidad}
      
      if(isInCart(producto.id)){
        const cartCopy = [...carrito]
        const index = cartCopy.findIndex (item => item.id === producto.id)
        cartCopy[index] = {...cartCopy[index], cantidad: cartCopy[index].cantidad + cantidad}
        setCarrito(cartCopy)
      }else{
        setCarrito([...carrito, itemToCart])
      }
    } 
    const removeItem = producto =>{
      setCarrito(carrito.filter(itemId => itemId.id !== producto.id))
      } 

    const clear = () =>{
      setCarrito([])
    } 
    
    const saveOrder=(newOrder) =>{
        setNumOrder(newOrder)
    }

    const showNumOrder=() =>{
      return numOrder
    }

    const valorDelContexto = {
        carrito: carrito,
        cantidad: cantidad,
        total: total,
        addItem:addItem,
        removeItem:removeItem,
        clear:clear,
        saveOrder:saveOrder,
        showNumOrder:showNumOrder,
        numOrder:numOrder
    }
    return (
        <Provider value={valorDelContexto}>
          {children}
        </Provider>
    )
}

export default CartContext 

