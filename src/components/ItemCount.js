import React, {useState} from 'react'
import estante from '../estante.jpg'

function ItemCount ({stock, initial, onAdd}){

const [count, setCount] = useState(initial)

let countStockMas = () => {setCount(count < stock ? count + 1 : count)}
let countStockMenos = () => {setCount(count > 1 ? count - 1 : count)}


    return (
        <div className="divProduct">
            <img className="imgEstante" src={estante}></img>
            <div className="divEstado">
                <button className="boton1" onClick={countStockMenos}>-</button>
                <h2 className="hConteo">{`${count}`}</h2>
                <button className="boton2" onClick={countStockMas}>+</button>
            </div>
            <div className="divAgregar">
                <button className="btnAgregar" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount


