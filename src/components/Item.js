import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const Item = ({ id, stock, modelo, precio, imagen, color, medida }) => {
    const [newcount, setNewcount] = useState(0)
    const onAdd = (count) => {
        setNewcount(count)
    }
const newItem = {modelo, precio, id, color, imagen, stock, medida}
    return (
        <div className='ItemDiv'>
        <Link className='toDetail' to={`/producto/${newItem?.id}`}>
            <img src={newItem?.imagen} alt={newItem?.modelo} className='imgEstante'></img>
            <li className='modelo'>{newItem?.modelo}</li>
            <li className='precio'>${newItem?.precio}</li>
        </Link>
        {newcount >= 0  ? 
                    <ItemCount stock={newItem?.stock} item={newItem} initial={1} onAdd={onAdd} newcount={newcount}/>
                    : newcount >= stock ?
                    <div className="divAgregado">SIN STOCK</div>
                    :
                    <div className="divAgregado">AGREGADO AL CARRITO!</div>
                }
        </div>
    )
}

export default Item