import React from 'react'
import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext({})


export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState(0)

    const [cartItems, setCartItems] = useState([])
    const handleAddProduct = (product) =>{
        const ProductExist = cartItems.find((item) => item.id === product.id)
        if (ProductExist){
        setCartItems(cartItems.map ((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity + 1 }
        : item)
        )
        } else {
        setCartItems([...cartItems, {...product, quantity: 1}])
        }
    }

    const handleRemoveProduct = (product) => {
        const ProductExist = cartItems.find((item) => item.id === product.id)
        if (ProductExist.quantity === 1){
            setCartItems(cartItems.filter((item) => item.id !== product.id))
        } else {
            setCartItems(
                cartItems.map((item) => item.id === product.id 
                ? {...ProductExist, quantity: ProductExist.quantity - 1 }
                : item
            ))
        }
    }

    const handleCartClearance = () => {
        setCartItems([])
    }

    // const [cartRender, setCartRender] = useState([])

    // const cartHandler = (itemCart) => {
    //     setCartRender((prevCartRender) => {
    //         return prevCartRender.concat(itemCart)
    //     })
    // }

    // const renderContext = {
    //     list: cartRender,
    //     addToC: cartHandler,

    // }

    // console.log(cartRender);
    return (
            <CartContext.Provider value={
                {cart,
                setCart, 
                handleAddProduct,
                cartItems,
                setCartItems,
                handleRemoveProduct,
                handleCartClearance
                //cartHandler
                }
            }>
                { children }
            </CartContext.Provider>
    )
}

export default CartContext