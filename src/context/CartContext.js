import React from 'react'
import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext({})


export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState(0)

    const [cartItems, setCartItems] = useState([])
    const handleAddProduct = (product, count) =>{
        setCart(cart + count)
        const productExist = cartItems.find((item) => item.id === product.id)
        if (productExist){
        setCartItems(cartItems.map (( item ) => item.id === product.id ? {...productExist, quantity: productExist.quantity + count }
        : item)
        )
        } else {
        setCartItems([...cartItems, {...product, quantity: count}])
        }
    }

    const handleRemoveProduct = (product) => {
        setCart(cart - 1)
        const productExist = cartItems.find((item) => item.id === product.id)
        if (productExist.quantity === 1){
            setCartItems(cartItems.filter((item) => item.id !== product.id))
        } else {
            setCartItems(
                cartItems.map(( item ) => item.id === product.id 
                ? {...productExist, quantity: productExist.quantity - 1 }
                : item
            ))
        }
    }

    const handleCartClearance = () => {
        setCartItems([])
        setCart(0)
    }

    return (
            <CartContext.Provider value={
                {cart,
                setCart, 
                handleAddProduct,
                cartItems,
                setCartItems,
                handleRemoveProduct,
                handleCartClearance,
                }
            }>
                { children }
            </CartContext.Provider>
    )
}

export default CartContext