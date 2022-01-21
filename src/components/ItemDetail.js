import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'



const ItemDetail = ({ modelo, precio, imagen, medida, stock, color, id })  => {

    const [newcount, setNewcount] = useState(0)
    const onAdd = (count) => {
        setNewcount(count)
    }
    
    const newItem = {modelo, precio, id, color, imagen, stock, medida}

    return (
        <div>
            <div className='itemDivDetail'>
                <img src={newItem.imagen} alt={newItem?.modelo} className='imgEstante'></img>
                <li className='modelo'>{newItem?.modelo}</li>
                <li className='precio'>${newItem?.precio}</li>
                {newcount >= 0  ? 
                    <ItemCount stock={newItem?.stock} initial={1} onAdd={onAdd} newcount={newcount} item={newItem}/>
                    : newcount >= stock ?
                    <div className="divAgregado">SIN STOCK</div>
                    :
                    <div className="divAgregado">AGREGADO AL CARRITO!</div>
                }
            </div>
            <div className='descDetail'>
                <h3>Info del Producto</h3>
                <p><span>Medidas: </span>{newItem?.medida}</p>
                <p><span>Material:</span> Chapa 18</p>
                <p><span>Color:</span> Blanco - Negro</p>
            </div>
        </div>
    )
}

export default ItemDetail
