import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { doc, getDoc } from '@firebase/firestore'
import db from '../firebase/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const {itemId} = useParams()
    console.log(itemId);

    useEffect(() => {
    
            const ref = doc(db, 'productos', itemId)

            getDoc(ref).then( querySnapshot => {
                setProduct({...querySnapshot.data(), id: querySnapshot.id})
            })
    }, [])

    // useEffect(() => {
    //     const getItems = new Promise((resolve) => {
    //         setTimeout(() => {
    //             const myData = data.find((item) => item.id === itemId);

    //             resolve(myData)
    //         }, 1000)
    //     })
        
    //     getItems
    //         .then((res) => {
    //             setProduct(res)
    //         })
    // }, [itemId])

    return (
        <div className='divDetail'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default  ItemDetailContainer
