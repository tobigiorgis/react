import React from 'react'
import cartIcon from '../cart.png'


const CartWidget = () => {
    return (
        <div className="carrito">
            <a href="/"><img src={cartIcon}/></a>
        </div>
    )
}

export default CartWidget
