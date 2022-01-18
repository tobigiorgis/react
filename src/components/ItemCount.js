import React, {useState} from 'react'
import CartContext from '../context/CartContext'
import { useContext } from 'react'
import data from '../data/data'


function ItemCount ({stock, initial, onAdd, item}){


const [count, setCount] = useState(initial)

let countStockMas = () => {setCount(count < stock ? count + 1 : count)}
let countStockMenos = () => {setCount(count > 1 ? count - 1 : count)}

const {setCart, cart, handleAddProduct} = useContext(CartContext)


    return (
        <div className="divProduct">
            <div className="divEstado">
                <button className="boton1" onClick={countStockMenos}>-</button>
                <h2 className="hConteo">{`${count}`}</h2>
                <button className="boton2" onClick={countStockMas}>+</button>
            </div>
            <div className="divAgregar">
                <button className="btnAgregar" onClick={ () => {handleAddProduct(item);onAdd(); setCart(cart + count)}}>AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}

export default ItemCount


