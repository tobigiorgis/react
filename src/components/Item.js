import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'


const Item = ({ item, id }) => {
    return (
        <Link className='toDetail' to={`productos/${id}`}>
        <div className='ItemDiv'>
            <div>{item.imagen}</div>
            <li className='modelo'>{item.modelo}</li>
            <li className='precio'>{item.precio}</li>
            <ItemCount stock={item.stock} initial={1}/>
        </div>
        </Link>
    )
}

export default Item