import React, {useState} from 'react'
import CartContext from '../context/CartContext'
import { useContext } from 'react'



function ItemCount ({stock, initial, onAdd, item}){

    const [count, setCount] = useState(initial)
    const { handleAddProduct } = useContext(CartContext)

    let countStockMas = () => {setCount(count < stock ? count + 1 : count)}
    let countStockMenos = () => {setCount(count > 1 ? count - 1 : count)}



    return (
        <div className="divProduct">
            <div className="divEstado">
                <button className="boton1" onClick={countStockMenos}>-</button>
                <h2 className="hConteo">{`${count}`}</h2>
                <button className="boton2" onClick={countStockMas}>+</button>
            </div>
            <div className="divAgregar">
                <button className="btnAgregar" onClick={ () => {handleAddProduct(item, count); onAdd()}}>AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}

export default ItemCount


