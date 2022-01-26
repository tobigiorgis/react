import React from 'react'
import CartContext from '../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


const CartContainer = () => {

    const { handleCartClearance, handleAddProduct, cartItems, handleRemoveProduct, removeButton, totalPrice } = useContext(CartContext)


    return (
        <>
        <div className='cart-items-null'>
            {cartItems.length === 0 &&
                <div>
                    <p>No hay productos añadidos</p>
                    <Link to='/productos'><button className='backToP'>Volver a productos</button></Link>
                </div>
}
        
            {cartItems.map((item) => (
                <div className='itemCarrito' key={item?.id}>
                    <img 
                        className='img-carrito'
                        src={item?.imagen}
                        alt={item?.modelo}
                    ></img>
                    <p className='mod-carrito'>{item?.modelo}</p>
                    <div className='botonesCart'>
                        <button className="botonR" onClick={() => handleRemoveProduct(item, 1)}>-</button>
                        <button className="botonA" onClick={() => handleAddProduct(item, 1)}>+</button>
                    </div>
                    <div className='desc-carrito'>
                        ${item?.precio} - Cantidad: {item.quantity}
                    </div>
                    <div className='subtotal'>SUBTOTAL // {item?.precio * item.quantity}</div>
                    <button className='removeP' onClick={removeButton}>x remove</button>
                </div>
            ))}
            {cartItems.length !== 0 &&
            <>
            <button className="botonC" onClick= {handleCartClearance}> Eliminar todo del carrito!</button>
            <div><b>TOTAL</b> / ${totalPrice}</div>
            <Link to='/checkout'>
                <button className='backToP' >Checkout</button>
            </Link>
            </>
            }
        </div>
        </>
    )
}

export default CartContainer
