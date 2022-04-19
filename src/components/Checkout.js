import { useState } from 'react'
import {Button} from 'react-bootstrap'


const Checkout = ({endStep}) => {

	const [valid, setValid] = useState(false)

	const validateForm = (e) => {
		setValid( e.target.form[0].validity.valid & e.target.form[1].validity.valid & e.target.form[2].validity.valid & (e.target.form[3].value === e.target.form[4].value) & e.target.form[3].validity.valid & e.target.form[4].validity.valid)
	}

  return (
    <form className='buyer' onSubmit={e => endStep(e)} onChange={e => validateForm(e)}>
      <div >
        <h3>Por favor, completá el formulario para terminar tu compra</h3>
        <label className='name'>Nombre</label>
        <input className='name' type='text' pattern='[A-Za-z]+' maxLength='25' placeholder='Andrea' required/>
        <label className='lastname'>Apellido</label>
        <input className='lastname' type='text' pattern='[A-Za-z]+' maxLength='25' placeholder='Gutierrez' required/>

        <label className='phone'>Teléfono</label>
        <input className='phone' type='text' pattern='[0-9]{10}' maxLength='10' placeholder='2804444444' required/>
        <label className='email'>Mail</label>
        <input className='email' type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' placeholder='mail@coderhouse.com' required/>
        <label className='email'>Reingresa tu mail</label>
        <input className='email' type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' placeholder='mail@coderhouse.com' required/>
      </div>
  		<div>
				<Button disabled={!valid} variant="dark">TERMINAR COMPRA</Button>
			</div>
    </form>
  )
}

export default Checkout