import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import data from '../data/data'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const {cart} = useContext(CartContext)

    const {itemId} = useParams()
    console.log(itemId);

    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                const myData = data.find((item) => item.id === itemId);

                resolve(myData)
            }, 1000)
        })
        
        getItems
            .then((res) => {
                setProduct(res)
            })
    }, [itemId])

    return (
        <div className='divDetail'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default  ItemDetailContainer
