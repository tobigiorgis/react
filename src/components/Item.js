import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Item = ({ item, varCarrito }) => {
    const [added, setAdded] = useState(false)
    const onAdd = () => {
        setAdded(true)
    }
    return (
        <div className='ItemDiv'>
        <Link className='toDetail' to={`/producto/${item?.id}`}>
            <img src={item?.imagen} alt={item?.modelo} className='imgEstante'></img>
            <li className='modelo'>{item?.modelo}</li>
            <li className='precio'>${item?.precio}</li>
        </Link>
            {!added &&
                    <ItemCount stock={item?.stock} initial={1} onAdd={onAdd} onClick={varCarrito}/>
                }
                {added &&
                    <div className="divAgregado">AGREGADO AL CARRITO!</div>
                }
        </div>
    )
}

export default Item