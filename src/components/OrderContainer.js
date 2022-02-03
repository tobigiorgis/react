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
    const [done, setDone] = useState(false)

    const EmailHandler = (e) => {
        setEmail(e.target.value)
        
    }

    const NameHandler = (e) => {
        setName(e.target.value)
    }

    const PhoneHandler = (e) => {
        setPhone(e.target.value)
    }

    let hoy = new Date()
    let date = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();

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
                ,
                fecha: 
                date
            }

            setDone(true)
        const {id} = await addDoc(collection(db, 'orders-store'), datosOrden)
        window.location.href = `https://wa.me/5493416432110?text=Hola,+quiero+finalizar+mi+compra+en+Estantes+Pliego+Design.+Este+es+mi+id+de+compra:+${id}`
    }


    return (
        <div className='orderPage'>
                <form className='orderContainer'> 
                        <label className='label'>Nombre y Apellido: </label>
                        <input className='input' type='text' value={name} onChange={NameHandler} required></input>
                        <label className='label'>Email: </label>
                        <input className='input' type='email' value={email} onChange={EmailHandler} required></input>
                        <label className='label'>Telefono: </label>
                        <input className='input' type='number' value={phone} onChange={PhoneHandler} required></input>
                </form>
            <p className='pAviso'>// Al clickear "Finalizar compra" sera redirigdo a WhatsApp para realizar el pago de la orden.</p>
            <button className='terminar' onClick={datosHandler}>Finalizar compra</button>
        </div>
    )
}

export default OrderContainer
