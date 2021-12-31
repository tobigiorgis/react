import React from "react"
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"


const NavBar = () => {
    return (
        <div className="nav">
            <h1 className="nombre">
                ESTANTES PLIEGO DESIGN
            </h1>
            <div className="divLinks">
                <Link className="links" to='/'>HOME</Link>
                <Link className="links" to='/productos' >PRODUCTOS </Link>
                <CartWidget/>
            </div>
        </div>
    )
}


export default NavBar

