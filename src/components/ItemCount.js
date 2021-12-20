import React, {useState} from 'react'
import estante from '../estante.jpg'

function ItemCount ({stock, initial, onAdd}){

const [count, setCount] = useState(initial)

    return (
        <div className="divProduct">
            <img src=""></img>
            <div className="divEstado">
                <button className="botones" onClick={() => setCount(count - 1)}>-</button>
                <h2 className="hConteo">{`${count}`}</h2>
                <button className="botones" onClick= {() => setCount(count + 1)}>+</button>
            </div>
            <div className="divAgregar">
                <button className="btnAgregar" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount


function Item ({stock,initial, onAdd}){
    
}