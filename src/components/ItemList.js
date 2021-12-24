import React from 'react'
import Item from './Item'


const ItemList = ({ detail }) => {
    return (
        <ul>
            {detail.map((item) => (
                <Item item={item} />
            ))}
        </ul>
    )
}

export default ItemList
