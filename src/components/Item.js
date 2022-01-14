import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const Item = ({ item, stock }) => {
    const [newcount, setNewcount] = useState(0)
    const onAdd = (count) => {
        setNewcount(count)
    }

    return (
        <div className='ItemDiv'>
        <Link className='toDetail' to={`/producto/${item?.id}`}>
            <img src={item?.imagen} alt={item?.modelo} className='imgEstante'></img>
            <li className='modelo'>{item?.modelo}</li>
            <li className='precio'>${item?.precio}</li>
        </Link>
        {newcount >= 0  ? 
                    <ItemCount stock={item?.stock} initial={1} onAdd={onAdd} item={item} newcount={newcount}/>
                    : newcount >= stock ?
                    <div className="divAgregado">SIN STOCK</div>
                    :
                    <div className="divAgregado">AGREGADO AL CARRITO!</div>
                }
        </div>
    )
}

export default Item