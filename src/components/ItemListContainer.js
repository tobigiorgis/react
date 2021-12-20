import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {
    return (
        <div className="container">
            <p className="productos">Nuevos productos</p>
            <ItemCount stock={10} initial={1}/>
        </div>
    )
}

export default ItemListContainer
