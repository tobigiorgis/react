import React from 'react'
import creadores from '../data/creadores'
import Home from './Home'
import { Link } from 'react-router-dom'

const HomeContainer = () => {
    return (
        <div className=''>
            <div className='firstDiv'>
                <h2 className='hHome'>ESTANTES</h2>
            </div>
            <div className='secDiv'>
                <p className='pHome'>Diseñamos y producimos estantes en chapa plegada para que puedas decorar tus ambientes de forma organizada y practica. La combinación perfecta de elementos con un estilo simple, puro y funcional para lograr una mejor organización tanto en los hogares como en los lugares de trabajo.</p>
                <div><button className='butComprar'><Link className='linkComprar' to='/productos'>COMPRAR YA!</Link></button></div>
            </div>
            <div className='divHome2'>
                <h3 className='hGrande'>|| DESIGNED BY ARCHITECTS ||</h3>
                {creadores.map((punto) => (
                    <Home {...punto}/>
                ))}
            </div>
        </div>
    )
}

export default HomeContainer
