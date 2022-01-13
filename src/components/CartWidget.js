import React from 'react'
import { Link } from 'react-router-dom'
import cartIcon from '../cart.png'
import  CartContext  from '../context/CartContext'
import { useContext } from 'react'



const CartWidget = () => {

    const { cart } = useContext(CartContext)

    return (
        <Link to="/cart">
        <div className="carrito">
            <img className='imgCarrito' src={cartIcon}/>
            <span>{`${cart}`}</span>
        </div>
        </Link>
    )
}

export default CartWidget
