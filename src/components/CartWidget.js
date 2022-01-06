import React from 'react'
import { Link } from 'react-router-dom'
import cartIcon from '../cart.png'
import { useState } from 'react'


const CartWidget = () => {
const [carrito, setCarrito] = useState(0)
const varCarrito = (count) => {
    setCarrito(count + carrito)
}


    return (
        <Link to="/cart">
        <div className="carrito">
            <img className='imgCarrito' src={cartIcon}/>
            <span className='cantCarrito'>{carrito}</span>
        </div>
        </Link>
    )
}

export default CartWidget
