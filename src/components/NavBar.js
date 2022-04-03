import React  from 'react'
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-light " >

                <Link to="/category/clothing" className='nav__link'> CLOTHING </Link>
                <Link to="/category/electronics" className='nav__link'> ELECTRONICS </Link>
                <Link to="/category/jewelery" className='nav__link'> JEWELERY </Link>
                <Link to="cart">
                    <CartWidget/> 
                </Link>
                
                <Link to="/form">
                    Form 
                </Link>
        </nav>
    
    )
  }
  
  export default NavBar
