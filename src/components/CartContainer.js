import React from 'react'
import CartContext from '../context/CartContext'
import { useContext } from 'react'

const CartContainer = () => {

    const {addToC, list} = useContext(CartContext)

    return (
        <div>
            {list}
        </div>
    )
}

export default CartContainer
