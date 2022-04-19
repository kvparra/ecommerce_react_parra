import { useEffect, useContext, useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
/* import { fbCollectionOrders } from '../firebase' */
import {db} from "../firebase"
import { contexto } from './CartContext'
import { toast } from 'react-toastify'

const Buy = ({name, phone, email}) => {
	const { carrito, total, removeItem, clear } = useContext(contexto)
	const [ID, setID] = useState(null)
	const [loading, setLoading] = useState(true)
	const order = {buyer: {name, phone, email}, items: [], date: '', total: 0}
	
	order.items = carrito
	order.total = total
	order.date = serverTimestamp()

	useEffect(() => {
		/* const ordersCollection = collection(db,"orders")
		const pedido = addDoc(ordersCollection,order) */
	
		const ordersCollection = collection(db,"orders")
		const document = addDoc(ordersCollection, order) 

		document.then( (res) => {
			console.log(res)
			setLoading(false)
			setID(res.id)
			clear()
			toast.success("Tu compra se ha finalizado exitosamente")
		})
	}, [])
	
	return (
		loading?
		<div>
			Cargando
		</div>
		:
		<div className='column center'>
			<h2>GRACIAS POR TU COMPRA!</h2>
			<p>Tu comprobante: <b>{ID}</b></p>
		</div>
	)
}

export default Buy