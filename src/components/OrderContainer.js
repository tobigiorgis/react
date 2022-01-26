import React from 'react'
import { useContext, useState } from 'react'
import CartContext from '../context/CartContext'

const OrderContainer = () => {
    const { datos, setDatos } = useContext(CartContext)
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()

    const EmailHandler = (e) => {
        setEmail(e.target.value)
    }

    const NameHandler = (e) => {
        setName(e.target.value)
    }

    const PhoneHandler = (e) => {
        setPhone(e.target.value)
    }

    const datosHandler = () => {
        const datosOrden = {
            numero: phone,
            email: email,
            comprador: name
        }
        setDatos(datosOrden)
        console.log(datos);
    }


    return (
        <div className='orderPage'>
                <form className='orderContainer'> 
                    <div className='divLabels'>
                        <label className='label'>Nombre y Apellido: </label>
                        <label className='label'>Telefono: </label>
                        <label className='label'>Email: </label>
                    </div>
                    <div className='divInputs'>
                        <input className='input' type='text' value={name} onChange={NameHandler}></input>
                        <input className='input' type='number' value={email} onChange={EmailHandler}></input>
                        <input className='input' type='text' value={phone} onChange={PhoneHandler}></input>
                    </div>
                </form>
            <p className='pAviso'>// Al clickear "Finalizar compra" sera redirigdo a WhatsApp para realizar el pago de la orden.</p>
            <a className='aWsp' href='https://wa.me/5493416432110?text=Hola,+quiero+finalizar+mi+compra+en+Estantes+Pliego+Design.+Adjunto+imagen+de+mi+carrito+⬇️'><button className='terminar' onClick={datosHandler}>Finalizar compra</button></a>
        </div>
    )
}

export default OrderContainer
