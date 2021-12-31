import React from 'react'

const Home = ({ nombre, trabajo, descripcion }) => {
    return (
        <div className='divCreadores'>
            <h4 className='hCreadores'>{nombre}</h4>
            <li className='liCreadores'>{trabajo}</li>
            <li className='liCreadores'>{descripcion}</li>
        </div>
    )
}

export default Home
