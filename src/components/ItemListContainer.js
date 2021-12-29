import React from 'react'
import {useEffect, useState} from 'react'
import ItemList from './ItemList'
import data from '../data/data'
import { Link } from 'react-router-dom'



const ItemListContainer = () => {
    
        const [detail, setDetail] = useState([])
    
        useEffect(() => {
            const getDetails = new Promise((resolve) => {
                setTimeout(() => {
                    resolve(data)
                }, 2000)
            })
    
            getDetails.then((res) => {
                setDetail(res)
            })
        }, [])
    
    return (
        <div className="container">
            <h2 className="productos">"THE NEW ERA"</h2>
            <ItemList detail={detail}/>
        </div>
    )
}



export default ItemListContainer

