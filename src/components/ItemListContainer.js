import React from 'react'
import {useEffect, useState} from 'react'
import ItemList from './ItemList'
import data from '../data/data'
import { Link, useParams } from 'react-router-dom'



const ItemListContainer = () => {
    
        const [detail, setDetail] = useState([])

        const {colorId} = useParams()
    
        useEffect(() => {
            const getDetails = new Promise((resolve) => {
                setTimeout(() => {
                    const myData = colorId
                    ? data.filter((item) => item.color === colorId)
                    :data
                    resolve(myData)
                }, 1000)
            })
    
            getDetails.then((res) => {
                setDetail(res)
            })
        }, [colorId])
    
    return (
        <div className="container">
            <h2 className="productos"><Link className='productos' to='/productos'>"OUR PRODUCTS"</Link></h2>
            <button className='butFiltroB'><Link className='linkFiltroB' to='/productos/negro'>BLACK</Link></button>
            <button className='butFiltroW'><Link className='linkFiltroW' to='/productos/blanco'>WHITE</Link></button>
            <ItemList detail={detail}/>
        </div>
    )
}



export default ItemListContainer

