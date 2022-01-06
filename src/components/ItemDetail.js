import React from 'react'
import ItemCount from './ItemCount'
import { useState, useEffect } from 'react'



const ItemDetail = (item) => {

    const [added, setAdded] = useState(false)
    const onAdd = () => {
        setAdded(true)
    }
    
    useEffect(() => {
        console.log('added', added);
    }, [added])
    return (
        <div>
            <div className='itemDivDetail'>
                <img src={item?.imagen} alt={item?.modelo} className='imgEstante'></img>
                <li className='modelo'>{item?.modelo}</li>
                <li className='precio'>${item?.precio}</li>
                {!added &&
                    <ItemCount stock={item?.stock} initial={1} onAdd={onAdd}/>
                }
                {added &&
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
