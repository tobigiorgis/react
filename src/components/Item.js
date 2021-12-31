import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'


const Item = ({ item }) => {
    return (
        <div className='ItemDiv'>
        <Link className='toDetail' to={`/producto/${item?.id}`}>
            <img src={item?.imagen} alt={item?.modelo} className='imgEstante'></img>
            <li className='modelo'>{item?.modelo}</li>
            <li className='precio'>{item?.precio}</li>
        </Link>
            <ItemCount stock={item?.stock} initial={1}/>
        </div>
    )
}

export default Item