import React from "react"
import CartWidget from "./CartWidget"


const NavBar = () => {
    return (
        <div className="nav">
            <h1 className="nombre">ESTANTES PLIEGO DESIGN</h1>
            <p className="links"><a className="paginas" href= "/">HOME</a></p>
            <p className="links"><a className="paginas" href= "/">PRODUCTOS</a></p>
            <CartWidget/>
        </div>
    )
}


export default NavBar

