import React from 'react'
import ItemCount from './ItemCount'
import {useEffect, useState} from 'react'
import ItemList from './ItemList'
import data from '../data/data'


const ItemListContainer = () => {
    return (
        <div className="container">
            <p className="productos">Nuevos productos</p>
            <ItemCount stock={10} initial={1}/>
            <detailsProd/>
        </div>
    )
}

const detailsProd = () => {
    const [detail, setDetail] = useState([])

    useEffect(() => {
        const getDetails = new Promise((resolve) => {
            setTimeOut(() => {
                resolve(data)
            }, 2000)
        })

        getDetails.then((res) => {
            setDetail(res)
        })
    }, [])

    return <ItemList detail={detail}/>
}

export default ItemListContainer
export default detailsProd
