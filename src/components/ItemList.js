import React from 'react'
import Item from './Item'


const ItemList = ({ detail }) => {
    return (
        <ul>
            {detail?.map((item) => (
                <Item {...item} key={item.id}/>
            ))}
        </ul>
    )
}

export default ItemList
