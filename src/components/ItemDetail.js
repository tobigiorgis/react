import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'



const ItemDetail = (item) => {
    let stock = item.stock

    const [newcount, setNewcount] = useState(0)
    const onAdd = (count) => {
        setNewcount(count)
    }
    
    return (
        <div>
            <div className='itemDivDetail'>
                <img src={item?.imagen} alt={item?.modelo} className='imgEstante'></img>
                <li className='modelo'>{item?.modelo}</li>
                <li className='precio'>${item?.precio}</li>
                {newcount >= 0  ? 
                    <ItemCount stock={item?.stock} initial={1} onAdd={onAdd}/>
                    : newcount >= stock ?
                    <div className="divAgregado">SIN STOCK</div>
                    :
                    <div className="divAgregado">AGREGADO AL CARRITO!</div>
                }
            </div>
            <div className='descDetail'>
                <h3>Info del Producto</h3>
                <p><span>Medidas: </span>{item?.medida}</p>
                <p><span>Material:</span> Chapa 18</p>
                <p><span>Color:</span> Blanco - Negro</p>
            </div>
        </div>
    )
}

export default ItemDetail
