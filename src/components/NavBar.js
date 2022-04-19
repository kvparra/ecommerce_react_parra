import React  from 'react'
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-light">

                <Link to="/">
                    <h1 className='header__title'> JUANÍ<span>TICA</span></h1>
                </Link>
                <Link to="/category/abrigo" className='nav__link'> ABRIGOS </Link>
                <Link to="/category/pantalones" className='nav__link'> PANTALONES </Link>
                <Link to="/category/remeras" className='nav__link'> REMERAS </Link>
                <Link to="cart">
                    <CartWidget/> 
                </Link>

        </nav>
    
    )
  }
  
  export default NavBar
