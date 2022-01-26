import React from 'react'
import CartContext from '../context/CartContext'
import { useContext, useState } from 'react'
import { collection, addDoc } from '@firebase/firestore'
import db from '../firebase/firebase'


const OrderContainer = () => {
    const { cartItems, totalPrice } = useContext(CartContext)
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

    const datosHandler = async () => {
            const datosOrden = {
                buyer: {
                    numero: phone,
                    email: email,
                    comprador: name
                },
                items: 
                    cartItems
                ,
                total: 
                    totalPrice
                
            }

        const {id} = await addDoc(collection(db, 'orders-store'), datosOrden)
        window.location.href = `https://wa.me/5493416432110?text=Hola,+quiero+finalizar+mi+compra+en+Estantes+Pliego+Design.+Este+es+mi+id+de+compra:+${id}`
    }


    return (
        <div className='orderPage'>
                <form className='orderContainer'> 
                    <div className='divLabels'>
                        <label className='label'>Nombre y Apellido: </label>
                        <label className='label'>Email: </label>
                        <label className='label'>Telefono: </label>
                    </div>
                    <div className='divInputs'>
                        <input className='input' type='text' value={name} onChange={NameHandler}></input>
                        <input className='input' type='email' value={email} onChange={EmailHandler}></input>
                        <input className='input' type='number' value={phone} onChange={PhoneHandler}></input>
                    </div>
                </form>
            <p className='pAviso'>// Al clickear "Finalizar compra" sera redirigdo a WhatsApp para realizar el pago de la orden.</p>
            <button className='terminar' onClick={datosHandler}>Finalizar compra</button>
        </div>
    )
}

export default OrderContainer
