import React from 'react'
import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext({})


export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState(0)

    const [cartRender, setCartRender] = useState([])

    const cartHandler = (itemCart) => {
        setCartRender((prevCartRender) => {
            return prevCartRender.concat(itemCart)
        })
    }

    const renderContext = {
        list: cartRender,
        addToC: cartHandler,

    }

    console.log(cartRender);
    return (
            <CartContext.Provider value={
                {cart,
                setCart,
                cartHandler}
            }>
                { children }
            </CartContext.Provider>
    )
}

export default CartContext